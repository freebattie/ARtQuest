
export function reactWait(millisec) {
    return new Promise(resolve => {
        setTimeout(() => resolve(''), millisec);
    })
}
