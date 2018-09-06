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
      var elemClick = $(".ingredients:hover");
      elemClick.click(function() {
        var imgId = $(elemClick).attr("id");
        if (takePizza.includes(imgId)) {
          $("#" + imgId).remove();
          $(".ingre-" + imgId).addClass("visible");
          money++;
          $(".score").html("Ganancias: " + money + " $");
          if (!selectedIngr.includes(imgId)) {
            selectedIngr.push(imgId);
            if (imgId == "queso") {
              queso.play();
            } else if (imgId == "seta") {
              seta.play();
            } else if (imgId == "zanahoria") {
              zanahoria.play();
            } else if (imgId == "pimienta") {
              pimienta.play();
            } else if (imgId == "pescado") {
              pescado.play();
            } else if (imgId == "manzana") {
              manzana.play();
            }else if(imgId== "pepperoni"){
              pepperoni.play();
            }else if(imgId=="ensalada"){
              insalata.play();
            }else if(imgId=="tomate"){
              pomodoro.play();
            }else if(imgId=="tocino"){
              tocino.play();
            }
          }
        } else if (imgId == "pizza") {
          buah.play();
          $("#" + imgId).remove();
          money = money + 10;
          $(".score").html("Ganancias: " + money + " $");
        } else {
          cosaFai.play();
          money--;
          $(".score").html("Ganancias: " + money + " $");
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
