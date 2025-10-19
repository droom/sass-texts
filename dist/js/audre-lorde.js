var lordePlayer = document.getElementsByTagName("audio")[0];
var cur_time;
var nScrub1 = 0;
var nScrub2 = 7.2;
var nScrub3 = 16.2;
var nScrub4 = 23.4;
var nScrub5 = 40.5;

var activeText = 'rgba(0,0,0,1)';
var inactiveText = 'rgba(0,0,0,0.35)';


function catchTime() {
  console.log("video is playing");
  var intervalId = window.setInterval(function(){
    var cur_time = lordePlayer.currentTime;
    console.log(cur_time);
    if (cur_time >= nScrub1){
      $(".segment").css('color', inactiveText);
      $(".s1").css('color', activeText);
    }
    if (cur_time >= nScrub2){
      $(".segment").css('color', inactiveText);
      $(".s2").css('color', activeText);
      
    }
    if (cur_time >= nScrub3){
      $(".segment").css('color', inactiveText);
      
      $(".s3").css('color', activeText);
    }
    
    if (cur_time >= nScrub4){
      $(".segment").css('color', inactiveText);
      $(".s4").css('color', activeText);
    }
    
    if (cur_time >= nScrub5){
      $(".segment").css('color', inactiveText);
      $(".s5").css('color', activeText);
    }
    
  }, 500);
};

document.getElementsByTagName("audio")[0].addEventListener('click', function(){  
  player.play(); 
  catchTime();
});  


$(".segment").click(function() {
  catchTime();
  $(".segment").css('color','black');

});

$( "#s1" ).click(function() {
  lordePlayer.currentTime = nScrub1;
  lordePlayer.play();
});

$( "#s2" ).click(function() {
  lordePlayer.currentTime = nScrub2;
  lordePlayer.play();
});

$( "#s3" ).click(function() {
  lordePlayer.currentTime = nScrub3;
  lordePlayer.play();
});

$( "#s4" ).click(function() {
  lordePlayer.currentTime = nScrub4;
  lordePlayer.play();
});

$( "#s5" ).click(function() {
  lordePlayer.currentTime = nScrub5;
  lordePlayer.play();
});