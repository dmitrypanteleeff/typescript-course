"use strict";
const skills = ['Dev', 'DevOps', 'Testing'];
const skills2 = ['Dev', 'DevOps', 'Testing'];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
const res = skills
    .filter((item) => item !== 'DevOps')
    .map(s => s + '!')
    .reduce((acc, cur) => acc + cur, '');
console.log(res);
