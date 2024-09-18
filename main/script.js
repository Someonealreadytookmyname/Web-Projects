function myfunction(){
    let text1 = document.getElementById("text1");
    setTimeout(()=>{
      text1.classList.add("show")
    // text1.id = "show"
    },2000)
}
myfunction()

function headerAnimation(){
    let head = document.getElementById("header");
    setTimeout(()=>{
    //   head.classList.add("headerShow")
    head.id = "headerShow"
    },500)
}
headerAnimation()

function asideAnimation()
{
    let aside = document.getElementById("aside");
    setTimeout(() => {
        // text2.id = "text2Animation"
        aside.style.opacity = 1;
        aside.style.transition = "1.5s ease-in"
    }, 3500);
}
asideAnimation()

function text2Animation()
{
    let text2 = document.getElementById("text2");
    setTimeout(() => {
        // text2.id = "text2Animation"
        text2.style.opacity = 1;
        text2.style.transition = "1.5s ease-in"
    }, 5000);
}
text2Animation()

function cursor()
{
    let cursor = document.querySelector("#cursor");
    let area = document.querySelector("body");
    // let test = document.querySelector("#hero");

    area.addEventListener("mousemove", function(CursorPosition)
    {
        gsap.to(cursor, {
            x: CursorPosition.x,
            y: CursorPosition.y
        })
    })
    area.addEventListener("mouseenter", function(CursorPosition)
    {
        gsap.to(cursor, {
            scale: 1
        })
    })
    area.addEventListener("mouseleave", function(CursorPosition)
    {
        gsap.to(cursor, {
            scale: 0
        })
        // gsap.to(test, {
        //     scale: 10
        // })
    })
}
cursor();