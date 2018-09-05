var ingredients = [
  "aguacate",
  "tomate",
  "peperoni",
  "queso",
  "tocino",
  "piña",
  "manazana",
  "seta",
  "limon",
  "seta",
  "zanahoria",
  "lechuga",
  "banana",
  "naranaja",
  "baston",
  "berenjena",
  "brocoli",
  "camaron",
  "cebolla",
  "coco",
  "comida4",
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
