function factByRecursive(x) {
    if (x === 0) return 1;
    return x * factRecursive(x - 1);
}
function factByLoop(x) {
    if (x === 0) return 1;
    let result =1;
    for (let i = x; i > 0; i--) {
        result = result * i;
    }
    return result
}
console.log(factRecursive(5));
console.log(factLoop(5));