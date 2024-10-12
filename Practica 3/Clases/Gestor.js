import ListaSimpleEnlazada from "./Lista.js";

class GestorAlumnos {
    constructor() {
        this.alumnos = new ListaSimpleEnlazada(); 
    }

    agregarAlumno(nombre, calificacion) {
        const alumno = { nombre, calificacion }; 
        this.alumnos.agregar(alumno); 
    }

    obtenerAprobados() {
        const aprobados = new ListaSimpleEnlazada();
        let actual = this.alumnos.cabeza;
        while (actual) {
            if (actual.alumno.calificacion >= 7) { 
                aprobados.agregar(actual.alumno); 
            }
            actual = actual.siguiente;
        }
        return aprobados; 
    }

    obtenerReprobados() {
        const reprobados = new ListaSimpleEnlazada();
        let actual = this.alumnos.cabeza;
        while (actual) {
            if (actual.alumno.calificacion < 7) { 
                reprobados.agregar(actual.alumno); 
            }
            actual = actual.siguiente;
        }
        return reprobados; 
    }
}

export default GestorAlumnos;
