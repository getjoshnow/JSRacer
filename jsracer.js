var car1 = {};
var car2 = {};

 car1.pos = 0;
 car2.pos = 0;
 car1.lastKey = 'p';
 car2.lastKey = 'w';

var  moveCar = function(e){

//while ((car1Pos <= 500) && (car2Pos <= 500)){

switch(e.key){

  case 'p' :
  case 'o' :
  if (e.key !== car1.lastKey){
  car1.pos += 10;
  document.getElementById('car1').style.marginLeft =car1.pos + 'px';
  car1.lastKey = e.key;
  }
  break;

  case 'q' :
  case 'w' :
  if(e.key !== car2.lastKey)
   {
  car2.pos += 10;
  document.getElementById('car2').style.marginLeft =car2.pos + 'px';
  car2.lastKey = e.key;

  }
  break;

} //switch
console.log(window.innerWidth);
if (car1.pos >= window.innerWidth - 200){
  console.log("you are winner CAR1");
  document.removeEventListener("keydown", moveCar)
  document.getElementById('winner').textContent =  "CAR 1 Winner  Daytona Sega";

}
else if (car2.pos >= window.innerWidth - 200){
  console.log("you are winner CAR2");
  document.removeEventListener("keydown", moveCar)   ///this remove evnentlk dkjdklv
  document.getElementById('winner').textContent =  "CAR 2 Winner  Daytona Sega";

}
//}// while loop

} // moveCar function
document.addEventListener("keydown", moveCar);
