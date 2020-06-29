/**
 * Switch-case. Task 6
 * @type {boolean}
 */
let string = prompt('Введите строку');
let splitStr = string.split('');
let firstNumb = Number(splitStr[0]);
let secondNumb = Number(splitStr[1]);
let thirdNumb = Number(splitStr[2]);

switch (firstNumb, secondNumb, thirdNumb) {
    default:
        firstNumb + secondNumb + thirdNumb;
        break;
};
