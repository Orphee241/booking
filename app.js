let block = document.getElementById("blocksection2");
let next = document.querySelector(".suivant")
let previous = document.querySelector(".retour")

next.onclick = function(){
    block.style.transform = "translateX(-183px)";
    previous.style.display = "flex"
}
previous.onclick = function(){
    block.style.transform = "translateX(0px)";
    previous.style.display = "none"
    
}

