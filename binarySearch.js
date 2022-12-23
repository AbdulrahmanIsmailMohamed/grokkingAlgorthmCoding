function binarySearch(arr, item) {
    let low = 0;
    let hight = arr.length - 1;
    let mid; let guess;
    while (low <= hight) {
        mid = low + hight;
        guess = arr[mid];
        if (guess == item) {
            return mid
        }
        if (guess > item) {
            hight = mid - 1;
        } else {
            low = mid + 1
        }
    }
    return "none"
}

let myList = [1, 2, 3, 4, 5, 6, 7, 8];
let itemPosition = binarySearch(myList, 5);
console.log(itemPosition); // 4