interface IRole {
	name: string
}

interface IUser {
	name: string;
	roles: IRole[];
	permission: IPermission;
}

interface IPermission {
	endDate: Date;
}

const user: IUser = {
	name: 'Вася',
	roles: [],
	permission: {
		endDate: new Date()
	}
}

const nameUser = user['name'];
const roleNames = 'roles';

type rolesType = IUser['roles']; // получаем массив IRole[]
type rolesType2 = IUser[typeof roleNames]; 

type roleType = IUser['roles'][number]; // получаем элемент массива IRole

const roles = ['admin', 'user', 'super-user'] as const; // roles: readonly ["admin", "user", "super-user"]
type roleTypes = typeof roles[number]; // "admin" | "user" | "super-user"
type endDate = IUser['permission']['endDate'] // Date
//const a: endDate = ''
