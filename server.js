// =============================================================
// Node requirements
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// =============================================================
var app = express();
var PORT = 3000;
// =============================================================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var tables = [
    {
        customerName: "Ned Stark",
        phoneNumber: "555-5552",
        customerEmail:"ned@housestark.com",
        customerID:"Ned",
    },
    {
        customerName: "Robb Stark",
        phoneNumber: "555-5552",
        customerEmail:"robb@housestark.com",
        customerID:"Robb",
    },
    {
        customerName: "Khal Drogo",
        phoneNumber: "555-5553",
        customerEmail:"greatkhal@dothraki.com",
        customerID:"Drogo",
    },
    {
        customerName: "Danaerys Targaryean",
        phoneNumber: "555-5554",
        customerEmail:"danaerys@housetargaryean.com",
        customerID:"Danaerys",
    },
    {
        customerName: "Jon Snow",
        phoneNumber: "555-5555",
        customerEmail:"jon@kinginthenorth.com",
        customerID:"Jon",
    },
    {
        customerName: "Gendry",
        phoneNumber: "555-5556",
        customerEmail:"gendry@smiths.com",
        customerID:"Gendry",
    }
];

var waitList = [
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});
app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/tables", function(req, res) {
    res.json(tables);
});
app.get("/api/waitlist", function(req,res) {
    res.json(waitList);
});

app.post("/api/new", function(req, res) {
    var newRes = req.body;
    newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();
    console.log(newRes);
    tables.push(newRes);
    res.json(newRes);
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

