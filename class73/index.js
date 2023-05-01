// var students = [
//     {
//         name: 'Sayed',
//         age: 24,
//         gpa: 4.11
//     },
//     {
//         name: 'Shakib',
//         age: 33,
//         gpa: 4.50
//     },
//     {
//         name: 'Musfiq',
//         age: 30,
//         gpa: 3.11
//     },
//     {
//         name: 'kader',
//         age: 42,
//         gpa: 2.41
//     }
// ];
// function myFunc(){
//     return students.filter(function(x){
//         return x.gpa > 3;
//     }).map(function(y){
//         return y.name;
//     });
// }
// document.write(myFunc()+'<br>');

// //arrow function
// const myFunc2 = () => students.filter((x)=>x.gpa>3).map((y)=>y.age);
// document.write(myFunc2());

var employee = [
    {
        name:'karim',
        salary: 1000,
        city: 'Dhaka'
    },
    {
        name:'Shakib',
        salary: 5000,
        city: 'Khulna'
    },
    {
        name:'Messi',
        salary: 7000,
        city: 'Argentina'
    },
    {
        name:'CR7',
        salary: 3000,
        city: 'Portugal'
    }
];

function myFunc(){
    return employee.filter(function(x){
        return x.salary > 3000;
    }).map(function(y){
        return y.name;
    })
}
document.write(myFunc()+'<br>');

var myFunc2 = () => employee.filter((x)=>x.salary>5000).map((y)=>y.name);
document.write(myFunc2());



















