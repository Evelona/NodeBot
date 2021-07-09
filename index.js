const telegramApi = require('node-telegram-bot-api')

const token = '1788090621:AAFe2OpEt8ZH97tvUBIflzA56k1tJDF_HyI'

const bot = new telegramApi(token, {polling: true})

const STIKER_COUNT = 37

const startButton = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{ text: 'Правда', callback_data: 'choosed_truth' }],
			[{ text: 'Действие', callback_data: 'choosed_action' }]
		]
	})
}

const categoryButtons = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{ text: 'Джужба', callback_data: 'frendship' }],
			[{ text: 'Отношения', callback_data: 'relationship' }],
			[{ text: 'Жизнь', callback_data: 'life' }],
			[{ text: 'Мечта', callback_data: 'dream' }],
			[{ text: 'Школа', callback_data: 'school' }],
			[{ text: 'Неловкие', callback_data: 'shame' }],
		]
	})
}

bot.on('message',  msg => {
	const text = msg.text;
	const chatId =  msg.chat.id
	const authorName = msg.chat.first_name
	const stikerId = Math.round(Math.random() * STIKER_COUNT)

	if (text === '/start' ) {
		// bot.sendMessage(chatId, `Привет, я подумал и решил, что ты :`)
		// return bot.sendSticker(chatId, `https://tlgrm.ru/_/stickers/96b/f1e/96bf1eca-a75d-3b7c-b620-bb5f2cdac89f/${stikerId}.webp`)
		 return bot.sendMessage(chatId, `Привет, ты решил в Правду или Действие сыграть?`, startButton)
	}

	if (text === '/info') {
		 bot.sendSticker(chatId, `https://tlgrm.ru/_/stickers/96b/f1e/96bf1eca-a75d-3b7c-b620-bb5f2cdac89f/${stikerId}.webp`)
		 return bot.sendMessage(chatId, `${authorName} - это ты чтоли?`)
	}


	return bot.sendMessage(chatId, `${authorName}, айда по-факту, а то не понятно`)

})

bot.on('callback_query', msg => {
	const data = msg.data;
	const chatId = msg.message.chat.id;

	if (data === 'choosed_truth') {
		return bot.sendMessage(chatId, `Правда чтоли? Ну выбирай категорию`, categoryButtons)
	}

	if (data === 'choosed_action') {
		return bot.sendMessage(chatId, `Ммм.Действие.`)
	}

	bot.sendMessage(chatId, `А?`)


})