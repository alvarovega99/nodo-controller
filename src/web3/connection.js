const { checkNode } = require("./node-selector");
const Web3 = require("web3");
require('dotenv').config()

class EthereumConnection {
  constructor() {
    this.web3 = null;
    this.nodes = [
      process.env.ETHEREUM_NODE_1,
      process.env.ETHEREUM_NODE_2,
      process.env.ETHEREUM_NODE_3,
    ];
  }

  async selectNode() {
    console.log("selectNode");
    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      const isNode = await checkNode(node);
      console.log(isNode);
      if (isNode) {
        return node;
      }
    }
  }

  async web3connect() {
    try {
      console.log("web3connect");
      const nodo = await this.selectNode();
      const provider = new Web3.providers.HttpProvider(nodo);
      this.web3 = new Web3(provider);
      return this.web3;
    } catch (error) {
      return false;
    }
  }
}

const ethereumConnection = new EthereumConnection();

module.exports = {
  ethereumConnection,
};
