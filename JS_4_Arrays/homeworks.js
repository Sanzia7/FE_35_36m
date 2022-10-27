//1.Напишите функцию camelize(str), которая преобразует строки вида «my - short - string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
//    Примеры:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S.Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.


// function camelize(str) {
//    let splitStr = str.split('-');
//    for (let i = 0; i < splitStr.length; i++) {
//       splitStr[i] = firstSymbolUp(splitStr[i]);
//    }
//    let joinStr = splitStr.join('');
//    return joinStr;
// }

// function firstSymbolUp(str) {
//    return str.slice(0, 1).toUpperCase() + str.slice(1);
// }

// console.log(camelize('my-short-string'));
// console.log(camelize('background-color'));
// console.log(camelize('list-style-image'));
// console.log(camelize('-webkit-transition'));

//______________________________________

//2. Задача: написать функцию, принимающую массив чисел
//    и возвращающую сумму всех его положительных элементов и отрицательных 
//    чисел отдельно в виде нового массива
//    например функция принимает как аргумент следующий массив
// arr = [1, -2, 3, 4, -9, 6]
//    и должна вернуть[8, -11]
//    Сохраняйте вызов этой функции через деструктурирующее присваивание

// let sumPosAndNeg = (arrNumbers) => {
//    let negative = sumWithStatus(arrNumbers, '+');
//    let positive = sumWithStatus(arrNumbers, '-');
//    return [negative, positive];
// }

//    let sumWithStatus = function (arrNumbers, status) {
//       let sum = 0;
//       for (let i = 0; i < arrNumbers.length; i++) {
//          const element = arrNumbers[i];
//          if (status === '-' && element < 0) {
//             sum += element
//          }
//          if (status === '+' && element > 0) {
//             sum += element
//          }
//       }
//       return sum;
//    }

// console.log(sumPosAndNeg([3, -9, 7, 5, -8, 12]));

//====================================
// First level: 1. Напишите следующую функцию, которая принимает
// некий массив данных. Если в массиве только строковый тип данных, то
// функция должна находить самую длинную строку и возвращать массив из
// двух элементов - эту строку и её индекс исходном массиве
// Если в массиве только цифры, то функция должна находить самую
// большую цифру и возвращать массив из двух элементов - из этой цифры
// и её индекса в исходном массиве
// Во всех остальных случаях (если там другие типы данных или же они
// смешаны), то функция должна возвращать массив из двух элементов -
// первый это строка 'неверный тип данных в массиве', а второй элемент
// это общая длина массива.
// ПРАВИЛО: одно действие - одна функция


let array = ['77', 'blabla', 'mkm', 'njnjnjnj', 'kj'];
let array1 = [77, 3, 9, -8, 7];
let array2 = [true, false];

let newArr = function CheckArrayDate(array) {

   if (checkTypeInArray(array, 'string')) {
      return findeMaxStrInArray(array);
   }
   if (checkTypeInArray(array, 'number')) {
      return findeMaxNumInArray(array);
   }
   return ['error Date', array.length] 
};

let checkTypeInArray = function (array, type) {
   let flag = true;
   array.forEach(element => {
      if (typeof element !== type) {
         flag = false;
      }
   })
   return flag;
};
console.log(checkTypeInArray(array, 'number'));
console.log(checkTypeInArray(array, 'string'));

function findeMaxStrInArray(array) {
   let strValue = '';
   let strIndex = 0;
   array.forEach((value, index) => {
      if (value.length > strValue.length) {
         strValue = value;
         strIndex = index;
      }
   })
   return [strValue, strIndex];
};


function findeMaxNumInArray(array) {
   let numValue = 0;
   let numIndex = 0;
   array.forEach((value, index) => {
      if (value.length > numValue.length) {
         numValue = value;
         numIndex = index;
      }
   })
   return [numValue, numIndex];
};

console.log(newArr(array));
console.log(newArr(array1));
console.log(newArr(array2));
//===============================
//----------------------------------------
// (Необязательная задача) Напишите функцию которая будет принимать три
//  массива с любыми данными и объединять их в один, новый массив и
//  возвращать его.В зависимости от типа данных вы должны упорядочить
// данные.Сначала добавляйте только строки, затем цифры, затем булевы
// значения, все остальные значения могут быть в произвольном порядке
// добавлены далее.
// Пример как должна работать функция.
// let result toHardThreeOrder(['привет', true, 65],[3, [], false], ['js', 'java', 'script', 'redButton'])
// console.log(result)// ['hello', js', 'java', 'script', 'redButton', 3, 65, true, false, []]
let one = ["привет", true, 65];
let two = [3, [], false];
let three = ["js", "java", "script", "redButton"];

function resultFilter(arr1, arr2, arr3) {
   let hardThreeOrder = [].concat(one, two, three);

   let a = hardThreeOrder.filter((n) => {
      return typeof n == "string";
   });

   let b = hardThreeOrder.filter((n) => {
      return typeof n == "number";
   });

   let c = hardThreeOrder.filter((n) => {
      return typeof n == "boolean";
   });

   let d = hardThreeOrder.filter((n) => {
      return (
         typeof n !== "boolean" && typeof n !== "number" && typeof n !== "string"
      );
   });

   return [...a, ...b, ...c, ...d];
}

console.log(resultFilter(one, two, three));
//===========================================

