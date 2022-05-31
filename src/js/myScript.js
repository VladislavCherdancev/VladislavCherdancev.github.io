"use strict"

  function calc(){

  var  siteType , design , adaptability, sum = 0;
   
   let sum = 0;
      
  let siteType = prompt( "Тип сайта.  1.коммерческий, 2.информационный, 3.социальный");
                       
  let design = prompt( "Дизай. 1.классический, 2.минимализм, 3.рисованный");

  let adaptability = prompt( "Адаптивность. 1.только ПК, 2.только мобильные телефоны, 3.ПК и мбольные телефоны");
   
   if (siteType == "1") {sum = sum + 1000};
      
     if (siteType == "2") {sum = sum + 1500};
      
     if (siteType == "3") {sum = sum + 2000};
     
      
       if (design == "1") {sum = sum + 500};
      
     if (design == "2") {sum = sum + 700};
      
     if (design == "3") {sum = sum + 900};
      
      
       if (adaptability == "1") {sum = sum + 100};
      
     if (adaptability == "2") {sum = sum + 150};
      
     if (adaptability == "3") {sum = sum + 200};
      
      alert(sum);
  }
     
  calc();