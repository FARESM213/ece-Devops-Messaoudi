var redis = require("redis");
const configure = require('./configure')

const config = configure()
var db = redis.createClient({

  host: process.env.REDIS_HOST || "127.0.0.1",
  port: process.env.REDIS_PORT || 6379

  // host: config.redis.host,
  // port: config.redis.port,
  // retry_strategy: () => {
  //   return new Error("Retry time exhausted")
  // }
})

process.on('SIGINT', function() {
  db.quit();
});

module.exports = db

