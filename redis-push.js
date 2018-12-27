var redis = require('redis');
var client = redis.createClient(6379,'localhost');

client.publish('testPublish','message from publish.js')
