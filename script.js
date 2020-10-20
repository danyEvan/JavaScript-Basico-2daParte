
///////////EJERCICIO UNO//////////////////////
let boton = document.getElementById("boton"),
    contenedor = document.getElementById("contenedor");
boton.onclick = function(){
    let frase = document.getElementById("txt").value.trim().toLowerCase();
    if (frase != "") {
        let fra   = frase,
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
    }else{
        contenedor.innerHTML = `<h2 class='text-danger'>Debe ingresar una frase !</h2>`;
        }
};


////////EJERCICIO DOS//////////////////////////
let botonDos = document.getElementById("botonDos");

    botonDos.onclick = ()=>{
        let aleatorio = parseInt(Math.random()*3);
        console.log(aleatorio);
        switch (aleatorio) {
            case 0:
                alert("Sera redirigido a outlock")
                location.assign("https://login.live.com");
                break;
            case 1:
                alert("Sera redirigido a gmail")
                location.assign("https://mail.google.com")
                break;
            case 2:
                alert("Sera redirigido a yahoo")
                location.assign("https://login.yahoo.com/?.intl=es")
                break;
            default:
                break;
        }
    }

/////EJERCICIO TRES///////////////////////////
let tamMax = document.getElementById("text"),
    cont   = document.getElementById("contenedor3"),
    limite = 80;


tamMax.onkeyup = ()=>{
    let largo  = tamMax.value.length;
    largo == limite ? (tamMax.setAttribute("maxlength", limite), cont.innerHTML = `<p class=" p-5 mt-5" style="font-size: 2rem;">Restan <br> 0 <br> caracteres a ingresar. </p> ` ) 
                    : cont.innerHTML = `<p class=" p-5 mt-5" style="font-size: 2rem;">Restan <br> ${limite -largo} <br> caracteres a ingresar. </p> ` ;

}
