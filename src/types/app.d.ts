declare class User {
    name: string;
    role?: 'admin' | 'user';
    constructor(name: string);
    login(): void;
}
declare function createUser(user: User): true | undefined;
interface IChecks {
    [check: string]: boolean;
}
declare const c: IChecks;
declare const d: boolean | undefined;
declare class VipUser extends User {
    login(): void;
}
