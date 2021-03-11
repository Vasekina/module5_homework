/*Задание 8.
Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.*/

let map = new Map();

map.set('str', 'string');
map.set(123, 'number');
map.set(true, 'boolean');

for (let name of map.keys()) {
 let value = map.get(name);
 console.log('Ключ — ' + name + ', значение — ' + value)
}
