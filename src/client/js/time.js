// mporw na kanw merge to today kai to datecountdown edw

let todayMs = ''

//getting today's date to be compared with the date of the trip
function today() {
    //Date() when called returns a new date object of the current date and time
    let now = new Date();
    //returns the day of the month (1-31)
    let day = String(now.getDate()).padStart(2, '0'); //padstart so as we always have 2-digits input
    //returns the month (0-11)
    let month = String(now.getMonth() + 1).padStart(2, '0'); //January is 0, so we add +1 to match the normal calendar order
    //returns the year in 4 digits
    let year = now.getFullYear();

    //it returns a date object type
    today = new Date(day + '/' + month + '/' + year)
    todayMs =today.getTime();

    return todayMs
    //return today
}

export {today}

//let todayVar = today();

function timeToTrip(date) {

    let dateFuture = new Date(date.replace(/\-/g, '/'));
    let dateFutureInMs = dateFuture.getTime();
    //let todayInMs = today().getTime();
    let todayInMs = today();

    //getTime() to convert the date in milliseconds
    //let timeInMsec = dateFuture.getTime() - today().getTime()
    let timeInMs = dateFutureInMs - todayInMs
    console.log("Time difference: "+timeInMs+"msec")

    return timeInMs
}

export {timeToTrip}