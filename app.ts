const n: null = null;
const n1: any = null;
// const n2: number = null;
// const n3: string = null;
// const n4: boolean = null;

interface IUser {
    name: string;
}

function getUser() {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return {
            name: 'hayley'
        } as IUser
    }
}

const user = getUser();
if (user) {
    const n55 = user.name;
}
