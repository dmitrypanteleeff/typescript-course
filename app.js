"use strict";
/*

*/
class User {
    constructor(ageOrName, age) {
        if (typeof ageOrName === 'string') {
            this.name = ageOrName;
        }
        if (typeof ageOrName === 'number') {
            this.age = ageOrName;
        }
        if (typeof age === 'number') {
            this.age = age;
        }
    }
}
const user = new User('Vasya');
const user2 = new User();
const user3 = new User(33);
const user4 = new User('Ura', 33);
