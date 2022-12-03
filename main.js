let task = []

document.addEventListener("DOMContentLoaded",function(event){
console.log("contenido cargado")
let lista = document.getElementById("lista")
let arrayTasks = JSON.parse(localStorage.getItem("tasks"))
if (arrayTasks === null){
    localStorage.setItem("tasks","[]")
    arrayTasks = []
}
let items = arrayTasks.map((e, index) =>{
    return `<li>${e.tarea} <button onclick="deleteTask(${index})"> Delete </button> <button onclick="editTask(${index})"> Edit </button> </li>`
})
lista.innerHTML = items.join(" ")
})


function newTask(){
let inputTask = document.getElementById("inputTask").value
let savedTasks = JSON.parse(localStorage.getItem("tasks"))
savedTasks.push({ tarea: inputTask})
localStorage.setItem("tasks",JSON.stringify(savedTasks))
window.location.reload()
}

function deleteTask(index) {
    let savedTasks = JSON.parse(localStorage.getItem("tasks"))
    savedTasks.splice(index,1);
    localStorage.setItem("tasks",JSON.stringify(savedTasks))
    window.location.reload()
}

