// Create a base map object 
//https://leafletjs.com/reference.html#map
let map = L.map('map').setView([26.455343409890208, -38.99551264526797], 2.5); 

// Add a base layer to the map 
// https://leafletjs.com/reference.html#tilelayer
L.tileLayer(
  "https://tile.openstreetmap.de/{z}/{x}/{y}.png"
).addTo(map);

L.tileLayer(
  "https://mapwarper.net/maps/tile/83045/{z}/{x}/{y}.png"
).addTo(map);

L.tileLayer(
  "https://mapwarper.net/maps/tile/83043/{z}/{x}/{y}.png"
).addTo(map);

var imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
    imageBounds = [[30.712216, -64.22655]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

// add Africa map
let imageUrl = '/African_Student_Map/images/Africa Maps_Bond Collection_cropped.jpg',
    imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

fetch('/African_Student_Map/data/student_data.json').then(
        function(u){ return u.json();}
      ).then(
        function(json){
          data = json;
          let dataLayers = L.geoJSON(data, {
            onEachFeature: function (feature, layer) {
              if (feature.properties["residence_africa_city"]){
                layer.bindPopup('<h4>'+feature.properties["name"] + '</h4><br>'+feature.properties["residence_africa_city"] +", "+feature.properties["residence_africa_country"])
              } else {
                layer.bindPopup('<h4>'+feature.properties["name"] + '</h4><br>' +feature.properties["residence_africa_country"]);
              }
            }
          }).addTo(map);	
          
          console.log(slider.get())
      
          // // group the points in data in pairs of two
          // var pairs = [];
          // for (var i = 0; i < data.length; i++) {
          //   if (i % 2 == 0) {
          //     pairs.push([data[i], data[i + 1]]);
          //   }
          // }
          // //for each pair, add a polyLine between the two points, skip the last pair
          // for (i in pairs) {
          //   if (i < pairs.length - 1) {
          //     var line = L.polyline([pairs[i][0],pairs[i][1]], {color: 'green'}).addTo(map);
          //   }
          // }
        }
      )


//L.tileLayer.wms('https://maps.georeferencer.com/georeferences/71e4cdad-3140-5b47-8a08-514c206a844d/2022-12-23T23:48:40.740996Z/wmts?key=uL98Wi1mpNUAHIlUUqE6', {}).addTo(map);
// "https://davidrumsey.oldmapsonline.org/maps/2dc03a45-da6e-509c-8bc4-c5407eb91517/view#802009941505"
//"https://tile.openstreetmap.org/{z}/{x}/{y}.png"
// https://maps.georeferencer.com/georeferences/700526190853/2017-12-30T11:48:27.589686Z/map/{z}/{x}/{y}.png?key=D7AwmpRP1H6pUic6DIK3


//L.esri.tiledMapLayer({
//    url: "http://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer"
//  }).addTo(map);

//... adding data in searchLayer ...
//searchLayer is a L.LayerGroup contains searched markers

 // Date Slider 
// https://refreshless.com/nouislider/
var sliderDiv = document.getElementById('slider');

let slider = noUiSlider.create(sliderDiv, {
    start: [1848, 1960],
    step: 1,
    connect: true,
    behaviour: 'tap-drag',
    tooltips: true,
    range: {
        'min': 1848,
        'max': 1960
    },
    format: wNumb({
      decimals: 0
    })
});
