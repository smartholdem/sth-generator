# sth-generator
Example addresses generator + json rpc api

```
git clone https://github.com/smartholdem/sth-generator.git
cd sth-generator
npm install

npm start or forever start bin/www
```

### Generate Addresses

http://localhost:3000/:network/:count

network - devnet or mainnet

count - from 1 to ...

example:

```
http://localhost:3000/devnet/10


//result

[
  {
    "address": "DM9hcMV2HxqYGP2SzvNKwWTwVQYm8aAQ8C",
    "pubkey": "03e59d9ff446c43a28883d39a766a7113cbab694db5b51e6e1094681fab7507f58",
    "pass": "garment cup damage phone proud news canvas flower honey pony antenna gap"
  },
  {
    "address": "DRFNHdiy9bLeRmz69GCNqpasFK6WpVnfVZ",
    "pubkey": "02a9943567d4d36b45dc1284b24ce9f1a3416d20fb1eeb24003af36e40b4cdc15f",
    "pass": "chimney current squeeze warfare electric calm city lamp dentist system sock enjoy"
  },
 ...
]
```
