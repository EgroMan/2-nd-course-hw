// _____1_____

let password = '123456';
prompt('введите пароль');

let message;
if(password === 123456) {
    message = "Пароль введен верно";
} else {
    message = "Пароль введен неправильно";
}
alert(message);

// ____2____

let input, number;
while (true) {
input = prompt("Ввод любого числа (до 10):");
number = +input;
if (number === parseFloat(input) && number <= 10)break;
}
if (number > 0 && number <= 10)
alert("Верно");
else
alert("Неверно");

// ___3___

let d = '50';
let e = '12';

if(d > '100' || e > '100');
alert('верно');
if(d < '100' || e < '100');
alert('неверно');

// ___4___
let a = '2';
let b = '3';
alert(2 + 3);

// ___5___
let monthNumber12 = String(prompt('Номер месяца'));

switch (monthNumber12) {
    case '01':
        console.log('Первый месяц, он же январь, сезон зима');
        break;
    case '02':
        console.log('Второй месяц, он же февраль, сезон зима');
        break;
    case '03':
        console.log('Третий месяц, он же март, сезон весна');
        break;
    case '04':
        console.log('Черверты месяц, он же апрель, сезон весна');
        break;
    case '05':
        console.log('Пятый месяц, он же май, сезон весна');
        break;
    case '06':
        console.log('Шестой месяц, он же июнь, сезон лето');
        break;
    case '07':
        console.log('Седьмой месяц, он же июль, сезон лето');
        break;
    case '08':
        console.log('Восьмой месяц, он же август, сезон лето');
    case '09':
        console.log('Девятый месяц, он же сентябрь, сезон осень');
    case '10':
        console.log('Десятый месяц, он же октябрь, сезон осень');
        break;
    case '11':
        console.log('Одиннадцатый месяц, он же ноябрь, сезон осень');
    case '12':
        console.log('Двенацатый месяц, он же декабрь, сезон зима');
    default:
    console.log('Такого месяца не существует')
        break;
}
