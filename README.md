<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="lib/jquery-3.1.1.min.js"></script>
  <link rel="stylesheet" href="style/ingredients-pizza.css">
  <link rel="stylesheet" href="style/start-page.css">
  <link rel="stylesheet" href="style/pizza.css">
  <title>Giorgio's Kitchen</title>
</head>
<body>
    <audio volume="0.5" src="audios/Musica Tradicional.mp3"
    autoplay></audio>
  <div class="game-page">
    <div class="final-text">
      <p> COMPLIMENTI! </p>
      <p>Gracias por jugar, ahora comeremos pizza</p>
      <p>Gracias a Ruben Armendiz y Maria Alonso por su tiempo</p>
      <p>A Giorgio por su cara y su voz</p>
      <p>Gracias a todos</p>
    </div>
    <img src="images/pizza-peperonni.png" id="pizza-btn" class="pizza-start">
    <div class="title">
      
    </div>
    <div>
      <img src="images/cocinero.png" class="cocinero">
    </div>
    <div class="pizarra">
      <img src="images/pizarra.jpg">
      <ul>
        <li>Hay hambre, queremos pizza</li>
        <li>Mueve cada ingrediente a la caja</li>
        <li>No elijas los que no son <br>o Giorgio se enfadará</li>
        <li>Consigue bonificaciones</li>
        <li>Corre, tenemos hambre</li>
      </ul>
    </div>
    <div class="score">Ganancias: </div>
    <div id="carne">
      <h2>Today's Pizza</h2>
      <h3>Carne</h3>
      <img src="images/ingredientes/queso.png">
      <img src="images/ingredientes/tocino.png">
      <img src="images/ingredientes/pepperoni.png">
      <img src="images/ingredientes/piña.png">
      <img src="images/ingredientes/seta.png">
      <img src="images/ingredientes/manzana.png">
      <img src="images/ingredientes/zanahoria.png">
    </div>
    <div id="picante">
      <h2>Today's Pizza</h2>
      <h3>Pepperoni Pizza</h3>
      <img src="images/ingredientes/queso.png">
      <img src="images/ingredientes/tocino.png">
      <img src="images/ingredientes/pepperoni.png">
      <img src="images/ingredientes/manzana.png">
      <img src="images/ingredientes/tomate.png">
    </div>
    <div id="boletus">
      <h2>Today's Pizza</h2>
      <h3>Boletus Pizza</h3>
      <img src="images/ingredientes/ensalada.png">
      <img src="images/ingredientes/piña.png">
      <img src="images/ingredientes/manzana.png">
      <img src="images/ingredientes/zanahoria.png">
      <img src="images/ingredientes/seta.png">
      <img src="images/ingredientes/tomate.png">
    </div>
    <div id="tuna">
      <h2>Today's Pizza</h2>
      <h3>Tuna Pizza</h3>
      <img src="images/ingredientes/queso.png">
      <img src="images/ingredientes/pescado.png">
      <img src="images/ingredientes/piña.png">
      <img src="images/ingredientes/tomate.png">
    </div>
    <div id="diabola">
      <h2>Today's Pizza</h2>
      <h3>Diabola Pizza</h3>
      <img src="images/ingredientes/queso.png">
      <img src="images/ingredientes/pepperoni.png">
      <img src="images/ingredientes/pimienta.png">
      <img src="images/ingredientes/zanahoria.png">
      <img src="images/ingredientes/seta.png">
    </div>
      <div id="cinta" class="cinta">
        <div id="caja"></div>
        <div id="ingre">
        </div>
      </div>
        <img class="caja-pizza" id="caja-pizza" src="images/caja-pizza.png">
        <img class="ingre-queso" src="images/ingredientes/queso.png">
        <img class="ingre-tomate" src="images/ingredientes/tomate.png">
        <img class="ingre-piña" src="images/ingredientes/piña.png">
        <img class="ingre-pescado" src="images/ingredientes/pescado.png">
        <img class="ingre-zanahoria" src="images/ingredientes/zanahoria.png">
        <img class="ingre-tocino" src="images/ingredientes/tocino.png">
        <img class="ingre-pepperoni" src="images/ingredientes/pepperoni.png">
        <img class="ingre-seta" src="images/ingredientes/seta.png">
        <img class="ingre-manzana" src="images/ingredientes/manzana.png">
        <img class="ingre-pimienta" src="images/ingredientes/pimienta.png">
        <img class="ingre-ensalada" src="images/ingredientes/ensalada.png">
      </div>
      <div class="guy">
      </div>
  <script type="text/javascript" src="JavaScript/Audios.js"></script>
  <script type="text/javascript" src="JavaScript/ingredients.js"></script>
  <script type="text/javascript" src="JavaScript/game.js"></script>
</body>
</html>