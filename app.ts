class User {
	skills: string[] = [];

	constructor() {

	}

	addSkill(skill: string): void;
	addSkill(skill: string[]): void;
	addSkill(skillOrSkills: string | string[]): void {
		if(typeof skillOrSkills === 'string') {
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

function run(distance: string): string;
function run(distance: number): number;
function run(distance: number | string): number | string {
	if (typeof distance === 'number') { return 1; }
	else { return 'empty'; }
}

run('1');