/* mysql's Lib and Driver */
const mysql = require("mysql");

class DBConnection {
  constructor(host, user, pass, dbName, port) {
    this.db = mysql.createConnection({
      // socketPath: "/var/run/mysqld/mysqlx.sock",
      // host: "db",

      host: "db",
      user: "user",
      password: "password",
      database: "db",
      port: "3306"

      // host: "localhost",
      // user: "root",
      // password: "root",
      // database: "lets_trip",
      // port: "8888"
    });
    this.connect();
  }

  connect() {
    //setTimeout(function(){
      this.db.connect(err => {
        if (err) {
          throw err;
        }
        console.log("Mysql Connected...");
      });
    //}, 60000);
  }
}

module.exports = DBConnection;
