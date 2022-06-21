var app = new Vue({
	el: '.chat',
	data: {
		thisDate: 'June 22',
		thisUserName: 'Roma',
		smileCollapse: false,
		textMessage: '',
		chat: [],
	},
	methods: {
		sendMessage() {
			this.chat.forEach((element, index) => {
				if (element[0].messageDate === this.thisDate) {
					let Data = new Date();
					let hours = Data.getHours();
					let minuts = Data.getMinutes();
					this.chat[index].push({
						id: 0,
						userMessage: this.textMessage,
						messageTime: `${hours}:${minuts}`,
						messageDate: this.thisDate,
						status: 'send',
					});
				}
			});
			this.textMessage = '';
		},
		useSmile(e) {
			console.log();
			this.textMessage += e.path[0].textContent;
		},
		writeMessage(e) {
			this.textMessage = e.path[0].value;
		},
	},
	created() {
		this.chat = [
			[
				{
					id: 0,
					userMessage: 'Hello',
					messageTime: '17:28',
					messageDate: 'June 21',
					status: 'read',
				},
				{
					id: 0,
					userMessage: 'How are you?',
					messageTime: '17:29',
					messageDate: 'June 21',
					status: 'read',
				},
				{
					id: 1,
					userName: 'Ivan',
					userMessage: 'Hello, im good, and you?',
					messageTime: '18:48',
					messageDate: 'June 21',
					status: 'read',
				},
				{
					id: 1,
					userName: 'Ivan',
					userMessage: 'Hello, im good, and you?',
					messageTime: '18:49',
					messageDate: 'June 21',
					status: 'read',
				},
				{
					id: 2,
					userName: 'Roma',
					userMessage: 'Nice',
					messageTime: '19:01',
					messageDate: 'June 21',
					status: 'read',
				},
			],
			[
				{
					id: 0,
					userMessage:
						'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio error distinctio exercitationem, labore itaque quasi dignissimos fugiat officia soluta consequatu eumad temporibus voluptas quod aut, eos sed id ipsum!',
					messageTime: '11:23',
					messageDate: 'June 22',
					status: 'send',
				},
				{
					id: 0,
					userMessage: 'asdfadf🖤🖤',
					messageTime: '11:23',
					messageDate: 'June 22',
					status: 'send',
				},
			],
		];

		// setInterval(() => {
		// 	let Data = new Date();
		// 	let hours = Data.getHours();
		// 	let minuts = Data.getMinutes();
		// 	this.chat[1].push({
		// 		id: 0,
		// 		userMessage: 'asda',
		// 		messageTime: `${hours}:${minuts}`,
		// 		messageDate: this.thisDate,
		// 		status: 'send',
		// 	});
		// }, 5000);
	},
});
