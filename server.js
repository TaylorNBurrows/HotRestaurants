// Creating the basic server commands

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Constructor class to set the paramaters
// Instead of the characters array from the Star Wars app, we are using constructor and going to create 2 empty arrays to fill with objects


class Customer {
    constructor(customerName, phoneNumber, customerEmail, customerID) {
        this.customerName = customerName;
        this.phoneNumber = phoneNumber;
        this.customerEmail = customerEmail;
        this.customerID = customerID;
    }

    // get functions to get the data

    getCustomerName() {
        return customerName
    }

    getPhoneNumber() {
        return this.phoneNumber
    }

    getCustomerEmail() {
        return this.customerEmail
    }

    getCustomerId() {
        return customerID
    }

    // set functions to change the objects data

    setCustomerName(name) {
        this.customerName = name
    }

    setPhoneNumber(number) {
        this.phoneNumber = number
    }

    setCustomerEmail(email) {
        this.customerEmail = email
    }

    setCustomerId(id) {
        this.customerID = id
    }

}

var customerList = new Array (); 
var waitingList = new Array (); 
var tableLimit = 5;

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/public/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/reservation.html"));
  });
  
  app.get("/public/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/tables.html"));
  });


//   This method will push the waiting list into the waiting array
  app.get("api/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/tables.html"));
  });

  //   This method will push the waiting list into the reservation array

  app.get("api/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/reservation.html"));
  });

  


  // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  




