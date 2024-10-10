import Nodo from "./Nodo.js";

class ListaSimpleEnlazada {
  constructor() {
    this.cabeza = null;
  }

  // Método para añadir un nuevo nodo al final de la lista
  agregar(dato) {
    const nuevoNodo = new Nodo(dato);
    if (!this.cabeza) {
      this.cabeza = nuevoNodo;
    } else {
      let actual = this.cabeza;
      while (actual.siguiente) {
        actual = actual.siguiente;
      }
      actual.siguiente = nuevoNodo;
    }
  }

  // Método para obtener los datos en forma de lista
  obtenerDatos() {
    let actual = this.cabeza;
    const resultados = [];
    while (actual) {
      resultados.push(actual.dato);
      actual = actual.siguiente;
    }
    return resultados;
  }
}

export default ListaSimpleEnlazada;
