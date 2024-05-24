class Resp<D, E> {
	data?: D;
	error?: E;

	constructor(data: D, error: E) {
		this.data = data;
		this.error = error;
	}
}

//const res = new Resp<string, number>('qwerty', 5);
//const res = new Resp('qwerty');

class HTTPResp<F> extends Resp<string,number> {
	code: F;

	setCode(code: F) {
		this.code = code;
	}
}

const resp2 = new HTTPResp<number>('qwe',0);