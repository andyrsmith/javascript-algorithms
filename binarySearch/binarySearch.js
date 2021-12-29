// Binary Search
// compares the middle with the value it is trying to find
// If match is not found then sees if the middle number is less or greater than value
// searchs the next half of the numbers and repeats until value is found
//

function binarySearch(arr, value) {
    //first position of arr
    let left = 0
    //last position of arr
    let right = arr.length - 1
    // Middle number in arr
    // if odd will round down
    let middle = Math.floor((left+right) /2) 
    //continue searching while middle does not match value
    //and we are still in bounds of the array
    while(arr[middle] !== value && left <= right) {
    }
}
