require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone strong cost predict unfair inside light army gesture'; 
let testAccounts = [
"0xd4d49d9603d0059828a08c7b87382fca97190336dbf28275bddd1ff0725ad288",
"0x7c6b1f75ef9f2ddfa7b0fa97f8901a8a8a3e641498ae6641c89034d78270a964",
"0x7ee0d83e8f4d58b0156e350347f406f5ccc879b279155bb8e68f8d14422c891e",
"0x951c18675e0bd89cde081c39775f11ee8185bedb764ecbeb9c0d9c04a597fbce",
"0x636ac75a6569a8cbbdf42e2b471e94951be7394bf8a89a528ed08963e7e5357a",
"0xca8e30b1cff0baa3cdf9ab28646a7ec42ce3a61bfdf1eacc9791f717f43d37ed",
"0x0da70f50bbea51581323b0981bc271aab86c687fadcb36f831cb57cac1a2cd3a",
"0x16a0e7e6d449ec52b2e688cf3c5e31bac2e247f822709010edb32f9525a5fd2a",
"0xc7d3959c81a67f85a3587ceef39d6ae736c83fba35b8d461ed8871bcf3f11c7d",
"0x006291da8e486250fd4129e8e64c27b81eb76714996a24580127421b9520f4ba"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
