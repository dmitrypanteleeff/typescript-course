const skills: string[] = ['Dev', 'DevOps', 'Testing'];

const skills2: Array<string> = ['Dev', 'DevOps', 'Testing'];

for (const skill of skills) {
    console.log(skill.toLowerCase())
} 

const res: string = skills
    .filter( (item: string) => item !== 'DevOps')
    .map(s => s + '! ')
    .reduce((acc: string, cur: string) => acc + cur, '');

console.log(res)