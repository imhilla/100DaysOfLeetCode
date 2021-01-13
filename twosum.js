// brute force
// Time complexity O(n2)
var twoSum = function (nums, target) {
  var i
  var j
  var arr = []
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[j] == target - nums[i]) {
        arr = [i, j]
      }
    }
  }
  return arr

};

// Two pass hash table
// first itearation, add each elements value and index to the table
// check if each elements compliment(target - num[i]) exists in the table
// complement must not be num[i] itself

// check here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

var twoSum = function (nums, target) {
  var hash = {};
  arr = [];
  for (var i = 0; i < nums.length; i++) {
    hash[i] = nums[i]
  }

  for (var i = 0; i < nums.length; i++) {
    remainder = target - nums[i]
    if (Object.keys(hash).find(key => hash[key] === remainder)) {
      if (Object.keys(hash).find(key => key !== i)) {
        arr.push(i)
        console.log(i)
      }
    }
  }
  return arr
};