const express = require('express')
const app = express()
const api = require('./api')

app.set('port', process.env.PORT || 8081)

app.use('/api', api)
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(app.get('port'), () =>
  console.log(`API Server Listening on port " ${app.get('port')}`)
)
