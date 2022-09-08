//consultar las transacciones pendientes de un nodo de ethereum
const Web3 = require("web3");

async function checkNode(node) {
  try {
    console.log(node);
    const provider  = new Web3.providers.HttpProvider(node);
    const web3 = new Web3(provider);
    const pendingTransactions = await web3.eth.getBlockTransactionCount(
      "pending"
    );
    console.log(pendingTransactions);
    if (pendingTransactions > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}
module.exports = {
  checkNode,
};
