"use strict";
const args = ['col1', 'col2'];
class Loger {
    log(arg) {
        console.log(...args);
    }
    ;
    error(arg) {
        throw new Error('Text error');
    }
}
class User {
    pay(paymentId) {
    }
    delete() {
    }
}
