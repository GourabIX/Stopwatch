function Stopwatch(stopwatchDom) {
  var time = 0;
  var interval;
  var offset;
  this.isRunning = false;

  function update() {
    if (this.isRunning) time += delta();
    var formattedTime = timeFormatter(time);
    stopwatchDom.textContent = formattedTime;
  }

  function delta() {
    var now = Date.now();
    var timePassed = now - offset;
    offset = now;
    return timePassed;
  }

  function timeFormatter(timeInMS) {
    var time = new Date(timeInMS);
    var hours = time.getUTCHours().toString();
    var minutes = time.getUTCMinutes().toString();
    var seconds = time.getUTCSeconds().toString();
    var milliseconds = time.getUTCMilliseconds().toString();

    if (hours.length < 2) hours = "0" + hours;

    if (minutes.length < 2) minutes = "0" + minutes;

    if (seconds.length < 2) seconds = "0" + seconds;

    while (milliseconds.length < 3) milliseconds = "0" + milliseconds;

    return hours + " : " + minutes + " : " + seconds + " . " + milliseconds;
  }

  this.start = function () {
    if (!this.isRunning) {
      interval = setInterval(update.bind(this), 10);
      offset = Date.now();
      this.isRunning = true;
    }
  };

  this.stop = function () {
    if (this.isRunning) {
      clearInterval(interval);
      interval = null;
      this.isRunning = false;
    }
  };

  this.reset = function () {
    time = 0;
    this.isRunning = false;
    update();
  };
}
