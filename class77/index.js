// import {text,myFunc} from "./module.js";
// myFunc('Hello');
// console.log(text);

// import {x as msg,newFunc} from './module.js';
// newFunc('Baby');
// console.log(msg);
 

class students {
    constructor(name,id){
        this.name = name;
        this.id   = id;
    }
    set sname(name){
        this.name = name;
    }
    get getName(){
        return this.name+' '+this.id;
    }
}
let s1 = new students('Sayed',120);
// console.log(s1);
// s1.sname = 'Kader';
//access set method
// console.log(s1.name);
// access get method
console.log(s1.getName);