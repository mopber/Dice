function rollButtonWithAnimation() {
    var i = 1;
    var interval = setInterval(function() {
      var rollResult = Math.floor(Math.random() * 6) + 1;
      var imageID = "dice" + i;
      var imgElement = document.querySelector("." + imageID);
      if (imgElement) {
        imgElement.setAttribute("src", "./img/" + rollResult + ".png");
      }
      i++;
      if (i > 3) {
        clearInterval(interval);
      }
    }, 500); 
  }