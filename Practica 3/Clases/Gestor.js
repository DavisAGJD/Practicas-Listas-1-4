// Clase principal que gestiona a los alumnos y las listas
import ListaSimpleEnlazada from "./Lista.js";
import Alumno from "./Alumno.js";

class GestorAlumnos {
  constructor() {
    this.alumnosAprobados = new ListaSimpleEnlazada();
    this.alumnosReprobados = new ListaSimpleEnlazada();
  }

  // Método para agregar alumno y clasificar si aprobó o reprobó
  agregarAlumno(nombre, calificacion) {
    const nuevoAlumno = new Alumno(nombre, calificacion);
    if (calificacion >= 7) {
      this.alumnosAprobados.agregar(nuevoAlumno);
    } else {
      this.alumnosReprobados.agregar(nuevoAlumno);
    }
  }

  // Obtener aprobados
  obtenerAprobados() {
    return this.alumnosAprobados.obtenerAlumnos();
  }

  // Obtener reprobados
  obtenerReprobados() {
    return this.alumnosReprobados.obtenerAlumnos();
  }
}

export default GestorAlumnos;