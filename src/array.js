//TODO - Make a function that sorts an array and deletes any duplication

//NOTE - duplicatedArray([1,2,3,3,4,5]) -> [1,2,3,4,5]


function duplicateArray(arr) { //NOTE - creating a new function that take in one paramter - 'arr'
    const newArray = [] //NOTE - creating a new constant and assiging an array

    let currentArray = arr[0] // NOTE -  initialising a new variable with let, assigning 'arr[0]' - arr starting at index 0

    newArray.push(currentArray) //NOTE - pushing new array to current array 

    for (let i = 0; i < arr.length; i++) { 
        if(arr[i] !== currentArray) {
            newArray.push(currentArray)
        }
    }
    return newArray
}
console.log(duplicateArray([1,2,3,3,4,5]))



//TODO - Develop a function that counts the number of zeros in a 2D array 

//NOTE - twoArray([[0,0],[0,1]]) -> 3 

//NOTE - Use nested for loops to iterate over 2D arrays 

function iterateArray(arr) {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] === 0) {
                count++
            }
        }
    }
    return count 
}
console.log(iterateArray([[0,0],[0,1]]))
