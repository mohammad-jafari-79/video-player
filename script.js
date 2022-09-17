$(document).ready(function () {
  var video = document.getElementsByTagName("video");
  $("#play-button").click(function () {
    video[0].play();
  });
  $("#pause-button").click(function () {
    video[0].pause();
  });
  $("#mute-button").click(function () {
    video[0].muted = true;
  });
  $("#unmute-button").click(function () {
    video[0].muted = false;
  });
  $("#fullscreen-button").click(function () {
    video[0].webkitEnterFullScreen();
  });
  $("#duration-button").click(function () {
    $(this).html(video[0].duration + "s");
  });
  $("#volume-handel").change(function () {
    $("#volume-value").text($(this).val());
    video[0].volume = $(this).val();
  });
  $("#time-handel").change(function () {
    var totalVideoTime = video[0].duration;
    var currentTimeHandler = $(this).val();
    $("#time-value").text($(this).val());
    video[0].currentTime = totalVideoTime * (currentTimeHandler / 100); // زمان خودمون رو تقسیم بر صد میکنیم که درصدش در بیاد بعد در کل زمان ضرب میشه که ببینیم چند درصد کل اون فیلم میشه
  });
  $("#img-play-video").click(function () {
    video[0].play();
    $("#img-of-video-container").fadeOut();
  });
});
