import Nodo from "./Nodo.js";

class ListaSimpleEnlazada {
    constructor() {
        this.cabeza = null;
    }

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

    obtenerProductos() {
        let actual = this.cabeza;
        let productosStr = ''; 
        while (actual) {
            productosStr += `${actual.producto.nombre} - $${actual.producto.precio} \n`; 
            actual = actual.siguiente;
        }
        return productosStr.trim(); 
    }
}

export default ListaSimpleEnlazada;
