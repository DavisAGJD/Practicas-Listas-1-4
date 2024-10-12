import Nodo from "./Nodo.js";

class ListaSimpleEnlazada {
  constructor() {
    this.cabeza = null;
  }

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

  obtenerDatos() {
    let actual = this.cabeza;
    let resultadosStr = '';
    while (actual) {
      resultadosStr += `${actual.dato} `;
      actual = actual.siguiente;
    }
    return resultadosStr.trim();
  }
}

export default ListaSimpleEnlazada;
