"use strict";
const user = {
    name: 'Вася',
    roles: [],
    permission: {
        endDate: new Date()
    }
};
const nameUser = user['name'];
const roleNames = 'roles';
const roles = ['admin', 'user', 'super-user']; // roles: readonly ["admin", "user", "super-user"]
//const a: endDate = ''
