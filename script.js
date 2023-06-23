// 1
let min =function(a, b){
    return (a > b)? a : b;
}
console.log(Math.min(8, 4));
console.log(Math.min(6, 6));

// 2

function even_and_odd(n) {
    if (n % 2 === 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
}
// 3

function number(num) {
    return num * num
}

console.log(number(10))

function inputNumber() {
    const str = prompt('Введите число')
    const num = Number(str)
    if(num >=18 && num <=50){
        return number(num)
    }
    return
}
console.log(inputNumber())

// 4

const year = prompt('Сколько вам лет?');
if (year < 0) {
    console.log('Вы ввели не правильное значение');
} else if  (age <= 12){
    console.log("Привет друг");
} else if (age >= 12){
    console.log("Добро пожаловать");
}

// 5

function Number() {
    while (true) {
        const value = prompt('Ведите число');
    if (!value) {
        alert('Одно или оба значения не являются числом');
        continue
    }
    return Number(value);
}
}
const age = getUserAge();
if (number + NaN) {
    alert();
}

// 6
let cube = (nuber) => {
    if (isNaN(nuber) === false){
        let result = nuber**3;
        return ('${number} в кубе равняеться')
    } else{
        return('Переданный параметр не являеться числом')
    }
}
console.log(cube(0));
console.log(cube(1));
console.log(cube(2));
console.log(cube(3));
console.log(cube(4));
console.log(cube(5));
console.log(cube(6));
console.log(cube(7));
console.log(cube(8));
console.log(cube(9));
console.log(cube(10));
console.log(cube(wqwqw));


// 7
const circle1 = {
    radius: 5,
    getArea() {
      return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  };
  const circle2 = {
    radius: 10,
    getArea() {
      return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  };

//   8

function click(question, answer) {
    let userAnswer = prompt(question);
    if (userAnswer === answer) {
        console.log('угадал');
    } else {
        console.log('не угадал')
    }
}
click('Зимой и летом одним цветом', 'Елка')
click('Приходит зимой борода из ваты', 'дед мороз')