
// FRONT PAGE

document.getElementById("buttonOne").addEventListener("click",linkOpenOne);   

function linkOpenOne(){
    const button=document.getElementById("buttonOne");
    button.classList.add("animate");

    setTimeout(()=>{
        window.open("flower.html","_self");
        button.classList.remove("animate");
    },400);

}

// END OF FRONT PAGE CODE

  