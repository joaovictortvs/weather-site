let estado_clima = null

class Weather{
    static city = null
    static weather_state = null
    static temperature = null
    static img = null
    static endpoint = null

    static addShowWeather=(estadoClima, temperatura, img_f, cidade)=>{
        const showWeather = document.querySelector("#showWeather")
        showWeather.innerHTML = " "
        const img = document.createElement("img")
        img.setAttribute("src",img_f)
        showWeather.appendChild(img)

        const article = document.createElement("article")
        article.setAttribute("class","result")
        showWeather.appendChild(article)

        const div_description = document.createElement("div")
        div_description.setAttribute("id","description")
        article.appendChild(div_description)

        const p_cidade = document.createElement("p")
        p_cidade.innerHTML = cidade
        div_description.appendChild(p_cidade)

        const p_estadoClima = document.createElement("p")
        p_estadoClima.setAttribute("class","labels")
        p_estadoClima.innerHTML = estadoClima
        div_description.appendChild(p_estadoClima)

        const div_temperature = document.createElement("div")
        div_temperature.setAttribute("id","temperature")
        article.appendChild(div_temperature)

        const p_temperatura = document.createElement("p")
        p_temperatura.innerHTML = temperatura+"°"
        div_temperature.appendChild(p_temperatura)

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
    }

    static converterClima=(estadoClima, temperatura, cidade)=>{
        let EstadoClima = estadoClima
        let imgFoto = null
        if(EstadoClima == "Sunny"){
            EstadoClima = "Ensolarado"
            this.img = "../img/clima_ensolarado.png"
            imgFoto = this.img
        } else if(EstadoClima == "Partly cloudy"){
            EstadoClima = "Parcialmente nublado"
            this.img = "../img/clima_parcnub.png"
            imgFoto = this.img
        } else if(EstadoClima == "Mostly Sunny"){
            EstadoClima = "Predominantemente ensolarado"
            this.img = "../img/clima_parcial.png"
            imgFoto = this.img 
        } else{
            EstadoClima = "Céu limpo"
            this.img = "../img/ceulimpo.png"
            imgFoto = this.img
        }

        let v_temperatura = temperatura

        let n_cidade = cidade
        // console.log(EstadoClima)
        // console.log(v_temperatura)

        this.addShowWeather(EstadoClima, v_temperatura,imgFoto, n_cidade)
    }

    static weatherGet=(city)=>{
        this.city = city
        this.endpoint = "http://api.weatherstack.com/current?access_key=e7f10cc8ab0b1e0257c638ea96199500"
        fetch(this.endpoint+`&query=${city}`)
        .then(res => res.json())
        .then(res=>{
            console.log(res)
            this.weather_state = res.current.weather_descriptions[0]
            estado_clima = this.weather_state
            
            this.temperature = res.current.temperature
            console.log(this.temperature)

            this.converterClima(estado_clima,this.temperature,this.city)

        })
    }
}

console.log(estado_clima)


export { Weather }

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