const animales=["Perro","Gato","Pato","Leopardo","Elefante","Hipopotamo","Castor","Zorro","Raton","Rinoceronte"];
const marcasPC = ["HP","Dell","IBM","Asus","Toshiba","Alienware","Apple","Samsung","Huawei","Lenovo"];
const nombres=["Santiago","Tamara","Cesar","Gabriela","Ana","Esteban","Diego","Alberto","Felipe","Claudia"];

let lista=document.querySelector("#lista");
let lista1= document.querySelector("#animales");
let lista2= document.querySelector("#marcas");
let lista3= document.querySelector("#companeros");


function inicializar(){
    displayList(lista1,animales);
    displayList(lista2,marcasPC);
    displayList(lista3,nombres);
}


function displayList(boton,unaLista){
    boton.addEventListener("click", function(){
        lista.textContent="";
        unaLista.forEach(elemento => {
            let item=document.createElement("li");
            item.textContent=elemento;
            lista.appendChild(item);
        });
    })
}


inicializar();

/* lista1.addEventListener("click",function(){
    lista.textContent="";
    animales.forEach(function(animal){
        let item=document.createElement("li");
        item.textContent=animal;
        lista.appendChild(item);
    });
    
});

lista2.addEventListener("click",function(){
    lista.textContent="";
    marcasPC.forEach(function(marcas){
        let item=document.createElement("li");
        item.textContent=marcas;
        lista.appendChild(item);
    });
    
});

lista3.addEventListener("click",function(){
    lista.textContent="";
    nombres.forEach(function(personas){
        let item=document.createElement("li");
        item.textContent=personas;
        lista.appendChild(item);
    });
});

*/