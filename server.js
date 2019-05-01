/***********************************************
 Node.js + Express server backend for WeCycleIt
 use SQLite (https://www.sqlite.org/index.html) 
 as a database.

 https://github.com/debbievo/WeCycleIt
***********************************************/

const express = require('express');
const app = express();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('recyclingCenters.db');

app.use(express.static('static_files'));

// GET a list of all usernames
//
// To test, open this URL in your browser:
//   http://localhost:3000/users
app.get('/centerInfo', (req, res) => {
   // db.all() fetches all results from an SQL query into the 'rows' variable:
db.all('SELECT name FROM center_info', (err, rows) => {
console.log(rows);
const allNames = rows.map(e => e.name);
console.log(allNames);
res.send(allNames);
});
});

/** *
// POST data about a recycling/donation center to insert into the database
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})); 
app.post('/centerInfo', (req, res) => {
  console.log(req.body);

  db.run(
    'INSERT INTO center_info VALUES ($name, $latitude, $longtitude)',
      {
        $name: req.body.name,
        $phone: req.body.phone,
        $address: req.body.address,
      },
    // callback function to run when the query finishes:
      (err) => {
        if (err) {
          res.send({message: 'error in app.post(/centerInfo)'});
        } else {
          res.send({message: 'successfully run app.post(/centerInfo)'});
        }
      }
   );
 });
 **/


// GET profile data for a recycling/donation center
app.get('/centerInfo/:nameid', (req, res) => {
  const nameToLookup = req.params.nameid; 

  db.all(
    'SELECT * FROM center_info WHERE name=$name',
    // parameters to SQL query:
    {
      $name: nameToLookup
    },
    // callback function to run when the query finishes:
    (err, rows) => {
       console.log(rows);
       if (rows.length > 0) {
        res.send(rows[0]);
       } else {
        res.send({}); // failed, so return an empty object instead of undefined
       }
     }
   );
 });


// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});
