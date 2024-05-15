"use strict";
const data1 = [
    { id: 4, name: 'Вася' },
    { id: 2, name: 'Артур' },
    { id: 3, name: 'Саша' },
    { id: 5, secondName: 'Сергей' },
];
class DataWithId {
}
function sortData(data, order) {
    return order === 'asc'
        ? data.sort((a, b) => a.id - b.id)
        : data.sort((a, b) => b.id - a.id);
}
const data2 = sortData(data1, 'asc');
console.log(data2);
const data3 = sortData(data1, 'desc');
console.log(data3);
