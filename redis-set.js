var redis = require('redis');
var client = redis.createClient(6379,'localhost');

client.sadd('name','a');
client.sadd('name','b');
client.sadd('name','c');
client.sadd('name','d');

client.type('name',(err,value) => {
    console.log(value)
})

client.smembers('name',(err,value) => {
    console.log(value)
})

client.srem('name','a',(err,value) => {
    console.log(value)
})
client.smembers('name',(err,value) => {
    console.log(value)
})

client.flushall('name',(err,value) => {
    console.log(value)
})
client.smembers('name',(err,value) => {
    console.log(value)
})
