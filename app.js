"use strict";
/*Never - никогда такого не произойдёт. Никогда не вернётся
Никогда не будет присвоено */
function generateError(message) {
    throw new Error(message);
}
function dumpError() {
    while (true) { }
}
function rec() {
    return rec();
}
const a = undefined;
function processAction(action) {
    switch (action) {
        case 'refund':
            //...
            break;
        case 'checkout':
            //...
            break;
        case 'reject':
            //...
            break;
        default:
            const _ = action;
            throw new Error('Нет такого action');
    }
}
function isString(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    generateError('message');
}
/* Never помогает во время компиляции кода обнаружить ошибки*/ 
