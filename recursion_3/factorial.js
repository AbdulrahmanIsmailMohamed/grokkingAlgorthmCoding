function factByRecursive(x) {
    if (x === 0) return 1;
    return x * factByRecursive(x - 1);
}
function factByLoop(x) {
    if (x === 0) return 1;
    let result = 1;
    for (let i = x; i > 0; i--) {
        result = result * i;
    }
    return result
}
console.log(factByRecursive(5));
console.log(factByLoop(5));