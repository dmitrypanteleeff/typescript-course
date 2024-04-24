"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function isStatusSuccess(res) {
    //return (res.data as IDataSuccess).databaseId !== undefined;
    return 'databaseId' in res.data;
}
function reqTest(res) {
    if (isStatusSuccess(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
