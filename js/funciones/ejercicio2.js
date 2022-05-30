// Dificultad:  🟢🟡
// 2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function informacionCadena(cadena){
    if(cadena===cadena.toUpperCase())
        alert("La cadena tiene solo mayusculas");
    else if(cadena===cadena.toLowerCase())
        alert("La cadena tiene solo minusculas");
    else
        alert( "La cadena tiene una mezcla de minusculas y mayusculas");
}

let cadena = prompt("Ingrese una cadena de texto:");

if(cadena!=null){
   informacionCadena(cadena);
}