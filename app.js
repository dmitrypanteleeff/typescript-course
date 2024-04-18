"use strict";
const user = {
    login: 'aaa@aaa.ru',
    // password: '1231'
};
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
function testPass(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
    // const t = user.password!.type;  - запись "!." означает, что здесь полюбому есть тип
}
function test(param) {
    const t = param !== null && param !== void 0 ? param : multiply(5);
    // param === null || param === undefined то выполняем функцию multiply(5)
}
