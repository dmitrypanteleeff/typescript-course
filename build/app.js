"use strict";
/*
    Необходимо реализовать абстрактный класс Logger с 2-мя методами
    абстрактным - log(message): void
    printDate - выводящий в log дату
    К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
    выводящий сначала дату, а потом заданное сообщение
*/
//import { } from '@lib';
class Logger {
    printDate() {
        this.log(new Date());
    }
}
class LoggerDate extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate();
        this.log(message);
    }
}
const c = new LoggerDate();
c.logWithDate('Hello');
