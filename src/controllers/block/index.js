const {ethereumConnection} = require('../../web3/connection');

const getBlockNumber = async (req, res) => {
    try {
        const web3 = await ethereumConnection.web3connect();
        const blockNumber = await web3.eth.getBlockNumber();
        res.status(200).json({
            message: 'OK',
            blockNumber
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error',
            error: error.message
        });
    }
}

module.exports = {
    getBlockNumber
}