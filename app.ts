//function getFullName(userEntity: IUser): string {
function getFullName(userEntity: { firstname: string, surname: string }): string {
    return `${userEntity.firstname} ${userEntity.surname}`;
}

const getFullNameArrow = (firstname: string, surname: string): string => {
    return `${firstname} ${surname}`;
}

interface IUser {
    firstname: string,
    surname: string
}

const user = {
    firstname: 'Lana',
    surname: 'Del Rey',
    age: 29,
    city: 'Los Angeles',
    skills: {
        singer: true,
        danser: true
    }
}

console.log(getFullName(user));