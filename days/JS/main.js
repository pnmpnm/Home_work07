'use strict';

let first = 'Понедельник';
let second = 'Вторник';
let third = 'Среда';
let fourth = 'Четверг';
let fifth = 'Пятница';
let sixth = 'Суббота';
let seventh = 'Воскресенье';
let result = prompt('Number of day', 1);

switch (result){
    case '1':
        alert(first);
        break;
    case '2':
        alert(second);
        break;
    case '3':
        alert(third);
        break;
    case '4':
        alert(fourth);
        break;
    case '5':
        alert(fifth);
        break;
    case '6':
        alert(sixth);
        break;
    case '7':
        alert(seventh);
        break;
    default:alert("Такого дня недели не существует!");
}