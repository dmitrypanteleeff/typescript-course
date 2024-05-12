"use strict";
/*
Отличие implements от абстрактных классов

implements переносит методы, которые должны быть использованы
в наследуемых классах

абстрактные классы переносят не только методы,
но и логику, которая описывается в абстрактных классах

классы которые наследуются от абстрактных
классов должны обязательно содержать абстрактные методы
перечисленные в абстрактных классах
*/
class Controller {
    handleWithLogs(req) {
        console.log('Start');
        this.handle(req);
        console.log('End');
    }
}
//new Controller() - error
class UserController extends Controller {
    // handle(req: any): void {
    // 	console.log(req);
    // }
    handle(req) {
        console.log(req);
    }
}
const c = new UserController();
c.handleWithLogs('Request');
