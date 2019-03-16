var td = document.getElementsByTagName('td');
var img = document.querySelectorAll('.img');
var newgame = document.getElementsByClassName('nav')[0];
var playerobject = document.getElementsByClassName('turn');
var message = document.getElementsByClassName("message")[0];
var selected = localStorage.getItem("storageName");
var players = document.getElementsByClassName("player1avatar");
var player2avatar = document.querySelector("#wineffect img");

if(selected == 0){
  player2avatar.setAttribute("src","images/bot.png");
}


var check = 'rgb(18, 23, 28)';
var player1="url(images/zero2.png)";
var player2="url(images/cross2.png)";
var player = true;
var gameover = false;

reset();
newgame.addEventListener("click",reset);

function reset(){
  players[0].classList.add('player1hover');
  players[1].classList.remove('player2hover');

  for(var i =0 ; i<9; i++)
  {img[i].style.background = check; td[i].children[0].style.transitionDelay = "0s";}
  gameover = false;
  player = true;
  message.textContent = " ";
  playerobject[0].classList.add("turned");
  playerobject[1].classList.remove("turned");
  game();
  console.log("Game Started");
}

function game(){
  for(var i =0 ; i<9 ; i++)
  td[i].addEventListener("click",
  function(){
    if(this.children[0].style.background ==check){
      if(player){
        this.children[0].style.background = player1;
        this.children[0].style.backgroundSize = "Cover";
        checkwin();
        if(!gameover){
        playerobject[1].classList.add("turned");
        playerobject[0].classList.remove("turned");
        players[1].classList.add('player2hover');
        players[0].classList.remove('player1hover');}


        if(selected == 0 && !gameover){
          player=!player;
          var rand = Math.floor((Math.random()*9));
          var tryy = 5;
          while(ch(rand) != check && tryy!=0)
          {rand = Math.floor((Math.random()*9)); tryy-=1;}
          if(tryy==0)
          { rand = 0;
            while(ch(rand)!=check)
              rand++;
          }
          td[rand].children[0].style.background = player2;
          td[rand].children[0].style.backgroundSize = "Cover";
          checkwin();
          if(!gameover){
          playerobject[0].classList.add("turned");
          playerobject[1].classList.remove("turned");
          players[1].classList.remove('player2hover');
          players[0].classList.add('player1hover');}
        }
      }
      else{
        this.children[0].style.background = player2;
        this.children[0].style.backgroundSize = "Cover";
        checkwin();
        if(!gameover){
        playerobject[0].classList.add("turned");
        playerobject[1].classList.remove("turned");
        players[1].classList.remove('player2hover');
        players[0].classList.add('player1hover');}

      }

      player=!player;
      console.log(''+selected + player);
   }
  }
  );

}

function ch(i){
  return td[i].children[0].style.background;
}

function checkwin(){

  if(ch(0)==ch(1) && ch(1)==ch(2) && ch(0)!=check)
  winanimation();
  else if(ch(3)==ch(4) && ch(4)==ch(5) && ch(4)!=check)
  winanimation();
  else if(ch(6)==ch(7) && ch(7)==ch(8) && ch(7)!=check)
  winanimation();
  else if(ch(0)==ch(3) && ch(3)==ch(6) && ch(0)!=check)
  winanimation();
  else if(ch(1)==ch(4) && ch(4)==ch(7) && ch(1)!=check)
  winanimation();
  else if(ch(2)==ch(5) && ch(5)==ch(8) && ch(2)!=check)
  winanimation();
  else if(ch(0)==ch(4) && ch(4)==ch(8) && ch(4)!=check)
  winanimation();
  else if(ch(2)==ch(4) && ch(4)==ch(6) && ch(4)!=check)
  winanimation();
  else {
    var count=0;
    for(var i =0 ; i<9 ; i++)
    if(ch(i)==check) count+=1
    if(count==0) drawanimation();
  }
}

function winanimation(){
  gameover = true;
  if(player){
    for(var i =0;i<9;i++){
      // td[i].children[0].style.transition = "opacity 5s eade-in-out";
      td[i].children[0].style.transitionDelay = "2s";
      td[i].children[0].style.background = player1;
      td[i].children[0].style.backgroundSize = "Cover";
    }
  }
  else{
    for(var i =0;i<9;i++){
      td[i].children[0].style.transitionDelay = "2s";
      td[i].children[0].style.background = player2;
      td[i].children[0].style.backgroundSize = "Cover";
    }

  }
  message.textContent = "WINNER!!";
}

function drawanimation(){
  gameover = true;
  message.textContent = "DRAW";
}
