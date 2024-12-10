const inputCity = document.querySelector("#inputCity")
const spanSearch = document.querySelector("#search")


spanSearch.addEventListener("click",()=>{
    let dataCity = inputCity.value 
    Weather.weatherGet(dataCity)
})



import { Weather } from "./weather.js"


// img src="img/clima_ensolarado.png" alt="">
//                 <article class="result">
//                     <div id="description">
//                         <p>Cidade</p>
//                         <p class="labels">Parcialmente nublado</p>
//                     </div>
//                     <div id="temperature">
//                         <p> 25°</p>
//                     </div>
//                 </article>