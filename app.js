var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : car.cnoobih3hzdj.eu-west-1.rds.amazonaws.com,
  user     : car,
  password : cartable1234,
  port     : 3306
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();
