//antikatestise to me to submit TO BE DELETED

//post request to return the data from the APIs and the server

async function dataFromAPI (userInput) {

    //use absolute Url instead of relative
    let response = await fetch('http://localhost:8081/traveldata', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': "application/json" },
        //mode: 'cors',      
        body: JSON.stringify(userInput)
    })
    return response
}

export { dataFromAPI }