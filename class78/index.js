//Asynchronous

const taskOne = ()=>{
   console.log('Task One'); 
}
const taskTwo = ()=>{
    console.log('Loading Data'); 
}

const load = ()=>{
    setTimeout(taskTwo,1000);
}

const taskThree = ()=>{
    console.log('Task Three'); 
}
const taskFour= ()=>{
    console.log('Task Four'); 
}
const taskFive = ()=>{
    console.log('Task Five'); 
}
taskOne();
load();
taskThree();
taskFour();
taskFive();