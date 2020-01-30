function reverseString(s) {
    //s=Number(s);
    //s.split();
    
 try{
   var splits =s.split("");
   var revs =splits.reverse();
   var joins =revs.join("");
   console.log(joins);
 }
 catch(error){
     console.log(error.message);
     console.log(s);
 }
    //s.reverse();
   //var str = "How are you doing today?";
}
