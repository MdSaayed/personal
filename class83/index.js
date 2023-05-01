
// function makeRequest(method,url,data){
//     const xhr = new XMLHttpRequest();
//     xhr.open(method,url);
//     xhr.onload = ()=>{
//         const data = xhr.response;
//         console.log(JSON.parse(data));
//     }
//     xhr.onerror = ()=>{
//         console.log('Err Is Here.')
//     }
//     xhr.setRequestHeader('Content-Type','application/JSON');
//     xhr.send(JSON.stringify(data));
// }



// const getData= ()=>{
//     makeRequest('GET','https://jsonplaceholder.typicode.com/posts');
// }
// const sendData= ()=>{
//     makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     });
// }
// const updateData= ()=>{
//     makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
//         title: 'Misty',
//         body: 'bar',
//         userId: 1,
//     });
// }
// const updateSigleData= ()=>{
//     makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
//         title: 'Sweety',
//     });
// }
// const deleteData= ()=>{
//     makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1');
// }
// getData();
// updateData();
// updateSigleData();
// deleteData();




// function makeRequest(method,url,data){
//     const xhr = new XMLHttpRequest();
//     xhr.open(method,url);
//     xhr.onload=()=>{
//         const data = xhr.response;
//         console.log(JSON.parse(data));
//     }
//     xhr.onerror = ()=>{
//         console.log('error is here.')
//     }
//     xhr.setRequestHeader('Content-Type','application/JSON');
//     xhr.send(JSON.stringify(data));
// }

// //pase data
// const getData = ()=>{
//     makeRequest('GET','https://jsonplaceholder.typicode.com/posts')
// }
// const sendData = ()=>{
//     makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//       })
// }
// const updateData = ()=>{
//     makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
//         title: 'Misty',
//         body: 'bar',
//         userId: 1
//       })
// }
// const updateSigleData = ()=>{
//     makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
//         title: 'Misty',
//         body: 'gf',
//         userId: 1
//       })
// }
// const deleteData = ()=>{
//     makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1')
// }
// getData();
// sendData();
// updateData();
// updateSigleData();
// deleteData(); 


// function makeReq(method,url,data){
//     return new Promise((resolve,reject) => {

//         const xhr = new XMLHttpRequest();
//         xhr.open(method,url);

//         xhr.onload=()=>{
//             const data = xhr.response;
//             console.log(JSON.parse(data));
//         }

//         xhr.onerror=()=>{
//             console.log('This is an error.')
//         }

//         xhr.setRequestHeader('Content-Type','application/JSON')
//         xhr.send(JSON.stringify(data));
//     })
// }

// const getData =()=>{
//     makeReq('GET','https://jsonplaceholder.typicode.com/posts')
//     .then((res)=>console.log(res))
// }
// const sendData =()=>{
//     makeReq('POST','https://jsonplaceholder.typicode.com/posts',{
//         id: 101,
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//       })
//     .then((res)=>console.log(res))
// }
// getData();
// sendData();








