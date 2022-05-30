// Dificultad:  🟢
// 1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function par(num){
    if(num%2 == 0)
        return true;
    else
        return false;
}

num=parseInt(prompt("Escribe un numero:"));
if (Number.isNaN(num)!=true){
    if(par(num)==true)
        alert("El numero es par");
    else
        alert("El numero es impar");
}
else
    alert("Ingrese un numero valido");