$(document).ready(function(){
  let timer = document.getElementById("timer")
  let time_now = 0;
  let timerID;

  $(".start").on("click",function() {
    timerID = setInterval(countUp,100);
    $('.start').prop('disabled', true);
    $('.stop').prop('disabled', false);
    $('.reset').prop('disabled', false);
    console.log("処理が動いています");
  });

  $(".stop").on("click",function() {
    clearInterval(timerID);
    $('.start').prop('disabled', false);
    $('.stop').prop('disabled', true);
    console.log("処理は止まっています");
  });

  $(".reset").on("click",function() {
    $('.reset').prop('disabled', true);
    time_now = 0;
    timer.innerHTML = "0:0:0:0";
    console.log("リセットされました");
  });

  function countUp() {
    // 1 = 100ミリ秒
    time_now++;
    let format_time = formatConverter(time_now);
    timer.innerHTML = format_time;
  }

  function formatConverter(time) {
    let num = time * 100; //ミリ秒に変換
    let h = Math.floor(num / (1000 * 60 * 60)); //切り捨て
    let rem_m_ms = num % (1000 * 60 * 60); //余りのミリ秒
    let m = Math.floor(rem_m_ms / (1000 * 60));
    let rem_s_ms = rem_m_ms % (1000 * 60);
    let s = Math.floor(rem_s_ms / 1000);
    let f = (rem_s_ms % 1000) / 100;
    return h + ":" + m + ":" + s + ":" + f;
  }

});

