var mysql = require('mysql');
var express = require("express");
var app = express();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "parkhi@1212",
    database: "phonebook"
});


app.get("/", function (request, response){
     response.sendFile(__dirname+"/views/index.html");
});

app.get("/getdata", function (request, response){
    var name = request.query.name;
    var number = request.query.number;
    var queryString = 'INSERT INTO phonebook(contact_name,phone_number)VALUES(?,?)';
    if (name != "") {
        con.query(queryString, [name,number], function(err, rows, fields){  
        console.log(rows);
        response.send(rows);
        
    });
    }
    else {
        response.send("Please enter a Contact name");
    }
});


app.get("/", function (request, response){
     response.sendFile(__dirname+"/views/index.html");
});
app.get("/getemail", function (request, response){
    var firstname = request.query.firstname;
    var queryString = 'SELECT * FROM phonebook WHERE contact_name = ?';
    if (firstname != "") {
        con.query(queryString, [firstname], function(err, rows, fields){  
        console.log(rows);
        response.send(rows);
        
    });
    }
    else {
        response.send("Please enter a Contact name");
    }
});
app.listen(8080);
console.log("Link to search for contact number : http://localhost:8080");

