/*
	Conditional Types
	Использовать полезно, когда одним интерфейсом нужно 
	описать сразу несколько объектов, которые в зависимости от значения, будут отличаться

	В функциях, чтобы убрать лишние переопределения
*/

const a1: number = Math.random() > 0.5 ? 1 : 0;

interface HTTPResponse<T extends 'success' | 'failed'> {
	code: number,
	data: T extends 'success' ? string : Error,
	//dat2: T extends 'success' ? string : number,
	//additionalData: string | number
}

const suc: HTTPResponse<'success'> = {
	code: 122,
	data: 'asdasd'
}

const err: HTTPResponse<'failed'> = {
	code: 122,
	data: new Error()
}


class User {
	id: number;
	name: string;
}

class UserPersistned extends User{
	dbId: string;
}

function getUser(id: number): User
function getUser(dbId: string): UserPersistned  
function getUser(dbIdOrId: string | number): User | UserPersistned { 
	if (typeof dbIdOrId === 'number') {
		return new User();
	} else {
		return new UserPersistned();
	}
}

type UserorUserPersistned<T extends string | number> = T extends number 
	? User
	: UserPersistned;

function getUser2<T extends string | number>(dbIdOrId: T): UserorUserPersistned<T> { 
	if (typeof dbIdOrId === 'number') {
		return new User() as UserorUserPersistned<T>;
	} else {
		return new UserPersistned() as UserorUserPersistned<T>;
	}
}	

const res = getUser2(1)
const res2 = getUser2('qweqw')