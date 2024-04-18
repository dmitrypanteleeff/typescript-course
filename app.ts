
// Interface - можно дополнять
interface IUser {
    name: string
}

interface IUser {
    age: number
}

const user: IUser = {
    name: 'Tom',
    age: 33
}

// Interface нельзя заэкстендить от примитивных типов
type ID = string | number;

interface IDI {
    IDI: string | number
}

// type - можно использовать как Alias (псевдонимы)
type userName = string;
type surname = string;

const user2: userName = 'qweqwe';

// для примитивных типов лучше использовать type, для сложных объектов interface




// type - можно
// Interface - можно дополнять
// Interface - можно дополнять