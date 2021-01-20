const express = require("express");
const router = express.Router();
// const cache = require("../config/cache");
const controller = require("../controllers/index");

router.post("/translate", controller.translate);

module.exports = router;
