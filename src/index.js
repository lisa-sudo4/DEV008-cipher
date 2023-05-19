
import cipher from './cipher.js';
//window.addEventListener("load", function, true)

//Constantes del HTML que atraen la informacion y la guardan--
const botonMensaje = document.getElementById("mensaje");
const botonCifrado = document.getElementById("cifrar");
const botonDesifrado = document.getElementById("descifrar");

//Uso del addEventListener--

botonMensaje.addEventListener("keyup", function () {

    let msja = document.getElementById("mensaje").value;
    msja.toUpperCase(); 
    document.getElementById("mensaje").value = msja.toUpperCase();
}, true);

botonCifrado.addEventListener("click", function () {
    let offset = document.getElementById("desplazamiento").value;
    let string = document.getElementById("mensaje").value;
    
    document.getElementById("mensaje2").value = cipher.encode(offset, string); 
}, true);

botonDesifrado.addEventListener("click", function () {
    let string = document.getElementById("mensaje").value;
    let offset = document.getElementById("desplazamiento").value;
    document.getElementById("mensaje2").value = cipher.decode(offset, string);

}, true);






//function inicio(){

// document.getElementById("mensaje").addEventListener("keyUp", function(){
//        this.value = this.value.toUpperCase();
// }, true);

/*document.getElementById("cifrar").addEventListener("click", function(){
               
   
}, true);

document.getElementById("descifrar").addEventListener("click", function(){
                let string = document.getElementById("mensaje").value; 
                let offset = document.getElementById("desplazamiento").value; 
    document.getElementById("mensaje2").value = descifrar(string, offset);
}, true);
//}*/

console.log(cipher);
