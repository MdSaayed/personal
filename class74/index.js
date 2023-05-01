// //array destructure
// let numbers = [10,20,30,40,50,60,70];
// let [num1,num2,num3,num4,num5,...z] = numbers;
// document.write(num3+'<br>');
// document.write(num5+'<br>');

// //swap variables
// let a=10, b=20;
// [a,b]=[b,a];
// document.write(a);

// //object destructure
// const students = {
//     name: 'Sayed',
//     id: 2303,
//     age: 24,
//     gpa:4.11,
//     language:{
//         native: 'Bangla',
//         beginner: 'English'
//     }
// }
// const {name,id,age,gpa,language} = students;
// document.write(name+'<br>');
// document.write(id+'<br>');
// document.write(gpa+'<br>');
// document.write(language.native+'<br>');

// //destructure function paramiter
// const myFunciton = ({name,id})=>{
//     document.write(`Name: ${name}, Id: ${id}`);
// }
// const employee = {
//     name: 'Karim',
//     id: 12020
// }
// myFunciton(employee);

