
<p align="center">Juego creado en 4 dias exactos, con diferentes intentos de varias acciones, como el DRAG & DROP.<br> Al final no lo consegui implementar como yo quise. Y lo que hice fue un evento click</p>


<p align="center">Una parte mas dificil fue conseguir que los alimentos no saliesen totalmente aleatorios y al final<br>
hice unas condiciones para que fuesen 2 ingredientes que estan en la pizza y 1 que no.</p>


<code>
if (!selectedIngr.includes(idImg) && counter % 3 != 0) {
        $("<img>")
          .attr({
            class: "ingredients",
            id: idImg,
            src: randomIng(ingredientsPizza[num2])
          })
          .appendTo("#ingre");
        counter++;
      } else if (counter % 3 == 0) {
        $("<img>")
          .attr({
            class: "ingredients",
            id: idImgNo,
            src: randomIng(ingredients[num])
          })
          .appendTo("#ingre");
        counter++;
      }
</code>
