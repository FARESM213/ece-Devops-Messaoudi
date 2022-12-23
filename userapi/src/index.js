const express = require('express')
const userRouter = require('./routes/user')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 8080

const db = require('./dbClient')
db.on("error", (err) => {
  console.error(err)
})

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World from Devops Project!'))

app.get('/readiness',(req,res)=>{
  fooStatus.checkStatus(function(err) {
    res.send(err || 'great');
  });
})

app.get('/health',(req,res)=>{
    res.status(200).send('Application running correctly');
})

app.use('/user', userRouter)

// Construct a `RedisStatus` object configured to check the status of
// the Redis server named 'foo' at `redis//localhost:6379`.
var fooStatus = require('redis-status')({
  name: 'Devops Project',
  host: "127.0.0.1",
  port: 6379
});

// If 'foo' is healthy, this route will print 'great'; otherwise it will print
// the reason that 'foo' is not healthy. A monitoring service like Webmon or
// Pingdom can raise non-'great' responses as alerts.

const server = app.listen(port, (err) => {
  if (err) throw err
  console.log("Server listening the port " + port)
})

process.on('SIGINT', function() {
  console.log( "ByeBye" );
  // some other closing procedures go here
  process.exit(0);
});


module.exports = server
