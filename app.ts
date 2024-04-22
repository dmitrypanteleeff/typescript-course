/* Различия между unknown и any */

let input: unknown;

input = 3;
input = ['sf', 'sdf'];

//let res: string = input as string;

function run(i: unknown) {
    if (typeof i == 'number') { 
        i++; 
    }
    else { 
        i;
    }
}

run(input);
async function getData() {
    try {
        fetch('');
    } catch(error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function getDataForce() {
    try {
        fetch('');
    } catch(error) {
        const e = error as Error;
        console.log(e.message);
    }
}

type U1 = unknown | null;

type I1 = unknown & string;




// let input2: unknown;
// let res2: any = input2;

/*
unknown - это неизвестный тип. 
Его нужно определить.
any - это любой тип

*/