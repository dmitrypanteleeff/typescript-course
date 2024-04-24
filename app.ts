let a = 5;
let b: string = a.toString();
let e: string = new String(a).valueOf();
let f: boolean = new Boolean(a).valueOf();

let c = 'weqwdqw';
let d: number = +c;
let dd: number = parseInt(c);

interface IUser {
    name: string,
    email: string,
    login: string
}

const user: IUser = {
    name: 'Вася',
    email: 'Vasya@yandex.ru',
    login: 'Vasia'
}

interface IAdmin {
    name: string,
    role: number
}

// const admin: IAdmin = {
//     ...user,
//     role: 1
// }
//const admin: IAdmin = user;

function userToAdmin(user: IUser): IAdmin {
    return {
        name: user.name,
        role: 1
    }
}

