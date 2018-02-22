const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/index.html');
   })

app.get('/style.css', function(req, res) {
   res.sendFile(__dirname + "/" + "style.css");
  });

  app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "hdefspace.png");
  });



app.listen(3000, () => console.log('Example app listening on port 3000!'));
