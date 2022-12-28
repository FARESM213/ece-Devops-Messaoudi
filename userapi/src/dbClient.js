// var redis = require("redis");
// const configure = require('./configure')

// const config = configure()
// var db = redis.createClient({

//   host: process.env.REDIS_HOST || "127.0.0.1",
//   port: process.env.REDIS_PORT || 6379

//   // host: config.redis.host,
//   // port: config.redis.port,
//   // retry_strategy: () => {
//   //   return new Error("Retry time exhausted")
//   // }
// })

const Redis = require('ioredis');
const fs = require('fs');

const redis = new Redis({
    host: 'redis-12294.c300.eu-central-1-1.ec2.cloud.redislabs.com',
    port: 12294,
    password: 'ajreFAxYSVyzH5stIyogIQFuXDust3Hr'
});



process.on('SIGINT', function() {
  db.quit();
});

module.exports = redis

