const recusiveSum = (arr) => {
    if (arr.length === 1) return arr[0];
    return arr[0] + recusiveSum(arr.slice(1))
}
const array = [1, 2, 3, 4, 5];
console.log(recusiveSum(array)); // 15