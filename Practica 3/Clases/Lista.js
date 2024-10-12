import Nodo from "./Nodo.js";

class ListaSimpleEnlazada {
    constructor() {
        this.cabeza = null;
    }

    agregar(alumno) {
        const nuevoNodo = new Nodo(alumno);
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

    obtenerAlumnos() {
        let actual = this.cabeza;
        let alumnosStr = '';
        while (actual) {
            alumnosStr += `${actual.alumno} `;
            actual = actual.siguiente;
        }
        return alumnosStr.trim();
    }
}

export default ListaSimpleEnlazada;
