/* var parrafos = document.getElementsByClassName("parrafo");
console.log(parrafos);

document.getElementsByClassName("parrafo")[0].innerHTML="Parrafo cambiado dinamicamente";
document.getElementById("parrafo2").innerHTML= "Soy el parrafo 2";

var i;
for(i=0;i<parrafos.length;i++){
    if(i%2==0){
        parrafos[i].innerHTML="Cambio";
    }
}
 */

document.querySelector(".parrafo").textContent="Nuevo texto de parrafo";
document.querySelectorAll(".parrafo")[2].textContent="Nuevo texto de parrafo";

var parrafo1 = document.querySelectorAll(".parrafo")[0];
var parrafo2 = document.querySelector("#parrafo2");

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(parrafo1);
console.log(parrafo2);