var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.listen(3000);
var http = require('http');
// var url = require('url');
// var url_parts = url.parse(request.url, true);
// var query = url_parts.query;
app.use(express.static('.'));
//app.use(express.static(path.join(__dirname, 'public')));


    app.get('/', function(req, res) {
        res.sendFile(__dirname + "/" + "webpage.html");
    });
	
	
	// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
	app.get('/maxvalue', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   

var input = [{
    "ip" : "3"
    
},
{
    "ip" : "11"
    
},
{
    "ip" : "41"
    
},
{
    "ip" : "22"
    
},
{
    "ip" : "7"
    
}
];
var max = 0;
var i = 0;
function findmaxnumber(input){
arrlength = input.length;
for(i=0; i < input.length; i++){
      var value = Number(input[i].ip);
      if (value > max)
      {
        max = value;
      }
   }
}
findmaxnumber(input);   

res.send(JSON.stringify({
                    "max": max,
                }));
});

app.get('/averagevalue', urlencodedParser, function (req, res){
var input = [{
    "ip" : "10"
    
},
{
    "ip" : "20"
    
},
{
    "ip" : "30"
    
},
{
    "ip" : "40"
    
},
{
    "ip" : "50"
    
}
];
	function findaveragenumber(input){
	var temp = 0;
	var average = 0;
	var arrlength = input.length;
	for(var i=0;i<arrlength;i++){
		temp = temp+ Number (input[i]["ip"]);

	}
	average = temp/arrlength;
	res.send(JSON.stringify({
                    "avg": average,
                }));
				
}
findaveragenumber(input);
});

app.get('/oneevenNumber', urlencodedParser, function (req, res){
var evennum = [{
    "num3" : "1"
    
},
{
    "num3" : "5"
    
},
{
    "num3" : "88"
    
},
{
    "num3" : "9"
    
},
{
    "num3" : "7"
    
}
];
	function evennumber(evennum)	{
	var evenarrlength = evennum.length;
   
   for(var i=0;i<evenarrlength;i++){
	   var check = Number(evennum[i]["num3"]);
       if(check%2===0){	   
	   res.send(JSON.stringify({
					"result": "true"
				}));
	   }     
     }
	res.send(JSON.stringify({
					"result": "false"
	}));

	}
	evennumber(evennum);

});

app.get('/allevenNumber', urlencodedParser, function (req, res){
var allevennum = [{
    "num4" : "6"
    
},
{
    "num4" : "4"
    
},
{
    "num4" : "2"
    
},
{
    "num4" : "8"
    
},
{
    "num4" : "20"
    
}
];
	function checkwheatheralleven(allevennum){	
	var allevenarrlength = allevennum.length;
   
   for(var i=0;i<allevenarrlength;i++){
	   var check = Number(allevennum[i]["num4"]);
       if(check%2===1){	   
	   res.send(JSON.stringify({
					"result1": "false"
				}));
	   }     
     }
	res.send(JSON.stringify({
					"result1": "true"
	}));
	}
	checkwheatheralleven(allevennum);
		

});








app.post('/find_substring/:param_string', function (req, res){
	
	var ip_string = req.params.param_string;
	
	

	var string_one_time = [
	{
		"ip" : "ok"
		
	},
	{
		"ip" : "hi"
		
	},
	
	{
		"ip" : "hello"
		
	},
	{
		"ip" : "hey"
		
	},
	
	];
		
	function string_match_one_time(string_one_time,ip_string){
		//console.log(string_one_time[i]["ip"]);
		var stringlength = string_one_time.length;
		for(var i=0;i<stringlength;i++){
			
			if(ip_string.trim() === (String (string_one_time[i]["ip"]).trim()))
			{
				
						res.end(JSON.stringify({
							"result1": "true"
						}));
					}
				}			
		
		res.end(JSON.stringify({
					"result1": "false"
				}));

	}
	string_match_one_time(string_one_time,ip_string);

});



app.post('/match_twice/:ip_value', function (req, res){
	
	var user_ip = req.params.ip_value;
	
	

	var string_ip = [
	{
		"ip" : "ok"
		
	},
	{
		"ip" : "hi"
		
	},
	{
		"ip" : "hi"
		
	},
	{
		"ip" : "hello"
		
	},
	{
		"ip" : "bye"
		
	},
	{
		"ip" : "ok"
		
	}
	];
		
	function twice_string_in_input(string_ip,user_ip){
		var stringlength = string_ip.length;
		for(var i=0;i<stringlength;i++){
			
			if(user_ip.trim() === (String (string_ip[i]["ip"]).trim()))
			{
				for(var j=i+1;j<stringlength;j++){
					if(user_ip.trim() === (String (string_ip[j]["ip"]).trim())){
						
						res.end(JSON.stringify({
							"result": "true"
						}));
					}
				}			
			}
		}
		res.end(JSON.stringify({
					"result": "false"
				}));

	}
	twice_string_in_input(string_ip,user_ip);

});

console.log("listening to 3000");