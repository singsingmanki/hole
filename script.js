let me = 
{hp:100,
damage:'',
health:'',
defense:'',
}
  
let enemy = 
{hp:100,
damage:'',
health:'',
defense:'',
}

const Img1 = document.getElementById("loader1");
const Img2 = document.getElementById("loader2");

function hide() {
    Img1.style.display = "none";
    Img2.style.display = "none";
  }
  
  hide();

let round = 1

let win = 0
let lose = 0

const element1 = document.getElementById("mybutton1");

element1.addEventListener("click", myFunction1);


function myFunction1() {
    round = 1
      document.getElementById("1").innerText = ""
        document.getElementById("2").innerText = ""
    me.hp = 100
    enemy.hp = 100
}

const element = document.getElementById("mybutton");

element.addEventListener("click", myFunction);


function myFunction() {



if(me.hp>0 && enemy.hp >0){

    me.damage = 10 + Math.floor(Math.random()*30)
    enemy.damage = 10 + Math.floor(Math.random()*25)
    me.defense = Math.floor(Math.random()*20)
    enemy.defense = Math.floor(Math.random()*20)

    document.getElementById("heading").innerText = ""


    let para0 = document.createElement("div");
    
    para0.classList.add("my");

    para0.innerText = "Round " + round

    if(round%2 !== 0){

    document.getElementById("2").innerText = ""

    Img1.style.display = "block";
    setTimeout(hide, 800);
    

    let para2 = document.createElement("div");

    para2.classList.add("my");

    enemy.hp = enemy.hp - me.damage  + enemy.defense


    para2.innerText = "Enemy hp: " + enemy.hp + "/100"
    + "\n" + "Your damage: " + me.damage
    + "\n" + "Enemy defense: " + enemy.defense
    

    if(enemy.hp<=0){
        para2.innerText =  "Enemy lose"
        win++

    }


    document.getElementById("2").appendChild(para2)

    } else{
        document.getElementById("1").innerText = ""

        Img2.style.display = "block";
        setTimeout(hide, 800);
    

        let para1 = document.createElement("div");
    
        para1.classList.add("my");
    
        me.hp = me.hp - enemy.damage + me.defense
    
        para1.innerText = "Your hp: " + me.hp + "/100"
        + "\n" + "Enemy damage: " + enemy.damage
        + "\n" + "Your defense: " + me.defense
        + "\n" + "Win: " + win
        + "\n" + "Lose: " + lose

        if(me.hp<=0){
            para1.innerText =  "You lose"
            lose++
        }
    
    
        document.getElementById("1").appendChild(para1)

    }
    document.getElementById("heading").appendChild(para0)
round++
}}

