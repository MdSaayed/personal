var payment = true;
var marks = 50;

function enroll(){
    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(payment){
                resolve('enroll is success.');
            }else{
                reject('payement is not success');
            }
        },2000);
    });
    return promise;
}

function progress(){
    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(marks>80){
                resolve('progress is success.');
            }else{
                reject('progress is not success, You have get to more then 80 marks');
            }
        },2000);
    });
    return promise;
}
function getSertificate(){
    var promise = new Promise((resolve)=>{
        setTimeout(()=>{
                resolve('Sertificate is created.');
        },2000);
    });
    return promise;
}
var callAll = async ()=>{
    try{
        var payment = await enroll();
        console.log(payment);
        var progress1 = await progress();
        console.log(progress1);
        var getSertificate = await getSertificate();
        console.log(getSertificate);
    }catch(e){
        console.log(e);
    }
}
callAll();


































