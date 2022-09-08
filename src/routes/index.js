const { Router } = require("express");
const router = Router();
const block = require("./block");

router.use("/block-request", block);

module.exports = router;