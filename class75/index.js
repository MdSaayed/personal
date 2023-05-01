// var numbers = [5,10,34,23,44,45,55,];
// var x = numbers.find((x)=>x+5==50);
// document.write(x+'<br>');

// //function use
// var x = [10,12,56,46,39,40];
// var myFunc = (value,index,arr)=>{
//     if(value==12){
//         return value;
//     }
// }
// var a = x.findIndex(myFunc);
// var b = x.find(myFunc);
// document.write(a+'<br>');
// document.write(b+'<br>');




var students = [
    {
        id:101,
        gpa:2.25
    },
    {
        id:102,
        gpa:3.25
    },
    {
        id:103,
        gpa:4.25
    },
    {
        id:104,
        gpa:5
    }
];

var hightGpa = students.findIndex(x=>x.gpa>3);
document.write(hightGpa);

















