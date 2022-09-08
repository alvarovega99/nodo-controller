const express = require("express");
const router = express.Router();
const { getBlockNumber } = require("../../controllers/block");

router.get("/get-block-number", getBlockNumber);


module.exports = router;