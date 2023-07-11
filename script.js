const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
// function sort(array, fieldName) {
//     array.sort((a,b)=>a[fieldName]>b[fieldName]?1:-1); 
// }
// sort(people, "age");
// console.log(people.sort("age"));

function compareNumbers(a, b) {
    return a - b;
}
console.log(people.sort(numberarr));

// 2

function isPositive(number) {
    if (number > 0){
    return number;}
    }
    function isMale(whoIS) {
    if(whoIS.gender == 'male'){
        return whoIS
    }
    }
    function filter(arr, ruleFunction) {
    for( let i = 0; i< arrLength; i++){
        return arr.filter(ruleFunction);
    }
    }
    //3
    const timer = (deadline) => {
        const interval = setInterval(() => {
            let currentDate = new Date();
         console.log(currentDate);
         }, 3000);
        
        
         setTimeout(() => {
            clearInterval(interval);
            console.log('30 секунд прошло')
          }, deadline * 1000)
        };
        
        timer(30);
        // 4
        function delayForSecond(callback) {
            setInterval(() => {
                console.log(delayForSecond);
            }, 1000);
          callback();
       }
       
       delayForSecond(function () {
          console.log('Привет, Глеб!');
       })

    //    5

    function delayForSecond(cb) {
        setTimeout(() => {
            console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    
        }, 1000)
    }
    
    function sayHi (name) {
        console.log(`Привет, ${name}!`);
    }
    setTimeout(() => {
       sayHi('Глеб'); 
    }, 2000);
    delayForSecond();