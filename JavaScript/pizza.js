function Pizza (){
  this.takePizza = [this.pepperoni, this.diabola, this.tuna, this.allin, this.veggie];
}

Pizza.prototype.takePizza = [this.pepperoni, this.diabola, this.atun, this.allIn, this.veggie];

Pizza.prototype.randomPizza = function(){
  return this.takePizza[Math.floor(Math.random() * this.takePizza.length)]
}

Pizza.prototype.pepperoni = [
  { name: "pepperoni" },
  { name: "cheese", img: "images/ingredients/queso.png" },
  { name: "pepperoni", img: "images/ingredients/pepperoni.png" },
  { name: "tomate", img: "images/ingredients/tomate.png" },
  { name: "tocino", img: "images/ingredients/tocino.png" },
  { name: "manzana", img: "images/ingredients/manzana.png" },
];

Pizza.prototype.diabola = [
  { name: "diabola" },
  { name: "cheese", img: "images/ingredients/queso.png" },
  { name: "pepperoni", img: "images/ingredients/pepperoni.png" },
  { name: "chili", img: "images/ingredients/pimienta.png" },
  { name: "zanahoria", img: "images/ingredients/zanahoria.png" },
  { name: "seta", img: "images/ingredients/seta.png" },
];

Pizza.prototype.tuna = [
  { name: "tuna" },
  { name: "cheese", img: "images/ingredients/queso.png" },
  { name: "pescado", img: "images/ingredients/pescado.png" },
  { name: "tomate", img: "images/ingredients/tomate.png" },
  { name: "queso", img: "images/ingredients/queso2.png" },
  { name: "piña", img: "images/ingredients/piña.png" },
];

Pizza.prototype.veggie = [
  { name: "veggie" },
  { name: "lechuga", img: "images/ingredients/lechuga.png" },
  { name: "piña", img: "images/ingredients/piña.png" },
  { name: "tomate", img: "images/ingredients/tomate.png" },
  { name: "seta", img: "images/ingredients/seta.png" },
  { name: "manzana", img: "images/ingredients/manzana.png" },
  { name: "zanahoria", img: "images/ingredients/zanahoria.png" },
];

Pizza.prototype.allin = [
  { name: "all-in" },
  { name: "cheese", img: "images/ingredients/queso.png" },
  { name: "pepperoni", img: "images/ingredients/pepperoni.png" },
  { name: "tomate", img: "images/ingredients/tomate.png" },
  { name: "tocino", img: "images/ingredients/tocino.png" },
  { name: "piña", img: "images/ingredients/piña.png" },
  { name: "limon", img: "images/ingredients/limon.png" },
  { name: "seta", img: "images/ingredients/seta.png" },
  { name: "manzana", img: "images/ingredients/manzana.png" },
  { name: "zanahoria", img: "images/ingredients/zanahoria.png" },
];

