const sum = (arr) => {
    let total = 0;
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        total += arr[i];
    }
    return total;
}
const arr = [1, 2, 3, 4, 5];
console.log(sum(arr)); // 15