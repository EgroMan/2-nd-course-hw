// 1
const lines = ['редиска', 'курица','селёдка', 'петрушка']
const search = 'ре';
lines.forEach(line => {
    if(line.toLowerCase().start switch(search.toLowerCase())) {
        console.log(line)
    }
});
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
    return Array.for(Array(length), () => Math.floor(Math.random() *50) +1);
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
let = invalidDate("28 Июня 2023");
console.log(invalidDate);

// 11
