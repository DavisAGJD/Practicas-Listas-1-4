import Nodo from "./Nodo.js";

class ListaDoblementeEnlazada {
  constructor() {
    this.primero = null;
    this.ultimo = null;
  }

  añadirProducto(producto) {
    const nuevoNodo = new Nodo(producto);
    if (!this.ultimo) {
      this.primero = this.ultimo = nuevoNodo;
    } else {
      this.ultimo.siguiente = nuevoNodo;
      nuevoNodo.anterior = this.ultimo;
      this.ultimo = nuevoNodo;
    }
  }

  eliminarProducto(nombre) {
    let actual = this.primero;
    while (actual) {
      if (actual.producto.nombre === nombre) {
        if (!actual.anterior && !actual.siguiente) {
          this.primero = this.ultimo = null;
        } else if (!actual.anterior) {
          this.primero = actual.siguiente;
          this.primero.anterior = null;
        } else if (!actual.siguiente) {
          this.ultimo = actual.anterior;
          this.ultimo.siguiente = null;
        } else {
          actual.anterior.siguiente = actual.siguiente;
          actual.siguiente.anterior = actual.anterior;
        }
        return actual.producto;
      }
      actual = actual.siguiente;
    }
    return null;
  }

  obtenerProductos() {
    let productosStr = '';
    let actual = this.primero;
    while (actual) {
      productosStr += `${actual.producto.nombre} `;
      actual = actual.siguiente;
    }
    return productosStr.trim();
  }
}

export default ListaDoblementeEnlazada;
