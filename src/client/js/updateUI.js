import { timeToTrip } from "./time";

function updateUI(projectData) {
    
    let results = document.getElementById('results');
    let city = document.getElementById('citySection');
    //let date = document.getElementById('dateSection');
    let weather = document.getElementById('weatherSection');

    city.innerHTML=`
    <h3> You are travelling in ${timeToTrip(projectData.date)/(1000*60*60*24)}</h3>
    <div> Be prepared for the ${projectData.date} ! </div>
    <div> Your trip to ${projectData.city} is coming </div>
    <div> 
        <img src=${projectData.img} alt="Photo of the city">
    </div>
    `

    weather.innerHTML=`
    <h3> The temperature now is ${projectData.temp}</h3>
    <h3> and looks like:
    ${projectData.weather}
    <div>
    <img src="https://www.weatherbit.io/static/img/icons/${projectData.icon}.png" alt="weather looks like">
    </div>
    `

}
//I found the weather icons address by right-clicking on an icon

export { updateUI }