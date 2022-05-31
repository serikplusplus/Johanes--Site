
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
  el: '#accordionFlushExample',
  data: {

  },
	created() {	

	},
	methods:{

	},
	computed:{

	}
})
