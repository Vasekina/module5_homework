/*Задание 6.
Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.*/

let arr = [1,1,654,1,1];
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] != arr[i+1]) {
    console.log('false')
    break
  } else if (i == arr.length - 2){
    console.log('true')
  }
}
