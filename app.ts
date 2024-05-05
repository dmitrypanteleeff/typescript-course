/*
	Статические свойства не требуют создание инстанса класса
	К свойствам можно обращаться без создания инстанса

	Любой статичный метод может быть асинхронным
	Инициализатор static не может быть асинхронным. Но может задавать изначальные значения
*/

class UserService {
	static db: any;

	static async getUser(id: number) {
		return UserService.db.findById(id);
	}

	constructor(id: number) {

	}

	create() {
		UserService.db = 'asd';
	}

	static {

	}
}

UserService.getUser(1);
const inst = new UserService(1);
inst.create();