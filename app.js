function move() {
  var elem = document.getElementById("bar");
  var width = 0;
  var pgbar = setInterval(run, 10);
  function run() {
    if (width >= 100) {
      clearInterval(pgbar);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
    
  }
}

