function logMiddleware<T>(data: T): T {
	console.log(data);
	return data;
}

const res = logMiddleware<number>(10);

function splitHalf<T>(data: Array<T>): Array<T> {
	const length = data.length;

	return data.splice(0, length / 2);
}
const arr = ['test', 'test2', 'test3', 'test4', 'test5', 'test6'];
const res2 = splitHalf<string>(arr);
console.log(res2);

const split: <T>(data: Array<T>) => Array<T> = splitHalf;
const split2: <Y>(data: Array<Y>) => Array<Y> = splitHalf;

interface ILogLine<T> {
	timeStamp: Date,
	data: T
}

type LogLineType<T> = {
	timeStamp: Date,
	data: T
}

const logLine: ILogLine<{a: number}> = {
	timeStamp: new Date(),
	data: {
		a: 1
	}
}
const logLineWithType: LogLineType<{a: number}> = {
	timeStamp: new Date(),
	data: {
		a: 1
	}
}

