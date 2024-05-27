"use strict";
/**
Необходимо написать функцию группировки, которая принимает массив объектов
и его ключ, производит группировку по указанному ключу и возращает
сгруппированный объект.
Пример:
``` js
[
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];
```

При группироке по 'group' ---->

``` js
{
    '1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
    '2': [ { group: 2, name: 'c' } ]
}
```
*/
const data = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'a' }
];
function groupArray(arr, key) {
    let map = new Map();
    arr.map(item => {
        for (let k in item) {
            if (k === key) {
                map.set(item[key], arr.filter(it => it[key] === item[key]));
            }
        }
    });
    const obj = {};
    map.forEach((value, key) => {
        obj[key] = value;
    });
    return obj;
}
const obj = groupArray(data, 'name');
console.log(obj);
const obj2 = groupArray(data, 'group');
console.log(obj2);
