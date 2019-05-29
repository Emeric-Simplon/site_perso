var imgElt = document.getElementById('boy');
var idleSprite = 1;
var grassElt = document.getElementById('grass');
var bubble = document.getElementById('bubble')
var firstCase = document.getElementById('firstCase');
var secondCase = document.getElementById('secondCase');
var bubbleText = document.getElementById('bubbleText');
var grassPosition = 0;


window.addEventListener('scroll', noscroll);

function noscroll () {window.scrollTo(0,0)};

function standing () {
    if (idleSprite <= 15) {
        imgElt.setAttribute('src', `medias/images/Idle (${idleSprite}).png`);
        idleSprite++;
    }else {
        idleSprite = 1;
    }
}
function run () {
        if (idleSprite <= 15) {
            imgElt.setAttribute('src', `medias/images/Run (${idleSprite}).png`);
            grassElt.style.left = -grassPosition;
            grassPosition= grassPosition+15;
            idleSprite++;
            return grassPosition;
        }else {
            idleSprite = 1;
        }
    };
    
    var interval = window.setInterval(function () {
        standing();
    }, 40);
    
    document.onkeydown = function (e) {
             if (e.keyCode == 39) {
            window.clearInterval(interval);
            run(); 
        }else if (e.keyCode == 37) {
            window.clearInterval(interval);
            goBack ()
        }
    };
    document.onkeyup = function (e) {grassElt.style.left+'px'
        if (e.keyCode == 39) {
            bubbleClick () 
            standing();
        }else if (e.keyCode == 37) {   
            bubble.style.opacity = 0;
            bubbleText.innerHTML = '';
            goBack ()
        }
    }

function bubbleClick () {
    if (parseInt(grassElt.style.left) <= -100 && parseInt(grassElt.style.left) >= -500) {
        bubbleText.innerHTML = 'Oh une caisse tu devrais cliquer dessus pour voir';
        bubble.style.opacity = 1;
    }else if (parseInt(grassElt.style.left) <= -1400 && parseInt(grassElt.style.left) >= -1850) {
        bubbleText.innerHTML = 'Oh une autre caisse!';
        bubble.style.opacity = 1;
    }else if (parseInt(grassElt.style.left) <= -1860 && parseInt(grassElt.style.left) >= -1950){
        bubbleText.innerHTML = "Putin c'est trop stylé !";
        bubble.style.opacity = 1;
    }
    else{
        bubble.style.opacity = 0;
        bubbleText.innerHTML = '';
    }
}  
function firstImage() {
    if (bubbleText.innerHTML) {
    firstCase.style.left -= parseInt(grassElt.style.left);
    firstCase.style.opacity = 1;
    firstCase.style.zIndex = 1;
    bubbleText.innerHTML = "La ville d'Albi! Je crois qu'Emeric est né la bas..."   
    }
}
function secondImage() {
    secondCase.style.left -= parseInt(grassElt.style.left);
    console.log(secondCase.style.left);
    secondCase.style.opacity = 1;
    secondCase.style.zIndex = 1;
    bubbleText.innerHTML = "IL a d'ailleur passé la plupart de son temps dans la vallée du Tarn";  
}
function goBack () {
    bubbleText.innerHTML = "Je vais toujours de l'avant !"
}