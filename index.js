const telegramApi = require('node-telegram-bot-api')

const token = '1788090621:AAFe2OpEt8ZH97tvUBIflzA56k1tJDF_HyI'

const bot = new telegramApi(token, {polling: true})

bot.on('message', msg => {
	const text = msg.text;
	const chatId =  msg.chat.id
	bot.sendMessage(chatId, `Привет, я не расслышал... Ты мне "${text}" сказал?`)
})