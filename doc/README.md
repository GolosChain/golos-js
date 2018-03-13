# Documentation

- [Install](#install)
- [Browser](#browser)
- [Config](#config)
- [Database API](#api)
    - [Subscriptions](#subscriptions)
    - [Tags](#tags)
    - [Blocks and transactions](#blocks-and-transactions)
    - [Globals](#globals)
    - [Keys](#keys)
    - [Accounts](#accounts)
    - [Market](#market)
    - [Authority / validation](#authority--validation)
    - [Votes](#votes)
    - [Content](#content)
    - [Witnesses](#witnesses)
- [Login API](#login)
- [Follow API](#follow-api)
- [Broadcast API](#broadcast-api)
- [Broadcast](#broadcast)
- [Auth](#auth)
- [Formatter](#formatter)

# Install
```
$ npm install git+https://github.com/GolosChain/golos-js --save
```

# Browser 
```html 
<script src="./golos.min.js"></script>
<script>
golos.api.getAccounts(['ned', 'dan'], function(err, response){
    console.log(err, response);
});
</script>
```

## Config
Default config should work with golos. however you can change it to work with golos
as 
```js
golos.config.set('websocket','wss://ws.golos.io'); // assuming websocket is work at ws.golos.io
golos.config.set('address_prefix','GLS');
golos.config.set('chain_id','782a3039b478c839e4cb0c941ff4eaeb7df40bdd68bd441afd444b9da763de12');
```
### set
```
golos.config.set('address_prefix','GLS');
```
### get
```
golos.config.get('chain_id');
```
### Set config
```js
golos.api.setOptions(options);
```
#### Example
```js
/**
 * setOptions() set config
 * @param {Object} options - Сonfiguration as an object
*/
var options = {
	'websocket': 'wss://ws.testnet.golos.io',
	'address_prefix': 'GLS',
	'chain_id': '5876894a41e6361bde2e73278f07340f2eb8b41c2facd29099de9deef6cdb679'
};
golos.api.setOptions(options);
```

# API

## Subscriptions

### Set Subscribe Callback
```
golos.api.setSubscribeCallback(callback, clearFilter, function(err, result) {
  console.log(err, result);
});
```
### Set Pending Transaction Callback
```
golos.api.setPendingTransactionCallback(cb, function(err, result) {
  console.log(err, result);
});
```
### Set Block Applied Callback
```
golos.api.setBlockAppliedCallback(cb, function(err, result) {
  console.log(err, result);
});
```
### Cancel All Subscriptions
```
golos.api.cancelAllSubscriptions(function(err, result) {
  console.log(err, result);
});
```

## Tags

### Get Trending Tags
```
golos.api.getTrendingTags(afterTag, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Trending
```
golos.api.getDiscussionsByTrending(query, function(err, result) {
  console.log(err, result);
});
```
#### Example:
```js
/**
 * getDiscussionsByTrending() receiving posts by tags
 * @param {Object} query - A search object that includes tags and a limit or authors username and url-address of post
*/
var query = {
  select_tags: ['dev', 'test'],
  limit: 100,
  //start_author: 'epexa',
  //start_permlink: 'test-url'
};
golos.api.getDiscussionsByTrending(query, function(err, result) {
  //console.log(err, result);
  if (!err) {
    result.forEach(function(item) {
      console.log('getDiscussionsByTrending', item.title);
    });
  }
  else console.error(err);
});
```
### Get Discussions By Created
```
golos.api.getDiscussionsByCreated(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Active
```
golos.api.getDiscussionsByActive(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Cashout
```
golos.api.getDiscussionsByCashout(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Payout
```
golos.api.getDiscussionsByPayout(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Votes
```
golos.api.getDiscussionsByVotes(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Children
```
golos.api.getDiscussionsByChildren(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Hot
```
golos.api.getDiscussionsByHot(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Feed
```
golos.api.getDiscussionsByFeed(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Blog
```
golos.api.getDiscussionsByBlog(query, function(err, result) {
  console.log(err, result);
});
```
#### Example:
```js
/**
 * getDiscussionsByBlog() receiving posts by author and tag
 * @param {Object} query - search object that includes the author, tag, limit
*/
var query = {
  select_authors: ['epexa'],
  select_tags: ['dev'],
  limit: 100
};
golos.api.getDiscussionsByBlog(query, function(err, result) {
  //console.log(err, result);
  if (!err) {
    result.forEach(function(item) {
      console.log('getDiscussionsByBlog', item.title);
    });
  }
  else console.error(err);
});
```
### Get Discussions By Comments
```
golos.api.getDiscussionsByComments(query, function(err, result) {
  console.log(err, result);
});
```

## Blocks and transactions

### Get Block Header
```
golos.api.getBlockHeader(blockNum, function(err, result) {
  console.log(err, result);
});
```
### Get Block
```
golos.api.getBlock(blockNum, function(err, result) {
  console.log(err, result);
});
```
### Get State
```
golos.api.getState(path, function(err, result) {
  console.log(err, result);
});
```
### Get Trending Categories
```
golos.api.getTrendingCategories(after, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Best Categories
```
golos.api.getBestCategories(after, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Active Categories
```
golos.api.getActiveCategories(after, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Recent Categories
```
golos.api.getRecentCategories(after, limit, function(err, result) {
  console.log(err, result);
});
```

## Globals

### Get Config
```
golos.api.getConfig(function(err, result) {
  console.log(err, result);
});
```
### Get Dynamic Global Properties
```
golos.api.getDynamicGlobalProperties(function(err, result) {
  console.log(err, result);
});
```
### Get Chain Properties
```
golos.api.getChainProperties(function(err, result) {
  console.log(err, result);
});
```
### Get Feed History
```
golos.api.getFeedHistory(function(err, result) {
  console.log(err, result);
});
```
### Get Current Median History Price
```
golos.api.getCurrentMedianHistoryPrice(function(err, result) {
  console.log(err, result);
});
```
### Get Hardfork Version
```
golos.api.getHardforkVersion(function(err, result) {
  console.log(err, result);
});
```
### Get Next Scheduled Hardfork
```
golos.api.getNextScheduledHardfork(function(err, result) {
  console.log(err, result);
});
```

## Keys

### Get Key References
```
golos.api.getKeyReferences(key, function(err, result) {
  console.log(err, result);
});
```
#### Example:
```js
var publicKeys = ['GLS6...', 'GLS6...'];
golos.api.getKeyReferences(publicKeys, function(err, result) {
  //console.log(err, result);
  if (!err) {
    result.forEach(function(item) {
      console.log('getKeyReferences', 'username: [', item[0], ']');
    });
  }
  else console.error(err);
});
```

## Accounts

### Get Accounts
```
golos.api.getAccounts(names, function(err, result) {
  console.log(err, result);
});
```
#### Example:
```js
var accounts = [ 'epexa', 'epexa2' ];
golos.api.getAccounts(accounts, function(err, result) {
  //console.log(err, result);
  if (!err) {
    result.forEach(function(item) {
      console.log('getAccounts', 'username: [', item.name, '] id: [', item.id, ']');
    });
  }
  else console.error(err);
});
```
### Lookup Account Names
```
golos.api.lookupAccountNames(accountNames, function(err, result) {
  console.log(err, result);
});
```
#### Example:
```js
var usernames = ['epexa', 'epexa2'];
golos.api.lookupAccountNames(usernames, function(err, result) {
  //console.log(err, result);
  if (!err) {
    result.forEach(function(item) {
    if (item) console.log('lookupAccountNames', 'username: [', item.name, '] id: [', item.id, ']');
    else console.log('lookupAccountNames', 'account not found!');
    });
  }
  else console.error(err);
});
```
### Lookup Accounts
```
golos.api.lookupAccounts(lowerBoundName, limit, function(err, result) {
  console.log(err, result);
});
```
#### Example:
```js
var searchAccountsQuery = 'epe';
var limitResults = 10;
golos.api.lookupAccounts(searchAccountsQuery, limitResults, function(err, result) {
  //console.log(err, result);
  if (!err) {
    result.forEach(function(item) {
      console.log('lookupAccounts', 'username: [', item, ']');
    });
  }
  else console.error(err);
});
```
### Get Account Count
```
golos.api.getAccountCount(function(err, result) {
  console.log(err, result);
});
```
### Get Conversion Requests
```
golos.api.getConversionRequests(accountName, function(err, result) {
  console.log(err, result);
});
```
### Get Account History
```
golos.api.getAccountHistory(account, from, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Owner History
```
golos.api.getOwnerHistory(account, function(err, result) {
  console.log(err, result);
});
```
### Get Recovery Request
```
golos.api.getRecoveryRequest(account, function(err, result) {
  console.log(err, result);
});
```

## Market

### Get Ticker
```js
/**
 * getTicker() receive statistic values of the internal GBG:GOLOS market for the last 24 hours
*/
golos.api.getTicker(function(err, result) {
  console.log(err, result);
});
```
### Get Order Book
```
golos.api.getOrderBook(limit, function(err, result) {
  console.log(err, result);
});
```
### Get Open Orders
```
golos.api.getOpenOrders(owner, function(err, result) {
  console.log(err, result);
});
```
### Get Liquidity Queue
```
golos.api.getLiquidityQueue(startAccount, limit, function(err, result) {
  console.log(err, result);
});
```

## Authority / validation

### Get Transaction Hex
```
golos.api.getTransactionHex(trx, function(err, result) {
  console.log(err, result);
});
```
### Get Transaction
```
golos.api.getTransaction(trxId, function(err, result) {
  console.log(err, result);
});
```
### Get Required Signatures
```
golos.api.getRequiredSignatures(trx, availableKeys, function(err, result) {
  console.log(err, result);
});
```
### Get Potential Signatures
```
golos.api.getPotentialSignatures(trx, function(err, result) {
  console.log(err, result);
});
```
### Verify Authority
```
golos.api.verifyAuthority(trx, function(err, result) {
  console.log(err, result);
});
```
### Verify Account Authority
```
golos.api.verifyAccountAuthority(nameOrId, signers, function(err, result) {
  console.log(err, result);
});
```

## Votes

### Get Active Votes
```
golos.api.getActiveVotes(author, permlink, function(err, result) {
  console.log(err, result);
});
```
### Get Account Votes
```
golos.api.getAccountVotes(voter, function(err, result) {
  console.log(err, result);
});
```

## Content


### Get Content
```
golos.api.getContent(author, permlink, function(err, result) {
  console.log(err, result);
});
```
#### Example:
```js
/**
 * getContent() receiving a post
 * @param {String} author - author of the post
 * @param {String} permlink - url-address of the post
*/
var author = 'epexa';
var permlink = 'test-url';
golos.api.getContent(author, permlink, function(err, result) {
  //console.log(err, result);
  if (!err) {
    console.log('getContent', result.title);
  }
  else console.error(err);
});
```
### Get Content Replies
```
golos.api.getContentReplies(parent, parentPermlink, function(err, result) {
  console.log(err, result);
});
```
#### Example:
```js
/**
 * getContentReplies() receiving a comments
 * @param {String} parent - author of the post
 * @param {String} parentPermlink - url-address of the post
*/
var parent = 'epexa';
var parentPermlink = 'test-url';
golos.api.getContentReplies(parent, parentPermlink, function(err, result) {
  //console.log(err, result);
  if (!err) {
    result.forEach(function(item) {
      console.log('getContentReplies', item.body);
    });
  }
  else console.error(err);
});
```
### Get Discussions By Author Before Date
```
golos.api.getDiscussionsByAuthorBeforeDate(author, startPermlink, beforeDate, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Replies By Last Update
```
golos.api.getRepliesByLastUpdate(startAuthor, startPermlink, limit, function(err, result) {
  console.log(err, result);
});
```

## Witnesses


### Get Witnesses
```
golos.api.getWitnesses(witnessIds, function(err, result) {
  console.log(err, result);
});
```
### Get Witness By Account
```
golos.api.getWitnessByAccount(accountName, function(err, result) {
  console.log(err, result);
});
```
### Get Witnesses By Vote
```
golos.api.getWitnessesByVote(from, limit, function(err, result) {
  console.log(err, result);
});
```
### Lookup Witness Accounts
```
golos.api.lookupWitnessAccounts(lowerBoundName, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Witness Count
```
golos.api.getWitnessCount(function(err, result) {
  console.log(err, result);
});
```
### Get Active Witnesses
```
golos.api.getActiveWitnesses(function(err, result) {
  console.log(err, result);
});
```
### Get Miner Queue
```
golos.api.getMinerQueue(function(err, result) {
  console.log(err, result);
});
```

## Login API

### Login

/!\ It's **not safe** to use this method with your username and password. This method always return `true` and is only used in intern with empty values to enable broadcast.

```
golos.api.login('', '', function(err, result) {
  console.log(err, result);
});
```
#### Example:
```js
/**
 * login() authorization
 * @param {String} username - user username
 * @param {String} password - user password
*/
var username = 'epexa';
var password = 'qwerty12345';
golos.api.login(username, password, function(err, result) {
  //console.log(err, result);
  if (!err) {
    console.log('login', result);
  }
  else console.error(err);
});
```

### Get Api By Name
```
golos.api.getApiByName(apiName, function(err, result) {
  console.log(err, result);
});
```

## Follow API

### Get Followers
```
golos.api.getFollowers(following, startFollower, followType, limit, function(err, result) {
  console.log(err, result);
});
```
#### Example
```js
/**
 * getFollowers() returns subscribers
 * @param {String} following - username whom return subscribers
 * @param {String} startFollower - position from which item to return result
 * @param {String} followType - subscription type, value: 'blog' or null
 * @param {Integer} limit - how many records to return, the maximum value: 100
*/
var following = 'epexa';
var startFollower = '';
var followType = null;
var limit = 100;
golos.api.getFollowers(following, startFollower, followType, limit, function(err, result) {
  //console.log(err, result);
  if ( ! err) {
    result.forEach(function(item) {
      console.log('getFollowers', item);
    });
  }
  else console.error(err);
});
```
### Get Following
```
golos.api.getFollowing(follower, startFollowing, followType, limit, function(err, result) {
  console.log(err, result);
});
```
#### Example:
```js
/**
 * getFollowing() returns subscriptions
 * @param {String} follower - username subscriber
 * @param {String} startFollower - position from which item to return result
 * @param {String} followType - subscription type, value: 'blog' или null
 * @param {Integer} limit - how many records to return, the maximum value: 100
*/
var follower = 'epexa';
var startFollower = '';
var followType = null;
var limit = 100;
golos.api.getFollowing(follower, startFollower, followType, limit, function(err, result) {
  //console.log(err, result);
  if ( ! err) {
    result.forEach(function(item) {
      console.log('getFollowing', item);
    });
  }
  else console.error(err);
});
```
### Get Follow Count
```
golos.api.getFollowCount(account, function(err, result) {
  console.log(err, result);
});
```
#### Example:
```js
/**
 * getFollowCount() returns count of subscribers and subscriptions
 * @param {String} account - username of the user to return data
*/
var account = 'epexa';
golos.api.getFollowCount(account, function(err, result) {
  console.log(err, result);
  if (!err) {
    console.log('getFollowCount', result);
  }
  else console.error(err);
});
```

## Broadcast API

### Broadcast Transaction
```
golos.api.broadcastTransaction(trx, function(err, result) {
  console.log(err, result);
});
```
### Broadcast Transaction Synchronous
```
golos.api.broadcastTransactionSynchronous(trx, function(err, result) {
  console.log(err, result);
});
```
### Broadcast Block
```
golos.api.broadcastBlock(b, function(err, result) {
  console.log(err, result);
});
```
### Broadcast Transaction With Callback
```
golos.api.broadcastTransactionWithCallback(confirmationCallback, trx, function(err, result) {
  console.log(err, result);
});
```
# Broadcast

### Account Create
```
golos.broadcast.accountCreate(wif, fee, creator, newAccountName, owner, active, posting, memoKey, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```
#### Example:
```js
/**
 * accountCreate() new account registration
 * @param {Base58} wif - private active key
 * @param {String} fee - the cost of creating an account. It will be listed by virtue of the voice of the new account
 * @param {String} creator - name of user who registers an account
 * @param {String} newAccountName - new account username
 * @param {Object} owner - object containing a new owner key
 * @param {Object} active - object containing a active key
 * @param {Object} posting - object containing a posting key
 * @param {String} memoKey - new memo key
 * @param {String} jsonMetadata - additional data for a new account (avatar, location, etc.)
*/
var wif = '5K...';
var fee = '90.000 GOLOS';
var creator = 'epexa';
var newAccountName = name;
var owner = {
  weight_threshold: 1,
  account_auths: [],
  key_auths: [[newKeys.owner, 1]]
};
var active = {
  weight_threshold: 1,
  account_auths: [],
  key_auths: [[newKeys.active, 1]]
};
var posting = {
  weight_threshold: 1,
  account_auths: [],
  key_auths: [[newKeys.posting, 1]]
};
var memoKey = newKeys.memo;
var jsonMetadata = '{}';
golos.broadcast.accountCreate(wif, fee, creator, newAccountName, owner, active, posting, memoKey, jsonMetadata, function(err, result) {
  //console.log(err, result);
  if (!err) {
    console.log('accountCreate', result);
  }
  else console.error(err);
});
```
### Account Create With Delegation
```
golos.broadcast.accountCreateWithDelegation(wif, fee, delegation, creator, newAccountName, owner, active, posting, memoKey, jsonMetadata, extensions, function(err, result) {
  console.log(err, result);
});
```
### Delegate Vesting Shares
```
golos.broadcast.delegateVestingShares(wif, delegator, delegatee, vesting_shares, function(err, result) {
  console.log(err, result);
});
```
### Account Update
```
golos.broadcast.accountUpdate(wif, account, owner, active, posting, memoKey, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```
### Account Witness Proxy
```
golos.broadcast.accountWitnessProxy(wif, account, proxy, function(err, result) {
  console.log(err, result);
});
```
### Account Witness Vote
```
golos.broadcast.accountWitnessVote(wif, account, witness, approve, function(err, result) {
  console.log(err, result);
});
```
### Challenge Authority
```
golos.broadcast.challengeAuthority(wif, challenger, challenged, requireOwner, function(err, result) {
  console.log(err, result);
});
```
### Change Recovery Account
```
golos.broadcast.changeRecoveryAccount(wif, accountToRecover, newRecoveryAccount, extensions, function(err, result) {
  console.log(err, result);
});
```
### Comment
```
golos.broadcast.comment(wif, parentAuthor, parentPermlink, author, permlink, title, body, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```
#### Example add a post:
```js
/**
 * comment() add a post
 * @param {Base58} wif - private posting key
 * @param {String} parentAuthor - for add a post, empty field
 * @param {String} parentPermlink - main tag
 * @param {String} author - author of the post
 * @param {String} permlink - url-address of the post
 * @param {String} title - header of the post
 * @param {String} body - text of the post
 * @param {String} jsonMetadata - meta-data of the post (images etc.)
*/
var wif = '5K...';
var parentAuthor = '';
var parentPermlink = 'dev';
var author = 'epexa';
var permlink = 'test-url';
var title = 'test';
var body = 'test2';
var jsonMetadata = '{}';
golos.broadcast.comment(wif, parentAuthor, parentPermlink, author, permlink, title, body, jsonMetadata, function(err, result) {
  //console.log(err, result);
  if (!err) {
    console.log('comment', result);
  }
  else console.error(err);
});
```
#### Example add a comment:
```js
/**
 * comment() add a comment
 * @param {Base58} wif - private posting key
 * @param {String} parentAuthor - for add a comment, author of the post
 * @param {String} parentPermlink - for add a comment, url-address of the post
 * @param {String} author - author of the comment
 * @param {String} permlink - unique url-address of the comment
 * @param {String} title - for create a comment, empty field
 * @param {String} body - text of the comment
 * @param {String} jsonMetadata - meta-data of the post (images etc.)
*/
var wif = '5K...';
var parentAuthor = 'epexa';
var parentPermlink = 'test-url';
var author = 'epexa';
var permlink = 're-' + parentAuthor + '-' + parentPermlink + '-' + Date.now(); // re-epexa-test-url-1517333064308
var title = '';
var body = 'hi!';
var jsonMetadata = '{}';
golos.broadcast.comment(wif, parentAuthor, parentPermlink, author, permlink, title, body, jsonMetadata, function(err, result) {
  //console.log(err, result);
  if (!err) {
    console.log('comment', result);
  }
  else console.error(err);
});
```
### Comment Options
```
golos.broadcast.commentOptions(wif, author, permlink, maxAcceptedPayout, percentGolosDollars, allowVotes, allowCurationRewards, extensions, function(err, result) {
  console.log(err, result);
});
```
### Comment Reward
```
golos.broadcast.commentReward(wif, author, permlink, sbdPayout, vestingPayout, function(err, result) {
  console.log(err, result);
});
```
### Convert
```
golos.broadcast.convert(wif, owner, requestid, amount, function(err, result) {
  console.log(err, result);
});
```
### Custom
```
golos.broadcast.custom(wif, requiredAuths, id, data, function(err, result) {
  console.log(err, result);
});
```
### Custom Binary
```
golos.broadcast.customBinary(wif, id, data, function(err, result) {
  console.log(err, result);
});
```
### Custom Json
```
golos.broadcast.customJson(wif, requiredAuths, requiredPostingAuths, id, json, function(err, result) {
  console.log(err, result);
});
```
### Delete Comment
```
golos.broadcast.deleteComment(wif, author, permlink, function(err, result) {
  console.log(err, result);
});
```
### Escrow Dispute
```
golos.broadcast.escrowDispute(wif, from, to, agent, who, escrowId, function(err, result) {
  console.log(err, result);
});
```
### Escrow Release
```
golos.broadcast.escrowRelease(wif, from, to, agent, who, receiver, escrowId, sbdAmount, golosAmount, function(err, result) {
  console.log(err, result);
});
```
### Escrow Transfer
```
golos.broadcast.escrowTransfer(wif, from, to, agent, escrowId, sbdAmount, golosAmount, fee, ratificationDeadline, escrowExpiration, jsonMeta, function(err, result) {
  console.log(err, result);
});
```
### Feed Publish
```
golos.broadcast.feedPublish(wif, publisher, exchangeRate, function(err, result) {
  console.log(err, result);
});
```
### Pow2
```
golos.broadcast.pow2(wif, work, newOwnerKey, props, function(err, result) {
  console.log(err, result);
});
```
### Fill Convert Request
```
golos.broadcast.fillConvertRequest(wif, owner, requestid, amountIn, amountOut, function(err, result) {
  console.log(err, result);
});
```
### Fill Order
```
golos.broadcast.fillOrder(wif, currentOwner, currentOrderid, currentPays, openOwner, openOrderid, openPays, function(err, result) {
  console.log(err, result);
});
```
### Fill Vesting Withdraw
```
golos.broadcast.fillVestingWithdraw(wif, fromAccount, toAccount, withdrawn, deposited, function(err, result) {
  console.log(err, result);
});
```
### Interest
```
golos.broadcast.interest(wif, owner, interest, function(err, result) {
  console.log(err, result);
});
```
### Limit Order Cancel
```
golos.broadcast.limitOrderCancel(wif, owner, orderid, function(err, result) {
  console.log(err, result);
});
```
### Limit Order Create
```
golos.broadcast.limitOrderCreate(wif, owner, orderid, amountToSell, minToReceive, fillOrKill, expiration, function(err, result) {
  console.log(err, result);
});
```
### Limit Order Create2
```
golos.broadcast.limitOrderCreate2(wif, owner, orderid, amountToSell, exchangeRate, fillOrKill, expiration, function(err, result) {
  console.log(err, result);
});
```
### Liquidity Reward
```
golos.broadcast.liquidityReward(wif, owner, payout, function(err, result) {
  console.log(err, result);
});
```
### Pow
```
golos.broadcast.pow(wif, worker, input, signature, work, function(err, result) {
  console.log(err, result);
});
```
### Prove Authority
```
golos.broadcast.proveAuthority(wif, challenged, requireOwner, function(err, result) {
  console.log(err, result);
});
```
### Recover Account
```
golos.broadcast.recoverAccount(wif, accountToRecover, newOwnerAuthority, recentOwnerAuthority, extensions, function(err, result) {
  console.log(err, result);
});
```
### Request Account Recovery
```
golos.broadcast.requestAccountRecovery(wif, recoveryAccount, accountToRecover, newOwnerAuthority, extensions, function(err, result) {
  console.log(err, result);
});
```
### Escrow Approve
```
golos.broadcast.escrowApprove(wif, from, to, agent, who, escrowId, approve, function(err, result) {
  console.log(err, result);
});
```
### Set Withdraw Vesting Route
```
golos.broadcast.setWithdrawVestingRoute(wif, fromAccount, toAccount, percent, autoVest, function(err, result) {
  console.log(err, result);
});
```
### Transfer
```
golos.broadcast.transfer(wif, from, to, amount, memo, function(err, result) {
  console.log(err, result);
});
```
#### Example:
```js
/**
 * transfer() transfer golos or golos gold
 * @param {Base58} wif - private owner key
 * @param {String} from - username who send, whose owner key
 * @param {String} to - username who get
 * @param {String} amount - number of coins in the format: 0.001 GOLOS
 * @param {String} memo - a comment
*/
var wif = '5J...';
var from = 'epexa';
var to = 'melnikaite';
var amount = '0.001 GOLOS';
var memo = 'gift';
golos.broadcast.transfer(wif, from, to, amount, memo, function(err, result) {
  //console.log(err, result);
  if (!err) {
    console.log('transfer', result);
  }
  else console.error(err);
});
```
### Transfer To Vesting
```
golos.broadcast.transferToVesting(wif, from, to, amount, function(err, result) {
  console.log(err, result);
});
```
### Vote
```
golos.broadcast.vote(wif, voter, author, permlink, weight, function(err, result) {
  console.log(err, result);
});
```
### Withdraw Vesting
```
golos.broadcast.withdrawVesting(wif, account, vestingShares, function(err, result) {
  console.log(err, result);
});
```
### Witness Update
```
golos.broadcast.witnessUpdate(wif, owner, url, blockSigningKey, props, fee, function(err, result) {
  console.log(err, result);
});
```
### Fill Vesting Withdraw
```
golos.broadcast.fillVestingWithdraw(wif, fromAccount, toAccount, withdrawn, deposited, function(err, result) {
  console.log(err, result);
});
```
### Fill Order
```
golos.broadcast.fillOrder(wif, currentOwner, currentOrderid, currentPays, openOwner, openOrderid, openPays, function(err, result) {
  console.log(err, result);
});
```
### Fill Transfer From Savings
```
golos.broadcast.fillTransferFromSavings(wif, from, to, amount, requestId, memo, function(err, result) {
  console.log(err, result);
});
```
### Transfer To Savings
```
golos.broadcast.transferToSavings(wif, from, to, amount, memo, function(err, result) {
  console.log(err, result);
});
```
### Transfer From Savings
```
golos.broadcast.transferFromSavings(wif, from, requestId, to, amount, memo, function(err, result) {
  console.log(err, result);
});
```
### Cancel Transfer From Savings
```
golos.broadcast.cancelTransferFromSavings(wif, from, requestId, function(err, result) {
  console.log(err, result);
});
```

# Auth

### Verify
```
golos.auth.verify(name, password, auths);
```
#### Example:
```js
var username = 'epexa';
var password = 'P5...';  // master password
// object in which the key type public key (active, memo, owner, posting), and the value of the array in the array itself is the public key
var auths = {
  posting: [['GLS6...']]
};
var verifyResult = golos.auth.verify(username, password, auths);
console.log('verify', verifyResult);
```

### Generate Keys
```
golos.auth.generateKeys(name, password, roles);
```
#### Example:
```js
/**
 * generateKeys() generating new keys for a new account
 * @param {String} name - new account username
 * @param {String} password - master-password for a new account
*/
var name = 'epexa4';
var password = 'qwerty12345';
var newKeys = golos.auth.generateKeys(name, password, ['owner', 'active', 'posting', 'memo']);
console.log('newKeys', newKeys);
```

### Get Private Keys
```
golos.auth.getPrivateKeys(name, password, roles);
```
#### Example:
```js
var username = 'epexa';
var password = 'P5H...'; // master password
var roles = ['owner', 'active', 'posting', 'memo']; // optional parameter, if not specify, then all keys will return
var keys = golos.auth.getPrivateKeys(username, password, roles);
console.log('getPrivateKeys', keys);
```

### Is Wif
```
golos.auth.isWif(privWif);
```
#### Example:
```js
var privWif = '5J...';
var resultIsWif = golos.auth.isWif(privWif);
console.log('isWif', resultIsWif);
```

### To Wif
```
golos.auth.toWif(name, password, role);
```
#### Example:
```js
var username = 'epexa';
var password = 'P5H...'; // master password
var role = 'posting'; // private key type, one of owner, active, posting, memo
var privateKey = golos.auth.toWif(username, password, role);
console.log('toWif', privateKey);
```

### Wif Is Valid
```
golos.auth.wifIsValid(privWif, pubWif);
```
#### Example:
```js
var privWif = '5J...'; // private key
var pubWif = 'GLS6...'; // public key
var resultWifIsValid = golos.auth.wifIsValid(privWif, pubWif);
console.log('wifIsValid', resultWifIsValid);
```

### Wif To Public
```
golos.auth.wifToPublic(privWif);
```
#### Example:
```js
var privWif = '5J...'; // private key
var resultWifToPublic = golos.auth.wifToPublic(privWif, pubWif);
console.log('wifToPublic', resultWifToPublic);
```

### Sign Transaction
```
golos.auth.signTransaction(trx, keys);
```

# Formatter

### Create Suggested Password
```
var password = golos.formatter.createSuggestedPassword();
console.log(password);
// => 'GAz3GYFvvQvgm7t2fQmwMDuXEzDqTzn9'
```

### Comment Permlink
```
var parentAuthor = 'ned';
var parentPermlink = 'a-selfie';
var commentPermlink = golos.formatter.commentPermlink(parentAuthor, parentPermlink);
console.log(commentPermlink);
// => 're-ned-a-selfie-20170621t080403765z'
```

### Estimate Account Value
```
var golosPower = golos.formatter.estimateAccountValue(account);
```

### Reputation
```
var reputation = golos.formatter.reputation(3512485230915);
console.log(reputation);
// => 56
```

### Vest To Golos
```
var golosPower = golos.formatter.vestToGolos(vestingShares, totalVestingShares, totalVestingFundGolos);
console.log(golosPower);
```

# Utils

### Validate Username
```
var isValidUsername = golos.utils.validateAccountName('test1234');
console.log(isValidUsername);
// => 'null'

var isValidUsername = golos.utils.validateAccountName('a1');
console.log(isValidUsername);
// => 'Account name should be longer.'
```
