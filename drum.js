
$("button").click(function () { 
    var btn =this.innerText;
    makeSound(btn);
    animation(btn);
  });
  $(document).keypress(function (event) { 
    makeSound(event.key);
    animation(event.key);  
  });
  
  
  function makeSound(key) {
    switch (key) {
      case "a":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
  
      case "s":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
  
      case "d":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
  
      case "j":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
  
      case "k":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
  
      case "l":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
  
      
        default: console.log(key);
    }
  }  
function animation(currentKey){
    var activeButton=$("."+currentKey)
    activeButton.addClass("pressed")
    setTimeout(function(){
        activeButton.removeClass("pressed");
    },100)
}