var redis = require('redis');
var client = redis.createClient(6379,'localhost');

client.lpush('name','a');
client.lpush('name','b');
client.rpush('name','c');
client.rpush('name','d');

client.type('name',(err,value) => {
    console.log(value)
})

client.lrange('name',0,-1,(err,value) => {
    console.log(value)
})

client.del('name',(err,value) => {
    console.log(value)
})

client.flushall('name',(err,value) => {
    console.log(value)
})
client.lrange('name',0,-1,(err,value) => {
    console.log(value)
})