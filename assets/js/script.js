let ul = document.querySelector("#tarea");
let input = document.querySelector("#nuevatarea");
let boton = document.querySelector("#agregartarea");

let tareas = [
    {id:"", tarea:""}
];

boton.addEventListener("click", () => {;
    if (input.value === "") { return }
    {    
    let nuevatarea = { id: Date.now(), tarea: input.value };
    console.log(nuevatarea);
    tareas.unshift(nuevatarea);
    renderizartareas();
    input.value = "";
    }
})

function renderizartareas() {
    let templatetareas = "";

    for (tarea of tareas) {
    templatetareas += 
        `<li> ${tarea.tarea} 
            <input type="checkbox"></input>
            <button onclick="borrartarea(${tarea.id})">Borrar</button>
        </li>`;
    contadortareas();
}
    ul.innerHTML = templatetareas;
}

function borrartarea(id) {
    let indicetarea = tareas.findIndex(tarea => tarea.id === id);
    tareas.splice(indicetarea, 1);
    renderizartareas();
}

function contadortareas() {
    let total = tareas.length;
    console.log(total)
    let realizadas = tareas.filter(tarea => tarea.realizada).length;
    document.querySelector("#total").textContent = "Total: " + total;
    document.querySelector("#realizadas").textContent = "Realizadas: " + realizadas;
}

//let templatetarea = ""
//function actualizarcontador(params) {

//}
