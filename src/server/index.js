let projectData;

const dotenv = require('dotenv');
dotenv.config();

//express to run server and routes
var path = require('path')
const express = require('express')
//const mockAPIResponse = require('./mockAPI.js')
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


//Setting up POST Route to contact with the client

//const dateInput = document.getElementById('date');

app.post('/traveldata', async (req, res)=>{

    const destination = req.body.city;
    const dateInput = req.body.date;

  
//GEONAME API
    
    let geoNameData = {};

    //the api keys are sacved here for the purposes of the submision

    const geoNameKey = "kuxta";
    const geoNameURL = `http://api.geonames.org/searchJSON?q=${destination}&maxRows=1&username=${geoNameKey}`;
    //don't forget to encode it as per the API documentation
    await (fetch(encodeURI(geoNameURL))
    .then(res => res.json())
    //save infromation in an object endpoint based on the repsonses coming from here: http://api.geonames.org/postalCodeLookupJSON?postalcode=6600&country=AT&username=demo
    //.then(data => geoNameData = { lng: data.geonames[0].lon, lat: data.geonames[0].lat, countryName: data.geonames[0].placeName, city: data.geonames[0].countryCode })
    .then(data => {
      //to check if there are any error messages returned from the API
      console.log(data);
      
      //geonames is an array
      geoNameData = {
        lng: data.geonames[0].lng,
        lat: data.geonames[0].lat,
        countryName: data.geonames[0].countryName,
        city: data.geonames[0].name
      }
        console.log(`your data is`,geoNameData)

      })
    .catch(error => {
      console.log(error)
      return error.message
    })
    )

//WEATHERBIT API current
    let weatherBitData = {};

    const weatherBitKey = "c5c636a322604ecda9c9d1e100eecb36";

    //the api keys are sacved here for the purposes of the submision

    const weatherBitBase = 'http://api.weatherbit.io/v2.0/current?'
    

    const weatherBitURL = `${weatherBitBase}lat=${geoNameData.lat}&lon=${geoNameData.lng}&key=${weatherBitKey}&units=M`
    
    console.log("geoNameData.lat", geoNameData.lat);

    console.log("geoNameData.lng", geoNameData.lng);

    console.log(weatherBitURL);

    await (fetch(weatherBitURL)
    .then(res => res.json())
    //save infromation in an object endpoint based on the repsonses coming from here: https://www.weatherbit.io/api/weather-current
    //.then(res => weatherBitData = { temp: res.data[0].temp, weather: res.data[0].weather.description, icon: res.data[0].weather.icon })
    .then(response => {
      console.log(response);
      weatherBitData = {
        temp: response.data[0].temp,
        weather: response.data[0].weather.description,
        icon: response.data[0].weather.icon
      }
    })
    .catch(error => {
      console.log(error)
      return error.message
    }))

    console.log(`your weatherbit data is :`);
    console.log(`temperature :`, weatherBitData.temp);
    console.log(`weather description :`, weatherBitData.weather);
    console.log(`weather looks like :`, weatherBitData.icon);

//PIXABAY
    let pixaBayData = ''

    //the api keys are sacved here for the purposes of the submision

    const pixaBayKey = "23998046-94a46a5c36e5c0cba87fd324b";
    const pixaBayBase = 'https://pixabay.com/api/'

    const pixaBayURL = `${pixaBayBase}?key=${pixaBayKey}&q=${geoNameData.city}&category=places&image_type=photo&orientation=horizontal&safesearch=true`

    console.log(pixaBayURL);

    await (fetch(pixaBayURL)
    .then(res => res.json())
    //save infromation in an object endpoint based on the repsonses coming from here: https://pixabay.com/api/docs/
    .then(data => {
      console.log(data);
      pixaBayData = {
        img: data.hits[0].webformatURL
      }
      console.log(pixaBayData);
    })
    .catch(error => {
      console.log(error)
      return error.message
    }))
    let tempOut = weatherBitData.temp
    let weatherOut = weatherBitData.weather
    let iconOut = weatherBitData.icon
    let cityName = geoNameData.city
    let countryNameOut = geoNameData.countryName
    let date = dateInput
    let img = pixaBayData.img

    console.log(tempOut)
    console.log(weatherOut)
    console.log(iconOut)
    console.log(cityName)
    console.log(countryNameOut)
    console.log(date)
    console.log(img)

    projectData = {
      tempOut,
      weatherOut,
      iconOut,
      cityName,
      countryNameOut,
      date,
      img
    }

    res.send(projectData)
    console.log(projectData);


})