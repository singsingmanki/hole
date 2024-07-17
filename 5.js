let kind;
let evil;
let bonus;
let score = 0;
let gameover = false;

window.onload = function(){
    setGame();
}


function setGame(){
    for(let i = 0;i<9;i++){
        let title = document.createElement("div");
        title.id = i.toString();
        title.addEventListener("click",select)
        document.getElementById("board").appendChild(title);
    }
    setInterval(setKind,750)
    setInterval(setBonus,1500)
    setInterval(setEvil,3000)

    
}

function random(){
    let num = Math.floor(Math.random()*9)
    return num.toString()
}

function setKind(){
    if(gameover){
     return;
    }
    if(kind){
        kind.innerHTML = "";
    }
    let hole = document.createElement("img")
    hole.src = "https://static.wikia.nocookie.net/worldpedias/images/c/c4/250px-XY_%E5%B0%8F%E6%99%BA.png/revision/latest?cb=20160808093811&path-prefix=zh"

    let num = random();
    if(bonus && bonus.id  == num){ 
        return;
    }
    if(evil && evil.id == num){ 
        return;
    }

    kind = document.getElementById(num);
    kind.appendChild(hole)

}

function setBonus(){
    if(gameover){
        return;
       }
    if(bonus){
        bonus.innerHTML= "";
    }
    let earth = document.createElement("img");
    earth.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//151.png"

    let num = random();
    if(kind && kind.id  == num){ 
        return;
    }
    if(evil && evil.id == num){ 
        return;
    }
    bonus = document.getElementById(num);
    bonus.appendChild(earth);
}

function setEvil(){
    if(gameover){
        return;
       }
    if(evil){
        evil.innerHTML= "";
    }
    let plant = document.createElement("img");
    plant.src = "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Pok%C3%A9mon_Lucario_art.png/190px-Pok%C3%A9mon_Lucario_art.png"

    let num = random();
    if(kind && kind.id  == num){ 
        return;
    }
    if(bonus && bonus.id == num){ 
        return;
    }
    evil = document.getElementById(num);
    evil.appendChild(plant);
}


function select(){
    if(gameover){
        return;
       }
    if(this == kind){
        score +=100;
        document.getElementById("score").innerText = score.toString()
    } else if(this == bonus){
        score -=300;
        document.getElementById("score").innerText = score.toString()
    } else if(this == evil) {
        document.getElementById("score").innerText = "Game Over: " + score.toString();
        gameover = true;

    }
}