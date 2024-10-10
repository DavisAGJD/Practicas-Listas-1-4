// Manejador del DOM
import GestorAlumnos from "./Clases/Gestor.js";

const gestor = new GestorAlumnos();

document.getElementById('addStudentBtn').addEventListener('click', () => {
    const nombre = document.getElementById('studentName').value;
    const calificacion = document.getElementById('studentGrade').value;
    
    if (nombre && calificacion) {
        gestor.agregarAlumno(nombre, parseFloat(calificacion));

        // Actualizar las listas en el DOM
        actualizarListas(gestor.obtenerAprobados(), 'approvedStudents');
        actualizarListas(gestor.obtenerReprobados(), 'failedStudents');
    } else {
        alert('Por favor, ingrese un nombre y una calificación válida.');
    }
});

function actualizarListas(alumnos, elementoId) {
    const lista = document.getElementById(elementoId);
    lista.innerHTML = ''; // Limpiar la lista anterior

    alumnos.forEach(alumno => {
        const li = document.createElement('li');
        li.textContent = `${alumno.nombre} - Calificación: ${alumno.calificacion}`;
        lista.appendChild(li);
    });
}