function logId(id: string | number): void {
    console.log(id);
}

const a = logId(1);

function mmultiply(f: number, s?: number): number | void {
    if (!s) {
        return f * f;
    }
    //return f * s;
}

type voidFunction = () => void; 

const f1: voidFunction = () => {
    
}
const f2: voidFunction = () => {
    /* Можем возвращать что угодно, возврат будет игнорироваться */
    return true;
}
const b = f2();

const skills = ['Dev', 'DevOps'];

const user = {
    s: ['']
}

skills.forEach(skill => user.s.push(skill));

