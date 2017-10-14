// =============================================================
// Node requirements
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// =============================================================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var tables = [
    {
        customerName: "Ned Stark",
        phoneNumber: "555-5552",
        customerEmail:"ned@housestark.com",
        customerID:"ned",
    },
    {
        customerName: "Robb Stark",
        phoneNumber: "555-5552",
        customerEmail:"robb@housestark.com",
        customerID:"robb",
    },
    {
        customerName: "Khal Drogo",
        phoneNumber: "555-5553",
        customerEmail:"greatkhal@dothraki.com",
        customerID:"drogo",
    },
    {
        customerName: "Danaerys Targaryean",
        phoneNumber: "555-5554",
        customerEmail:"danaerys@housetargaryean.com",
        customerID:"danaerys",
    },
    {
        customerName: "Jon Snow",
        phoneNumber: "555-5555",
        customerEmail:"jon@kinginthenorth.com",
        customerID:"jon",
    },
    {
        customerName: "Gendry",
        phoneNumber: "555-5556",
        customerEmail:"gendry@smiths.com",
        customerID:"gendry",
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

// app.get("/api/:tables?", function(req, res) {
//     var chosen = req.params.tables;
//     if (chosen) {
//       console.log(chosen);
//       for (var i = 0; i < tables.length; i++) {
//         if (chosen === tables[i].customerID) {
//           return res.json(tables[i]);
//         }
//       }
//       return res.json(false);
//     }
//     return res.json(tables);
// });

app.post("/api/new", function(req, res) {
    var newReservation = req.body;
    newReservation.customerID = newReservation.customerName.replace(/\s+/g, "").toLowerCase();
    console.log(newReservation);
    
    if (tables.length < 7){

        tables.push(newReservation);
        res.json(newReservation);
    }
    else {
        waitList.push(newReservation);
        res.json(newReservation);
    }


});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

