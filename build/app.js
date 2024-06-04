"use strict";
/*
    Infer
    вытаскивает нужный тип и мы можем его переиспользовать
*/
function runTransaction(transaction) {
    console.log(transaction);
}
console.log(typeof runTransaction);
const transaction = {
    fromTo: ['1', '2']
};
runTransaction(transaction);
