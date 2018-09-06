window.onload = function() {
  $("#pizza-btn").click(function() {
    miPiace.play();

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "style/game-scenario.css";
    document.head.appendChild(link);

    var takePizza = arrPizzas[Math.floor(Math.random() * arrPizzas.length)];
    $("#" + takePizza).attr("style", "visibility: visible");
    console.log(takePizza);
    setInterval(function() {
      startGame();
    }, 1000);

    var count = 0;
    var money = 0;

    function startGame() {
      printRandomImg();
      removeIngr();
      makeDesappear();
      checkWinner();
      count++;
    }
    function printRandomImg() {
      var num = Math.floor(Math.random() * ingredients.length);
      var idImg = ingredients[num];
      $("<img>")
          .attr({
            class: "ingredients",
            id: idImg,
            src: randomIng(ingredients[num])
          })
          .appendTo("#ingre");
      if (!selectedIngr.includes(idImg)) {
        $("<img>")
          .attr({
            class: "ingredients",
            id: idImg,
            src: randomIng(ingredients[num])
          })
          .appendTo("#ingre");
      }
    }

    function randomIng(ele) {
      return getImageFromIngredient(ele);
    }

    function removeIngr() {
      if (count == 5) {
        $("#ingre img:first").remove();
        count = 3;
      }
    }
    var selectedIngr = [];
    function makeDesappear() {
      var elemClick = $(".ingredients:hover").click(function() {
        var imgId = $(elemClick).attr("id");
        if (takePizza.includes(imgId)) {
          $(".ingre-" + imgId).addClass("visible");
          money++;
          $(".score").html("Ganancias: " + money + " $");
          if (!selectedIngr.includes(imgId)) {
            selectedIngr.push(imgId);
            if (imgId == "queso") {
              formaggio.play();
              $(elemClick).remove();
            }
          }
        } else if (imgId == "pizza") {
          buah.play();  
          money += 10;
          $(elemClick).remove();
        } else {
          cosaFai.play();
          money--;
        }
        
      });
    }
    function checkWinner() {
      if (selectedIngr.length == takePizza.length - 1) {
        complimenti.play();
        console.log("you win");
      }
    }
  });
};
