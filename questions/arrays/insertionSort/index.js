/** Insertion Sort **
 * 
 * Sort the 'nums' array using insertion sort.
 *  
 * @example
 * insertionSort([3, 2, 1]) -> [1, 2, 3]
 * insertionSort([0, 12, 8]) -> [0, 8, 12]
 * insertionSort([3, 4, 0, 2]) -> [0, 2, 3, 4]
 * 
 */

 const insertionSort = (nums) => {
    for (let i = 0; i < nums; i++) {
        let current = nums[i]
        let j = i - 1
        while (j >= 0 && j > current) {
            j = current
            current = j
        }
    }
    return nums
}
let b = insertionSort([3, 2, 1])
console.log(b)

module.exports = insertionSort;

// [9,7,5,2,8,4]