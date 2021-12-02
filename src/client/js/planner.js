//antikatestise to me to validator

import { dataFromAPI } from "./postrequest";
import { updateUI } from "./updateUI";

let button=document.getElementById('generate')

button.addEventListener('click', function(e) {
    e.preventDefault();
    returnResults(e)
})

function returnResults(e) {
    let cityUserInput = document.getElementById('city')
    let dateUserInput = document.getElementById('date')

    let userInput = {city: cityUserInput.value, date: dateUserInput.value};

    dataFromAPI(userInput)
    .then(async projectData => {
        const projectDataJSON = await projectData.json();
        updateUI(projectDataJSON)
    })
}

export { returnResults }