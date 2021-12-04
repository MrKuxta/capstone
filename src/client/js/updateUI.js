import { timeToTrip } from "./time";
import { today } from "./time";

function updateUI(projectData) {
    
    let results = document.getElementById('results');
    let city = document.getElementById('citySection');
    //let date = document.getElementById('dateSection');
    let weatherSec = document.getElementById('weatherSection');


    city.innerHTML=`
    <h3> Today is: ${today()} </h3>
    <h3> You are travelling in ${timeToTrip(projectData.date)/(1000*60*60*24)} days!</h3>
    <div> Be prepared for the ${projectData.date} ! </div>
    <div> Your trip to ${projectData.cityName} is coming </div>
    <div> 
        <img src=${projectData.img} alt="Photo of the city">
    </div>
    `

    weatherSec.innerHTML=`
    <h3> The temperature now is ${projectData.tempOut}</h3>
    <h3> and looks like:
    ${projectData.weatherOut}
    <div>
    <img src="https://www.weatherbit.io/static/img/icons/${projectData.iconOut}.png" alt="weather looks like">
    </div>
    `

}
//I found the weather icons address by right-clicking on an icon

export { updateUI }