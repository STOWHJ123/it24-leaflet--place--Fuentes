const map = L.map("map").setView(
  [8.3700, 124.8600], 13
);

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
   {

    attribution: '&copy; <a
href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
     maxZoom: 19
   }
).addTo(map);