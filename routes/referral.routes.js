const express = require("express");
const { createReferral } = require("../controllers/referral.controller.js");
const router = express.Router();

router.post("/referrals", createReferral);

module.exports = router;
