var ingredients = [
  "aguacate",
  "tomate",
  "pepperoni",
  "queso",
  "tocino",
  "piña",
  "manzana",
  "seta",
  "limon",
  "seta",
  "zanahoria",
  "lechuga",
  "banana",
  "naranja",
  "baston",
  "berenjena",
  "brocoli",
  "camaron",
  "cebolla",
  "coco",
  "filete",
  "fresa",
  "huevo",
  "jengibre",
  "langosta",
  "maiz",
  "naranja",
  "maiz",
  "pizza",
  "pimienta"
];

var peperoniPizza = ["pepperoni", "queso", "tocino", "manzana", "tomate"];
var veggiePizza = ["seta", "piña", "manzana", "zanahoria", "lechuga", "tomate"];
var diabolaPizza = ["queso", "pepperoni", "pimienta", "zanahoria", "seta"];
var tunaPizza = ["pescado", "queso", "piña", "tomate"];
var allInPizza = [
  "tocino",
  "queso",
  "tomate",
  "pepperoni",
  "piña",
  "limon",
  "seta",
  "manzana",
  "zanahoria"
];
var arrPizzas = [peperoniPizza,veggiePizza,diabolaPizza,tunaPizza,allInPizza]

function getImageFromIngredient(ingredient) {
  return "images/ingredientes/" + ingredient + ".png";
}
