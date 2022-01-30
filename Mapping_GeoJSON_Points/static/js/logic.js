// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([30.2672, -97.7431], 5);
//let map = L.map('mapid').setView([36.1733, -120.1794], 7);
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);
// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);
// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data.
// // GeoJSON reverse lat-long to long-lat
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h3>" + "Airport Code: " + feature.properties.faa +
//     "</h3><hr><p>" + feature.properties.name + "</p>");
// //   }

// }).addTo(map);

// // Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [30.2672, -97.7431],
//     [43.6777, -79.6248],
//     [40.7128, -74.0060]
//   ];

  // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "blue"
   
    
// //   }).addTo(map);


// // Get data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//     console.log(city)
//    });



// We create the tile layer that will be the background of our map.
// Dark Map code:
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// Light Map code:
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// Satellite Map code:
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/THeath15/Mapping_Earthquakes/main/majorAirports.json";


// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.  Skill Drill 13.5.3 add popups to all markers
L.geoJson(data,{
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h3>" + "Airport Code: " + feature.properties.faa +
    "</h3><hr><p>" + feature.properties.name + "</p>");
  }    
}).addTo(map);
});


// Loop through the cities array and create one marker for each city.
// Skill Drill 12.4.2 edit the lineweight, add the color orange, radius decreased by 200K
// and dark map
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         color: 'orange',
//         lineweight: 4
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);