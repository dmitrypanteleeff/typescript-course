"use strict";
function logMiddleware(data) {
    console.log(data);
    return data;
}
const res = logMiddleware(10);
function splitHalf(data) {
    const length = data.length;
    return data.splice(0, length / 2);
}
const arr = ['test', 'test2', 'test3', 'test4', 'test5', 'test6'];
const res2 = splitHalf(arr);
console.log(res2);
const split = splitHalf;
const split2 = splitHalf;
const logLine = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
};
const logLineWithType = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
};
