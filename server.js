// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const dotenv = require('dotenv')
// gives access to env file
dotenv.config()
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get('/api/:id', (req, res)=>{
  const input = req.params.id
  let date =new Date(input)
 
 
  let uctDate = date.toUTCString()

  let unixTimestamp = Math.floor((date).getTime())
  if(!unixTimestamp){
    unixTimestamp = input
  }
  if(uctDate =='Invalid Date'){
  res.json({error: 'Invalid Date'})
  return
  }

  res.json({unix: unixTimestamp, utc: uctDate })
})



app.get('/api', (req, res)=>{

   let unixTimestamp = Math.floor((new Date()).getTime())
   let uctDate = new Date().toUTCString()
  

  res.json({unix: unixTimestamp, utc: uctDate })

})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
