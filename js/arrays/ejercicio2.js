// Dificultad:  🟢🟡
//2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

let ciudades = [];

let ciudad;
let i=0;

do{
    ciudad = prompt("Ingrese la ciudad: ");
    if(ciudad!=null)
        ciudades[i]=ciudad;
    i++;
}while(ciudad != null);

document.write(`<ol>`);
for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write(`</ol>`);

document.write(`la longitud del arreglo es: ${ciudades.length}<br>`);
document.write(`en la primera posicion esta: ${ciudades[0]}<br>`);
document.write(`en la tercera posicion esta: ${ciudades[2]}<br>`);
document.write(`en la ultima posicion esta: ${ciudades[ciudades.length-1]}<br>`);
ciudades.push('Paris');
document.write(`en la segunda posicion esta: ${ciudades[1]}`);
ciudades[1]="Barcelona";

document.write(`<ol>`);
for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write(`</ol>`);
