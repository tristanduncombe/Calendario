const express = require("express");
var cors = require("cors");
const app = express();
const port = 9000;

var cors = require("cors");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var corsOptions = {
  origin: "http://localhost:8081",
  methods: ["OPTIONS", "GET", "POST"],
};

app.use(cors(corsOptions));

// const mariadb = require("mariadb");
// const pool = mariadb.createPool({
//   host: "localhost",
//   user: "php",
//   connectionLimit: 5,
// });
// pool
//   .getConnection()
//   .then((conn) => {
//     conn
//       .query("SELECT 1 as val")
//       .then((res) => {
//         console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
//         conn.end();
//       })
//       .catch((err) => {
//         //handle error
//         conn.end();
//       });
//   })
//   .catch((err) => {
//     //not connected
//   });

app.options("*", cors());
try {
  app.get("/users/", (request, response) => {
    response.send(pool.query("SELECT * FROM ALL_TABLES"));
  });

  app.get("/hello", (request, response) => {
    response.send("We Did it");
  });

  app.post("/login/", (request, response) => {
    console.log(request.body);
    if (request.body.email == "tduncombe747@gmail.com") {
      if (request.body.password == "123") {
        response.send("Tristan");
      } else {
        response.sendStatus(500);
      }
    }
  });

  app.listen(port, () => console.log(`listening on port: ${port}`));
} catch (err) {
  console.log(err);
}


