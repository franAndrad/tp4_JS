// Dificultad:  🟢
// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo{

    // constructor
    constructor(base,altura){
        this.ancho = base;
        this.alto = altura;
    }
    
    // cambiar propiedades
    get mostrarAncho(){
        return this.ancho;
    }
    get mostrarAlto(){
        return this.alto;
    }
    set modificarAncho(valor){
        this.ancho = valor;
    }
    set modificarAncho(valor){
        this.alto = valor;
    }
}

let rectangulo1 = new Rectangulo(5,10);

// de esta forma usamos el set
rectangulo1.modificarAncho = 2;

document.write(`<br>Perimetro: ${rectangulo1.ancho*2+rectangulo1.alto*2}`);
document.write(`<br>Superficie: ${rectangulo1.ancho*rectangulo1.alto}`);