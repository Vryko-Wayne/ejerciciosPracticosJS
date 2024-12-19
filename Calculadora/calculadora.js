function sumar() {
    if (validar() === false) {  
        return;
    }
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "Resultado: " + (num1 + num2);
}

function restar() {
    if (validar() === false) {
        return; 
    }
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "Resultado: " + (num1 - num2);
}

function multiplicar() {
    if (validar() === false) {
        return;     
    }
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "Resultado: " + (num1 * num2);
}

function dividir() {
    if (validar() === false) {
        return;
    }   
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "Resultado: " + (num1 / num2);
}

function limpiar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").innerHTML = "";
}

function validar() {
    var nume1 = document.getElementById("num1").value;
    var nume2 = document.getElementById("num2").value;

    if (nume1 === "") {
        document.getElementById("resultado").innerHTML = "No puede estar vacío.";
        return false;
    }
    if (nume2 === "") {
        document.getElementById("resultado").innerHTML = "No puede estar vacío.";
        return false;
     }

    return true;
}
