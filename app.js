var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode["IN_PROGRESS"] = "in progress";
    StatusCode["FAILED"] = "failed";
})(StatusCode || (StatusCode = {}));
var res = {
    message: 'Платёж успешен',
    statusCode: StatusCode.SUCCESS
};
if (res.statusCode === StatusCode.SUCCESS) {
}
// 1 - успех
// 2 - в процессе
// 3 - отклонён
function action(status) {
}
action(StatusCode.SUCCESS);
action(1);
function test(x) {
}
var res2 = 3 /* Roles.USER */;
console.log(res2);
//если это обычный enum, то это функция, если это const enum, то это преобразовывается в константу
// и подставляется в те места, где было обращение к этому enum
