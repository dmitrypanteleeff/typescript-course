enum StatusCode {
    SUCCESS = 1,
    IN_PROGRESS = 'in progress',
    FAILED = 'failed'
}

const res = {
    message: 'Платёж успешен',
    statusCode: StatusCode.SUCCESS
}


if (res.statusCode === StatusCode.SUCCESS) {

}

// 1 - успех
// 2 - в процессе
// 3 - отклонён

function action(status: StatusCode) {

}

action(StatusCode.SUCCESS);
action(1);

const enum Roles {
    ADMIN = 1, 
    USER = ADMIN + 2
}

function test(x: {ADMIN: number}) {

}

const res2 = Roles.USER
console.log(res2)

//если это обычный enum, то это функция, если это const enum, то это преобразовывается в константу
// и подставляется в те места, где было обращение к этому enum