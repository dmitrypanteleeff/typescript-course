class Product {
	constructor(
		public id: number,
		public name: string,
		public cost: number
	) { }
}

class Delivery {
	constructor(
		public date: Date
	) { }
}

class HomeDelivery extends Delivery {
	constructor(
		public date: Date,
		public address: string
	) {
		super(date);
	}
}

class StoreDelivery extends Delivery {
	constructor(
		public date: Date,
		public storeID: number
	) {
		super(new Date());
	}
}

type DeliveryOptions = HomeDelivery | StoreDelivery;

class Cart {
	private products: Array<Product> = [];
	private delivery: DeliveryOptions;

	addProduct(product: Product): Product[] {
		this.products.push(product);
		console.log(this.products);
		return this.products;
	}

	removeProduct(id: number): Product[] {
		this.products = this.products.filter((product: Product) => product.id !== id);
		console.log(this.products);
		return this.products;
	}

	finalCost(): number {
		const sum = this.products.reduce((acc, product) => acc + product.cost, 0);
		console.log(sum);
		return sum;
	}

	setDelivery(delivery: DeliveryOptions): void {
		this.delivery = delivery;
		console.log(this.delivery);
	}

	checkOut() {
		this.products.length > 0 && this.delivery !== undefined;
		if (this.products.length === 0) {
			throw new Error('Нет продуктов');
		}
		if (!this.delivery) {
			throw new Error('Не выбрали доставку');
		}
		return { success: true }
	}
}

const cart = new Cart();
const product1 = new Product(1, 'Печенье', 100);
const product2 = new Product(2, 'Торт', 300);
const product3 = new Product(3, 'Молоко', 500);
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);
cart.removeProduct(2);
cart.setDelivery(new HomeDelivery(new Date(), 'Москва'));
cart.finalCost();
cart.checkOut();