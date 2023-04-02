var removeElement = function(nums, val) {
    let k = nums.length
    for(let i =0; i<nums.length; i++){
        if(nums[i] === val){
            k--
            nums[i] ='_'
        }
    }
    nums.sort()
    return k
  
  };