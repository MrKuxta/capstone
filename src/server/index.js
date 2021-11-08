const dotenv = require('dotenv');
dotenv.config();

//express to run server and routes
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const cors = require("cors");
const { response } = require('express');

//make an instance
const app = express()

//middlewares created after app initialised
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//update your server js to access the dist folder, initialise the main folder
app.use(express.static('dist'))

//as it was shown in the lessons. However I am not sure what this does, could you please explain?
app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

//as it was shown in the lessons. However I am not sure what this does, could you please explain?
console.log(__dirname)

//setup server
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Capstone Travel app listening on port 8081!')
})

//MEXRI EDW TA VASIKA
//APO EDW KAI KATW TA

//Setting up POST Route to contact with the client


app.post('/traveldata', async (req, res)=>{

    const destination = reg.body.city;

//GEONAME API
    let geoNameData = ''

    const geoNameKey = process.env.GEOAPI_USERNAME;
    const geoNameURL = `http://api.geonames.org/searchJSON?q=${destination}&maxRows=1&username=${geoNameKey}`;
    //don't forget to encode it
    await (fetch(encodeURI(geoNameURL))
    .then(res => res.json())
    //edw to data to pira apo to paradeigma kai ta mesa stin parenthesi
    //save infromation in an object endpoint based on the repsonses coming from here: http://api.geonames.org/postalCodeLookupJSON?postalcode=6600&country=AT&username=demo
    .then(data => geoNameData = { lng: data.geonames[0].lon, lat: data.geonames[0].lat, countryName: data.geonames[0].placeName, city: data.geonames[0].countryCode })
    //edw to error function to pira apo to paradeigma
    .catch(error => {
      console.log(error)
      return error.message
    }))


//WEATHERBIT API current
    let weatherBitData = ''

    const weatherBitKey = process.env.WEATHERBIT_APIKEY;
    const weatherBitBase = 'http://api.weatherbit.io/v2.0/current?'

    const weatherBitURL = `${weatherBitBase}lat=${geoNameData.lat}&lon=${geoNameData.lng}&key=${weatherBitKey}&units=I`

    await (fetch(weatherBitURL)
    .then(res => res.json())
    //edw to data to pira apo to paradeigma kai ta mesa stin parenthesi
    //save infromation in an object endpoint based on the repsonses coming from here: https://www.weatherbit.io/api/weather-current
    .then(res => weatherBitData = { temp: res.data[0].temp, weather: res.data[0].weather.description, icon: res.data[0].weather.icon })
    //edw to error function to pira apo to paradeigma
    .catch(error => {
      console.log(error)
      return error.message
    }))


//WEATHERBIT API future
    const weatherBitBaseFuture = 'http://api.weatherbit.io/v2.0/forecast/daily?'

    const weatherBitURLFuture = `${weatherBitBaseFuture}lat=${geoNameData.lat}&lon=${geoNameData.lng}&key=${weatherBitKey}&units=I`
    
    await (fetch(weatherBitURLFuture)
    .then(res => res.json())
    //edw to data to pira apo to paradeigma kai ta mesa stin parenthesi
    .then(res => weatherBitData = { temp: res.data[0].temp, weather: res.data[0].weather.description, icon: res.data[0].weather.icon })
    //edw to error function to pira apo to paradeigma
    .catch(error => {
      console.log(error)
      return error.message
    }))

//PIXABAY
    let pixaBayData = ''

    const pixaBayKey = process.env.PIXABAY_APIKEY;
    const pixaBayBase = 'https://pixabay.com/api/'

    const pixaBayURL = `${pixaBayBase}?key=${pixaBayKey}&q=${geonameData.city}&category=places&image_type=photo&orientation=horizontal&safesearch=true`

    await (fetch(pixaBayURL)
    .then(res => res.json())
    //edw to data to pira apo to paradeigma kai ta mesa stin parenthesi
    //save infromation in an object endpoint based on the repsonses coming from here: https://pixabay.com/api/docs/
    .then(data => {pixaBayData = { img: data.hits[0].webformatURL }
    })
    .catch(error => {
      console.log(error)
      return error.message
    }))

    //tsekare to date:userinput apo pou to pairnei
    projectData = { temp: weatherBitData.temp, weather: weatherBitData.weather, icon: weatherBitData.icon, cityName: geoNameData.city, countryName: geoNameData.countryName, date: userInput.date, img: pixaBayData.img }

    res.send(projectData)
    console.log(projectData);

})

//edw to data to pira apo to paradeigma, den kserw ti simainei. MPOREI KAI NA MIN XREIAZETAI
//module.exports = app