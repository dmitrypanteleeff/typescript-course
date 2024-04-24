"use strict";
let a = 5;
let b = a.toString();
let e = new String(a).valueOf();
let f = new Boolean(a).valueOf();
let c = 'weqwdqw';
let d = +c;
let dd = parseInt(c);
const user = {
    name: 'Вася',
    email: 'Vasya@yandex.ru',
    login: 'Vasia'
};
// const admin: IAdmin = {
//     ...user,
//     role: 1
// }
//const admin: IAdmin = user;
function userToAdmin(user) {
    return {
        name: user.name,
        role: 1
    };
}
