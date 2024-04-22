/*Never - никогда такого не произойдёт. Никогда не вернётся
Никогда не будет присвоено */

function generateError(message: string):never {
    throw new Error(message);      
}

function dumpError(): never {
    while(true){}
}

function rec(): never {
    return rec();
}

const a: void = undefined;

type paymentAction = 'refund' | 'checkout' | 'reject';

function processAction(action: paymentAction) {
    switch(action){
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
            const _: never = action;
            throw new Error('Нет такого action')
    }
}


function isString(x: string | number): boolean {
    if (typeof x === 'string') { 
        return true; 
    }
    else if (typeof x === 'number') { 
        return false; 
    }
    generateError('message');
}

/* Never помогает во время компиляции кода обнаружить ошибки*/