var express = require('express');
var app = express();
var multer = require('multer');
var cors = require('cors');
const bodyParser = require('body-parser');

//serve our JSON files
const fs = require('fs');

app.use(cors())

// configure our express instance with some body-parser settings 
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this is where we'll handle our various routes from
const routes = require('./routes/routes.js')(app, fs);

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public/assets/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname )
  }
})

var upload = multer({ storage: storage }).single('file')

app.post('/upload',function(req, res) {
     
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })

});

app.listen(8000, function() {

    console.log('App running on port 8000');

});