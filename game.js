document.getElementById("pizza-btn").onclick = function () {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'game-scenario.css';
  document.head.appendChild(link);

  var secondLink = document.createElement('link');
  secondLink.rel = 'stylesheet';
  secondLink.href = 'pizza.css';
  document.head.appendChild(secondLink);

  var pizza = new Pizza;
  var random = pizza.randomPizza();
  
  checkName();
  setInterval(function(){showIngredients()},1000);

  function checkName() {
    if (random[0].name == "allin") {
      console.log(random[0].name);
      document.getElementById("all-in").style.visibility = "visible";

    }
    if (random[0].name == "veggie") {
      console.log(random[0].name);
      document.getElementById("veggie").style.visibility = "visible";

    }
    if (random[0].name == "pepperoni") {
      console.log(random[0].name);
      document.getElementById("pepperoni").style.visibility = "visible";

    }
    if (random[0].name == "tuna") {
      console.log(random[0].name);
      document.getElementById("tuna").style.visibility = "visible";

    }
    if (random[0].name == "diabola") {
      console.log(random[0].name);
      document.getElementById("diabola").style.visibility = "visible";

    }
  }

  function showIngredients() {
    var ingredients = new Ingredients;
    var randNum = Math.floor(Math.random()*ingredients.images.length); 
    console.log(ingredients.images[randNum])
    var randomIng = ingredients.images[randNum].img;
    
    var newIng = document.createElement('img');
    newIng.className = "ingredients";
    newIng.src = randomIng;
    document.getElementById('ingre').appendChild(newIng); 
    console.log("Diego no va a hacer nada en el Hack Show");
  }
};





