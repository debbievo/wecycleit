const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('scheduling.db');

// run each database statement *serially* one after another
// (if you don't do this, then all statements will run in parallel,
//  which we don't want)
db.serialize(() => {
  // create a new database table:
  db.run("CREATE TABLE list_of_schedules (name TEXT, email TEXT, phone TEXT, date TEXT, time TEXT, address TEXT, other TEXT, city TEXT, state TEXT, zip TEXT)");
  console.log('successfully created the list_of_schedules table in scheduling.db');

});

db.close();
