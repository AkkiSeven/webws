var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

hole.addEventListener('animationiteration', () => {
    console.log("animation iteration");
    var random = Math.random() * 3; 
    var top = (random*100)+150;


        hole.style.top = -(top) + "px";
});
setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px" 
    }
},10) 

function jump(){
    console.log("jump function ");
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(counter<15)){
            character.style.top = (characterTop-5)+"px"
            var bottom =(parseInt(character.style.top.split("px")[0]));
            console.log(character.style.top);
        }
        if(jumpCount>20){
            clearInterval(jumpInterval)
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10)
}