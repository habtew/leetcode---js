var twoSum = function(nums, target) {
    for(let i = 0; i< nums.length; i++){
        for(let j=0; j< i; j++){
            if(nums[i]+nums[j] === target){
                return [j, i]
            }
        }
    }
    return "Not Found"
};

twoSum([3,2,3], 6)