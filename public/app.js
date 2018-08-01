const app = function () {
  let coords = [51.508112, -0.075949]
  let pointerCoords = [51.506579, -0.081389]
  let zoom = 16;
  let containerID = "main-map";
  const mainMap = new MapWrapper(containerID, coords, zoom);

}

window.addEventListener("DOMContentLoaded", app);
