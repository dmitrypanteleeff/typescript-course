/*
	typeof позволяет вытащить из переменной тип
	можно сужать тип
*/


let strOrNum: string | number = 5;

strOrNum = Math.random() > 0.5
	? 5
	: 'five';

if (typeof strOrNum === 'string') {
	console.log(strOrNum);
} else {
	console.log(strOrNum);
}

let strOrNum2: typeof strOrNum;

const user = {
	name: 'Вася',
	age: 22
}

type keyOfUser = keyof typeof user; 

enum Direction {
	Up,
	Down
}

type d = keyof typeof Direction;