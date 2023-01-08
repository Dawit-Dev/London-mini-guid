const express = require("express");
// const cors = require("cors");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3005;
const harrowData = require("./data/Harrow.json");
const heathrowData = require("./data/Heathrow.json");
const stratfordData = require("./data/Stratford.json");

app.use(express.json());
// app.use(cors());
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.get("/", function (request, response) {
  response.json({
    "/pharmacies": "returns an array of pharmacies in a specific area",
    "/hospitals": "returns an array of hospitals in a specific area",
    "/doctors": "returns an array of doctors in a specific area",
    "/colleges": "returns an array of colleges in a specific area",
  });
});

app.get("/:city/pharmacies", function (request, response) {
  let cityName = request.params.city.toLowerCase();
  if (cityName === "stratford") {
    response.send(stratfordData.pharmacies);
  }
  if (cityName === "harrow") {
    response.send(harrowData.pharmacies);
  }
  if (cityName === "heathrow") {
    response.send(heathrowData.pharmacies);
  }
  response.sendStatus(404);
});

app.get("/:city/hospitals", function (request, response) {
  let cityName = request.params.city.toLowerCase();
  if (cityName === "stratford") {
    response.send(stratfordData.hospitals);
  }
  if (cityName === "harrow") {
    response.send(harrowData.hospitals);
  }
  if (cityName === "heathrow") {
    response.send(heathrowData.hospitals);
  }
  response.sendStatus(404);
});

app.get("/:city/doctors", function (request, response) {
  let cityName = request.params.city.toLowerCase();
  if (cityName === "stratford") {
    response.send(stratfordData.doctors);
  }
  if (cityName === "harrow") {
    response.send(harrowData.doctors);
  }
  if (cityName === "heathrow") {
    response.send(heathrowData.doctors);
  }
  response.sendStatus(404);
});

app.get("/:city/colleges", function (request, response) {
  let cityName = request.params.city.toLowerCase();
  if (cityName === "stratford") {
    response.send(stratfordData.colleges);
  }
  if (cityName === "harrow") {
    response.send(harrowData.colleges);
  }
  if (cityName === "heathrow") {
    response.send(heathrowData.colleges);
  }
  response.sendStatus(404);
});

app.listen(PORT, function () {
  console.log("Your app is listening on port " + PORT);
});
