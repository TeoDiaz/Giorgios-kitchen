document.getElementById("pizza-btn").onclick = function () {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'game-scenario.css';
  document.head.appendChild(link);

  var firstLink = document.createElement('link');
  firstLink.rel = 'stylesheet';
  firstLink.href = 'pizza.css';
  document.head.appendChild(firstLink);

  var pizza = new Pizza;
  var random = pizza.randomPizza();
  console.log(random);
  checkName();

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



};





