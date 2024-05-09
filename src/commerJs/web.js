import Web3 from 'web3';

var provider;

window.fn = function webShow() {
  if (window.ethereum) {
    provider = window.ethereum;
    try {
      window.ethereum.enable();
    } catch (e) {
    }
  } else {
    provider = Web3.givenProvider;
  }
}

const web3 = new Web3(provider);
export default web3

