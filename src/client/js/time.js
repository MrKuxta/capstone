// mporw na kanw merge to today kai to datecountdown edw

//getting today's date to be compared with the date of the trip
function today() {
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0'); //padstart so as we always have 2-digits input
    let month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0, so we add +1 to match the normal calendar order
    let year = today.getFullYear();

    today = day + '-' + month + '-' + year

    return today
}

export {today}

function timeToTrip(date) {

    let dateFuture = new Date(date.replace(/\-/g, '/'));
    
    let timeInMsec = (dateFuture.getTime() - today.getTime())
    console.log("Time difference: "+timeInMsec+"msec")

    return timeInMsec
}

export {timeToTrip}