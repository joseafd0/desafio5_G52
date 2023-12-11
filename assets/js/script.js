const listaTareas = document.querySelector("#tareas");
const tareasTotales = document.querySelector("#tareasTotales");
const tareasCompletadas = document.querySelector("#tareasCompletadas");

const nombresTareas = [
  { id: 1, nombre: "Hacer compras" },
  { id: 2, nombre: "Estudiar para examen" },
  { id: 3, nombre: "Pasear al perro" },
];


// AGREGAR LAS TAREAS
const agregarTarea = () => {
  const valorCaja = document.querySelector("#caja");
  const tarea = {
    id: Math.floor(Math.random() * 100),
    nombre: valorCaja.value,
    status: false,
  };

  nombresTareas.push(tarea);
  actualizarLista();
  valorCaja.value = "";
};


// ELIMINAR LAS TAREAS
const eliminarTarea = (id) => {
  const posicion = nombresTareas.findIndex((tarea) => tarea.id == id);
  nombresTareas.splice(posicion, 1);
  actualizarLista();
};


// SELECCIONAR Y CONTAR LAS TAREAS
const tareaRealizada = () => {
  const idStatus = nombresTareas.filter((tarea) => tarea.status == true);
  return idStatus.length;
};

const checkId = (id, check) => {
  const idChequeado = nombresTareas.findIndex((tarea) => tarea.id == id);
  nombresTareas[idChequeado].status = check.checked;
  tareasCompletadas.innerHTML = tareaRealizada();
};


// AUTOREFRESH
const actualizarLista = function () {
  let htmlElemento = "";
  for (let tarea of nombresTareas) {
    htmlElemento += `
    <li> ${tarea.id} - ${
      tarea.nombre
    } - <input type="checkbox" onClick="checkId(${tarea.id}, this ${
      tarea.status ? "checked" : ""
    } - <button onClick="eliminarTarea(${
      tarea.id
    })"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
      </svg> </button> </li>
      `;
  }
  listaTareas.innerHTML = htmlElemento;

  tareasTotales.innerHTML = nombresTareas.length;
  tareasCompletadas.innerHTML = tareaRealizada();
};
actualizarLista();
