/*
var number = prompt("please enter a number between 1- 10");
var sum = 0;

for (var i = 0; i <= number; i++) {
  sum = i + sum;
}

document.getElementById("demo").innerText = 'the result is : ' + sum;

let a = 10;
let b = 20;

function number(a, b) {
  if(a > b) {
    return 1
  }else if (a < b) {
    return -1
  }else if ()
}
*/
/*
width = prompt('write the width');
length = prompt('write the length');

let area;
calculate();

function calculate() {
  if(length === '0') {
    area = parseInt(width) * 4;
    console.log(area);
  }else {
    area = (parseInt(width) + parseInt(length)) * 2;
    console.log(area);
  }
}
*/

let car = {
  manufacturer: 'Volvo',
  model: 'xc90',
  yearOfRelease: 2015,
  averageSpeed: 100,
  timeFrame: function() {
    let distance = prompt('how far you want to go?')
    let time = distance / this.averageSpeed;
    console.log('it will take you ' + time + ' hours to get there' );
  }
};

car.timeFrame();


/*
let a = prompt('What is your name?');
sayHello();



function sayHello() {
  
  document.getElementById('test').innerText = 'hello ' + a;
}
*/
