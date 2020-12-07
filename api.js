// ACHEI QUE ERA MAIS OU MENOS POR AQUI MAS NÃO SEI OQ TO FAZENDO
let modelo = document.querySelector("#modeloresultado")
let preco = document.querySelector("#precoresultado")
 
fetch(`https://api.mercadolibre.com/sites/MLA/search?q=motorola`)
    .then(response => response.json())
    .then(response => {
        modelo = response.title;
        preco = response.price;
    })