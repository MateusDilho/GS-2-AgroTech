
let counter=1;
let interval=5000;

let intervalo=setInterval(function(){
document.getElementById('radio'+counter).checked = true;
counter++;

if(counter>4){
  counter=1;
}
},interval);


let changeImg = function(value){
  counter=value;
  
  if(counter<4){
    counter++;
  }
}

