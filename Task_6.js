// Задание 6.

/*
Дан массив. Проверить, одинаковые ли элементы в массиве
и вывести результат true или false в консоль.
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех.
Проверить, все ли элементы в массиве одинаковые.
*/

const arr = [1, 1, 1, 1, 1, 1]

for (let i = 0; i < arr.length; i++){
  // console.log(`item: ${arr[0]}, item: ${arr[i]}`)
  if (arr[0] !== arr[i]) {
    console.log(false);
    break;
  } else if (i == arr.length -1){
    console.log(true);
  }
}
