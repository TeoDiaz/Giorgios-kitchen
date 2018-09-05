window.onload = function () {
  $("#pizza-btn").click(function () {

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'style/game-scenario.css';
    document.head.appendChild(link);

    var secondLink = document.createElement('link');
    secondLink.rel = 'stylesheet';
    secondLink.href = 'style/pizza.css';
    document.head.appendChild(secondLink);

    var pizza = new Pizza;
    var random = pizza.randomPizza();

    checkName();
    setInterval(function () { showIngredients() }, 800);
    var count = 0;

    function showIngredients() {
      var randNum = Math.floor(Math.random() * images.length);
      var randomIng = images[randNum].img;

      var newIng = document.createElement('img');
      $(newIng).addClass("ingredients");
      newIng.src = randomIng;
      newIng.setAttribute("id", "img-ing");

      var numIng = Math.floor(Math.random() * (4 - 1) + 1);
      if (numIng == 2) {
        $('#ingre').append(newIng);
        count++;
      }
      makeDesappear();
      removeIngr();
    }

    function makeDesappear() {
      elemClick = $(".ingredients:hover").click(function (e) {
        console.log($(elemClick).attr('src'));
        
        
        $(elemClick).remove();
      })
    }
    function removeIngr() {
      if (count == 5) {
        $("#ingre img:first").remove();
        count = 2;
      }
    }
    function checkName() {
    
      for (i = 0; i < pizza.takePizza.length; i++) {
        console.log(pizza.takePizza[i][0].name)
        if (random[0].name == pizza.takePizza[i][0].name) {
          document.getElementById(pizza.takePizza[i][0].name).style.visibility = "visible";
        }
      }
    }

  })
}
