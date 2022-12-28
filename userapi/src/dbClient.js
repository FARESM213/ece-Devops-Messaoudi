var redis = require("redis");
const configure = require('./configure')

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

var url = require('url');
var redisURL = url.parse(process.env.REDISCLOUD_URL);
var db = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});


process.on('SIGINT', function() {
  db.quit();
});

module.exports = db

