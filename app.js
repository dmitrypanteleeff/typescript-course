"use strict";
class User {
    constructor() {
        this.skills = [];
    }
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills.concat(skillOrSkills);
        }
        console.log(this.skills);
    }
}
const user = new User();
user.addSkill('write');
user.addSkill(['read', 'watch']);
function run(distance) {
    if (typeof distance === 'number') {
        return 1;
    }
    else {
        return 'empty';
    }
}
run('1');
