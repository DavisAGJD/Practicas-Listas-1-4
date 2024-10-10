// Manejador del DOM
import Numeros from "./Clases/Numeros.js";

document.getElementById("generateBtn").addEventListener("click", () => {
  const cantidad = document.getElementById("quantity").value;

  if (cantidad && cantidad > 0) {
    const listaNumeros = new Numeros(cantidad);
    listaNumeros.generarNumerosAleatorios();
    listaNumeros.clasificarNumeros();

    // Actualizar listas en el DOM
    actualizarListas(listaNumeros.obtenerPares(), "evenNumbers");
    actualizarListas(listaNumeros.obtenerImpares(), "oddNumbers");
  } else {
    alert("Por favor, ingrese una cantidad válida de números.");
  }
});

function actualizarListas(numeros, elementoId) {
  const lista = document.getElementById(elementoId);
  lista.innerHTML = ""; // Limpiar la lista anterior

  numeros.forEach((numero) => {
    const li = document.createElement("li");
    li.textContent = numero;
    lista.appendChild(li);
  });
}
