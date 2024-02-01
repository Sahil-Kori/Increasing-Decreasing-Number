let number = document.querySelector('.number');
let increase = document.querySelector('#increase');
let decrease = document.querySelector('#decrease');

// number.value == 0;
// console.log(number);

function add(){
    number.innerHTML++;
    console.log(number);
}

function sub(){
    number.innerHTML--;
    console.log(number)
}

increase.addEventListener('click',function(){
    add();
})

decrease.addEventListener('click',function(){
    sub();
})