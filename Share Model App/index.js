const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");

const  openModel = () =>{
    console.log("Modal is Open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}

const closeModel = () =>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}