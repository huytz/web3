const fs = require('fs');
const ethers = require("ethers");

let existingData = [];

let numberWallet = 2

for (let i = 0; i < numberWallet; i++) {
    const wallet = ethers.Wallet.createRandom();
    const walletObj = {
        "seedPhrase": wallet.mnemonic.phrase,
        "address": wallet.address.toLowerCase(),
        "privateKey": wallet.privateKey
    };
    existingData.push(walletObj);
}

fs.appendFile('./wallets.json', JSON.stringify(existingData, null, 2), (err) => {
    if (err) {
        console.log(err);
    }
    else {
        // Get the file contents after the append operation 
        console.log("Succecfully create wallets.")
    }
});
