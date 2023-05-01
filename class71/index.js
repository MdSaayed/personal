//traditional function
function myFunc(){
    document.write('Hi I am function 1'+'<br>');
}
myFunc();

//arrow function
const myFunc1 = () => document.write('Hello I am function 2'+'<br>');
myFunc1(); 

//traditional function return
function message1(){
    return 'Hello I am message 1';
}
document.write(message1()+'<br>');

//arrow function return
let message2 = ()=> 'Hello I am message 2';
document.write(message2()+'<br>');

//traditional function paramiter
function add1(x,y){
    return x+y;
}
document.write(add1(10,36)+'<br>');

//arrow function paramiter

let add2 = (x,y)=>{
    return x+y;
}
document.write(add2(17,36)+'<br>');