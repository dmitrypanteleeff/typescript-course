interface IUser {
    login: string,
    password?: string
}

const user: IUser = {
    login: 'aaa@aaa.ru',
   // password: '1231'
}

function multiply(first: number, second?: number): number {
    if (!second) {
        return first * first;
    }
    return first * second;
}


interface IUserPro {
    login: string;
    password?: {
        type: 'primary' | 'secondary'
    }
}


function testPass(user: IUserPro) {
    const t = user.password?.type;
   // const t = user.password!.type;  - запись "!." означает, что здесь полюбому есть тип
}

function test(param?: string) {
    const t = param ?? multiply(5);

    // param === null || param === undefined то выполняем функцию multiply(5)
}

