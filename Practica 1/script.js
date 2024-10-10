import ListaDoblementeEnlazada from "./Clases/Lista.js";
import Producto from "./Clases/Producto.js";

const listaProductos = new ListaDoblementeEnlazada();
const listaRetirados = new ListaDoblementeEnlazada();
let contadorProductos = 1; // Contador para los nombres aleatorios

// Función para actualizar las listas de productos
function actualizarListas() {
    const productosDisponibles = document.getElementById('availableProducts');
    const productosRetirados = document.getElementById('removedProducts');

    productosDisponibles.innerHTML = '';
    productosRetirados.innerHTML = '';

    // Mostrar productos disponibles con botones para eliminar
    listaProductos.obtenerProductos().forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad}, Precio: $${producto.precio}`;

        // Crear botón de eliminar
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.style.marginLeft = '20px';
        eliminarBtn.addEventListener('click', () => {
            eliminarProducto(producto.nombre); // Llamar a la función para eliminar por nombre
        });

        li.appendChild(eliminarBtn);
        productosDisponibles.appendChild(li);
    });

    // Mostrar productos retirados
    listaRetirados.obtenerProductos().forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad}, Precio: $${producto.precio}`;
        productosRetirados.appendChild(li);
    });
}

// Añadir producto manual
document.getElementById('addProductBtn').addEventListener('click', () => {
    const nombre = document.getElementById('productName').value;
    const cantidad = document.getElementById('productQuantity').value;
    const precio = document.getElementById('productPrice').value;

    if (nombre && cantidad && precio) {
        const nuevoProducto = new Producto(nombre, cantidad, precio);
        listaProductos.añadirProducto(nuevoProducto);
        actualizarListas();
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
    listaProductos.añadirProducto(nuevoProducto);
    actualizarListas();
}

// Función para eliminar un producto por nombre
function eliminarProducto(nombre) {
    const productoEliminado = listaProductos.eliminarProducto(nombre);
    if (productoEliminado) {
        listaRetirados.añadirProducto(productoEliminado);
        actualizarListas();
    } else {
        alert('El producto no se encontró.');
    }
}
