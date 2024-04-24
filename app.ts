/* Type Guard помогают оградить поток выполнения с точки зрения
типов корректно, чтобы в каждом из версий проверок 
можно было корреткно определить тип */

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

function logId(id: string | number) {
    if (isString(id)) {
        console.log(id);
    }
    else {
        console.log(id);
    }
}

function isString(x: string | number): x is string {
    return typeof x === 'string';
}

function isAdmin(user: IUser | IAdmin): user is IAdmin {
    return 'role' in user;
}
function isAdminAlternative(user: IUser | IAdmin): user is IAdmin {
    return (user as IAdmin).role !== undefined;
}

function setRoleZero(user: IUser | IAdmin) {
    if(isAdmin(user)) {
       user.role = 0; 
    } else {
        throw new Error('Пользователь не админ')
    }
}

