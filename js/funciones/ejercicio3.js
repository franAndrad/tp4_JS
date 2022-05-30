// Dificultad:  🟢🟡
// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro  es p = 2*(a +b)

function perimetro(a,b){
    return 2*(a+b);
}

let lado1=parseInt(prompt("Ingrese el primer lado del rectangulo"));
let lado2=parseInt(prompt("Ingrese el primer lado del rectangulo"));
document.write(`el perimetro es: ${perimetro(lado1,lado2)}`);