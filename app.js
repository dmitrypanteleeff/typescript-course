"use strict";
class Payment {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class PersistedPayment extends Payment {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
        // Сохраняет в базу
    }
    pay(date) {
        //this.status = 'paid';
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
new PersistedPayment().save();
