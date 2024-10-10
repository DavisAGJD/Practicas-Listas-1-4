import Nodo from "./Nodo.js";

class ListaSimpleEnlazada {
    constructor() {
        this.cabeza = null;
    }

    // Método para agregar un nuevo nodo al final de la lista
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

    // Método para recorrer la lista y devolver los alumnos
    obtenerAlumnos() {
        let actual = this.cabeza;
        const alumnos = [];
        while (actual) {
            alumnos.push(actual.alumno);
            actual = actual.siguiente;
        }
        return alumnos;
    }
}

export default ListaSimpleEnlazada;