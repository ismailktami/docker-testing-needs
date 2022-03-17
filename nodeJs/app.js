// load express module with `require` directive
var express = require('express')
var app = express()

// define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World!')
})

// launch listening server on port 3000
app.listen(3000, function () {
  console.log('app listening on port 3000!')
})