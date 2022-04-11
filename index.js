
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var chalk = require('chalk');
const { response } = require('express');
const { errorMonitor } = require('events');
var app = express();
var router = express.Router();

var $basicEMR = $('#firstName, #lastName, #age, #phoneNumber, #address')
var $detailEMR = $('#demographics, #notes, #problems, #medications, #vitalSigns, #pastmedicalhistory, #immunizations, #laboratorydata #radiologyreports')
//basicEMR dummy data
var dummy = '{"firstName":"Tyler", "lastName":"Daspit", "phoneNumber":2253478831, "address":"gorilla park", "religion":"D R E A D"}'

// https://riptutorial.com/node-js/example/20967/post-api-using-express
// emr copying var users
var emrs = [{
  firstName:"Tyler",
   lastName:"Daspit",
    phoneNumber:2253478831, 
    address:"gorilla park",
     religion:"D R E A D"
}];


//javascript variable initialization of JSON object $basicEMR attributes
let personFName = obj.firstName;
let personLName = obj.lastName;
let personAge = obj.age;
let phoneNumber = obj.phoneNumber;
let personAddress = obj.address;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/emr', (req, res) => res.send(user)) //Burris code in class; Get all emr resource
.get('/emr/id',(req, res) => res.send()) // get single emr resource

// https://riptutorial.com/node-js/example/20967/post-api-using-express
app.post('emr/', (req, res) => {
  //prepare output in JSON format
  response = {
//    personFName:req.body.first_name,
//    personLName:req.body.last_name
    var emr = req.body.emr;
    emrs.push(emr);

    return res.send('emr has been added');

  };
  console.log(response);
  res.end(JSON.stringify(response));
}) // use a arr.push?






  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


