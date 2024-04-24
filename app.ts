interface IPayment {
	sum: number;
	from: number;
	to: number;
}

enum PaymentStatus {
	Success = 'success',
	Failed = 'failed',
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment { 
	databaseId: number;
}

interface IDataFailed {
	errorMessage: string;
	errorCode: number;
}

interface IResponseSuccess {
	status: PaymentStatus.Success;
	data: IDataSuccess;
}

interface IResponseFailed {
	status: PaymentStatus.Failed;
	data: IDataFailed;
}


function isStatusSuccess(res: IResponseSuccess | IResponseFailed): res is IResponseSuccess {
    //return (res.data as IDataSuccess).databaseId !== undefined;
    return 'databaseId' in res.data;
}

type f = (res: IResponseSuccess | IResponseFailed) => number;
function reqTest(res: IResponseSuccess | IResponseFailed): number {
    if (isStatusSuccess(res)) {
        return res.data.databaseId;
    }
    else { throw new Error(res.data.errorMessage); }
}
