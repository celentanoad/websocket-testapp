const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const squareSchema = new Schema({

});

module.exports = mongoose.model("Square", squareSchema);
