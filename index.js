// ? this is the code for cursor tracking 
let main = document.querySelector(".main-container");
let cursor = document.querySelector(".cursor");
main.addEventListener("mousemove",(dets)=>{
    cursor.style.left = dets.clientX  -35 +  "px";
    cursor.style.top = dets.clientY  -36   + "px"
})  

//? event lisner for video section
// ?(mouse enter)
let video = document.querySelector(".page1-video-section video");
video.addEventListener("mousemove",(dets)=>{
    cursor.style.width = "100px";
    cursor.style.height = "100px";
    cursor.innerHTML = "Play"
    cursor.style.color  = "white";
})
// ?(mouse leave)
video.addEventListener("mouseleave",(dets)=>{
    cursor.style.width = "0px";
    cursor.style.height = "0px";
    cursor.style.color = "transparent";
    cursor.innerHTML = ""
})


