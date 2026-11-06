// Куда страницы шлют запросы: сервер форума на Zomro (контейнер forum-api, логика та же, что в Apps Script).
// Google-таблица остаётся копией: сервер раз в 30 с пишет туда статусы. Аварийный возврат на Google:
// вписать адрес Apps Script ниже и снять флаг moved (admin op 'moved', on: false), иначе Google не примет запись.
// Apps Script: https://script.google.com/macros/s/AKfycbwmUXnWcCUGsUhOKfN_UEXfWpuvz0QwXvj27mG1m6YUL_AvbZoQ8R4r321vG75pSBxGkw/exec
window.FORUM_API = 'https://ig.onai.academy/forum-api/api';
// Показывать ли кнопку «Гость без приглашения» на телефоне.
window.FORUM_GUESTS = true;
// Сколько стоек регистрации. Больше 1: телефон без номера стойки в ссылке (#d=N) сам спросит стойку и запомнит выбор.
// 1 или строка убрана: выбора нет, наклейки идут на стойку 1.
window.FORUM_DESKS = 4;
