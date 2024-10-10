import ListaSimpleEnlazada from "./Lista.js";
import Producto from "./Producto.js";

class GestorProductos {
    constructor() {
        this.productos = new ListaSimpleEnlazada();
    }

    // Método para agregar producto
    agregarProducto(nombre, precio) {
        const nuevoProducto = new Producto(nombre, precio);
        this.productos.agregar(nuevoProducto);
    }

    // Método para eliminar producto por nombre
    eliminarProducto(nombre) {
        this.productos.eliminar(nombre);
    }

    // Obtener productos ordenados por nombre
    obtenerProductosOrdenados() {
        const productos = this.productos.obtenerProductos();
        return productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    // Calcular el costo total de los productos
    calcularCostoTotal() {
        const productos = this.productos.obtenerProductos();
        return productos.reduce((total, producto) => total + producto.precio, 0);
    }
}

export default GestorProductos;