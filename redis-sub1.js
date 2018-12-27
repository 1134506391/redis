var redis = require('redis');
var client = redis.createClient(6379,'localhost');

client.subscribe('testPublish')
client.on('message',(channel,msg) => {
    console.log(channel)
    console.log(msg)
})
