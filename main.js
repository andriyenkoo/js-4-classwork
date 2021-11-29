// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function number(num1,num2,num3) {
//          if (num1 < num2 && num1 < num3) {
//              document.write(num1);
//           console.log(num1);
//         } else if (num2 < num3 && num2 < num1) {
//             console.log(num2);
//             document.write(num2);
//         } else {
//              console.log(num3);
//              document.write(num3);
//          }
// }
//
// number(1,2,3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function number(n1,n2,n3) {
//     if (n1 > n2 && n1 > n3) {
//         console.log(n1)
//     } else if (n2 > n1 && n2 > n3) {
//         console.log(n2)
//     } else {
//         console.log(n3)
//     }
// }
//
// number(1,2,3)

// - створити функцію яка повертає найбільше число з масиву

// let maxArray = [200,3,4,5,6,10,40000,3,600]
// function arrayMax(array) {
//     let max = array[0];
//     for (const element of array) {
//         if(element > max){
//             max = element;
//         }
//     }
//     return max;
// }
// document.write(`<h1>${arrayMax(maxArray)}</h1>`)

// - створити функцію яка повертає найменьше число з масиву

// let numbers = [ 99, 17, 13, 6, 22, 31, 45, 66, 100, 1];
// function minArray(minNumber) {
//     let min = minNumber[0]
//     for (let element of minNumber) {
//         if (element < min) {
//             min = element;
//         }
//     }
//     return min;
// }
// document.write(`<h2>${minArray(numbers)}</h2>`)

// створити функцію яка приймає масив чисел, сумує значення елементів масиву
// та повертає його. Приклад [1,2,10]->13

// let nums = [ 99, 17, 13, 6, 22, 31, 45, 66, 100, 1]
// function res(arr) {
//     let result = 0;
//     for (let number of arr) {
//         result = result + number;
//     }
//     return result
// }
//  document.write(`<h2>${res(nums)}</h2>`)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let nums = [ 99, 17, 13, 6, 22, 31, 45, 66, 100, 1]
//
// function serArifm(arr) {
//     let ser = 0;
//     for (let element of arr) {
//         ser = ser + element
//     }
//     return ser / arr.length;
// }
// document.write(serArifm(nums))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);

// function minMax(arr) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const element of arguments) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log(max);
//     return min;
//
// }
// document.write(minMax(47, 210, 183, 6, 49))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100))
// та виводить його.

// function random (length) {
//     let arr = [];
//     for (let i = 0; i < length; i++){
//         arr.push(Math.floor(Math.random()*100));
//     }
//     return arr;
// }
//
//
// document.write(random(5))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//     limit - аргумент, який характеризує кінцеве значення діапазону.

// function random(length,limit) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.round(Math.random() * limit));
//     }
//     return arr;
// }
// document.write(random(13,130));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let array = [1, 2, 3]
// function reverse(arr) {
//     let newArr = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = newArr[i];
//     }
//
//     return newArr;
// }
//
// console.log(reverse(array));
