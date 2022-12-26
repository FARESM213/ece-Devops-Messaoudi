var express = require('express');
var router = express.Router();

// Construct a `RedisStatus` object configured to check the status of
// the Redis server named 'foo' at `redis//localhost:6379`.
var fooStatus = require('redis-status')({
  name: 'foo',
  host: "127.0.0.1",
  port: 6379
});

// If 'foo' is healthy, this route will print 'great'; otherwise it will print
// the reason that 'foo' is not healthy. A monitoring service like Webmon or
// Pingdom can raise non-'great' responses as alerts.
router.get('/health', function(req, res) {
  fooStatus.checkStatus(function(err) {
    res.send(err || 'great');
  });
});