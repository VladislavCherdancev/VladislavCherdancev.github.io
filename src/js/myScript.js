
"use strict"

/*таймер на модальное окно*/ 
setTimeout(function(){ 
    $("#modalopen").click();
}, 10000);



/*Плавный скролл*/ 
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




 /*Отступ при скролинге якорных ссылок*/  
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
    
  /*Калькулятор*/  
function calculate(){
    let sum = parseInt($("#selectSiteType option:selected").val()) + parseInt($("#selectDesign option:selected").val()) + parseInt($("#selectAdaptability   option:selected").val());
    let days = parseInt($("#selectSiteType option:selected").attr("days")) + parseInt($("#selectDesign option:selected").attr("days")) + parseInt($("#selectAdaptability option:selected").attr("days"));
    $(".price .digit").text(sum);
    $(".days .digit").text(days);
};
calculate();
$("select").on("change", function(){
    calculate();
});

 
         
   
   
   /**/ 
 


















