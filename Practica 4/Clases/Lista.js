import Nodo from "./Nodo.js";

class ListaSimpleEnlazada {
    constructor() {
        this.cabeza = null;
    }

    // Método para agregar un nuevo nodo al final de la lista
    agregar(producto) {
        const nuevoNodo = new Nodo(producto);
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

    // Método para eliminar un nodo por su clave (nombre del producto)
    eliminar(nombreProducto) {
        if (!this.cabeza) return;

        if (this.cabeza.producto.nombre === nombreProducto) {
            this.cabeza = this.cabeza.siguiente;
            return;
        }

        let actual = this.cabeza;
        while (actual.siguiente && actual.siguiente.producto.nombre !== nombreProducto) {
            actual = actual.siguiente;
        }

        if (actual.siguiente) {
            actual.siguiente = actual.siguiente.siguiente;
        }
    }

    // Método para obtener los productos en forma de array
    obtenerProductos() {
        let actual = this.cabeza;
        const productos = [];
        while (actual) {
            productos.push(actual.producto);
            actual = actual.siguiente;
        }
        return productos;
    }
}

export default ListaSimpleEnlazada;