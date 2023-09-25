let main = document.querySelector(".main-container");
let cursor = document.querySelector(".cursor");
main.addEventListener("mousemove",(dets)=>{
    cursor.style.left = dets.clientX - 36+ "px";
    cursor.style.top = dets.clientY - 35 + "px"
})  

//? event listner for card section
// let image = document.querySelectorAll(".page2-image-container-image img");
// image.forEach((elem)=>{
//     elem.addEventListener("mousemove",(dets)=>{
//         cursor.style.width = "100px";
//         cursor.style.height = "100px";
//         cursor.style.color = "black";
//         cursor.innerHTML = "Play"
        
//     })
// })
// image.forEach((elem)=>{
//     elem.addEventListener("mouseleave",(dets)=>{
//         cursor.style.width = "0px";
//         cursor.style.height = "0px";
//         cursor.style.color = "transparent";
//         cursor.innerHTML = ""
//     })
// })
let video = document.querySelector(".page1-video-section video");
video.addEventListener("mousemove",(dets)=>{
    cursor.style.width = "100px";
    cursor.style.height = "100px";
    cursor.innerHTML = "Play"
    cursor.style.color  = "white";
})
video.addEventListener("mouseleave",(dets)=>{
    cursor.style.width = "0px";
    cursor.style.height = "0px";
    cursor.style.color = "transparent";
    cursor.innerHTML = ""
})
