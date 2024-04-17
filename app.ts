
// Сужение типов
function logId(id: string | number | boolean) {
    console.log(id)
    if (typeof id === 'string') {
        console.log(id.toLowerCase());
    } else if (typeof id === 'number') {
        console.log(id);
    } else {
        console.log(id);
    }
}

function logError(err: string | string[]) {
    if (Array.isArray(err)) {
        console.log(err);
    } else {
        console.log(err);
    }
}

function logObject(obj: {a: number} | {b: number}) {
    // проверка по ключу
    if ('a' in obj) {
        console.log(obj.a)
    } else {
        console.log(obj.b)
    }
} 

function logMultippleIds(a: string | number, b: string | boolean) {
    if (a === b) {
        a.toLowerCase();
    } else {
        console.log(a)
    }
}

// Тут тип будет равен 1
const a = 1;

logId(112312);
logId('qweqweq');
logId(true);
