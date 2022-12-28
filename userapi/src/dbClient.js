var redis = require("redis");
const configure = require('./configure')

const config = configure()
var db = redis.createClient({

  host: process.env.REDIS_HOST || "redis://:p0ac4ad4478fe54b35b6c9b64528a20339dcde4f8defb7ce18cf258ea5a4aba82@ec2-52-19-107-150.eu-west-1.compute.amazonaws.com:28809",
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

