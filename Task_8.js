
// Задание 8.

/*
Создайте произвольный массив Map.
Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.
*/

const arr = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]);

// Вариант №1 с помощью for...of:
for (let pair of arr) {
  console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`);
}

// Вариант №2 с помощью метода forEach.
arr.forEach(function(value,key) {
  console.log(`Ключ - ${key}, значение - ${value}`);
});
