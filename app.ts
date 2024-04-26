/*
	Конструтор - это функция, которая конструирует, возвращает наш объект
	Она не может быть переопределена с точки зрения возвращаемого типа
	Мы не можем исопользовать Дженерики и проставлять явный тип
	Но мы можем делать оверроуд, тем самым объявляя различные вариации 
	нашего конструктора для класса
*/

class User {
	name: string;
	age: number;

	constructor();
	constructor(name: string);
	constructor(age: number);
	constructor(name: string, age: number);
	constructor(ageOrName?: string | number, age?: number) {
		if (typeof ageOrName === 'string') {
			this.name = ageOrName;
		}
		if (typeof ageOrName === 'number') {
			this.age = ageOrName;
		} 
		if (typeof age === 'number') {
			this.age = age;
		} 
	}
}

const user = new User('Vasya');
const user2 = new User();
const user3 = new User(33)
const user4 = new User('Ura',33)