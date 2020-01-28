function getSecondLargest(nums) {
    // Complete the function
    let largestNumber =Math.max(...nums);
    let secondLargest,i;
    for(i=0;i<nums.length;i++){
        if(nums[i] !== largestNumber){
            if(secondLargest == undefined || nums[i]>secondLargest){
                secondLargest=nums[i];
            }
            else if((i =nums.length - 1)){
                if(secondLargest == undefined || nums[i] >secondLargest){
                    secondLargest=nums[i];
                }
            }
        }
    }
    return secondLargest;
}
