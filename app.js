"use strict";
/* Type Guard помогают оградить поток выполнения с точки зрения
типов корректно, чтобы в каждом из версий проверок
можно было корреткно определить тип */
const user = {
    name: 'Вася',
    email: 'Vasya@yandex.ru',
    login: 'Vasia'
};
function logId(id) {
    if (isString(id)) {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function isString(x) {
    return typeof x === 'string';
}
function isAdmin(user) {
    return 'role' in user;
}
function isAdminAlternative(user) {
    return user.role !== undefined;
}
function setRoleZero(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error('Пользователь не админ');
    }
}
