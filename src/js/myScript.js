"use strict"

 function myFunction() {
  var x,y,z,oper;
  x=prompt("Какой сайт Вас интересует");
  y=prompt("В какие сроки нужно уложиться");
  oper=prompt("Адаптивность для ПК или еще для мобильных устройств");
  
  if(oper=="+"){
    z=Number(x)+Number(y);
  }
  else if(oper=!null){
    z="Error"
  }
  else if(x=!null){
    z="Error"
  }
  else if(y=!null){
    z="Error"
  }
  else if(oper=="/"){
    z=Number(x)/Number(y);
  }
  else if(oper=="*"){
    z=Number(x)*Number(y);
  }
  else if(oper=="-"){
    z=Number(x)-Number(y);
  }
  
  return z;
    }
document.getElementById("myScript").innerHTML =myFunction();
