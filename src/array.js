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

function iterateArray(arr) { //NOTE - Creating a function that takes in one parameter: 'arr'
    let count = 0 //NOTE - Initialising a variable called 'count' and assiging it the value of 0 

    for (let i = 0; i < arr.length; i++) { //NOTE - Using a for loop to iterate over the array 
        for (let j = 0; j < arr[i].length; j++) { //NOTE - Using nested for loops because the arra is 2D, and have to iterate over the sub arrays
            if(arr[i][j] === 0) { // NOTE - Condition: iterating over both for loops and find any values equal to 0 in the 2D array 
                count++ // NOTE - Return 'count' with the value of the number of values found in the above condition
            }
        }
    }
    return count // NOTE - Return count with the new value  
}
console.log(iterateArray([[0,0],[0,1]]))



//TODO - Write a function that returns the largest even number in an array.
//NOTE - evenLargestNumber([1,10,17]) -> 10
//NOTE - evenLargestNumber([1,3,5,7,0]) -> "No even number"

function findEvenNumber(arr) {
    let benchmark = -1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            if (arr[i] > benchmark) {
                benchmark = arr[i]
            }
        }
    }
    return benchmark
}
console.log(findEvenNumber([1,10,17])) //NOTE - > 10
console.log(findEvenNumber([1,3,5,7,0])) // NOTE - > "No even number"