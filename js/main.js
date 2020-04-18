var stopwatchDom = document.getElementById("stopwatch");
var timerToggleDom = document.getElementById("timerToggle");
var resetStopwatchDom = document.getElementById("resetStopwatch");

var stopwatch = new Stopwatch(stopwatchDom);

function startWatch() {
  stopwatch.start();
  timerToggleDom.textContent = "Stop";
}

function pauseWatch() {
  stopwatch.stop();
  timerToggleDom.textContent = "Start";
}

timerToggleDom.addEventListener("click", function () {
  stopwatch.isRunning ? pauseWatch() : startWatch();
});

resetStopwatchDom.addEventListener("click", function () {
  stopwatch.reset();
  timerToggleDom.textContent = "Start";
});
