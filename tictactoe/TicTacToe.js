var image = document.getElementsByClassName('image');
var button = document.getElementById('button');
var selected = -1;

image[0].addEventListener("click",function(){
  image[1].classList.remove("selected");
  image[0].classList.toggle("selected");
  selected = 0;
});

image[1].addEventListener("click",function(){
  image[0].classList.remove("selected");
  image[1].classList.toggle("selected");
  selected = 1;
});

button.addEventListener("click",function(){

  if(selected>-1)
  {localStorage.setItem("storageName",selected);
  window.open("body.html","_self");}
  else
  alert("Please Select opponent");

})
