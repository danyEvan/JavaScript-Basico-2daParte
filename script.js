

let boton = document.getElementById("boton");

boton.onclick = function(){
    let frase = document.getElementById("txt").value.trim().toLowerCase(),
        contenedor = document.getElementById("contenedor"),
        fra   = frase,
        array = frase.split(" "),
        unionPalabras = "",
        unionLetras   = "";
        for (let i = 0; i < array.length; i++) {
             unionPalabras += array[i];
            }
        array = unionPalabras.split("");
        frase = array.reverse();
        for (let i = 0; i < frase.length; i++) {
            unionLetras += array[i];
           }
        
        unionLetras === unionPalabras ? contenedor.innerHTML = `<h2>"${fra}"<br> es un palindromo!</h2>`: contenedor.innerHTML = `<h2 class='text-danger'>"${fra}" <br> No es un palindromo!</h2>`;
        
        document.getElementById("txt").value = "";
};