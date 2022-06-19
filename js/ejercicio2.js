// Cuenta bancaria - Dificultad:  🟢🟡

/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
Rectángulos*/

let cuenta = {
    titular:'Alex',
    saldo: 0,
    ingresarSaldo: (cantidad) =>{
        cuenta.saldo += cantidad;
    },
    extraerSaldo: (cantidad) =>{
        cuenta.saldo -= cantidad;
    },
    informarCuenta: () =>{
        document.write(`El estado de la cuenta es: <br>
        <ul>
            <li>titular: ${cuenta.titular}</li>
            <li>saldo: ${cuenta.saldo}</li>
        </ul>`);
    }
}

cuenta.informarCuenta();
cuenta.ingresarSaldo(parseInt(prompt("Monto a ingresar: ")));
cuenta.extraerSaldo(parseInt(prompt("Monto a extraer ")));
cuenta.informarCuenta();

