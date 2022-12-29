// declaratrion
let counter=document.getElementById("counter");
let plus=document.querySelector(".incr");
let minus=document.querySelector(".decr");
// initialization
let count=0;
// increasment
plus.addEventListener("click",function(){
    count++;
    counter.innerHTML=count;
    if(count > 9){
        count = -1
      }
      
})
// decreasment
minus.addEventListener("click",function(){
    count--;
    counter.innerHTML=count;
})
