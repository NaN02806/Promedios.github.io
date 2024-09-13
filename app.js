// Arreglo de estudiantes
const estudiantes = [
    { nombre: 'Juan', calificacion: 20 },
    { nombre: 'Naysha', calificacion: 10 },
    { nombre: 'Piero', calificacion: 12 },
    { nombre: 'Rosa', calificacion: 9 },
    { nombre: 'Luigi', calificacion: 15 },
    { nombre: 'Andrea', calificacion: 17 },
    { nombre: 'Marcos', calificacion: 16 },
    { nombre: 'Luz', calificacion: 18 },
    { nombre: 'Diego', calificacion: 20 },
    { nombre: 'Isabel', calificacion: 5 }
  ];
  
  // Función para calcular el promedio de las calificaciones
  function calcularPromedio(estudiantes) {
    let suma = 0;
    for (let i = 0; i < estudiantes.length; i++) {
      suma += estudiantes[i].calificacion;
    }
    return suma / estudiantes.length;
  }
  
  // Función para mostrar estudiantes en la tabla
  function mostrarEstudiantes(estudiantes, tablaId) {
    const tabla = document.getElementById(tablaId);
    
    estudiantes.forEach(estudiante => {
      const fila = document.createElement('tr');
      fila.innerHTML = `<td>${estudiante.nombre}</td><td>${estudiante.calificacion}</td>`;
      tabla.appendChild(fila);
    });
  }
  
  // Ordenar estudiantes por calificación (mayor a menor)
  const estudiantesOrdenados = estudiantes.slice().sort((a, b) => b.calificacion - a.calificacion);
  
  // Obtener los 5 mejores y 5 peores estudiantes
  const mejoresEstudiantes = estudiantesOrdenados.slice(0, 5);
  const peoresEstudiantes = estudiantesOrdenados.slice(-5);
  
  // Calcular los promedios de los 5 mejores y 5 peores
  const promedioGeneral = calcularPromedio(estudiantes);
  const promedioMejores = calcularPromedio(mejoresEstudiantes);
  const promedioPeores = calcularPromedio(peoresEstudiantes);
  
  // Mostrar todos los estudiantes
  mostrarEstudiantes(estudiantes, 'todos');
  
  // Mostrar los 5 mejores estudiantes
  mostrarEstudiantes(mejoresEstudiantes, 'mejores');
  
  // Mostrar los 5 peores estudiantes
  mostrarEstudiantes(peoresEstudiantes, 'peores');
  
  // Mostrar los promedios en el HTML
  document.getElementById('promedio-general').textContent = promedioGeneral.toFixed(2);
  document.getElementById('promedio-mejores').textContent = promedioMejores.toFixed(2);
  document.getElementById('promedio-peores').textContent = promedioPeores.toFixed(2);
  