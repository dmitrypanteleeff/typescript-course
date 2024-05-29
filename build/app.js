"use strict";
/*
    Conditional Types
    Использовать полезно, когда одним интерфейсом нужно
    описать сразу несколько объектов, которые в зависимости от значения, будут отличаться

    В функциях, чтобы убрать лишние переопределения
*/
const a1 = Math.random() > 0.5 ? 1 : 0;
const suc = {
    code: 122,
    data: 'asdasd'
};
const err = {
    code: 122,
    data: new Error()
};
class User {
}
class UserPersistned extends User {
}
function getUser(dbIdOrId) {
    if (typeof dbIdOrId === 'number') {
        return new User();
    }
    else {
        return new UserPersistned();
    }
}
function getUser2(dbIdOrId) {
    if (typeof dbIdOrId === 'number') {
        return new User();
    }
    else {
        return new UserPersistned();
    }
}
const res = getUser2(1);
const res2 = getUser2('qweqw');
