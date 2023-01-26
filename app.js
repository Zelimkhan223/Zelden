import TelegramBot from 'node-telegram-bot-api';
import Validate from './validate.js';
import Handler from './handler.js';
const token = '5739227123:AAHFkXqOxSvVHwxX-kkx50lj147miOaTaBw';
const bot = new TelegramBot(token, {polling: true});
let handler = new Handler(bot);
let validate = new Validate(handler);


bot.on('message', (msg) => {
    validate.validateMsg(msg, bot);
})

console.log("bot started....");











































// bot.on('message', (msg) => {
//     console.log(msg);
//     if (msg.text === '/start') {
//         bot.sendMessage(msg.from.id, 'Выберите способ обучения', {
//             reply_markup: {
//                 keyboard: [
//                     [{
//                         text: 'Выбрать стандартное обучение'
//                     }],
//                     [{
//                         text: 'Отправиться в преключение'
//                     }],
//                 ]
//             }
//         })
//     }
//     else if (msg.text === "Выбрать стандартное обучение") {
//         bot.sendMessage(msg.from.id, 'Чтобы начать обучение, пожалуйста напишите ваш номер группы', {
//             reply_markup: {
//                 keyboard: [
//                     [{
//                         text: 'frontend1 2023'
//                     }],
//                     [{
//                         text: 'frontend2 2023'
//                     }],
//                     [{
//                         text: 'backend 2023'
//                     }],
//                     [{
//                         text: 'backend 2023'
//                     }],
//                 ]
//             }
//         })
//     }
//     else if (msg.text === 'frontend1 2023') {
//         bot.sendMessage(
//             msg.from.id, 
//         `
//             Добро пожаловать ${msg.form.first_name} на наш курс по Front-End React.Js разработке. 
//             Особенности курса
//             1) Видео запись офлайн уроков
//             2) Живое общение с менторами
//             3) Проверка ДЗ с разбором
//         `,
//         {
//             reply_markup: {
//                 keyboard: [
//                     [{
//                         text: 'WEB 👩‍💻'
//                     }],
//                     [{
//                         text: 'HTML 👩‍💻'
//                     }],
//                     [{
//                         text: 'CSS 👩‍💻'
//                     }],
//                     [{
//                         text: 'JAVASCRIPT 👩‍💻'
//                     }],
//                 ]
//             }
//         });
//     }
    
// })
// console.log('Bot started')

// bot.on('message', (msg) => {
//     console.log(msg)

//     if(msg.text === '/start') {
//         bot.sendMessage(msg.from.id, 'Выберите способ обучения', {
//             reply_markup: {
//                 keyboard: [
//                     [{
//                         text: 'Выбрать стандартное обучение'
//                     }],
//                     [{
//                         text: 'Отравиться в приключение'
//                     }]
//                 ]
//             }
//         });
//     }
//     else if(msg.text === 'Выбрать стандартное обучение') {
//         bot.sendMessage(msg.from.id, 'Чтобы начать обучения, пожалуйста напишие ваш номер группы', {
//             reply_markup: {
//                 keyboard: [
//                     [{
//                         text: 'Frontend1 2023'
//                     }],
//                     [{
//                         text: 'Frontend2 2023'
//                     }],
//                     [{
//                         text: 'BackEnd1 2023'
//                     }],
//                     [{
//                         text: 'BackEnd2 2023'
//                     }]
//                 ]
//             }
//         });
//     }
//     else if(msg.text === 'Frontend1 2023' || msg.text === 'Frontend2 2023') {
//         bot.sendMessage(msg.from.id, `Добро пожаловать ${msg.from.first_name} на наш курс`, {
//             reply_markup: {
//                 keyboard: [
//                     [{
//                         text: 'WEB'
//                     }],
//                     [{
//                         text: 'HTML'
//                     }],
//                     [{
//                         text: 'CSS'
//                     }],
//                     [{
//                         text: 'JAVASCRIPT'
//                     }],
//                 ]
//             }
//         })
//     }
     
//     else if(msg.text === 'BackEnd1 2023' || msg.text === 'BackEnd2 2023') {
//         bot.sendMessage(msg.from.id, `Добро пожаловать ${msg.from.first_name} на наш курс`, {
//             reply_markup: {
//                 keyboard: [
//                     [{
//                         text: 'Node Js'
//                     }],
//                     [{
//                         text: 'Express'
//                     }],
//                     [{
//                         text: 'TelegramBots'
//                     }],
//                     [{
//                         text: 'JAVASCRIPT'
//                     }]
//                 ]
//             }
//         });
//     }
//     else if (msg.text === 'WEB' || msg.text === 'HTML') {
//         bot.sandMessage(msg.from.id, `CSS - один из трех столпов Front-End`, {
//             reply_markup: {
//                 keyboard: [
//                 [{
//                     text: 'Модуль №1'
//                 }],
//                 [{
//                     text: 'Модуль №2'
//                 }],
//                 [{
//                     text: 'Модуль №3'
//                 }],
//                 [{
//                     text: 'Модуль №4'
//                 }],
//             ]
//             }
//         })
//     }
//      else if (msg.text === 'CSS') {
//         bot.sandMessage(msg.from.id,'CSS - один из трех столпов Front-End', {
//             reply_markup: {
//                 keyboard: [
//                     [{
//                         text: 'Модуль №1'
//                     }],
//                     [{
//                         text: 'Модуль №2'
//                     }],
//                     [{
//                         text: 'Модуль №3'
//                     }],
//                     [{
//                         text: 'Модуль №4'
//                     }]
//                 ]
//             }
//         })
//     }
// });


// class Validate{
//     valite(msg) {

//     }
//     isStartCmd(msg)
// }

// console.log("bot started");

























