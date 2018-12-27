var redis = require('redis');
var client = redis.createClient(6379,'localhost');

client.set('username1','jie');
client.set('username2','biao','Ex','5');
client.set('username3','nine');

client.get('username3');

client.type('username3',(err,value) => {
    console.log(value)
})

client.del('username3',(err,value) => {
    console.log(value)
})

client.keys('*',(err,value) => {
    console.log(value)
})

client.keys('flushall',(err,value) => {
    console.log(value)
})