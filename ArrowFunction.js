function modifyArray(nums) {
    const fun =nums.map(function(num){
   if(num %2==0){
       return num*2;
   }
   else{
       return num*3;
   }
    });
    return fun;
}
