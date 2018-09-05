window.onload = function() {
  $("#pizza-btn").click(function() {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "style/game-scenario.css";
    document.head.appendChild(link);

    var takePizza = arrPizzas[Math.floor(Math.random() * arrPizzas.length)];
    console.log(takePizza);
    $("#"+takePizza[0]).attr("style", "visibility: visible")
    
    setInterval(function() {;
      }, 800);
      var count = 0;

   

      makeDesappear();
      removeIngr();
    
    var ingArray = [
      "queso",
      "tocino",
      "pepperoni",
      "manzana",
      "tomate",
      "pimienta",
      "seta",
      "piña",
      "pescado",
      "zanahoria"
    ];
    var selectedIngr = [];
    function makeDesappear() {
      var elemClick = $(".ingredients:hover").click(function() {
        var imgSrc = $(elemClick).attr("src");
        for (var i = 0; i < ingArray.length; i++) {
          if (imgSrc.includes(ingArray[i])) {
            $(".ingre-" + ingArray[i]).addClass("visible");
            $(elemClick).remove();
            selectedIngr.push(ingArray[i]);
            console.log(selectedIngr);
          }
        }
      });
    }
    function removeIngr() {
      if (count == 5) {
        $("#ingre img:first").remove();
        count = 3;
      }
    }
    // function checkName() {
    //   for (i = 0; i < pizza.takePizza.length; i++) {
    //     if (randomPizza[0].name == pizza.takePizza[i][0].name) {
    //       document.getElementById(pizza.takePizza[i][0].name).style.visibility =
    //         "visible";
    //     }
    //   }
    // }
  });
};
