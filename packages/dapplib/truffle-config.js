require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift razor muscle coconut install immense army giggle'; 
let testAccounts = [
"0xe6c4cf3b2824ea1326aa78e7b6f8d40d204a54be7cccbf81bd708d219cd8a683",
"0x96318f45446c2348c42f94d62c03744a0702425a73809d3fb8cd441021f44f51",
"0xc575918b1a7559b47e0edd5636b13fad48be993c43f17307d7035cb234df9328",
"0x11b4a3b86984faf5e410cb3ed2aee82798c29fd7c7e41109a7f8111f724d8d28",
"0x99f1ec74f8f485242b2e0409cf5d7fe481f56215b387964991fa9009769ae6d6",
"0xb4956f19a309d3f7359c49517b3d047480535f87e1e22502b1d853f46a91533c",
"0x157ab4f10b39d1baa527cd164e50382abc7d20f1308c77a1f73d95ac956fbf88",
"0x467b15961743a57be7839e9b214b9f187dbd5e27dbaf9002ee843ed1a1ea5439",
"0x6f0c75cdc7eaa1c5fe50f936af2417b05ccaf7e0a453bd34535b1e9288e1b05c",
"0x2b60587b920a6b6dfe8628b2c22700914fde2ec95a11980fd91bd46ac8d1eecd"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


