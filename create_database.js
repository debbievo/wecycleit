/***********************************************
 Javascript code for creating schedule info
 database and center info database. Run this
 code once before starting app for the very
 first time.

 https://github.com/debbievo/WeCycleIt
***********************************************/

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('scheduling.db');
const centerInfoDB = new sqlite3.Database('centerInfo.db');

// run each database statement serially one after another
db.serialize(() => {
  // database for storing pickup schedule info
  db.run("CREATE TABLE list_of_schedules (name TEXT, email TEXT, phone TEXT, date TEXT, time TEXT, address TEXT, other TEXT, city TEXT, state TEXT, zip TEXT)");
  console.log('successfully created the list_of_schedules table in scheduling.db');

  // database for storing center info
  db.run("CREATE TABLE list_of_centers (name TEXT, address TEXT, phone TEXT, hours TEXT, materials TEXT)");
  console.log('successfully created the list_of_centers table in centerInfo.db');
});

db.close();
