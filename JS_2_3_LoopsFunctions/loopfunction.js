// 	Домашнее задание:
// 1)	Выведите чётные числа
// 			При помощи цикла for выведите чётные числа от 2 до 10.
// 			Для проверки на чётность используйте оператор получения остатка от деления % - if ()


for (let i = 2; i < 10; i++) {
   if (i % 2 == 0) {
      console.log(i)
   }
}

//    1.1) Перепишите код, заменив цикл for на while, без изменения поведения цикла.

for (let i = 0; i < 3; i++) {
   console.log(`number ${i}!`);
}

let i = 0;
while (i < 3) {
   console.log(`number ${i}!`);
   i++;
}


// 2) Замените код Function Expression стрелочной функцией:
// let answer = true;
// function ask(question, yes, no) {
//    if (answer) yes()
//    else no();
// }
// ask(
//    "Вы согласны?",
//    function () { alert("Вы согласились."); },
//    function () { alert("Вы отменили выполнение."); }
// );


//let answer = true;
// let ask = (question, yes, no) => {
//    if (answer) {
//       return console.log("Вы согласились.");
//    } else {
//       return console.log("Вы отменили выполнение.");
//    }
// }
// console.log(ask("Вы согласны?", yes));

let answer = false;
function yes() {
   console.log("Вы согласились.");
}
function no() {
   console.log("Вы отказались.");
}

// let ask = (question, calbackYes, calbackNo) =>{
//    if (question) {
//       calbackYes()
//    } else {
//       calbackNo()
//    }
// }
let ask = (question, calbackYes, calbackNo) => question ? calbackYes() : calbackNo();


ask(answer, yes, no);


