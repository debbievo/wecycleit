/***********************************************
 Node.js + Express server backend for WeCycleIt
 use SQLite (https://www.sqlite.org/index.html)
 as a database.

 https://github.com/debbievo/WeCycleIt
***********************************************/

const express = require('express');
const app = express();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('scheduling.db');

app.use(express.static('static_files'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})); // hook up with your app


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


// save and access zip code inputted on homepage
var zip = 0;
app.post('/zip', (req, res) => {
    // console.log(req.body.zip);
    zip = req.body;
    res.send(zip);
});

app.get('/zip', (req, res) => {
    // console.log(req);
    res.send(zip);
});


// store form information into database
app.post('/schedules', (req, res) => {
  console.log(req.body);

  db.run(
    'INSERT INTO list_of_schedules VALUES ($name, $email, $phone, $date, $time, $address, $other, $city, $state, $zip)',
    // parameters to SQL query:
    {
      $name: req.body.name,
      $email: req.body.email,
      $phone: req.body.phone,
      $date: req.body.date,
      $time: req.body.time,
      $address: req.body.address,
      $other: req.body.other,
      $city: req.body.city,
      $state: req.body.state,
      $zip: req.body.zip,
    },
    // callback function to run when the query finishes:
    (err) => {
      if (err) {
        res.send({message: 'error in app.post(/users)'});
      } else {
        res.send({message: 'successfully run app.post(/users)'});
      }
    }
  );
});

app.get('/schedules', (req, res) => {
    // get the latest record from the database
    db.all('SELECT * FROM list_of_schedules ORDER BY rowid DESC LIMIT 1', (err, rows) => {
        console.log(rows);
        res.send(rows);
    });
});

// store center information into database
app.post('/moreInfo', (req, res) => {
  console.log(req.body);

  db.run(
    'INSERT INTO list_of_centers VALUES ($name, $address, $phone, $hours, $materials)',
    // parameters to SQL query:
    {
      $name: req.body.name,
      $address: req.body.address,
      $phone: req.body.phone,
      $hours: req.body.hours,
      $materials: req.body.materials,
    },
    // callback function to run when the query finishes:
    (err) => {
      if (err) {
        res.send({message: 'error in app.post(/centers)'});
      } else {
        res.send({message: 'successfully run app.post(/centers)'});
      }
    }
  );
});

app.get('/moreInfo', (req, res) => {
    // get the latest record from the database
    db.all('SELECT * FROM list_of_centers ORDER BY rowid DESC LIMIT 1', (err, rows) => {
        console.log(rows);
        res.send(rows);
    });
});


// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});
