
interface IProduct {
	id: number;
	name: string;
	cost: number;
}

interface IDeliveryHome {
	address: string;
	date: Date;
}

interface IDeliveryStore {
	storeID: number;
	date: Date;
}

class Cart {

	products: IProduct[] = [];
	delivery: IDeliveryHome | IDeliveryStore;

	addProduct(product: IProduct): IProduct[] {
		this.products.push(product);
		console.log(this.products);
		return this.products;
	}

	removeProduct(id: number): IProduct[] {
		console.log(this.products);
		this.products = this.products.filter(product => product.id !== id);
		return this.products;
	}

	finalCost(): number {
		const sum = this.products.reduce((acc, product) => acc + product.cost, 0);
		console.log(sum);
		return sum;
	}

	setDelivery(delivery: IDeliveryHome | IDeliveryStore): void {
		this.delivery = delivery;
		console.log(this.delivery);
	}
}


const product1: IProduct = {
	id: 1,
	name: 'product1',
	cost: 100
}

const product2: IProduct = {
	id: 2,
	name: 'product2',
	cost: 300
}

const product3: IProduct = {
	id: 3,
	name: 'product3',
	cost: 500
}

const cart = new Cart;
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);
cart.removeProduct(2);
cart.finalCost();