/*Задание 5.
Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.*/

let arr = [1, 5, 4, 66, 9];
console.log('Количество элементов в массиве ' + arr.length)

arr.forEach(function(item, index, array) {
  console.log(item)
});

