var rgb  = document.getElementById('rgb');
var newgame = document.getElementById('newgame');
var tryagain = document.getElementById('tryagain');
var easy = document.getElementById('easy');
var hard = document.getElementById('hard');
var colors = document.getElementsByClassName('color');
var topbar = document.getElementById("top");
var colorlist=[];
var colorlength = 6;
var ans = 0;
var playing = true;
var s = 'rgb(200,200,200)';


reset();
newgame.addEventListener('click',reset);
easy.addEventListener("click",function()
{console.log('yo');colorlength=3; for(var i=3; i<6;i++){colors[i].style.background = 'black';} select(1); reset();});
hard.addEventListener("click",function(){ colorlength=6; select(2);reset();});

function select(p){
  if(p==1){
    hard.classList.remove("selected");
    easy.classList.add('selected');
  }
  else{
    easy.classList.remove('selected');
    hard.classList.add('selected');
  }
}

function reset(){
  topbar.style.background ="#4682B4";
  tryagain.textContent = " ";
  playing = true;
  randomfill();
  ans = Math.floor(Math.random()*(colorlength));
  s = getrgb();
  colors[ans].style.background=s;
  rgb.textContent = s;
  startgame();
}

function startgame(){
  for(var i = 0 ; i<colors.length ; i++)
  {
    colors[i].addEventListener("click",function surya(){
      if(playing){
        if(this.style.background.toString().toUpperCase() != s.toUpperCase())
         {
           this.style.background = 'black';
           tryagain.textContent = "Try Again!";
         }
        else
        { playing = false;
          tryagain.textContent = "Correct!";
          winanimation();
        }
    } });
  }
}

function winanimation(){
  topbar.style.background=s;
  for(var i=0 ; i<colorlength ; i++)
  {
    colors[i].style.background = s;
  }
}

function randomfill(){
  var c;
  for(var i = 0 ; i<colorlength ; i++){
    c = getrgb();
    colors[i].style.background = c;
  }
}

function getrgb(){
  var r,g,b;
  r = Math.floor(Math.random()*(255));
  g = Math.floor(Math.random()*(255));
  b = Math.floor(Math.random()*(255));
  return 'RGB('+r+', '+g+', '+b+')';
}
