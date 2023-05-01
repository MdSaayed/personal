// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'PUT',
//     body:JSON.stringify({
//         title: 'fooma',
//         body: 'barma',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
// })
// .then((res)=>{
//     if(!res.ok){
//         const msg = `Err: ${res.status}`;
//         throw new Error (msg);
//     }
//     return res.json();
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));


//==============use async=================

// const makeReq = async (url,config)=>{
//     const res = await fetch(url,config);
//     if(!res.ok){
//         const msg = `Err: ${res.status}`;
//         throw new Error(msg);
//     }
//     const data = await res.json();
//     return data;
// }

// const sendData = ()=>{
//     makeReq('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//       .then((res)=>console.log(res))
//       .catch((err)=>console.log(err));
// }
// sendData();



fetch('https://jsonplaceholder.typicode.com/posts',{
     method: 'POST',
    body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res)=>{
    if(!res.ok){
      const msg = `Err: ${res.status}`;
      throw new Error(msg);
    }
    return res.json();
  })
  .then((res)=>console.log(res))
  .catch((err)=>console.log(err))


















