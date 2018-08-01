// var simpleChain = require('./simpleChain');
// let blockchain = new simpleChain.Blockchain();
// for (var i = 0; i <= 10; i++) {
//   blockchain.addBlock(new simpleChain.Block("test data " + i));
// }

// blockchain.validateChain();

// let inducedErrorBlocks = [2, 4, 7];
// for (var i = 0; i < inducedErrorBlocks.length; i++) {
//   blockchain.chain[inducedErrorBlocks[i]].data = 'induced chain error';
// }

// blockchain.validateChain();

// Test information

// LevelDB
const level = require('level');
const chainDB = './chaindata';
const db = level(chainDB);

// db.get('17936330b19d1495d64045c31f6fbf842bc6b964c7809971077473509474cea8', (err, value) => {
//   let node = JSON.parse(value)
//   console.log(node.hash)
// })

db.createReadStream()
  .on('data', (data) => {
    console.log(data.key, '=', data.value)
    // db.del(data.key)
  })
  .on('error', function (err) {
    console.log('Oh my!', err);
  })
  .on('close', function () {
    console.log('Stream closed')
  })
  .on('end', function () {
    console.log('Stream ended')
  })
