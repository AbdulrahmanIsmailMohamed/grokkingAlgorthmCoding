const recusiveCount = (arr) => {
    if (arr.length === 0) return 0;
    return 1 + recusiveCount(arr.slice(1))
}
const array = [1, 2, 3, 4, 5];
console.log(recusiveCount(array));