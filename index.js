const TelegramBot = require('node-telegram-bot-api');

// Your bot token from BotFather
const BOT_TOKEN = '6557057235:AAGu9Cs-29s_SE2t9VOS3uc-BfKzEAbbT70';
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// Your Mini App URL
const WEB_APP_URL = 'https://your-miniapp-url.com';

// Command to show Mini App button
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Welcome! Click the button below to launch the Mini App.', {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Open Mini App',
                        web_app: { url: WEB_APP_URL },
                    },
                ],
            ],
        },
    });
});
