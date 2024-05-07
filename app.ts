class Payment {
	private date: Date = new Date();

	getDate(this: Payment, a: number) {
		return this.date;
	}

	getDateArrow = () => {
		return this.date;
	}
}

const p = new Payment();


const user = {
	date: 3,
	id: 1,
	paymentDate: p.getDate.bind(p),
	paymentDateArrow: p.getDateArrow
}


// console.log(p.getDate(1));
// console.log(user.paymentDate(1));
// console.log(user.paymentDateArrow());

class PaymentPersistent extends Payment {
	// Мы уже отнаследовались. В Payment есть getDateArrow()
	save() {
		return this.getDateArrow();
	}
	save2() {
		return super.getDate(1);
	}
	// Ошибка мы не можем получить стрелочную функцию. Но можем получить обычную
	// save1() {
	// 	return super.getDateArrow();
	// }
}

console.log(new PaymentPersistent().save());