/*
	Необходимо реализовать абстрактный класс Logger с 2-мя методами
	абстрактным - log(message): void
	printDate - выводящий в log дату
	К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
	выводящий сначала дату, а потом заданное сообщение
*/


abstract class Logger {
	abstract log(message: string | Date): void;
	
	printDate(): void {
		this.log(new Date());
	}
}

class LoggerDate extends Logger {
	log(message: string | Date): void {
		console.log(message)
	}

	logWithDate(message: string) {
		this.printDate();
		this.log(message);
	}
}

const c = new LoggerDate();
c.logWithDate('Hello');
