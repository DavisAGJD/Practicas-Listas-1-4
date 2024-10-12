import ListaDoblementeEnlazada from "./Clases/Lista.js";
import Producto from "./Clases/Producto.js";

const listaProductos = new ListaDoblementeEnlazada();
const listaRetirados = new ListaDoblementeEnlazada();
let contadorProductos = 1; // Contador para los nombres aleatorios

function actualizarListas() {
    const productosDisponibles = document.getElementById('availableProducts');
    const productosRetirados = document.getElementById('removedProducts');

    productosDisponibles.innerHTML = ''; // Limpiar lista de disponibles
    productosRetirados.innerHTML = ''; // Limpiar lista de retirados

    // Mostrar productos disponibles
    let actual = listaProductos.primero; // Comenzar desde el primer nodo
    while (actual) {
        const li = document.createElement('li');
        li.textContent = `${actual.producto.nombre} - Cantidad: ${actual.producto.cantidad}, Precio: $${actual.producto.precio}`;

        // Crear botón de eliminar
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.style.marginLeft = '20px';

        // Usar closure para capturar el nombre del producto correctamente
        eliminarBtn.addEventListener('click', (function(nombre) {
            return function() {
                eliminarProducto(nombre); // Llamar a la función para eliminar por nombre
            };
        })(actual.producto.nombre)); // Capturamos el nombre del producto

        li.appendChild(eliminarBtn);
        productosDisponibles.appendChild(li);
        actual = actual.siguiente; // Mover al siguiente nodo
    }

    // Mostrar productos retirados
    actual = listaRetirados.primero; // Comenzar desde el primer nodo
    while (actual) {
        const li = document.createElement('li');
        li.textContent = `${actual.producto.nombre} - Cantidad: ${actual.producto.cantidad}, Precio: $${actual.producto.precio}`;
        productosRetirados.appendChild(li);
        actual = actual.siguiente; // Mover al siguiente nodo
    }
}

// Añadir producto manual
document.getElementById('addProductBtn').addEventListener('click', () => {
    const nombre = document.getElementById('productName').value;
    const cantidad = document.getElementById('productQuantity').value;
    const precio = document.getElementById('productPrice').value;

    if (nombre && cantidad && precio) {
        const nuevoProducto = new Producto(nombre, cantidad, precio);
        listaProductos.añadirProducto(nuevoProducto); // Añadir el producto a la lista
        actualizarListas(); // Actualizar la vista
    } else {
        alert('Por favor, rellene todos los campos.');
    }
});

// Añadir producto aleatorio
document.getElementById('addRandomProductBtn').addEventListener('click', () => {
    agregarProductoAleatorio();
});

function agregarProductoAleatorio() {
    const nombreAleatorio = `ProductoA.${contadorProductos++}`; // Nombres como ProductoA.1, ProductoA.2, etc.
    const cantidadAleatoria = Math.floor(Math.random() * 10) + 1; // Cantidad aleatoria entre 1 y 10
    const precioAleatorio = (Math.random() * 100).toFixed(2); // Precio aleatorio entre 0 y 100

    const nuevoProducto = new Producto(nombreAleatorio, cantidadAleatoria, precioAleatorio);
    listaProductos.añadirProducto(nuevoProducto); // Añadir el producto a la lista
    actualizarListas(); // Actualizar la vista
}

// Función para eliminar un producto por nombre
function eliminarProducto(nombre) {
    const productoEliminado = listaProductos.eliminarProducto(nombre); // Eliminar el producto
    if (productoEliminado) {
        listaRetirados.añadirProducto(productoEliminado); // Añadir a la lista de retirados
        actualizarListas(); // Actualizar la vista
    } else {
        alert('El producto no se encontró.');
    }
}
