//let todayMs = ''

//getting today's date to be compared with the date of the trip
function today() {
    //Date() when called returns a new date object of the current date and time
    let now = new Date();
    //returns the day of the month (1-31)
    //let day = String(now.getDate()).padStart(2, '0'); //padstart so as we always have 2-digits input
    let day = now.getDate();
    //returns the month (0-11)
    //let month = String(now.getMonth() + 1).padStart(2, '0'); //January is 0, so we add +1 to match the normal calendar order
    let month = now.getMonth() + 1;
    //returns the year in 4 digits
    let year = now.getFullYear();

    //it returns a date object type
    //let todayDate = new Date(day + '/' + month + '/' + year)
    let todayDate = day + "/" + month + "/" + year;
    //todayMs =today.getTime();

    //return todayMs
    return todayDate
}

export {today}

//let todayVar = today();

function timeToTrip(date) {

    //let todayInMs = new Date(today()).getTime();

    let dateFuture = new Date(date);
    let todayDate = new Date();

    let dateDiff = dateFuture - todayDate;
    //let dateDiff = dateFuture - todayInMs
    let dateDiffInDays = Math.ceil(dateDiff / (1000 * 60 * 60 * 24));
    //let dateFutureInMs = dateFuture.getTime();
    
    //let todayInMs = today();

    //getTime() to convert the date in milliseconds
    //let timeInMsec = dateFuture.getTime() - today().getTime()
    //let timeInMs = dateFutureInMs - todayInMs
    //console.log("Time difference: "+timeInMs+"msec")

    return dateDiffInDays
}

export {timeToTrip}