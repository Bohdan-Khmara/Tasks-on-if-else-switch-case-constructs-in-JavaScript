/**
 * Switch-case. Task 7
 * @type {boolean}
 */
let string = prompt('Введите строку');
let splitStr = string.split('');
let value1 = Number(splitStr[0]);
let value2 = Number(splitStr[1]);
let value3 = Number(splitStr[2]);
let value4 = Number(splitStr[3]);
let value5 = Number(splitStr[4]);
let value6 = Number(splitStr[5]);
let sum1 = value1 + value2 + value3;
let sum2 = value4 + value5 + value6;

switch (sum1, sum2) {
    default:
        let result = (sum1 === sum2) ? alert('да') : alert('нет');
        break;
};
