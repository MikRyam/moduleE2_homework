// Задание №5

/*
Дан произвольный массив. Необходимо вывести количество элементов массива,
затем перебрать его и вывести в консоль каждый элемент массива.
*/

// 4, 8, 15, 16, 23, 42, 'string', false
let lostNums = [4, 8, 15, 16, 23, 42, 'string', false];
console.log(lostNums.length);
// 8
for (let i = 0; i < lostNums.length; i++) {
  console.log(lostNums[i])
}
