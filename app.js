let block = document.getElementById("blocksection2");
let block2 = document.getElementById("blocksection6");
let next = document.querySelector(".suivant")
let next2 = document.querySelector(".suivant2")

let previous = document.querySelector(".retour")
let previous2 = document.querySelector(".retour2")



next.onclick = function(){
    block.style.transform = "translateX(-183px)";
    previous.style.display = "flex"
}

next2.onclick = function(){
    block2.style.transform = "translateX(-272px)";
    previous2.style.display = "flex"
}

previous.onclick = function(){
    block.style.transform = "translateX(0px)";
    previous.style.display = "none"
    
}
previous2.onclick = function(){
    block2.style.transform = "translateX(0px)";
    previous2.style.display = "none"
    
}



let closeBtn = document.querySelector(".croix");
let section3 = document.querySelector(".section3");
closeBtn.onclick = function(){
    section3.style.display = "none";
}

let closeBtn2 = document.querySelector(".croix2");
let offres = document.querySelector(".offres");
closeBtn2.onclick = function(){
    offres.style.display = "none";
}
