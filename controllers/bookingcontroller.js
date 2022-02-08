// import package
const Mpesa = require("mpesa-api").Mpesa;

//Test Credentials
let consumerKey = "XXXXXXXXXXXXXXXXXXXXXXX";
let consumerSecret = "XXXXXXXXXXXXXX";
let InitiatorPassword = "XXXXXXXXXXXXXXXXXXXXXXXX";
let BusinessShortCode = 000000;
let InitiatorName = "XXXXXXXXXXXXXXXXXXX";
let PassKey = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
let phone = 25470000000;

const credentials = {
  clientKey: consumerKey,
  clientSecret: consumerSecret,
  initiatorPassword: InitiatorPassword,
  // securityCredential: PassKey,
  certificatePath: null,
};

const environment = "sandbox"; // OR live

// create a new instance of the api
const mpesa = new Mpesa(credentials, environment);

exports.lipaNaMpesa = async function (req, res, next) {
  mpesa
    .lipaNaMpesaOnline({
      BusinessShortCode: BusinessShortCode,
      Amount: 1 /* 1000 is an example amount */,
      PartyA: phone, // use your real phone number
      PartyB: BusinessShortCode, // LiAccount Referencepa Na Mpesa Online Shortcode on test credentials page
      PhoneNumber: phone, // use your real phone number
      CallBackURL: "http://2770-102-166-170-55.ngrok.io/success", // this is where the api sends a callback. It must a hosted endpoint with public access.
      AccountReference: "TechkeyCyber", // This is what the customer would have put as account number if they used normal mpesa
      passKey: PassKey,
      TransactionType: "CustomerPayBillOnline",
      TransactionDesc: "unihome house booking",
    })
    .then((response) => {
      //Do something with the response
      //eg
      res.send("Sim Tool Kit okay");
      console.log(response);
    })
    .catch((error) => {
      //Do something with the error;
      //eg
      res.send("Sim Tool Kit error");
      console.error(error);
    });
};
exports.paybill = async function (req, res) {
  try {
    mpesa
      .c2bsimulate({
        ShortCode: 9135889,
        Amount: 1 /* 1000 is an example amount */,
        Msisdn: phone,
        CommandID: "CustomerPayBillOnline" /* OPTIONAL */,
        // BillRefNumber: "Bill Reference Number" /* OPTIONAL */,
      })
      .then((response) => {
        //Do something with the response
        //eg
        res.send("paybill okay");
        console.log(response);
      })
      .catch((error) => {
        //Do something with the error;
        //eg
        res.send("paybill error");
        console.error(error);
      });
  } catch (err) {
    console.log(err);
    res.send("paybill error");
  }
};

exports.balance = async function (req, res) {
  mpesa
    .accountBalance({
      Initiator: InitiatorName,
      PartyA: BusinessShortCode,
      IdentifierType: "Identifier Type",
      QueueTimeOutURL: "http://2770-102-166-170-55.ngrok.io/timeout",
      ResultURL: "http://2770-102-166-170-55.ngrok.io/balance",
      CommandID: "AccountBalance" /* OPTIONAL */,
      PartyB: phone,
      Remarks: "Account balance for unihome" /* OPTIONAL */,
    })
    .then((response) => {
      //Do something with the response
      //eg
      console.log(response);
      res.send("account balance okay");
    })
    .catch((error) => {
      //Do something with the error;
      //eg
      console.error(error);
      res.send("account balance Error");
    });
};
