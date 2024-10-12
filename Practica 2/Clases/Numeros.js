import ListaSimpleEnlazada from "./Lista.js";

class Numeros {
  constructor(cantidad) {
    this.cantidad = cantidad;
    this.numeros = new ListaSimpleEnlazada();
    this.numerosPares = new ListaSimpleEnlazada();
    this.numerosImpares = new ListaSimpleEnlazada();
  }

  // Generar los números aleatorios y almacenarlos en la lista simple
  generarNumerosAleatorios() {
    for (let i = 0; i < this.cantidad; i++) {
      const numero = Math.floor(Math.random() * 100) + 1; 
      this.numeros.agregar(numero); 
    }
  }

  // Clasificar los números en pares e impares
  clasificarNumeros() {
    let actual = this.numeros.cabeza; 
    while (actual) {
      if (actual.dato % 2 === 0) {
        this.numerosPares.agregar(actual.dato); 
        this.numerosImpares.agregar(actual.dato); 
      }
      actual = actual.siguiente; 
    }
  }

  obtenerPares() {
    return this.numerosPares; // Retornar la lista de pares
  }

  obtenerImpares() {
    return this.numerosImpares; // Retornar la lista de impares
  }
}

export default Numeros;
