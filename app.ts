/*
public - свойство досутпно в наследниках и извне
private - свойство недоступно в наследниках. Оно доступно только внутри класса, который был объявлен
protected - свойство доступно в наследниках (внутри классов), но не доступно из вне (когда создаём экземляр, например)
*/


class Vehicle {
	public make: String;
	private damages: string[];
	private _model: string;
	protected run: number;
	#price: number; // делает свойство приватным, но в JS

	set model(m: string) {
		this._model = m;
		this.#price = 100;
	}

	get model() {
		return this._model;
	}

	isPriceEqual(v: Vehicle) {
		return this.#price === v.#price;
	}

	addDamage(damage: string): void {
		this.damages.push(damage);
		console.log(this.#price);
	}
}

class EuroTrack extends Vehicle {

	setRun(km: number) {
		this.run = km / 0.62;
		//this.
	}

	// constructor() {
	// 	super();
	// }
}

new Vehicle().make = 'd';
new Vehicle().addDamage('damage1');
new Vehicle().model;
