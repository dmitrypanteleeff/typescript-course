interface IUser {
    name: string,
    age: number,
    skills: string[]

    log: (id: number) => string;
}

interface IRole {
    roleId: number
}

type User = {
    name: string,
    age: number,
    skills: string[]

    log: (id: number) => string;
}



interface IUserWithRole extends IUser, IRole {
    createdAt: Date
}

const user: IUserWithRole = {
    name: 'Hayley',
    age: 33,
    skills: ['write', 'read'],
    roleId: 12,
    createdAt: new Date,

    log(id) {
        return '';
    }
}

// Можно описывать словари
interface UserDic {
    [index: string]: User
}

type UserDic2 = {
    [index: number]: User
}

// Пример словаря
// {
//     1: user,
//     2: user
// }