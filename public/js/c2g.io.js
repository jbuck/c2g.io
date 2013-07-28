(function() {
  var locations = [{"loc":"Stuttgart","lat":48.775569915771484,"lng":9.181900024414062},{"loc":"Wien","lat":48.209206,"lng":16.372778},{"loc":"Birmingham","lat":52.47784,"lng":-1.892899990081787},{"loc":"Toronto","lat":43.65396,"lng":-79.38635},{"loc":"Washington DC","lat":38.911744,"lng":-77.023602},{"loc":"Ulm","lat":48.3987,"lng":9.9968},{"loc":"Vancouver","lat":49.2625,"lng":-123.114},{"loc":"Denver","lat":39.737594,"lng":-104.984717},{"loc":"Seattle","lat":47.618264,"lng":-122.357295},{"loc":"Austin","lat":30.2794,"lng":-97.7434},{"loc":"Köln","lat":50.93895,"lng":6.95038},{"loc":"Miami","lat":25.77547,"lng":-80.19608},{"loc":"London","lat":51.507335,"lng":-0.127683},{"loc":"Portland","lat":45.52653581,"lng":-122.6823798},{"loc":"München","lat":48.136981,"lng":11.577036},{"loc":"San Diego","lat":32.755312,"lng":-117.165149},{"loc":"Hamburg","lat":53.55454,"lng":9.99185},{"loc":"Duesseldorf","lat":51.22444,"lng":6.78459},{"loc":"Calgary","lat":51.04582,"lng":-114.0616},{"loc":"Berlin","lat":52.51856994628906,"lng":13.404585838317871},{"loc":"Amsterdam","lat":52.35,"lng":4.91667}];

  var city;

  var map = L.map(document.querySelector('.c2gio-map'));

L.tileLayer('http://{s}.tile.cloudmade.com/a277366792ab4b41adec150c78d0ea5b/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
  }).addTo(map);

  map.locate({setView: true, maxZoom: 18})
    .on("locationfound", function(e) {
      var pos = e.latlng;

      city = locations.reduce(function(prev, curr) {
        if (pos.distanceTo(prev) < pos.distanceTo(curr)) {
          return prev;
        }

        return curr;
      });

      console.log(pos, city);
    })
    .on("locationerror", function(e) {
      console.log(e);
    });
}());
