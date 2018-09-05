window.onload = function() {
  $("#pizza-btn").click(function() {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "style/game-scenario.css";
    document.head.appendChild(link);

    var takePizza = arrPizzas[Math.floor(Math.random() * arrPizzas.length)];
    console.log(takePizza);
    $("#" + takePizza[0]).attr("style", "visibility: visible");

    setInterval(function() {
      printRandomImg();
    }, 800);
    var count = 0;

    function printRandomImg() {
      var num = Math.floor(Math.random() * ingredients.length);
      var img = $("<img>")
        .attr({
          class: "ingredients",
          id: ingredients[num],
          src: randomIng(ingredients[num])
        })
        .appendTo("#ingre");
      count++;

      removeIngr();
      makeDesappear();
    }

    function randomIng(ele) {
      return getImageFromIngredient(ele);
    }

    function removeIngr() {
      if (count == 5) {
        $("#ingre img:first").remove();
        count = 2;
      }
    }
    var selectedIngr = [];
    function makeDesappear() {
      var elemClick = $(".ingredients:hover").click(function() {
        var imgId = $(elemClick).attr("id");
        for (var i = 0; i < takePizza.length; i++) {
          if (takePizza.includes(imgId)) {
            $(".ingre-" + imgId).addClass("visible");
            $(elemClick).remove();
            selectedIngr.push(imgId);
            console.log(selectedIngr);
          }
        }
      });
    }
  });
};
