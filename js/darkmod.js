




const mode_btn = document.getElementById("mode_btn");
const darkmode = document.getElementsByClassName("darkmode")


mode_btn.addEventListener("click", (e)=>{
    // document.body.classList.add("bg-[gray]","text-[teal]")
    Array.from(darkmode).forEach(elem => {
        // elem.classList.add("text-[black]","bg-[white]");
    });
    console.log(Array.from(darkmode))
})