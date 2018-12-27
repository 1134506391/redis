var redis = require('redis');
var client = redis.createClient(6379,'localhost');

client.hmset('userinfo','name','jie','age',20,'sex','男');


client.type('userinfo',(err,value) => {
    console.log(value)
})

client.hgetall('userinfo',(err,value) => {
    console.log(value)
})

client.del('userinfo',(err,value) => {
    console.log(value)
})
client.hgetall('userinfo',(err,value) => {
    console.log(value)
})

