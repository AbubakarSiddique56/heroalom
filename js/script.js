


















// counter part start
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
// counter part start


// about part start
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});
// about part end


// Portfolio part start
$(".top-slider").slick({
  arrows:false,
  asNavFor:".bottom-slider",
  fade:true,
})

$(".bottom-slider").slick({
  slidesToShow: 3,
  centerMode:true,
  centerPadding:"0",
  asNavFor:".top-slider",
  prevArrow:'<i class="fas fa-long-arrow-alt-left prev"></i>',
  nextArrow:'<i class="fas fa-long-arrow-alt-right next"></i>',
})
// Portfolio part end


// Process part Start
$("#process-part .item1").mouseenter(function(){
  $("#process-part .item1 .round").css("background","#1db1f58e")
  $("#process-part .item1 .round1").css("background","#1db1f58e")
  $("#process-part .item1 h1").css("color","#1bb7ff")
  $("#process-part .line").css("width","11%")

})
$("#process-part .item1").mouseleave(function(){
  $("#process-part .item1 .round").css("background","transparent")
  $("#process-part .item1 .round1").css("background","transparent")
  $("#process-part .item1 h1").css("color","#bac5db")
  $("#process-part .line").css("width","0%")

})






$("#process-part .item2").mouseenter(function(){
  $("#process-part .item1 .round").css("background","#1db1f58e")
  $("#process-part .item1 .round1").css("background","#1db1f58e")
  $("#process-part .item1 h1").css("color","#1bb7ff")
  $("#process-part .item2 .round").css("background","#1db1f58e")
  $("#process-part .item2 .round1").css("background","#1db1f58e")
  $("#process-part .item2 h1").css("color","#1bb7ff")
  $("#process-part .line").css("width","37%")

})
$("#process-part .item2").mouseleave(function(){
  $("#process-part .item1 .round").css("background","transparent")
  $("#process-part .item1 .round1").css("background","transparent")
  $("#process-part .item1 h1").css("color","#bac5db")
  $("#process-part .item2 .round").css("background","transparent")
  $("#process-part .item2 .round1").css("background","transparent")
  $("#process-part .item2 h1").css("color","#bac5db")

  $("#process-part .line").css("width","0%")

})






$("#process-part .item3").mouseenter(function(){
  $("#process-part .item1 .round").css("background","#1db1f58e")
  $("#process-part .item1 .round1").css("background","#1db1f58e")
  $("#process-part .item1 h1").css("color","#1bb7ff")
  $("#process-part .item2 .round").css("background","#1db1f58e")
  $("#process-part .item2 .round1").css("background","#1db1f58e")
  $("#process-part .item2 h1").css("color","#1bb7ff")
  $("#process-part .item3 .round").css("background","#1db1f58e")
  $("#process-part .item3 .round1").css("background","#1db1f58e")
  $("#process-part .item3 h1").css("color","#1bb7ff")
  $("#process-part .line").css("width","63%")

})
$("#process-part .item3").mouseleave(function(){
  $("#process-part .item1 .round").css("background","transparent")
  $("#process-part .item1 .round1").css("background","transparent")
  $("#process-part .item1 h1").css("color","#bac5db")
  $("#process-part .item2 .round").css("background","transparent")
  $("#process-part .item2 .round1").css("background","transparent")
  $("#process-part .item2 h1").css("color","#bac5db")
  $("#process-part .item3 .round").css("background","transparent")
  $("#process-part .item3 .round1").css("background","transparent")
  $("#process-part .item3 h1").css("color","#bac5db")
  $("#process-part .line").css("width","0%")

})







$("#process-part .item4").mouseenter(function(){
  $("#process-part .item1 .round").css("background","#1db1f58e")
  $("#process-part .item1 .round1").css("background","#1db1f58e")
  $("#process-part .item1 h1").css("color","#1bb7ff")
  $("#process-part .item2 .round").css("background","#1db1f58e")
  $("#process-part .item2 .round1").css("background","#1db1f58e")
  $("#process-part .item2 h1").css("color","#1bb7ff")
  $("#process-part .item3 .round").css("background","#1db1f58e")
  $("#process-part .item3 .round1").css("background","#1db1f58e")
  $("#process-part .item3 h1").css("color","#1bb7ff")
  $("#process-part .item4 .round").css("background","#1db1f58e")
  $("#process-part .item4 .round1").css("background","#1db1f58e")
  $("#process-part .item4 h1").css("color","#1bb7ff")
  $("#process-part .line").css("width","100%")

})
$("#process-part .item4").mouseleave(function(){
  $("#process-part .item1 .round").css("background","transparent")
  $("#process-part .item1 .round1").css("background","transparent")
  $("#process-part .item1 h1").css("color","#bac5db")
  $("#process-part .item2 .round").css("background","transparent")
  $("#process-part .item2 .round1").css("background","transparent")
  $("#process-part .item2 h1").css("color","#bac5db")
  $("#process-part .item3 .round").css("background","transparent")
  $("#process-part .item3 .round1").css("background","transparent")
  $("#process-part .item3 h1").css("color","#bac5db")
  $("#process-part .item4 .round").css("background","transparent")
  $("#process-part .item4 .round1").css("background","transparent")
  $("#process-part .item4 h1").css("color","#bac5db")
  $("#process-part .line").css("width","0%")

})
// Process part end



// max-part start
$(".mix-top-slider").slick({
  fade:true,
  asNavFor:".mix-bottom-slider",
  prevArrow:false,
  nextArrow:false,
})


$(".mix-bottom-slider").slick({
  slidesToShow:5,
  centerMode:true,
  centerPadding:"0",
  asNavFor:".mix-top-slider",
  prevArrow:'<i class="fas fa-long-arrow-alt-left prev"></i>',
  nextArrow:'<i class="fas fa-long-arrow-alt-right next"></i>',
})











































// max-part end



























