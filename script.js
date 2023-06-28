// 1
let text =('руки базуки')
console.log(text.toUpperCase());

// 2
const str = 'Мама мыла раму, мыла акуртно и бережно.'; 
console.log(str.indexOf('м'),str.indexOf('р'));
// 3
console.log(Math.round(32.58884));
console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.trunc(32.58884));

// 4
// function getMaxOfArray[(52, 53, 49, 77, 21, 32)]; {
//     return Math.max.apply(null), Math.min.apply(null);
//     console.log(Math.max(), Math.min());
// }
// 5
function getRandomInt(minValue, maxValue){
    return Math.random()* maxValue;
}
console.log(getRandomInt(1,10))

// 6
function randomNumbersArray(length = 12){
    return Array.fon(Array(length), () => Math.floor(Math.random() *50) +1);
}
const randomarr = randomNumbersArray();

// 7
function getRandomItegralNumber (a, b){
    if(a>b){c=b; b=a; a=c};
    let arr = [];
    for(let i=0; i <= (b-a); i++){
    arr[i]=[Math.random(), i+a];
    }
    return arr.sort()[0][1];
}

// 8
let currentDate = new Date();
console.log(currentDate);

// 9
let currentDate2 = new Date();
currentDate2.setDate(currentDate2.getDate()+ 73);

// 10
let myDate = new Date("28 Июня 2023");
console.log(myDate);

// 11
let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
arr = arr.sort(() => Math.random() - 0.5);

// let = prompt('Чему равнялся первый элемент массива?');
// if ('p=0') {
    
// } else {
    
// }
// let = prompt('Чему равнялся последний элемент массива?');
// if ('p=1') {
    
// } else {
    
// }

alert("интерестные загадки, все засисит от тебя");
let a = prompt('Чему равнялся первый элемент массива?');
let b = prompt('Чему равнялся последний элемент массива?');
if (a==('p=0') || b==('p=1')); {
    alert('Поздравляю вы дали 2 правильных ответа!!!')
} else if(a!==('p=0') || b==('p=1'), a==('p=0') || b!==('p=1'),) {
    alert('Вы были близки к победе!');
} else if(a!==('p=0') || b!==('p=1'), a!==('p=0') || b!==('p=1'),) {
    alert('Оба ответка не верны.');
}