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
    var randomPizza = pizza.randomPizza();

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
    var ingArray = ["queso","tocino","pepperoni","manzana","tomate","pimienta","seta","piña","pescado","zanahoria"];
    var selectedIngr = [];
    function makeDesappear() {
      var elemClick = $(".ingredients:hover").click(function() {
      var imgSrc = $(elemClick).attr('src');
      for(var i = 0; i<ingArray.length;i++){
        if(imgSrc.includes(ingArray[i])){
          $(".ingre-"+ingArray[i]).addClass("visible");
          $(elemClick).remove();
          selectedIngr.push(ingArray[i]);
          console.log(selectedIngr);
        }
      }
        

      })
    }
    function removeIngr() {
      if (count == 5) {
        $("#ingre img:first").remove();
        count = 3;
      }
    }
    function checkName() {
    
      for (i = 0; i < pizza.takePizza.length; i++) {
        if (randomPizza[0].name == pizza.takePizza[i][0].name) {
          document.getElementById(pizza.takePizza[i][0].name).style.visibility = "visible";
        }
      }
    }

  })
}
