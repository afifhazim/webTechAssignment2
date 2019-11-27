var player = [{name:"p1", pos: 0}, {name:"p2", pos: 0}];

function rollDice1(){
  var status = document.getElementById("status");//create variable 
  var p1position = document.getElementById("p1position");//create variable
  var dp1 = Math.floor(Math.random()*6)+1;//generate random number 1-6
  
  var move = player[0].pos + dp1;
  player[0].pos = move;
  var msg = " ";

  if(player[0].pos == 15){
    player[0].pos = 5;
    msg = " You land on a snake. Fall to position 5.";
  }

  if(player[0].pos == 23){
    player[0].pos = 16;
    msg = " You land on a snake. Fall to position 16.";
  }

  if(player[0].pos == 8){
    player[0].pos = 15;
    msg = " You land on a ladder. Advance to position 15.";
  }

  if(player[0].pos == 19){
    player[0].pos = 24;
    msg = " You land on a ladder. Advance to position 24.";
  }

  if(player[0].pos > 25){
    msg = " You win!";
    player[0].pos = 25;
  }

    status.innerHTML = player[0].name + " rolled " + dp1 + "." + msg; //print input when button clicked
    p1position.innerHTML = player[0].name + " now is at square " + player[0].pos;
    nextmove.innerHTML = " ";
    
function rollDice2(){
  var status = document.getElementById("status");
  var p2position = document.getElementById("p2position");
  var dp2 = Math.floor(Math.random()*6)+1;
  
  var move = player[1].pos + dp2;
  player[1].pos = move;
  var msg = " ";

  if(player[1].pos == 15){
    player[1].pos = 5;
    msg = " You land on a snake. Fall to position 5.";
  }

  if(player[1].pos == 23){
    player[1].pos = 16;
    msg = " You land on a snake. Fall to position 16.";
  }

  if(player[1].pos == 8){
    player[1].pos = 15;
    msg = " You land on a ladder. Advance to position 15.";
  }

  if(player[1].pos == 19){
    player[1].pos = 24;
    msg = " You land on a ladder. Advance to position 24.";
  }

  if(player[1].pos > 25){
    msg = " You win!";
    player[1].pos = 25;
  }

    status.innerHTML = player[1].name + " rolled " + dp2 + "." + msg; //print input when button clicked
    p2position.innerHTML = player[1].name + " now is at square " + player[1].pos;
    nextmove.innerHTML = " ";
