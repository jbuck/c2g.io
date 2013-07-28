var Car2Go = require("car2go").createClient({
  key: process.env.CAR2GO_KEY
});

module.exports = {
  vehicles: function(req, res, next) {
    Car2Go.vehicles({
      format: "json",
      loc: req.params.location
    }, function(err, vehicles) {
      if (err) {
        return next(err);
      }

      res.locals.vehicles = vehicles;
      next();
    });
  },
  vehiclesToGeoJSON: function(req, res, next) {
    var vehicles = res.locals.vehicles;

    res.locals.geojson = {
      type: "FeatureCollection"
    };

    res.locals.geojson.features = vehicles.map(function(car) {
      return {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: car.coordinates
        },
        properties: {
          address: car.address,
          engineType: car.engineType,
          exterior: car.exterior,
          fuel: car.fuel,
          interior: car.interior,
          name: car.name
        }
      };
    });
    next();
  }
};
