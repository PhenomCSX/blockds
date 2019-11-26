const { Blockchain, Transaction } = require('./network');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('9c613cfa523981bcd984e921ed7ed1f5737f8316c47060d634d549affb4bfa0c');
const myWalletAddress = myKey.getPublic('hex');

const prism = new Blockchain();


const tx1 = new Transaction(myWalletAddress, 'address2', 0);
tx1.signTransaction(myKey);
prism.addTransaction(tx1);


prism.minePendingTransactions(myWalletAddress);


console.log();
console.log(`Ваш баланс:  ${prism.getBalanceOfAddress(myWalletAddress)}`);


console.log();
console.log('Блокчейн валидный?', prism.isChainValid() ? 'Да' : 'Нет');