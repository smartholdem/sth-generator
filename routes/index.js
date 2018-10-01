var express = require('express');
var router = express.Router();
const sth = require("sthjs");
const bip39 = require("bip39");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Generator' });
});


router.get('/api/:network/:count', function (req, res) {
    if (req.params["network"] === "devnet") {
        sth.crypto.setNetworkVersion(0x1e); //set net version: 0x1e - devnet
    }


    let result = [];

    for (let i=0; i < req.params["count"]; i++) {
        let PASSPHRASE = bip39.generateMnemonic();
        let PUB_KEY = sth.crypto.getKeys(PASSPHRASE).publicKey;
        let ADDR = sth.crypto.getAddress(PUB_KEY);

        result.push({
            "address": ADDR,
            "pubkey": PUB_KEY,
            "pass": PASSPHRASE
        });

    }

    res.json(result);


});

module.exports = router;
