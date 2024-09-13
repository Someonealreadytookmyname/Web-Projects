function myfunction(){
    let text1 = document.getElementById("text1");
    setTimeout(()=>{
      text1.classList.add("show")
    },1500)
}
myfunction()
    
console.log("hello world")