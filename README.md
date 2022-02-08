## Node.js M-PESA REST SDK

how to use the M-PESA with Node.js for simulation of :

### 1. c2b

### 2. lipaNaMpesaOnline

---

### Start up

Install the dependencies

```sh
$ npm install
```

```sh
$ npm start
```

### Library

> #### mpesa-api npm

---

### Test Credentials

Setup in `controllers\bookingcontroller.js`

```JS
let consumerKey = "YOUR_CONSUMER_KEY";//g7D4d6nP6XXXXXX
let consumerSecret = "YOUR_CONSUMER_SECRETE"; //yTAzCXXXXXX
let InitiatorPassword = "PROVIDED!"; //SafarXXXX986
let BusinessShortCode = 0000; //221XXX
let InitiatorName = "NAME"; //testapi
let PassKey =
  "YOUR_PASS_KEY"; //bfb279f9aa9bdbcfXXXX
let phone = 2547XXXXXXX; // To receive payment
```
