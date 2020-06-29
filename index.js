/**
 * Switch-case. Task 4
 * @type {boolean}
 */
let string = prompt('Введите строку');
let result = string.split('');

switch (result[0]) {
    case 'a':
        alert('да');
        break;

    default:
        alert('нет');
        break;
};
