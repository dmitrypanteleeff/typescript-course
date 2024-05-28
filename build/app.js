"use strict";
/*
    typeof позволяет вытащить из переменной тип
    можно сужать тип
*/
let strOrNum = 5;
strOrNum = Math.random() > 0.5
    ? 5
    : 'five';
if (typeof strOrNum === 'string') {
    console.log(strOrNum);
}
else {
    console.log(strOrNum);
}
let strOrNum2;
const user = {
    name: 'Вася',
    age: 22
};
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
})(Direction || (Direction = {}));
