var simpleChain = require('./simpleChain');
let blockchain = new simpleChain.Blockchain();

// Add Block
blockchain.addBlock(new simpleChain.Block("test data 1" )).then(_ => {
  // Get Block
  blockchain.getBlock(0).then(block => {
    console.log(block);
  }).catch(err => {
    console.error(err);
  })

  // Get Height
  blockchain.getBlockHeight().then(height => {
    console.log('Height: ', height)
  })
})

// Add another 10 blocks
for (var i = 0, p = Promise.resolve(); i <= 10; i++) {
  p = p.then(_ => new Promise(resolve =>
    setTimeout(() => {
      blockchain.addBlock(new simpleChain.Block("test data " + i)).then((hash) => {
        console.log('New block added: ', hash)
        resolve();
      });
    }, Math.random() * 100)
  ));
}

// Validate chain
setTimeout(() => {
  console.log('Validate chain: ')
  blockchain.validateChain();
}, 5000);

// Print current chain
setTimeout(() => {
  blockchain.iterateChain(false);
}, 8000);

// // Destroy all nodes
setTimeout(() => {
  blockchain.iterateChain(true);
}, 10000);
