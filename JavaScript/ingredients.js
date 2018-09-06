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
  "zanahoria",
  "lechuga",
  "banana",
  "naranja",
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
  "pimienta",
  "pescado",

];

var peperoniPizza = ["picante","pepperoni", "queso", "tocino", "manzana", "tomate"];
var veggiePizza = ["boletus","seta", "piña", "manzana", "zanahoria", "lechuga", "tomate"];
var diabolaPizza = ["diabola","queso", "pepperoni", "pimienta", "zanahoria", "seta"];
var tunaPizza = ["tuna","pescado", "queso", "piña", "tomate"];
var allInPizza = [
  "carne",
  "tocino",
  "queso",
  "tomate",
  "pepperoni",
  "piña",
  "seta",
  "manzana",
  "zanahoria"
];
var arrPizzas = [peperoniPizza,veggiePizza,diabolaPizza,tunaPizza,allInPizza]

function getImageFromIngredient(ingredient) {
  return "images/ingredientes/" + ingredient + ".png";
}
