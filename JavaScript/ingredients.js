var ingredientsPizza = [
  "tomate",
  "pepperoni",
  "queso",
  "tocino",
  "piña",
  "manzana",
  "seta",
  "zanahoria",
  "ensalada", 
  "pimienta",
  "pescado"
];
var ingredients = [
  "aguacate",
  "limon",
  "naranja",
  "jengibre",
  "brocoli",
  "camaron",
  "coco",
  "filete",
  "fresa",
  "huevo",
  "banana",
  "maiz",
  "pizza"
];

var peperoniPizza = [
  "picante",
  "pepperoni",
  "queso",
  "tocino",
  "manzana",
  "tomate"
];
var veggiePizza = [
  "boletus",
  "seta",
  "piña",
  "manzana",
  "zanahoria",
  "ensalada",
  "tomate"
];
var diabolaPizza = [
  "diabola",
  "queso",
  "pepperoni",
  "pimienta",
  "zanahoria",
  "seta"
];
var tunaPizza = ["tuna", "pescado", "queso", "piña", "tomate"];
var allInPizza = [
  "carne",
  "tocino",
  "queso",
  "pepperoni",
  "piña",
  "seta",
  "manzana",
  "zanahoria"
];
var arrPizzas = [
  peperoniPizza,
  veggiePizza,
  diabolaPizza,
  tunaPizza,
  allInPizza
];

function getImageFromIngredient(ingredient) {
  return "images/ingredientes/" + ingredient + ".png";
}
