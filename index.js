import { minnesota } from './MN_Boundary.js';


var map = L.map('map').setView([46.5, -93.5], 6);

var USGS_USImagery = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}', {
    minZoom: 6,
    maxZoom: 20,
    attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
});

var outside_bounds = [[-90, -180], [-90, 180], [90, 180], [90, -180]];

var mn_bounds = minnesota.features[0].geometry.coordinates[0];

for(let i = 0; i < mn_bounds.length; i++) {
    mn_bounds[i].reverse();
}

var mn_mask = L.polygon([outside_bounds, mn_bounds], {color: 'black', stroke: false, fillOpacity: 0.50});

var stateParks = [
    L.marker([44.866, -93.191], {title: 'Fort Snelling State Park'}),
    L.marker([45.4, -92.651], {title: 'Interstate State Park'}),
    L.marker([44.148, -94.095], {title: 'Minneopa State Park'})
];

USGS_USImagery.addTo(map);
mn_mask.addTo(map);

for(let i = 0; i < stateParks.length; i++) {
    stateParks[i].addTo(map);
}
