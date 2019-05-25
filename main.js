var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');
var base_image = new Image();
base_image.src = './medias/images/honda.png';
var xArray = [-15, -241,-424,-630];
var total = 0;
var xposition = -15;
var i = 0;

base_image.onload = function (){
    context.drawImage(base_image, xArray, -55);
}
window.setInterval(function(){
    make_base()
  }, 60);

canvas.addEventListener('click',function(){
    make_base()});

function make_base()
{   
    if (i < xArray.length) {
        var base_image = new Image();
        base_image.src = './medias/images/honda.png';
        context.drawImage(base_image, xArray[i], -55);
        console.log(xArray[i]);
        i++
    }else {
        i = 0;
    }
    

}

