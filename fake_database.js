/********* 
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('recyclingCenters.db');

db.serialize(() => {
  // create a new database table:
  db.run("CREATE TABLE center_info (name TEXT, latitude TEXT, longtitude TEXT)");

  // insert 3 rows of data:
  db.run("INSERT INTO center_info ('UCSD', '32.8801', '-117.2340')");
  db.run("INSERT INTO center_info ('UCLA', '34.0689', '-118.4452')");
  db.run("INSERT INTO center_info ('UCB', '37.8719', '-122.2585')");

  console.log('successfully created the center_info table in recyclingCenters.db');

  //print them out to confirm their contents:
  db.each("SELECT name, latitude, longtitude FROM center_info", (err, row) => {
      console.log(row.name + ": " + row.latitude + ' - ' + row.longtitude);
  });
});

db.close();
*********/

    
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('recyclingCenters.db');

db.serialize(() => {
  // create a new database table:
  db.run("CREATE TABLE center_info (name TEXT, job TEXT, pet TEXT)");

  // insert 3 rows of data:
  db.run("INSERT INTO center_info VALUES ('UCSD', '32.8801', '-117.2340')");
  db.run("INSERT INTO center_info VALUES ('UCLA', '34.0689', '-118.4452')");
  db.run("INSERT INTO center_info VALUES ('UCB', '37.8719', '-122.2585')");

  console.log('successfully created the center_info table in recyclingCenters.db');

  // print them out to confirm their contents:
  db.each("SELECT name, job, pet FROM center_info", (err, row) => {
      console.log(row.name + ": " + row.job + ' - ' + row.pet);
  });
});

db.close();