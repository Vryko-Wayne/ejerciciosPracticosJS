function agregarTarea() {
    var tarea = document.getElementById("tarea").value;
    if (tarea) {
        var li = document.createElement("li");
        li.textContent = tarea;
        li.onclick = function() {
            this.parentNode.removeChild(this);
        };
        document.getElementById("lista").appendChild(li);
        document.getElementById("tarea").value = "";
    }
}
