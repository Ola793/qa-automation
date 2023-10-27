/*
1. 
  Напиши функцію map(fn, array), яка приймає на вхід функцію та масив, 
  та обробляє кожен елемент масиву цією функцією, повертаючи новий масив. 
  Приклад:
*/

function map(fn, array) {
  /* First variant */

  let newArray = [];

  array.forEach(el => newArray.push(fn(el)));

  return newArray
  
  /* Second variant */

  // return array.map(el => fn(el)) 
}

function square(x) {
  return x * x;
} // повертає квадрат числа

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

// Зверніть увагу: функція не повинна змінювати переданий їй масив:

var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]

/*
  2. Написати функцію яка форматує текст: 
    - прибирає пробіли з початку і кінця, 
    - прибарає всі займі пробіли (два і більше підряд)
    - кожне речення починає з великої букви, а всі наступні символи в речені робить маленькими
*/
function formatText(text) {
  let trimmedLowerCaseText = text.trim().toLowerCase().replace(/\s+/gm, " ");

  return trimmedLowerCaseText.includes(".") ? 
         trimmedLowerCaseText.split(".").map(str => str.trim().replace(str.trim()[0], str.trim()[0].toUpperCase())).join(". ") : 
         trimmedLowerCaseText.replace(trimmedLowerCaseText[0], trimmedLowerCaseText[0].toUpperCase())
}

console.log(formatText("heLLo, this is My teXT.   have A NiCe DaY  ")); // "Hello, this is my text. Have a nice day"
console.log(formatText(" Hello woRld   ")); // "Hello world"

/*
    3. Написати функцію, яка поверне число голосних букв в строкі
*/

function countVowels(str) {
  let vowels = /[aeiou]/gmi;
  let result = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(vowels)) {
      result++;
    }
  }
  
  return result;
}

console.log(countVowels("aaaat")); // виводить 4
console.log(countVowels("Hello world")); // виводить 3

/*
    4. Написати функцію, яка видаляє всі спеціальні символи зі строки (залишає лише числа, букви і пробіли в будь-якому регістрі)
*/
function clearStr(str) {
  return str.replace(/[.*:;+?^%#${}()|[\]\\]/gmi, "").replace(/\s+/gmi, " ").trim()
}

console.log(clearStr("My var: 22 ")); // виведе "My var 22"
console.log(clearStr("Foo %$#% bar")); // виведе "Foo bar"
console.log(clearStr("; SELECT * FROM passwords ")); // виведе "SELECT FROM passwords"
