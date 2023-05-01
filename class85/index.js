// axios
//     .put('https://jsonplaceholder.typicode.com/posts/1',{
//         body: JSON.stringify({
//         id: 1,
//         title: 'fooma',
//         body: 'bar',
//         userId: 1,
//       })
//     })
//     .then((res)=>console.log(res.data))
//     .catch((err)=>console.log(err))



//=================use async await================

const makeReq = async(config)=>{
  return await axios(config);
}

function getData(){
    makeReq({
      url:'https://jsonplaceholder.typicode.com/posts',
      method: 'post',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      })})
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
}
getData();