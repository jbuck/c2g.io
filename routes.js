module.exports = {
  vehicles: function(req, res, next) {
    res.json(res.locals.geojson);
  }
};
