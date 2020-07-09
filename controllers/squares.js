const Square = require("../models/square");

module.exports = {
  index
};

function index(req, res) {
  Square.find({}, function(err, squares) {
    if (err) return next(err);
    res.render("squares/index", { squares });
  });
}
