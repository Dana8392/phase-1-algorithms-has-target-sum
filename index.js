function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}


/* 
  Write the Big O time complexity of your function here
  The time complexity of this function is O(n^2) because it uses two nested loops 
  over the input array, meaning for each element in the array, it checks every other element.

*/

/* 
  Add your pseudocode here
  For each element in the array:
  For each other element in the array:
  Check if their sum equals the target.
  If true, return true.
  Return false after checking all pairs.

*/

/*
  Add written explanation of your solution here
  This function checks for each element in the array with every other element 
  to see if their sum matches the target. If any pair sums up to the target, 
  it immediately returns true. If after checking all possible pairs, no match is found, 
  it returns false.
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
