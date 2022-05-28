let block = document.getElementById("blocksection2");
let next = document.querySelector(".suivant")
let previous = document.querySelector(".retour")

let next2 = document.querySelector(".suivant")

next.onclick = function(){
    block.style.transform = "translateX(-183px)";
    previous.style.display = "flex"
}

next2.onclick = function(){
    block.style.transform = "translateX(-183px)";
    previous.style.display = "flex"
}

previous.onclick = function(){
    block.style.transform = "translateX(0px)";
    previous.style.display = "none"
    
}

let closeBtn = document.querySelector(".croix");
let section3 = document.querySelector(".section3");
closeBtn.onclick = function(){
    section3.style.display = "none";
}
