
const btn = document.getElementById('btn')

const API_key="4eb61b54293d512823f5127030836174"

// fetch() function

// btn.addEventListener('click',(e)=>{
//     e.preventDefault()

// const input = document.getElementById('input').value
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_key}`

// const temp = document.getElementById('temp')
// const city = document.getElementById('city')
// const wind = document.getElementById('wind')
   
//     fetch(url)
//     .then((response)=>response.json())
//     .then((data)=>{console.log(data)
//         city.innerHTML = `"${data.name} "weather is :`
//         temp.innerHTML = `- Temperature is about: ${data.main.temp} °C`
//          wind.innerHTML=`- The speed of wind is about: ${data.wind.speed}`
//     })
//     .catch((err)=>{console.error(err)})
//    })


//axios module

btn.addEventListener('click',(e)=>{
       e.preventDefault()
    
    const input = document.getElementById('input').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_key}`
    
    const temp = document.getElementById('temp')
    const city = document.getElementById('city')
    const wind = document.getElementById('wind')
    
    axios.get(url)
    .then((response)=>{ const data = response.data
        console.log(data)
        city.innerHTML = `"${data.name} "weather is :`
        temp.innerHTML = `- Temperature is about: ${data.main.temp} °C`
        wind.innerHTML=`- The speed of wind is about: ${data.wind.speed}`
    })

    .catch((err)=>{console.error(err)})
    })