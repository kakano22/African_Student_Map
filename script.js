// Create a base map object 
//https://leafletjs.com/reference.html#map
let map = L.map('map').setView([26.455343409890208, -38.99551264526797], 2.5); 

// Add a base layer to the map 
// https://leafletjs.com/reference.html#tilelayer
L.tileLayer(
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
).addTo(map);

async function getData(url) {
  const response = await fetch(url);

  return response.json();
}

const data = await getData('/data/student_data.json');
console.log(data);


//L.tileLayer.wms('https://maps.georeferencer.com/georeferences/71e4cdad-3140-5b47-8a08-514c206a844d/2022-12-23T23:48:40.740996Z/wmts?key=uL98Wi1mpNUAHIlUUqE6', {}).addTo(map);
// "https://davidrumsey.oldmapsonline.org/maps/2dc03a45-da6e-509c-8bc4-c5407eb91517/view#802009941505"
//"https://tile.openstreetmap.org/{z}/{x}/{y}.png"
// https://maps.georeferencer.com/georeferences/700526190853/2017-12-30T11:48:27.589686Z/map/{z}/{x}/{y}.png?key=D7AwmpRP1H6pUic6DIK3


//L.esri.tiledMapLayer({
//    url: "http://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer"
//  }).addTo(map);
