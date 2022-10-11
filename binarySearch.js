const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
let count = 0
const binarySearch = (arr, item) => {
    let start = 0
    let end = arr.length
    let middle
    let found = false

    while (!found && start <= end) {
        count++
        middle = Math.floor((start + end) / 2)
        if (arr[middle] === item) {
            found = true
            return middle
        }
        if (item < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return 'Элемент не найден'
}
console.log(binarySearch(arr, 15));
console.log(count);