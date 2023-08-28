function rollButton() {
    for (var i=1 ; i<=3;i++){
      var rollResult = Math.floor(Math.random() * 6) + 1;
      var D = ".dice" + i;
      document.querySelector(D).setAttribute("src", "./img/" + rollResult + ".png");
      }
  }