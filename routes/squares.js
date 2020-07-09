const express = require("express");
const router = express.Router();
const squaresCtrl = require("../controllers/squares");

router.get("/", squaresCtrl.index);

module.exports = router;
