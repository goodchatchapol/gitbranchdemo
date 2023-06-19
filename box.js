<!DOCTYPE html>

<head>
<script src=”https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.0/mapbox-gl.js""></script> <link href=”https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.0/mapbox-gl.css"" rel=”stylesheet” /> <style>
body { margin:0; padding:0; }
#map { position:absolute; top:0; bottom:0; width:100%; }
</style>
</head>

<body>
<div id=”map”></div>

<script>
mapboxgl.accessToken = “pk.eyJ1IjoiYWxleGFuZGVydiIsImEiOiJjamFpNW9oeXQyaG53MzJuaW90dW1mcm9iIn0.E0kCU_HSmgJDe1EDiRrwsA”;

/* Map: This represents the map on the page. */
var map = new mapboxgl.Map({
container: “map”,
style: “mapbox://styles/alexanderv/cjev6qii0149e2sqoxlrqcbig”,
zoom:5,
center: [-1.015444,52.073274]
});

map.on(“load”, function () {
/* Image: An image is loaded and added to the map. */
map.loadImage(“https://i.imgur.com/BZjqCtk.png"", function(error, image) {
if (error) throw error;
map.addImage(“custom-marker”, image);
/* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
map.addLayer({
id: “markers”,
type: “symbol”,
/* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
source: {
type: “geojson”,
data: {
type: “FeatureCollection”,
features:[
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“144.9666”,”-37.83730""]}},
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“121.218467”,”31.336159""]}},
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“50.519254”,”26.032652""]}},
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“49.8433”,”40.3699""]}},
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“2.2585”,”41.5638""]}},
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“7.4215”,”43.7338""]}},
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“-73.52670”,”45.5034""]}},
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“5.79350”,”43.2517""]}},
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“14.7607”,”47.2225""]}},
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“-1.0174”,”52.0706""]}},
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“8.565084”,”49.328014""]}},
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“19.2526”,”47.583""]}},
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“5.9687”,”50.444""]}},
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“9.2825”,”45.6169""]}},
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“103.849455”,”1.295226""]}},
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“39.948378”,”43.406736""]}},
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“136.537906”,”34.847081""]}},
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“-97.6411”,”30.1328""]}},
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“-99.0986”,”19.4028""]}},
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“-46.6969”,”-23.7014""]}},
{“type”:”Feature”,”geometry”:{“type”:”Point”,”coordinates”:[“24.46904”,”54.600903""]}}
]
}
},
layout: {
“icon-image”: “custom-marker”,
}

});

});
});
</script>

</body>
</html>