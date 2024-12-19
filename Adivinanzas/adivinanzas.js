var numeroSecreto = Math.floor(Math.random() * 100) + 1;
var intentos = 0;
var maxIntentos = 5;

function adivinar() {
    var adivinanza = parseInt(document.getElementById("adivinanza").value);
    intentos++;
    
    if (adivinanza === numeroSecreto) {
        document.getElementById("mensaje").innerHTML = "¡Correcto! El número era " + numeroSecreto;
        document.body.style.backgroundColor = "green";
    } else if (intentos >= maxIntentos) {
        document.getElementById("mensaje").innerHTML = "¡Has perdido! El número era " + numeroSecreto;
        document.body.style.backgroundColor = "red";
    } else if (adivinanza > numeroSecreto) {
        document.getElementById("mensaje").innerHTML = "Demasiado alto. Intenta de nuevo. Intentos restantes: " + (maxIntentos - intentos);
    } else {
        document.getElementById("mensaje").innerHTML = "Demasiado bajo. Intenta de nuevo. Intentos restantes: " + (maxIntentos - intentos);
    }
}

function reiniciar() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    document.getElementById("adivinanza").value = "";
    document.getElementById("mensaje").innerHTML = "";
    document.body.style.backgroundColor = "white";
}