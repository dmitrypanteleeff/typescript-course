"use strict";
class Resp {
    constructor(data, error) {
        this.data = data;
        this.error = error;
    }
}
//const res = new Resp<string, number>('qwerty', 5);
//const res = new Resp('qwerty');
class HTTPResp extends Resp {
    setCode(code) {
        this.code = code;
    }
}
const resp2 = new HTTPResp('qwe', 0);
