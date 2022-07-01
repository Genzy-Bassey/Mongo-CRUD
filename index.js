
// import express, { response, Router } from 'express';
// import bodyParser from 'body-parser'
// import cors from "cors"


const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");

const app = express();

app.use(json());

app.use("/", routes);

// app.use(bodyParser.json())

//Add/book flight
//get all flight
//get a single flight
//update/edit flight
//delete flight

// app.use(cors({
//     origin: 'http://localhost:4200'
// }));

const port = process.env.PORT || 3000;

app.get(`/Get-all-flight`, (req, res) => {

    

  const title = req.query.title;
  const time = req.query.time;
  const dateOfDeparture = req.query.dateOfDeparture
  
  // Get All Flights
  flightOffersSearch.get({
      titles: title,
      times: time,
      departureDate: dateOfDeparture,
  }).then(function (response) {
      res.send(response.result);
  }).catch(function (response) {
      res.send(response);
  });
  });


  app.get(`/Get-A-Single-Flight`, (req, res) => {

    const flight = req.body.flight
    
    // Get A Single Flight
    try{
      const details = flight.find({});
      response.send(details);
    } catch (error) {
      console.log(error);
    }
  


    models.post(
        JSON.stringify({
            'data': {
              "title": "Flight To Canada",
              "time": "1pm",
              "price": "26000",
              "date": "26-06-2022",
              'flightOffers': [flight],
            }
        })
    ).then(function (response) {
            res.send(response.result);
        }).catch(function (response) {
            res.send(response)
        })
    
})


app.put(`/Update-Edit-Flight`, (req, res) => {

  const flight = req.body.flight
  
  // Update/Edit Flight
  flight.put(
      JSON.stringify({
          'data': {
            "title": "Flight To Canada",
            "time": "1pm",
            "price": "26000",
            "date": "26-06-2022",
            'flightOffers': [flight],
          }
      })
  ).then(function (response) {
          res.send(response.result);
      }).catch(function (response) {
          res.send(response)
      })
  
})


app.post(`/Add-Book-Flight`, (req, res) => {

  // Book a flight 

const flight = req.body.flight; 
const name = req.body.name

models.flight.post(
  JSON.stringify({
      'data': {
        "title": "Flight To Canada",
        "time": "1pm",
        "price": "26000",
        "date": "26-06-2022",
        "flightOffer": [flight],
        "name": {
          "firstName": name.first,
          "lastName": name.last
        }
        }
      })
).then(function (response) {
res.send(response.result);
}).catch(function (response) {
res.send(response);
});

});


app.delete(`/Delete-Flight`, (req, res) => {

  const flight = req.body.flight
  
  // Delete A Flight
  app.get(
      JSON.stringify({
          'data': {
            "title": "Flight To Canada",
            "time": "1pm",
            "price": "26000",
            "date": "26-06-2022",
            'flightOffers': [flight],
          }
      })
  ).then(function (response) {
          res.send(response.result);
      }).catch(function (response) {
          res.send(response)
      })
  
})


app.listen(port, () => {
});

