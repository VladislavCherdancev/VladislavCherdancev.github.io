  

/*таймер на модальное окно
setTimeout(function(){ 
    $("#modalopen").click();
}, 10000); */

 /*Маска на мои контакты*/ 

$(document).ready(function($){
    
 $("#inputTel").mask("+7(999) 999-9999");
   
});

$(document).ready(function($){
    
 $("#inputTell").mask("+7(999) 999-9999");
   
});
  
/* CanvasEffect*/
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
    

  /*Калькулятор*/  
function calculate(){
    let sum = parseInt($("#SelectSiteType option:selected").val()) + parseInt($("#SelectDesign option:selected").val()) + parseInt($("#SelectAdaptability   option:selected").val());
    let days = parseInt($("#SelectSiteType option:selected").attr("days")) + parseInt($("#SelectDesign option:selected").attr("days")) + parseInt($("#SelectAdaptability option:selected").attr("days"));
    $(" .digit").text(sum);
    $(" .digit1").text(days);
};
calculate();
$("select").on("change", function(){
    calculate();
});




/*скрипт на отправку формы*/
 $(document).ready(function(){
     
 
  $('form').submit(function(event){
      event.preventDefault();
      $.ajax({
      type: "POST",
       url: "php/mail.php",
       data: $(this).serialize()
      }).done(function (){
          $(this).find("input").val("");
          alert("Успешно отправлено");
          $("form").trigger("reset");
      });
      return false;
  }) ;      
   
   });
  

/*Расчет стоимости*/
// Created for an Articles on:
// https://www.html5andbeyond.com/bubbling-text-effect-no-canvas-required/

jQuery(document).ready(function($){
 
    // Define a blank array for the effect positions. This will be populated based on width of the title.
    var bArray = [];
    // Define a size array, this will be used to vary bubble sizes
    var sArray = [4,6,8,10];
 
    // Push the header width values to bArray
    for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
    }
     
    // Function to select random array element
    // Used within the setInterval a few times
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
 
    // setInterval function used to create new bubble every 350 milliseconds
    setInterval(function(){
         
        // Get a random size, defined as variable so it can be used for both width and height
        var size = randomValue(sArray);
        // New bubble appeneded to div with it's size and left position being set inline
        // Left value is set through getting a random value from bArray
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
         
        // Animate each bubble to the top (bottom 100%) and reduce opacity as it moves
        // Callback function used to remove finsihed animations from the page
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity' : '-=0.7'
        }, 3000, function(){
            $(this).remove()
        }
        );
 
 
    }, 350);
 
});
/*Расчет стоимости*/









