const { Router } = require("express");
const router = Router();
const { checkNode } = require("../web3/web3-request");
require("dotenv").config();

const nodes = [process.env.NODEA, process.env.NODEB, process.env.NODEC];

router.get("/select-node", async (req, res) => {
  try {
    console.log(nodes);
    for (let i = 0; i < nodes.length; i++) {
      await checkNode(nodes[i]).then((result) => {
        if (result) {
          res.status(200).json({
            message: "OK",
            node: nodes[i],
          });
        }
      });
    }
    res.status(400).json({
      message: "Not Found",
      node: null,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
      node: null,
    });
  }
});

module.exports = router;
