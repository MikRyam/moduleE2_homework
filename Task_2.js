// Задание №2

/*
Дана переменная Х, которая может принимать любое значение.
Написать программу, которая в зависимости от типа данных Х выводит в консоль
сообщение вида: «X — число».

Опишите три случая: когда х = числу, строке или логическому типу.
В других случаях выводите сообщение: «Тип x не определён».
*/

let x = 32453243;

xType = typeof x;
// console.log(xType)

switch (xType) {
  case 'number':
    console.log('X — число');
    break;
  case 'string':
    console.log('X — строка');
    break;
  case 'string':
    console.log('X — строка');
    break;
  case 'boolean':
    console.log('Х - логический тип');
    break;
  default:
    console.log('Тип x не определён');
}
