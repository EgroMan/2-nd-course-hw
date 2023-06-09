  /____1______/ 
alert(20);

/_____2_______/ 
alert('2007год');


/____3_____/ 
alert('Бренданом Айком');

/___4___/ 
alert(10+2);
alert(10-2);
alert(10*2);
alert(10/2);

/___5___/
alert(2**5);

/___6___/
alert( 9 % 2 );

/___7___/
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

/___8___/

let age = prompt('Сколько вам лет?');
alert(age);

/___9___/

let user ={
name: 'Egor',
age: 26,
Admin: true
};

user["city of residence"] ="SBP";
const key = 'age';
user.key = "20";
delete user["city of residence"]

let info = Number(prompt("which info of user \n do you want toknow? \n 1 - name \n 2 - age \n 3 - admin?"));

var result = prompt ('Ваше имя?');
alert('Привет,' + result);