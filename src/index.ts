export const promise1 = () => new Promise(resolve => {});
export const promise2 = () => new Promise(resolve => {});

const obj = {
    someFn,
}

function someFn() {
    return 1;
}

async function asyncFn() {
    // eliminate されない
    if (process.env.NODE_ENV !== "production") {
        await promise1();
        await promise2();
    } else {
        obj.someFn();
    }
}

function promiseAllFn() {
    // eliminate される
    if (process.env.NODE_ENV !== "production") {
        return Promise.all([
            promise1(),
            promise2(),
        ]);
    } else {
        obj.someFn();
    }
}

asyncFn();
promiseAllFn();
