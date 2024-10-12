import ListaSimpleEnlazada from "./Lista.js";
import Producto from "./Producto.js";
import Nodo from "./Nodo.js";

class GestorProductos {
    constructor() {
        this.productos = new ListaSimpleEnlazada();
    }

    agregarProducto(nombre, precio) {
        const nuevoProducto = new Producto(nombre, precio);
        this.productos.agregar(nuevoProducto);
    }

    eliminarProducto(nombre) {
        this.productos.eliminar(nombre);
    }

    obtenerProductosOrdenados() {
        const listaOrdenada = new ListaSimpleEnlazada();
        let actual = this.productos.cabeza;
        
        // Extraer todos los productos y ordenarlos
        while (actual) {
            listaOrdenada.agregar(actual.producto); // Añadir a una nueva lista
            actual = actual.siguiente;
        }

        // Ordenar la lista enlazada (insertion sort)
        let ordenado = new ListaSimpleEnlazada();
        actual = listaOrdenada.cabeza;

        while (actual) {
            let actualOrdenado = ordenado.cabeza;
            const nuevoNodo = new Nodo(actual.producto);
            if (!actualOrdenado || actualOrdenado.producto.nombre > nuevoNodo.producto.nombre) {
                nuevoNodo.siguiente = ordenado.cabeza;
                ordenado.cabeza = nuevoNodo;
            } else {
                while (actualOrdenado.siguiente && actualOrdenado.siguiente.producto.nombre < nuevoNodo.producto.nombre) {
                    actualOrdenado = actualOrdenado.siguiente;
                }
                nuevoNodo.siguiente = actualOrdenado.siguiente;
                actualOrdenado.siguiente = nuevoNodo;
            }
            actual = actual.siguiente;
        }
        
        return ordenado; // Retornar la lista ordenada
    }

    calcularCostoTotal() {
        let total = 0;
        let actual = this.productos.cabeza;
        while (actual) {
            total += actual.producto.precio; // Sumar el precio
            actual = actual.siguiente;
        }
        return total; // Retornar el costo total
    }
}

export default GestorProductos;
