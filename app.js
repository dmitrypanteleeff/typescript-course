"use strict";
function logId(id) {
    console.log(id);
}
const a = logId(1);
function mmultiply(f, s) {
    if (!s) {
        return f * f;
    }
    //return f * s;
}
const f1 = () => {
};
const f2 = () => {
    /* Можем возвращать что угодно, возврат будет игнорироваться */
    return true;
};
const b = f2();
const skills = ['Dev', 'DevOps'];
const user = {
    s: ['']
};
skills.forEach(skill => user.s.push(skill));
