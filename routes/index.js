const express = require("express");
const router = express.Router();

const controller = require("../controllers/index");

// for translating text
router.post("/translate", controller.translate);

module.exports = router;
