
const args = ['col1', 'col2'];

interface ILogger {
	log: (arg: string) => void;
	error(arg: string): void;
}

class Loger implements ILogger {
	log(arg: string): void {
		console.log(...args)
	};

	error(arg: string): void {
		throw new Error('Text error');
	}
}
interface IDeletable {
	delete(): void;
}

interface IPayable {
	pay(paymentId: number): void;
	price?: number;
}

class User implements IPayable, IDeletable {
	pay(paymentId: number): void {
		
	}

	delete(): void {
		
	}
}