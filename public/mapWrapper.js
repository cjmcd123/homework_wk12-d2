const MapWrapper = function (container, coords, zoom) {
  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  this.map = L.map(container).setView(coords, zoom).addLayer(osmLayer);
  this.map.on("click", function (event) {
    let newCoords = [event.latlng.lat, event.latlng.lng];
    this.addMarker(newCoords);
  }.bind(this));
  // this.map.on("click", event => {
  //   let newCoords = [event.latlng.lat, event.latlng.lng];
  //   this.addMarker(newCoords);
  // })
  let coords1 = [51.508112, -0.075949]
  let pointerCoords = [51.506579, -0.081389]

  const glasgowMarker = new L.marker([55.86515, -4.25763], {title: 'CodeClan Glasgow'}).bindPopup("Codeclan: Where we learn to do this").openPopup();
  const towerMarker = new L.marker(coords1, {title: 'The Tower of London'}).bindPopup("This is the Tower of London").openPopup();
  const shipMarker = new L.marker(pointerCoords, {title: 'HMS Belfast'}).bindPopup("This is the Light Cruiser HMS Belfast which is now a Museum").openPopup();
  glasgowMarker.addTo(this.map);
  towerMarker.addTo(this.map);
  shipMarker.addTo(this.map);

  const glasgow = [55.864237, -4.251806, 15];
  const button = document.querySelector(".glasgow");
  const locate = document.querySelector(".locate");

  button.addEventListener('click', function(){
    this.goToGlasgow(glasgow);
  }.bind(this));

  const success = function (position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    let search = [latitude, longitude, 15];
    this.goToMe(search);
  }.bind(this);

  const error = function () {
    output.innerHTML = "Unable to retrieve your location";
  }

  locate.addEventListener("click", function () {
    navigator.geolocation.getCurrentPosition(success, error);
  }.bind(this))
}

MapWrapper.prototype.addMarker = function(coords){
  L.marker(coords).addTo(this.map);
};

MapWrapper.prototype.goToGlasgow = function (coords, zoom) {
  this.map.flyTo(coords, zoom);
};

MapWrapper.prototype.goToMe = function (coords, zoom) {
  this.map.flyTo(coords, zoom);
  const locationMarker = new L.marker(coords, {title: "Location"}).bindPopup("This is your location. ish").openPopup();
  locationMarker.addTo(this.map);
};
