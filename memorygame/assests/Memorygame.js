var boxes  = document.querySelectorAll(".maincontainer div");
var mode = document.getElementsByClassName("difficulty");
var newgame = document.getElementById("newgame");
var number  = 4;
var lastselect = -1;
var lastimage = -1;

var a = []
load();
reset();
function load(){
  a = [];
  var s='url(assests/Images/';
  for(i=1;i<=(number*number)/2;i++)
  { a.push(s+i+".png)");
    a.push(s+i+".png)"); }

    for (var i = a.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = a[i];
          a[i] = a[j];
          a[j] = temp;
      }
}

mode[0].addEventListener("click",function(){
  number = 4;
  mode[0].classList.add("Selectedmode");
  mode[1].classList.remove("Selectedmode");
  reset();
});

mode[1].addEventListener("click",function(){
  number = 6;
  mode[1].classList.add("Selectedmode");
  mode[0].classList.remove("Selectedmode");
  reset();
});

newgame.addEventListener("click",reset);

function reset(){
  load();
  var clas="";
  var last="";
  var delayy = 0;
  if(number==4){clas= "box4"; last ="last4"; delayy = 500;}
  else {clas="box6"; last = "last6"; delayy = 1000;}

  for(i=0;i<36;i++){
    boxes[i].removeAttribute("class");
    boxes[i].style.background = "";
  }

  for(i=0;i<number*number ; i++){
    boxes[i].classList.add(clas);
    boxes[i].classList.add(''+i);
    if((i+1)%number==0) boxes[i].classList.add(last);
    }

  startanimation();

  setTimeout(function(){
    for(i=0;i<36;i++){
      boxes[i].style.background = "";
    }
    startgame();

  },delayy);

}

function startgame(){
  for(i=0;i<number*number;i++){
    boxes[i].addEventListener("click",function(){
      if(this.style.background == ""){
      if(lastselect == -1){
        lastselect = Number(this.classList[1]);
        this.style.background = a[lastselect];
        this.style.backgroundSize = "cover";
      }
      else{
        var select = Number(this.classList[1]);
        this.style.background = a[select];
        this.style.backgroundSize = "cover";
        console.log(a[lastselect]+" "+a[select]);

        if(a[lastselect]!=a[select]){
          setTimeout(function(){
            console.log("inside");
            boxes[select].style.background = "";
            boxes[lastselect].style.background = "";
            lastselect = -1;
          },500);
        }
        else{
          lastselect= -1;
        }
      }
    }

    });
  }
}

function startanimation(){
  for(i=0; i<number*number; i=i+number)
  {
    for(j=i; j<i+number;j++){
      boxes[j].style.background = a[j];
      boxes[j].style.backgroundSize = "cover";
    }
  }
}
