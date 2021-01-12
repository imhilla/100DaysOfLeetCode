// brute force
// Time complexity O(n2)
var twoSum = function(nums, target) {
  var i 
  var j
  var arr = []
  for(i = 0; i < nums.length; i++){
      for(j = i+1; j < nums.length; j++){
          if(nums[j] == target - nums[i]){
              arr= [i, j]
          }
      }
  }
   return arr
   
};

// Two pass hash table
// first itearation, add each elements value and index to the table
// check if each elements compliment(target - num[i]) exists in the table
// complement must not be num[i] itself

