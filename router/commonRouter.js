const express = require("express");
const router = express.Router();
const commonController = require("../controllers/commonController");

router.route("/info").get(commonController.getSiteInfo);

module.exports = router;
