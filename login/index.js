var form = document.querySelector('#data');
var name = document.querySelector('#myId');
var pass = document.querySelector('#password');
var btn = document.querySelector('#btn');
var rslt = document.querySelector('#result');
var cls = document.querySelector('#close');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    var x = name.value;
    var y = pass.value;
    rslt.innerHTML = `Your Email: ${x} <br> Your Pass: ${y}`;
    rslt.style = 'display:block';
});

cls.addEventListener('click',()=>{
    form.style = 'display:none; transition:0.5s;';
})


window.addEventListener('click',()=>{
    form.style = 'display:none; transition:0.5s;';
});