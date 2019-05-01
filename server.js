// Node.js + Express server backend for WeCycleIt
//  use SQLite (https://www.sqlite.org/index.html) as a database
//
// https://github.com/debbievo/WeCycleIt

// Prerequisites - first run:
//   npm install
//
// which will look in package.json and install all dependencies
// (e.g., express, sqlite3)
//
// To start the server, run:
//   node server.js
//
// and open the frontend webpage at http://localhost:3000/index.html
//
//
// [optional] you can use nodemon to automatically restart your Node.js
// server whenever your backend files change. https://nodemon.io/
//
// Install globally using:
//
// sudo npm install -g nodemon
//
// and then start the server using:
//   nodemon server.js


const express = require('express');
const app = express();


// use this library to interface with SQLite databases: https://github.com/mapbox/node-sqlite3
const sqlite3 = require('sqlite3');
//const db = new sqlite3.Database('recyclingCenters.db');

// put all of your static files (e.g., HTML, CSS, JS, JPG) in the static_files/
// sub-directory, and the server will serve them from there. e.g.,:
//
// http://localhost:3000/index.html
//
// will send the file static_files/index.html to the user's web browser
//
// Learn more: http://expressjs.com/en/starter/static-files.html
app.use(express.static('static_files'));

// To learn more about server routing:
// Express - Hello world: http://expressjs.com/en/starter/hello-world.html
// Express - basic routing: http://expressjs.com/en/starter/basic-routing.html
// Express - routing: https://expressjs.com/en/guide/routing.html


// GET a list of all usernames
//
// To test, open this URL in your browser:
//   http://localhost:3000/users
// app.get('/centerInfo', (req, res) => {
//   // db.all() fetches all results from an SQL query into the 'rows' variable:
//   db.all('SELECT name FROM recycling_center_info', (err, rows) => {
//     console.log(rows);
//     const allNames = rows.map(e => e.name);
//     console.log(allNames);
//     res.send(allNames);
//   });
// });


// POST data about a user to insert into the database
// (note that this will insert duplicate entries!)
//
// To test, use the web frontend interface at:
//   http://localhost:3000/index.html
// use this library to parse HTTP POST requests
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: true})); // hook up with your app
// app.post('/centerInfo', (req, res) => {
//   console.log(req.body);
//
//   db.run(
//     'INSERT INTO recycling_center_info VALUES ($name, $phone, $address)',
//     // parameters to SQL query:
//     {
//       $name: req.body.name,
//       $phone: req.body.phone,
//       $address: req.body.address,
//     },
//     // callback function to run when the query finishes:
//     (err) => {
//       if (err) {
//         res.send({message: 'error in app.post(/centerInfo)'});
//       } else {
//         res.send({message: 'successfully run app.post(/centerInfo)'});
//       }
//     }
//   );
// });


// GET profile data for a user
//
// To test, open these URLs in your browser:
//   http://localhost:3000/name/rePlanet%20Recycling
//   http://localhost:3000/name/Huntington%20Beach%20Recycling
//   http://localhost:3000/name/invalidusername
// app.get('/centerInfo/:nameid', (req, res) => {
//   const nameToLookup = req.params.nameid; // matches ':userid' above
//
//   // db.all() fetches all results from an SQL query into the 'rows' variable:
//   db.all(
//     'SELECT * FROM recycling_center_info WHERE name=$name',
//     // parameters to SQL query:
//     {
//       $name: nameToLookup
//     },
//     // callback function to run when the query finishes:
//     (err, rows) => {
//       console.log(rows);
//       if (rows.length > 0) {
//         res.send(rows[0]);
//       } else {
//         res.send({}); // failed, so return an empty object instead of undefined
//       }
//     }
//   );
// });

// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});
