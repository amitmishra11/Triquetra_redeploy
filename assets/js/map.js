 src="https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.js"

    mapboxgl.accessToken ="pk.eyJ1Ijoic3VsdGFuaWEyMDA5IiwiYSI6ImNrb3NkdmZ4cTAwaWsyeW52dW5lMmVrMWgifQ.eRgXcqznMP0-6y-HA8iKhQ";

    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [85.11984142415537, 25.582483018337157],
      zoom: 12,
    });
    map.on("load", function () {
      map.addSource("places", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>AIIMS PATNA <BR> Oxygen beds:19<br>ICU avilable:3</strong>",
              },
              geometry: {
                type: "Point",
                coordinates: [85.04204937505921, 25.56026975445951],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>IGIMS PATNA <BR> Oxygen beds:49<br>ICU avilable:11</strong>",
              },
              geometry: {
                type: "Point",
                coordinates: [85.089346619266, 25.612332773240652],
              },
            },
  
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>IGIMS PATNA <BR> Oxygen beds:49<br>ICU avilable:11</strong>",
              },
              geometry: {
                type: "Point",
                coordinates: [85.089346619266, 25.612332773240652],
              },
            },
  
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>MKBSH PATNA <BR> Oxygen beds:49<br>ICU avilable:11</strong>",
              },
              geometry: {
                type: "Point",
                coordinates: [85.14213141181006, 25.581103976208894],
              },
            },
  
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Paras HMRI PATNA <BR> Oxygen beds:8<br>ICU avilable:0</strong>",
              },
              geometry: {
                type: "Point",
                coordinates: [85.08258264883608, 25.60554926729047],
              },
            },
  
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>JEEWAN JYOTI HOSPITAL PATNA <BR> Oxygen beds:54<br>ICU avilable:19</strong>",
              },
              geometry: {
                type: "Point",
                coordinates: [85.15295440867294, 25.57181680427192],
              },
            },
  
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>NMCH PATNA <BR> Oxygen beds:38<br>ICU avilable:16</strong>",
              },
              geometry: {
                type: "Point",
                coordinates: [85.19437614214485, 25.602303993778875],
              },
            },
  
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>PMCH hospital <BR> Oxygen beds:78<br>ICU avilable:20</strong>",
              },
              geometry: {
                type: "Point",
                coordinates: [85.15774578062548, 25.620886162705247],
              },
            },
          ],
        },
      });
      // Add a layer showing the places.
      map.addLayer({
        id: "places",
        type: "circle",
        source: "places",
        paint: {
          "circle-color": "#CB1313",
          "circle-radius": 6,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#ffffff",
        },
      });

      map.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
// When active the map will receive updates to the device's location as it changes.
trackUserLocation: true,
// Draw an arrow next to the location dot to indicate which direction the device is heading.
showUserHeading: true
})
);
  
      // Create a popup, but don't add it to the map yet.
      var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });
  
      map.on("mouseenter", "places", function (e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = "pointer";
  
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;
  
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
  
        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates).setHTML(description).addTo(map);
      });
  
      map.on("mouseleave", "places", function () {
        map.getCanvas().style.cursor = "";
        popup.remove();
      });
    });
