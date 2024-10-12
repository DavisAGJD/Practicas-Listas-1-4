import Numeros from "./Clases/Numeros.js";

document.getElementById("generateBtn").addEventListener("click", () => {
  const cantidad = document.getElementById("quantity").value;

  if (cantidad && cantidad > 0) {
    const listaNumeros = new Numeros(cantidad);
    listaNumeros.generarNumerosAleatorios();
    listaNumeros.clasificarNumeros();

    actualizarListas(listaNumeros.obtenerPares(), "evenNumbers");
    actualizarListas(listaNumeros.obtenerImpares(), "oddNumbers");
  } else {
    alert("Por favor, ingrese una cantidad válida de números.");
  }
});

function actualizarListas(listaNumeros, elementoId) {
  const lista = document.getElementById(elementoId);
  lista.innerHTML = ""; 

  let actual = listaNumeros.cabeza; 
  while (actual) {
    const li = document.createElement("li");
    li.textContent = actual.dato; 
    lista.appendChild(li);
    actual = actual.siguiente;
  }
}
