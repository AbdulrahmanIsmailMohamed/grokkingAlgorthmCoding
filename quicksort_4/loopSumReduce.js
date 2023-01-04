const sumReduce = (array) => {
    return array.reduce((curr, prev) => {
        return curr + prev
    })
}
const array = [1, 2, 3, 4, 5]
console.log(sumReduce(array)); // 15

