let button= document.querySelector("#button");
button.addEventListener("click", function(){
    let celcius= parseInt(document.querySelector("#Celcius").value);
    let kelvin = celcius + 273.15;
    let farenheit= (celcius * 9)/5 + 32;
    let resultados= document.querySelector("#Resultados");
    /* resultados.textContent=`<h1>Los grados convertidos son: <br> Grados Kelvin: ${kelvin} <br> Grados Ferenheit: ${farenheit}`; */
    resultados.textContent="";
    /**
     * <div id="Resultados">
     *  -><h1> //21
     *   -> Los grados convertidos son: //22
     *   -> <br> //23
     *   ->  Grados Kelvin: ${kelvin}  //24
     *   ->  <br> //25
     *   ->  Grados Ferenheit: ${farenheit} //26
     * </h1>
     * </div>
     * <input value="">  
     * 
     * 
     */
    let elementoNuevo= document.createElement("h1");
    elementoNuevo.appendChild(document.createTextNode(`Los grados convertidos son:`));
    elementoNuevo.appendChild( document.createElement("br"));
    elementoNuevo.appendChild(document.createTextNode(` Grados Kelvin: ${kelvin}`));
    elementoNuevo.appendChild( document.createElement("br"));
    elementoNuevo.appendChild(document.createTextNode(`Grados Ferenheit: ${farenheit}`));
    resultados.appendChild(elementoNuevo);
    /* document.write("Resultado"); */
});

/**Mapa por google o sin mapa
 * selfie, acuerdo de privacidad
 * Clerky
Tally Legal

 */