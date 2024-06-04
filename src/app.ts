/*
	Infer
	вытаскивает нужный тип и мы можем его переиспользовать
*/

function runTransaction(transaction: {
	fromTo: [string, string]
}) {
	console.log(transaction)
}

console.log(typeof runTransaction)

const transaction: GetFirstArc<typeof runTransaction> = {
	fromTo: ['1', '2']
}

runTransaction(transaction);

type GetFirstArc<T> = T extends (first: infer First, ...args: any[]) => any ? First : never;
