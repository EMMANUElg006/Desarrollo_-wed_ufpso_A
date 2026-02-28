let tareas =0;

document.getElementById("agregar").addEventListener("click",agregarTarea);
function agregarTarea(){
    const tarea = document.getElementById("TAREA").value;
    if(tarea !== ""){
        const lista = document.getElementById("lista");
        const item = document.createElement("li");
        item.innerHTML = `
        <span>${tarea}</span>
        <button class="eliminar-tarea">Eliminar</button>
        `;

        lista.appendChild(item);
        document.getElementById("TAREA").value = "";
        tareas++;
        actualizarContador();

        item.querySelector(".eliminar-tarea").addEventListener("click",() =>{
            lista.removeChild(item);
            tareas--;
            actualizarContador();
        });

        function actualizarContador(){
            document.getElementById("contador").textContent = `tareas: ${tareas}`;
        }
    }
}