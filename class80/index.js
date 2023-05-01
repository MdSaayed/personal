var payment = true;
var marks = 90;

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
enroll()
        .then((res=> console.log(res)))
        .then(progress)
        .then((res=> console.log(res)))
        .then(getSertificate)
        .then((res=> console.log(res)))
        .catch((err=> console.log(err)));



































