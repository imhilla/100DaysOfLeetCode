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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// The find() method returns the value of the first element in the 
// provided array that satisfies the provided testing function.If no values 
// satisfies the testing function, undefined is returned.

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12


var twoSum = function (nums, target) {
  var hash = {};
  arr = [];
  for (var i = 0; i < nums.length; i++) {
    hash[i] = nums[i]
  }

  for (var i = 0; i < nums.length; i++) {
    remainder = target - nums[i]
    if (Object.keys(hash).find(key => hash[key] === remainder && i !== parseInt(key))) {
      arr.push(i)
    }
  }
  return arr
};

// one pass solution
var twoSum = function (nums, target) {
  hash = {}
  for (var i = 0; i < nums.length; i++) {
    var remainder = target - nums[i]
    if (Object.keys(hash).find(key => hash[key] === remainder)) {
      return [Object.keys(hash).find(key => hash[key] === remainder), i]
    }
    hash[i] = nums[i]
  }
};