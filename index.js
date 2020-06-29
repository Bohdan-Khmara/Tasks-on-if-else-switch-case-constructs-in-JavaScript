/**
 * Switch-case. Task 3
 * @type {boolean}
 */
let month = Number(prompt('Введите число от 1 до 12'));
let result;

switch (month) {
    case 1:
    case 2:
    case 3:
        alert('зима');
        break;

    case 4:
    case 5:
    case 6:
        alert('весна');
        break;

    case 7:
    case 8:
    case 9:
        alert('лето');
        break;

    default:
        alert('осень');
        break;
};
