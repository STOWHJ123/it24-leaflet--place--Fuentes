const map = L.map("map").setView(
  [8.37546, 124.90258], 13
);

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
   {

    attribution: '&copy; <ahref="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', maxZoom: 19}
).addTo(map);

const marker = L.marker([8.37546, 124.90258])
.addTo(map);

marker.bindPopup(
"<b>Barangay Dalirig</b><p>Welcome to Dalirig</p>"
);

L.circle([8.37546, 124.90258], {
color: "blue",
fillColor: "#30a3ec",
fillOpacity: 0.3,
radius: 500
}).addTo(map);

L.circle([8.40855, 124.91661], {
color: "blue",
fillColor: "#baec30",
fillOpacity: 0.3,
radius: 500
}).addTo(map);

L.circle([8.37598, 124.90471], {
color: "blue",
fillColor: "#435809",
fillOpacity: 0.3,
radius: 500
}).addTo(map);



map.on("click", function(event) {
const lat = event.latlng.lat;
const lng = event.latlng.lng;

L.popup()
.setLatLng(event.latlng)
.setContent(
"Latitude: " + lat.toFixed(5) +
"<br>Longitude: " + lng.toFixed(5)
)
.openOn(map);
});

const locations = [
{ name: "Sitio Sabanagan BRGY.Dalirig", lat: 8.40855, lng: 124.91661 },
{ name: "Dalirig Elementary School", lat: 8.37598, lng: 124.90471 },

];

locations.forEach(function(place) {
L.marker([place.lat, place.lng]).addTo(map).bindPopup(place.name);
});

