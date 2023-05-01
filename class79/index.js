//Asynchronous

const taskOne = (callback)=>{
   console.log('Task One');
   callback();
}
const taskTwo = (callback)=>{
    setTimeout(()=>{
        console.log('Loading Data'); 
        callback();
    },1000)
}


const taskThree = (callback)=>{
    console.log('Task Three'); 
    callback();
}
const taskFour= (callback)=>{
    console.log('Task Four'); 
    callback();
}
const taskFive = ()=>{
    console.log('Task Five'); 
}
taskOne(()=>{
    taskTwo(()=>{
        taskThree(()=>{
            taskFour(()=>{
                taskFive();
            });
        });
    });
});



const myFunc = (value)=>{
    this.value = value;
    document.write(value);
}

var x = myFunc;
x('Bye');