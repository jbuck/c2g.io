var express = require("express"),
    middleware = require("./middleware"),
    routes = require("./routes");

var app = express();

app.use(express.logger());
app.use(express.static(__dirname + "/public"));
app.use(app.router);

app.get("/api/vehicles/:location",
  middleware.vehicles,
  middleware.vehiclesToGeoJSON,
  routes.vehicles);

app.listen(process.env.PORT);
