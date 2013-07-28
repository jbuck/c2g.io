var Car2Go = require("car2go").createClient({
  key: process.env.CAR2GO_KEY
});

Car2Go.locations(function(err, locations) {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  var data = locations.map(function(location) {
    return {
      loc: location.locationName,
      latitude: location.mapSection.center.latitude,
      longitude: location.mapSection.center.longitude,
    };
  }).sort(function(a, b) {
    return a.loc < b.loc;
  });

  console.log(JSON.stringify(data));
});
