import GestorProductos from "./Clases/Gestor.js";

const gestor = new GestorProductos();

document.getElementById("addProductBtn").addEventListener("click", () => {
    const nombre = document.getElementById("productName").value;
    const precio = parseFloat(document.getElementById("productPrice").value);

    if (nombre && precio > 0) {
        gestor.agregarProducto(nombre, precio);

        // Actualizar las listas en el DOM
        actualizarListaProductos();
    } else {
        alert("Por favor, ingrese un nombre y un precio válido.");
    }
});

document.getElementById("removeProductBtn").addEventListener("click", () => {
    const nombre = document.getElementById("productKey").value;

    if (nombre) {
        gestor.eliminarProducto(nombre);

        // Actualizar las listas en el DOM
        actualizarListaProductos();
    } else {
        alert("Por favor, ingrese una clave de producto válida.");
    }
});

function actualizarListaProductos() {
    const productosOrdenados = gestor.obtenerProductosOrdenados();
    const lista = document.getElementById("sortedProducts");
    lista.innerHTML = ""; 

    let actual = productosOrdenados.cabeza;
    while (actual) {
        const li = document.createElement("li");
        li.textContent = `${actual.producto.nombre} - Precio: $${actual.producto.precio}`; 
        lista.appendChild(li);
        actual = actual.siguiente; 
    }

    const totalCost = gestor.calcularCostoTotal();
    document.getElementById("totalCost").textContent = totalCost.toFixed(2); 
}