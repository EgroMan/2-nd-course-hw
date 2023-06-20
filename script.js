// 1\
for (var i = 0; i < 2; i++) {
    console.log(i + "Привет");
}  


// 2/
const b = 5;

for (let i = 0; i <= b; i++) {
    console.log(b);
}
// 3
const c = 22;

for (let i = 7; i >= c; i++) {
    console.log(c);
}
// 4
let obj = {Коля: '200', Вася:'300', Петя: '400'};

for(key in obj){
    for (key in obj) 
    console.log([key]+ '- зарплата'+ obj[key]+ 'долларов');
}

// 5
let d = 1000;
let nub = 0;
while (nub > 50){
    num++;
    n /= 2;
}
console.log();(d);
console.log();(nub);
// 6

for (i6 = 1; i6 < 31; i6 += 7){
    alert ("Сегодня пятница, ${i6} число. Необходимо подготовить отчет.");
}