// export var text = 'Hello Everyone, I am from module';

// export function myFunc(txt){
//     text = txt;
// }

var message = 'Default';
export function newFunc(value){
    message = value
}
export {message as x}
 