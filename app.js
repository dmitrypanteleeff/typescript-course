"use strict";
//function getFullName(userEntity: IUser): string {
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const getFullNameArrow = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
const user = {
    firstname: 'Lana',
    surname: 'Del Rey',
    age: 29,
    city: 'Los Angeles',
    skills: {
        singer: true,
        danser: true
    }
};
console.log(getFullName(user));
