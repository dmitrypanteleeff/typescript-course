/* 
геттеры и сеттеры позволяют дополнить логику получения
и присвоения свойств в объекте.

То, что получает геттер, то и должен возвращать сеттер
Например, если геттер получает число, то и сеттер должен возвращать число

Если у нас еть только геттер, но нет сеттера, то у нас свойство становится readonly

Сеттеры и геттеры не могут быть асинхронными
*/

class User {
	_login: string;
	password: string;

	set login(l: string | number) {
		this._login = 'user-'+ l;
	}

	get login() {
		return 'no_login';
	}

	async setPassword(p: string) {

	}
	// set password(p: string) {

	// }
}

const user = new User();
user.login = 'myLogin';
console.log(user);
console.log(user.login);