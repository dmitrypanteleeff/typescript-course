"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
    login() {
        console.log(this.name);
    }
}
function createUser(user) {
    // логика
    // @ts-ignore
    const defaultUser = new User('default');
    defaultUser.role = undefined;
    switch (user.role) {
        case 'admin':
            //const a = 7; //noFallthroughCasesInSwitch
            return;
        case 'user':
            return true;
        //const c = 1; //allowUnreachableCode
    }
    return;
}
const c = {};
const d = c['drive']; //noUncheckedIndexedAccess
class VipUser extends User {
    login() {
    }
}
