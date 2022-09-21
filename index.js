function hasTargetSum(array, target) {
  for(i = 0; i < array.length; i++) {
    const complement = target - array[i]

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  function takes in two parameters (an array of integers, and a target integer)
    define variable for array
    define variable for target

    use two iteration trackers, i and j
    if i is on index 0, have j add all other numbers. 
      if no sum matches, have i move to index 1
      repeat until sum matches
      return true
      if no sum matches by the end
      return false


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
