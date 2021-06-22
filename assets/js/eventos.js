
window.onload=function(){
    
}

let nameInput = document.querySelector("#nameInput");

nameInput.addEventListener('keyup', function(event){
    console.log(nameInput.value);
});

let button=document.querySelector("#button");

button.addEventListener("click", function(){
    let nameHeader=document.querySelector("#nameH");
    nameHeader.textContent=nameInput.value;
});
//change, keyup, keydown