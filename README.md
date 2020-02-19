# Golos.js
Golos.js the JavaScript API for Golos blockchain

[![npm version](https://badge.fury.io/js/golos-classic-js.svg)](https://badge.fury.io/js/golos-classic-js)

## Install
```
$ npm install golos-classic-js --save
```

Here is full documentation:
https://github.com/golos-blockchain/golos-js/tree/master/doc

## Browser 

Online library minify js available in [Unpkg CDN](https://unpkg.com/golos-classic-js@latest/dist/golos.min.js).

```html 
<script src="./golos.min.js"></script>
<script>
golos.api.getAccounts(['ned', 'dan'], function(err, response){
    console.log(err, response);
});
</script>
```

## WebSockets 
wss://api.golos.blckchnd.com/ws<br/>
wss://api.aleksw.space/ws<br/>
wss://golos.lexa.host/ws<br/>

## Examples

Broadcast Vote
```js
var golos = require('golos');

var wif = golos.auth.toWif(username, password, 'posting');
golos.broadcast.vote(wif, voter, author, permlink, weight, function(err, result) {
	console.log(err, result);
});
```

Get Accounts
```js
golos.api.getAccounts(['ned', 'dan'], function(err, result) {
	console.log(err, result);
});
```

Other examples in the [documentation](https://github.com/golos-blockchain/golos-js/tree/master/doc).

## Issues
When you find issues, please report them!

## License
MIT