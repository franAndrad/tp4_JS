// Dificultad:  🟢🟡🔴
// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let resultados=[];

//Cargamos todos los resultados
for (let i = 0; i < 50; i++) {
    let dado1=Math.floor(Math.random()*6+1);
    let dado2=Math.floor(Math.random()*6+1);
    let suma=dado1+dado2;
    resultados[i]=suma;
}

//Imprimimos la frecuencia con la que se repiten
document.write(`<table><tbody>`);
document.write(`<td>Resultado</td> <td>Frecuencia</td>`);
for (let i = 2,cont =0 ; i <= 12; i++) {
    document.write(`<tr>`);
    for (let j = 0; j < resultados.length; j++) {
        if(i===resultados[j]){
            cont++; 
        }
    }
    document.write(`<td>${i}</td> <td>${cont}</td>`);
    document.write(`</tr>`);
    cont=0;
}
document.write(`</table></tbody>`);



//INTENTO CON ARREGLO BIDIMENSIONALES

// let tabla = new Array(2);
// for (var i = 0; i < 50; i++) {
//     tabla[i] = new Array(2);
//   }


// for (let i = 0; i < 50; i++) {
//     let dado1=Math.floor(Math.random()*6+1);
//     let dado2=Math.floor(Math.random()*6+1);
//     let suma=dado1+dado2;
//     tabla[i][0]=suma;
// }

// let cont=0;
// for (let i = 0 ; i < 50; i++) {
//     for (let j = 0; j < 50; j++) {
//         if(tabla[i][0]===tabla[j][0]){
//             tabla[i][1]=cont++;
//         }
//     }
//     cont=0;
// }

// for (let i = 0; i < 50; i++) {
//     for (let j = 0; j < 2; j++) {
//         if(tabla[i][0]===tabla[])
//        document.write(tabla[i][j]);
//     }
//     document.write("<br>");
// }


