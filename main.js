
/**
 * Получение данных с сервера
 * @param {*} url - путь запроса
 * @returns - обьект js
 */
 const getData = async (url) => {
	let res = await fetch(url)
	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, status : ${res.status}`)
	}
	return await res.json()
}

var app = new Vue({
  el: '#table',
  data: {
		allOrders:[],
		filterOrders:[],
		currentPageEl:[],
		sort:{},
		pages:3,
		currentPage:1,
		elForPage:2,
		ifFullElements:false
  },
	methods:{
		getCurrentEl(index){
			if(index){
				this.currentPage = index+1
			}
			let start = this.currentPage === 1 ? 0 : this.currentPage*this.elForPage-this.elForPage
			getData(`http://localhost:3000/orders?_start=${start}&_limit=${this.elForPage}`).then(data=>{
				this.currentPageEl = data	
			})
		},
		getAllEl(){
			if(this.ifFullElements === false)
			{
				this.ifFullElements = true
				getData(`http://localhost:3000/orders`).then(data=>{
					data.forEach((element,index) => {
							this.$set(this.allOrders,index,element)
					});
				})
			}
		},
		prevPage(){
			if(this.currentPage>1)this.currentPage--
			this.getCurrentEl()
		},
		nextPage(){
			if(this.currentPage<this.pages)this.currentPage++
			this.getCurrentEl()
		},
	},
 

	mounted() {	
		let start = this.currentPage === 1 ? 0 : this.currentPage*this.elForPage-this.currentPage
			getData(`http://localhost:3000/orders?_start=${start}&_limit=${this.elForPage}`).then(data=>{
				this.currentPageEl = data	
			})
	},
	computed:{
		disablePrevPagination(){
			return 	this.currentPage>1?'':'disabled'
		},
		disableNextPagination(){
			return 	this.currentPage<this.pages ? '':'disabled'
		}
	},

})
