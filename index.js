/**
 * Switch-case. Task 1
 * @type {boolean}
 */
let num = Number(prompt('Введите число от 1 до 4'));

switch (num) {
    case 1:
        alert('зима');
        break;

    case 2:
        alert('весна');
        break;

    case 3:
        alert('лето');
        break;

    default:
        alert('осень');
        break;
}
