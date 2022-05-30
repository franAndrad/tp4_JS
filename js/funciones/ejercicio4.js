// Dificultad:  🟢🟡
// 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function tabla(num){
    document.write(`<table><tbody>`);
    document.write(`<td>Numero</td><td>Por</td><td>Resultado</td>`);
    for (let i = 1; i <= 10 ; i++) {
        document.write(`<tr>`);
        document.write(`<td>${num}</td><td>${i}</td><td>${num*i}</td>`);
        document.write(`</tr>`);24
    }
    document.write(`</table></tbody>`);
}

let num = parseInt(prompt("Ingrese un numero: "));
tabla(num);
