class User {
	name: string;
	role?: 'admin' | 'user';

	constructor(name: string) {
		this.name = name
	}

	login() {
		console.log(this.name);
	}
}

function createUser(user: User) {
	// логика
	// @ts-ignore
	const defaultUser = new User('default');
	defaultUser.role = undefined;

	switch(user.role) {
		case 'admin':
			//const a = 7; //noFallthroughCasesInSwitch
			return;
		case 'user':
			return true;
			//const c = 1; //allowUnreachableCode
	}

	return;

}

interface IChecks {
	[ check: string ]: boolean
}

const c: IChecks = {};
const d = c['drive']; //noUncheckedIndexedAccess

class VipUser extends User {
	override login(): void { // noImplicitOverride
		
	}
}

