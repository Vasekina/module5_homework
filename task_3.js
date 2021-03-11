/*Задание 3.
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".*/

let string = 'Hello!';
string = string.split('').reverse().join('');
console.log(string)
