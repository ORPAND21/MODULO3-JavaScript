// Inicialización del programa
console.log("!Bienvenido al Sistema de Interactivo de Mensaje!")

let nombre = prompt("Por favor, ingresa tu nombre")
let edad = prompt("Por favor, ingresa tu edad")

// Convertir edad a número
edad = parseInt(edad)

//Código para Validación y Mensajes:
if (isNaN(edad)) {
    console.error("Error: Por favor, ingresa una edad válida en números.");
} else if (edad < 18) {
    alert(`Hola ${nombre}, eres menor de edad. !Sigue aprendiendo y disfrutando del código!`);
} else {
    alert(`Hola ${nombre}, eres mayor de edad. !Preparáte para grandes oportunidades en el mundo de la
        programacion!`);
}