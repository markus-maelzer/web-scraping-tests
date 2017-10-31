const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const lvs = require('./lvs.js');
const port = 3000;

app.use(express.static('src'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.post('/puppet',function (req, res) {
  console.dir('body ' + JSON.stringify(req.body));
  var data = req.body;
  if(data.user !== "" && data.pw !== "") {
    lvs(req.body.user, req.body.pw);
    res.send(JSON.stringify('SUCCESS'))
  } else {
    console.log('no data cant do lvs einlog stuff :c');
    res.send(JSON.stringify('ERROR'))
  }

})

app.listen(port, function () {
  console.log('server is definately not running on port: ' + port);
})
