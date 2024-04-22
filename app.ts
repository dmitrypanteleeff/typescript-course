interface IPayment {
    sum: number,
    from: number,
    to: number
}

type Status = 'success' | 'failed';

type Data = {
    databaseId: number,
    sum: number,
    from: number,
    to: number,
    errorMessage: string,
    errorCode: number
}


interface IResponse {
    status: Status,
    // data: {
    //     databaseId?: number,
    //     sum?: number,
    //     from?: number,
    //     to?: number,
    //     errorMessage?: string,
    //     errorCode?: number
    // }
    data: Partial<Data>
}