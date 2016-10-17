var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/maxnumber', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
var jason = [{
    "no1" : "18"

},
{
    "no1" : "228"

},
{
    "no1" : "348"

},
{
    "no1" : "480"

},
{
    "no1" : "81"

}
];
var max = 0;
//console.log(max);
var i = 0;
arrlength = jason.length;
//console.log(arrlength);
for(i=0; i < jason.length; i++){
  var val = Number([jason[i]["no1"]]);
      if(val>max){
         max = val;
      }
   }


console.log("Maximum number=" + max);
res.end("Maximum number=" + max);

})

app.post('/Avgnumber', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
var jason = [{
    "no1" : "11"

},
{
    "no1" : "2"

},
{
    "no1" : "32"

},
{
    "no1" : "42"

},
{
    "no1" : "5"

}
];
var avg = 0;
var i = 0;
arrlength = jason.length;
for(; i < arrlength; i++){
  var val = Number([jason[i]["no1"]]);
      avg = avg + val;
      }
   var final = avg/arrlength;


console.log("Average Number=" + final);
res.end("Average Number=" + final);

})


app.post('/Evennumber', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
var jason = [{
    "no1" : "11"

},
{
    "no1" : "7"

},
{
    "no1" : "3"

},
{
    "no1" : "9"

},
{
    "no1" : "15"

}
];
var temp = false;
var i = 0;
arrlength = jason.length;
for(i=0; i < arrlength; i++){

  if(jason[i]["no1"] % 2 === 0)
    temp = true;
      }



console.log("Even Number=" + temp);
res.end("Even Number=" + temp);

})


app.post('/AllEvennumber', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
var jason = [{
    "no1" : "10"

},
{
    "no1" : "26"

},
{
    "no1" : "32"

},
{
    "no1" : "28"

},
{
    "no1" : "8"

}
];
var init = false;
var i = 0;
arrlength = jason.length;
for(i=0; i < arrlength; i++){

  if(jason[i]["no1"] % 2 === 0)
    init = true;


      else
      init = false;
      break;

   }


console.log("All Even Number=" + init);
res.end("All Even Number=" + init);

})


app.post('/stringandsubstring', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
var jason = [{
    "no1" : "okayy"

},
{
    "no1" : "hii"

},
{
    "no1" : "hello"

}

];

var input = "hello";
var temp = false;
var count = 0;
var i = 0;
arrlength = jason.length;
for(i=0; i < arrlength; i++){

  if(jason[i]["no1"] == input)
  {
    temp = true;

}

   }


console.log("Main string contains substring?=" + temp);
res.end("Main string contains substring?=" + temp);

})


app.post('/stringandsubstring_twice', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
var jason = [{
    "no1" : "okay"

},
{
    "no1" : "hii"

},
{
    "no1" : "okay"

},
{
    "no1" : "hello"

},
{
    "no1" : "hey"

}

];

var input = "okay";
var temp = false;
var count = 0;
var i = 0;
arrlength = jason.length;
for(i=0; i < arrlength; i++){

  if(jason[i]["no1"] == input)
  {
    count++;
}

    if(count >= 2)
    {
    temp = true;
    }


   }


console.log("Main string contains substring atleast twice?=" + temp);
res.end("Main string contains substring atleast twice?=" + temp);

})



app.listen(3000);
console.log("listening to 3000");
