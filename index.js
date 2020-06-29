/**
 * Switch-case. Task 5
 * @type {boolean}
 */
let string = prompt('Введите строку');
let splitStr = string.split('');
let toNumb = Number(splitStr[0]);

switch (toNumb) {
    case 1:
    case 2:
    case 3:
        alert('да');
        break;

    default:
        alert('нет');
        break;
};
