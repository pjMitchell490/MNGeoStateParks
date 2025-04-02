import { minnesota } from './MN_Boundary.js';


var map = L.map('map').setView([45.4, -95.4], 5.25);

var USGS_USImagery = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}', {
    minZoom: 4,
	maxZoom: 20,
	attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
});

var outside_bounds = [[0, -160], [0, 160], [80, 160], [80, -160]];

var mn_bounds = minnesota.features[0].geometry.coordinates[0];

var mn_mask = L.polygon([outside_bounds, mn_bounds], {color: 'black'});
console.log(mn_bounds[0]);
USGS_USImagery.addTo(map);
let mn = L.polygon(mn_bounds, {color: 'red'});
//mn_mask.addTo(map);
mn.addTo(map);
L.geoJSON(minnesota).addTo(map);