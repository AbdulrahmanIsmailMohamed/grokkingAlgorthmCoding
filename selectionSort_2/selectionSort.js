// find smallest value in array
let findSmallest = (arr) => {
    let smallest = arr[0];
    let smallestIndex = 0;
    const arrLength = arr.length;
    for (let i = 1; i < arrLength; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

// sort the array
let selectionSort = (arr) => {
    let newArr = [];
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        let smallest = findSmallest(arr)
        newArr.push(arr.splice(smallest, 1)[0])
    }
    return newArr
}

let arr = [1, 2, 3, 4, 5, 0, 7, 8];
console.log(selectionSort(arr)); // 0, 1, 2, 3, 4, 5, 7, 8

// big O notation => O(n^2)