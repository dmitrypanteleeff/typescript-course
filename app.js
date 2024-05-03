"use strict";
/*
    Наследование - extends - приходится тащить всюду
    Композция - позволяет не нарушать объекты.
    У объектов внутри композиции свои отдельные доменные области
    
    Наследование лучше использовать если мы наследуемся
    в рамках одной домменной области.

    Когда не нужно делать, когда наследуемся от сложных внутренних массивов
    Не следует наследоваться, если пересекаем границу одной домменной области
    и уходим в другую домменную область - пример с UserWithPayment2
*/
class User {
    constructor(name) {
        this.name = name;
    }
}
class Users extends Array {
    searchByName(name) {
        return this.filter(u => u.name === name);
    }
    toString() {
        return this.map(u => u.name).join(', ');
    }
}
const users = new Users();
users.push(new User('Вася'));
users.push(new User('Петя'));
console.log(users.toString());
class UserList {
    push(u) {
        this.users.push(u);
    }
}
class Payment {
}
class UserWithPayment extends Payment {
}
class UserWithPayment2 {
    constructor(user, payment) {
        this.payment = payment;
        this.user = user;
    }
}
