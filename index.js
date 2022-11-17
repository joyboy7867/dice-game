function myfunction(){
var randomnumber=Math.floor(Math.random()*6)+1;

var randonpng="dice"+randomnumber+".png";

var randomimage="images/"+randonpng;

document.querySelectorAll("img")[0].setAttribute("src",randomimage);





var randomnumber1=Math.floor(Math.random()*6)+1;

var randonpng1="images/dice"+randomnumber1+".png";



document.querySelectorAll("img")[1].setAttribute("src",randonpng1);

if(randomnumber>randomnumber1){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomnumber===randomnumber1){
    document.querySelector("h1").innerHTML="T I E"
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins";
}

document.querySelector("body").style.backgroundColor="#FFADBC"
};
document.getElementById("sbtn").onclick=function(){myfunction()}