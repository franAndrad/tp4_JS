// Dificultad:  🟢
// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

// creamos ojeto

let auto = {

    // propiedades
    color : 'rojo',
    marca : 'fiat',
    modelo : 'cronos',
    estado : false,
    
    //metodos
    encender: () =>{
        auto.estado = true;
    },
    
    apagar: () =>{
        auto.estado = false;
    }
}

// encendemos
auto.encender();
console.log(auto);

// apagamos
auto.apagar();
console.log(auto);