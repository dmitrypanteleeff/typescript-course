type User = {
    name: string,
    age: number,
    skills: string[]
}

type Role = {
    id: number,
    name: string
}

//type UserWithRole = User & Role;
type UserWithRole = {
    user: User,
    role: Role
};

const user: UserWithRole = {
    user: {
        name: 'Hayley',
        age: 33,
        skills: ['write', 'read'],
    },
    role: {
        id: 1,
        name: 'user'
    }
}