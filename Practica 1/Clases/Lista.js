import Nodo from "./Nodo.js";

class ListaDoblementeEnlazada {
  constructor() {
    this.primero = null;
    this.ultimo = null;
  }

  // Añadir producto al final de la lista
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

  // Eliminar producto por nombre
  eliminarProducto(nombre) {
    let actual = this.primero;
    while (actual) {
      if (actual.producto.nombre === nombre) {
        // Si es el único nodo
        if (!actual.anterior && !actual.siguiente) {
          this.primero = this.ultimo = null;
        }
        // Si es el primer nodo
        else if (!actual.anterior) {
          this.primero = actual.siguiente;
          this.primero.anterior = null;
        }
        // Si es el último nodo
        else if (!actual.siguiente) {
          this.ultimo = actual.anterior;
          this.ultimo.siguiente = null;
        }
        // Si está en el medio
        else {
          actual.anterior.siguiente = actual.siguiente;
          actual.siguiente.anterior = actual.anterior;
        }
        return actual.producto; // Retorna el producto eliminado
      }
      actual = actual.siguiente;
    }
    return null; // Si no encuentra el producto
  }

  // Obtener todos los productos
  obtenerProductos() {
    let productos = [];
    let actual = this.primero;
    while (actual) {
      productos.push(actual.producto);
      actual = actual.siguiente;
    }
    return productos;
  }
}

export default ListaDoblementeEnlazada;
