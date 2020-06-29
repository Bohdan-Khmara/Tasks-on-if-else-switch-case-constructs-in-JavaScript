/**
 * Switch-case. Task 2
 * @type {boolean}
 */
let day = Number(prompt('Введите дату'));

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        alert('первая декада');
        break;

    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
        alert('вторая декада');
        break;

    default:
        alert('третья декада');
        break;
}
