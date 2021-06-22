 let subtitle = document.querySelector("#subtitle");
let parrafo = document.querySelector("#parrafo");
console.log(subtitle);
console.log(subtitle.textContent);
subtitle.textContent ="Nuevo valor";


subtitle.classList.add("red");

subtitle.classList.remove("red");

const animales=["Perro","Gato","Mapache","Pez","Leopardo","Raton","Zorro"];
const list = document.querySelector("#list");

animales.push("Elefante");

animales.forEach(function(animal){
    let item=document.createElement("li");
    item.textContent=animal;
    list.appendChild(item);
});

