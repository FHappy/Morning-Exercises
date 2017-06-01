// Given an array of non-negative integers
// Let's define a mirror section as a group of adjacent elements in the array such that
// the same group appears reversed somewhere else in the array
// e.g. the array [1,2,4,5,6,2,1] has a mirror section [1,2] because it's reversed at the end
// What about the array [1,2,3,3,4,5,3,2,1,5,4]?
// This technically has several mirror groups, but the largest of them would be [1,2,3]

// NOTE: [1,2,1,4] will return 3 because [1,2,1] is technically a mirror section! 
// They don't have to be separated
// ANYWAYS
// Return the size of the largest mirror section found in the Array.

function maxMirrorLength(arr) {
  // ENTER ANSWER BELOW
}

module.exports = maxMirrorLength;