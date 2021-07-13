const Web3 = require('web3');
// mainnet
//const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

// testnet
const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
const account = web3.eth.accounts.privateKeyToAccount("0x4f606607c689947afa5046ac61e8a24982827eb522c48d5676e7f841654fa9b4")

web3.eth.getBalance(account).then(console.log);