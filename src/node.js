// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0]
  } else if (strokes <= par - 2) {
    return names[1]
  } else if (strokes == par - 1) {
    return names[2]
  } else if (strokes == par) {
    return names[3]
  } else if (strokes == par + 1) {
    return names[4]
  } else if (strokes == par + 2) {
    return names[5]
  } else if (strokes >= par + 3) {
    return names[6]
  }

  return "Change Me";
  // Only change code above this line
}

// console.log(golfScore(5, 4)) // Hole in one 
// console.log(golfScore(4, 2)) // eagle
// console.log(golfScore(5, 2)) // eagle
// console.log(golfScore(4, 3)) // birdie
// console.log(golfScore(4, 4)) // par
// console.log(golfScore(5, 5)) // par
// console.log(golfScore(4, 5)) // bogey
// console.log(golfScore(4, 6)) // double bogey
// console.log(golfScore(4, 7)) // go home!
// console.log(golfScore(5, 9)) // go home!

// function something(a,b) {
//     let answer = " "
//     switch (a) {
//         case today:
//     }
// }


//TODO - Write a function that transform an array into mirror array 
//NOTE - mirrorArray([1,2,3,4]) -> [1,2,3,4,3,2,1]


function mirrorArray(arr) { //NOTE - Createing a function called 'mirrorArray' and inserting one paramter called 'arr'
  for (let i = arr.length - 2; i >= 0; i--) { //NOTE - 'i' is equal to the length of the 'arr' parameter - 2, so the loop skips over number 4 and only records all but one index in the array / the '- 2' means go to the second to last inddex/value in the array 
    arr.push(arr[i]) //NOTE - You are pushing the new array alue that you recorded in 'i' (above) and pushing it to the original array that was in the 'arr' parameter
  }
  return arr // returing the new 'arr' parameter
}
console.log(mirrorArray([1,2,3,4]))