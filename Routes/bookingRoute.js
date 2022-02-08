let express = require("express");
let bookingController = require("../controllers/bookingcontroller");

let routes = express.Router();

routes.post(
  "/lipa",
  //Then we create a payment Session
  bookingController.lipaNaMpesa
);
routes.post("/paybill", bookingController.paybill);
routes.post("/balance", bookingController.balance);
 

module.exports = routes;
