import "@fortawesome/fontawesome-free/css/all.css"

var i = 0;
var txtLenguajes = "HTML, CSS y JavaScript comforman el grupo de los lenguajes usados en el desarrollo front-end... ¿Sobre qué lenguaje te gustaría saber más?"
var txtModule = "Los module bundlers son herramientas de desarrollo front-end que permiten empaquetar módulos de JavaScript en un único archivo de JavaScript que ha sido optimizado... ¿Sobre qué module bundler te gustaría saber más?"
var speed = 50;


function typeWriter() {

    if (document.getElementById("introLenguajes")) {
        if (i < txtLenguajes.length) {
            document.getElementById("introLenguajes").innerHTML += txtLenguajes.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    } else {
        if (i < txtModule.length) {
            document.getElementById("introModule").innerHTML += txtModule.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }


}

window.onload = typeWriter;