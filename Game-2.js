function "wordsGame()"() {
    

const playButton =
document.getElementById("playButton");
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
} else if (a!==('p=0') || b==('p=1'), a==('p=0') || b!==('p=1'),) {
    alert('Вы были близки к победе!');
} else if (a!==('p=0') || b!==('p=1'), a!==('p=0') || b!==('p=1'),) {
    alert('Оба ответка не верны.');
}
}