
"use strict"
 


$(document). ready(function(){
    
 $(window).scroll(() => {
   let scrollDistance = $(window).scrollTop();
   $(".scroll").each((i, el) => {
    if($(el).offset(). top - $("nav").outerHeight() <= scrollDistance){
        $("nav a").each((i, el) => {
          if ($(el).hasClass("active")){
              $(el).removeClass("active");
          }  
        });
        $('nav li:eq('+ i +')').find('a').addClass('active');
    }   
   });
 });    
    
    
  
 let options = {threshold: [1]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.statistics-1');
    elements.each((i, el) => {
    observer.observe(el);    
    });
      


});

function onEntry (entry){
    entry.forEach(change => {
    if (change.isIntersecting){
        change.target.classList.add('statistics-0');
    }    
    });
}


$(document).ready(function(){
 var selected = localStorage.getItem('select');
 if (selected) {
 $('#myselect').val(selected);
 }

 $('#myselect').change(function(){
 localStorage.setItem('select', $(this).val());
 });
});





$('a[href^="#"]').click (function(){
    let valHref = $(this). attr ("href");
    $('html,body'). animate({scrollTop: $(valHref). offset().top - 60 + "px"});
});
    
  
 /*CanvasEffect*/
var w = canvaseffect.width = window.innerWidth,
 h = canvaseffect.height = window.innerHeight,
 ctx = canvaseffect.getContext('2d'),
 
 total = w,
 accelleration = .05,
 
 size = w/total,
 occupation = w/total,
 repaintColor = 'rgba(0, 0, 0, .04)'
 colors = [],
 dots = [],
 dotsVel = [];

var portion = 360/total;
for(var i = 0; i < total; ++i){
 colors[i] = portion * i;
 
 dots[i] = h;
 dotsVel[i] = 10;
}

function anim(){
 window.requestAnimationFrame(anim);
 
 ctx.fillStyle = repaintColor;
 ctx.fillRect(0, 0, w, h);
 
 for(var i = 0; i < total; ++i){
 var currentY = dots[i] - 1;
 dots[i] += dotsVel[i] += accelleration;
 
 ctx.fillStyle = 'hsl('+ colors[i] + ', 80%, 50%)';
 ctx.fillRect(occupation * i, currentY, size, dotsVel[i] + 1);
 
 if(dots[i] > h && Math.random() < .01){
 dots[i] = dotsVel[i] = 0;
 }
 }
}
anim();
    
 














function calc (){
 
   /* siteType = #select1 ( "Тип сайта.  1.коммерческий, 2.информационный, 3.социальный");
                       
   design = #select2 ( "Дизай. 1.классический, 2.минимализм, 3.рисованный, 4.Organic Natural");

   adaptability = #select3 ( "Адаптивность. 1.только ПК, 2.только мобильные телефоны, 3.ПК и мобильные телефоны");*/

     $('#select1[name=siteType]').on("change", function(){
siteType = $(this).val( 1,2,3 ); 

    if (siteType == "1") {sum = sum + 1000};
      
    if (siteType == "2") {sum = sum + 1500};
      
    if (siteType == "3") {sum = sum + 2000};
   }); 
   
     $('#select2[name=design]').on("change", function(){
design = $(this).val(sum ); 

     if (design == "1") {sum = sum + 500};
      
     if (design == "2") {sum = sum + 700};
      
     if (design == "3") {sum = sum + 900};
      
     if (design == "4") {sum = sum + 1200};
   });  

    $('#select3[name=adaptability]').on("change", function(){
adaptability = $(this).val(sum ); 
       
     if (adaptability == "1") {sum = sum + 100};
      
     if (adaptability == "2") {sum = sum + 150};
      
     if (adaptability == "3") {sum = sum + 200};
      
   });  

     $('#js-button').click(function(){
	var value = $('#select1, #select2, #select3').val();
	$('#js-result').html('Результат: ' + value);
});
  
   };  
calc();
         
   
   
    
    
    
    
    
    
    