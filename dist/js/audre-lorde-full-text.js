var lordePlayer = document.getElementsByTagName("audio")[0];
// var lordePlayer = document.getElementsByTagId("#lordePlayer");
// var intervalId;
// var cur_time;

// lordePlayer.play()

// $('#curPosition').val(cur_time);

function catchTime() {
   var intervalId = window.setInterval(function(){}, 500);
  var cur_time = lordePlayer.currentTime;
  console.log(cur_time);
}


$( "#s1" ).click(function() {
  catchTime();
  console.log("video is playing");
  lordePlayer.currentTime = 0;
  lordePlayer.play();
});

$( "#s2" ).click(function() {
  lordePlayer.currentTime = 7.2;
  lordePlayer.play();
});

$( "#s3" ).click(function() {
  lordePlayer.currentTime = 7.2;
  lordePlayer.play();
});

$( "#s5" ).click(function() {
  lordePlayer.currentTime = 15;
  lordePlayer.play();
});