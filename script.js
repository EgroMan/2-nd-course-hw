// 1
const number = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < number.length; i++) {
    if (number[i] == 10) break;
    console.log(number[i]);
}
// 2
const numbers = [1, 5, 4, 10, 0, 3]
console.log(numbers.indexOf('4'));

// 3
let num = [1, 3, 5, 10, 20]
num = num.join('');
console.log(num);

// 4
let arr = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
for (let i = 0; i < 4; i++)
{
    arr[i] = [];
    for (let j = 0; j <= i; j++)
    {
        arr[i][j] = j + 1;
    }
}
console.log(arr);

// 5
const numOne = [1, 1, 1]
const newLength = numOne.push(2, 2, 2);
console.log(newLength);
console.log(numOne);

// 6
const numTwo = [9, 8, 7, 'a', 6, 5]
numTwo.sort(function(a,b) {return a - b});

// 7

const numFree = [9, 8, 7, 6, 5]
let text = prompt('Угадай число')
if (numFree != numFree) {
    alert('Угадал')
} else{
    alert('Не угадал')
}

// 8
const reverse = (str) =>{
    const iter = (counter, result) =>{
        if(str.length == result.length){
            return result;
        }        
        return iter(counter - 1, result + str[counter]);
    }
    return iter(str.length-1, ''); 
}
console.log('Reverse: ' + reverse('abcdef')); 

//9
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log(matrix.join());

// 10
let summa = [2, 4, 6, 8, 10];

for (let i = 2; i <= 10; i+1) {
	summa.push(i);
}
console.log(summa); 

// 11
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const squares = nums.map(function (num) {
  return num * num
})
console.log(squares);

// 12
 getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']); // [5, 0, 4, 19, 5]
const getLengthWords = (arrStr, num) => arrStr.filter(s => s.length === num);

// 13
function filterPositive(array) {
    let negativ =[];
    for(let i = 0; i < array.length; i++){
        if (array[i] < 0){
            negativ.push(array[i]);
        }
    }
  }
  filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
  filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]