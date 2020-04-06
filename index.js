import "./style.css"
import "@fortawesome/fontawesome-free/css/all.css"

var i = 0;
var txt = "Lorem ipsum dolor sit amet consectetu";
var speed = 50;


function typeWriter() {
    if (i < txt.length) {
        document.getElementById("intro").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


window.onload = typeWriter;