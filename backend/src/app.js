const express = require("express");
var cors = require("cors");
const app = express();
const port = 9000;

const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "mysql",
  user: "php",
  password: "php",
  database: "calendario",
});

var cors = require("cors");
var bodyParser = require("body-parser");
const { resourceLimits } = require("worker_threads");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var corsOptions = {
  origin: "http://localhost:8080",
  methods: ["OPTIONS", "GET", "POST"],
};

app.use(cors(corsOptions));

app.options("*", cors());
app.get("/users", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();

    let sql = `SELECT * FROM users;`;
    let result = await conn.query(sql);

    res.send(result);
  } catch (error) {
    res.status(500).json({
      error,
    });
  } finally {
    if (conn) {
      conn.release();
    }
  }
});

app.get("/hello", (request, response) => {
  response.send("We Did it");
});

app.post("/login/", async (request, response) => {
  const email = request.body.email;
  const password = request.body.password;
  let conn;
  try {
    if (email != "" && password != "") {
      conn = await pool.getConnection();
      let sql =
        `SELECT id, name FROM users WHERE email = '` +
        email +
        `' AND password = '` +
        password +
        `';`;
      let result = await conn.query(sql);
      if (result.length > 0) {
        response.send(result);
      } else {
        response.status(404).send("Incorrect email and/or password");
      }
      response.end();
    } else {
      response.status(404).send("A username and password needs to be entered");
      response.end();
    }
  } catch (error) {
    response.status(500);
  } finally {
    if (conn) {
      conn.release();
    }
  }
});

app.post("/signup/", async (request, response) => {
  const name = request.body.name;
  const email = request.body.email;
  const password = request.body.password;
  let conn;
  try {
    if (name != "" && email != "" && password != "") {
      conn = await pool.getConnection();
      let sql =
        `INSERT INTO users (name, email, password) VALUES ('` +
        name +
        `', '` +
        email +
        `', '` +
        password +
        `');`;
      let result = await conn.query(sql);
      console.log(result);
      response.status(200);
      response.end();
    } else {
      response.status(404).send("SignUp: one of the entered fields is blank!");
      response.end();
    }
  } catch (error) {
    response.status(500);
  } finally {
    if (conn) {
      conn.release();
    }
  }
});

app.post("/setCalendar/", async (request, response) => {
  const user = request.body.user;
  const image_header = request.body.image_header;
  const title = request.body.title;
  const left_image = request.body.left_image;
  const calendarWidth = request.body.calendarWidth;
  const main_html = request.body.main_html;
  const right_image = request.body.right_image;
  const right_text = request.body.right_text;
  const right_html = request.body.right_html;
  const embed_text = request.body.embed_text;
  const spotify_embed = request.body.spotify_embed;
  let conn;
  try {
    conn = await pool.getConnection();
    let sql =
      `INSERT INTO calendar (user, image_header, title, left_image, calendarWidth, main_html, right_image, right_text, right_html, embed_text, spotify_embed) VALUES (` +
      user +
      `, '` +
      image_header +
      `', '` +
      title +
      `', '` +
      left_image +
      `', '` +
      calendarWidth +
      `', '` +
      main_html +
      `', '` +
      right_image +
      `', '` +
      right_text +
      `', '` +
      right_html +
      `', '` +
      embed_text +
      `', '` +
      spotify_embed +
      `');`;
    let result = await conn.query(sql);
    response.status(200);
    response.end();
  } catch (error) {
    response.status(500);
  } finally {
    if (conn) {
      conn.release();
    }
  }
});

app.post("/getCalendar/", async (request, response) => {
  const user = request.body.user;
  let conn;
  try {
    conn = await pool.getConnection();
    let sql = `SELECT * FROM calendar WHERE user = ` + user + `;`;
    console.log(sql);
    let result = await conn.query(sql);
    console.log(result);
    response.status(200).send(result);
    response.end();
  } catch (error) {
    response.status(500);
  } finally {
    if (conn) {
      conn.release();
    }
  }
});

app.listen(port, () => console.log(`listening on port: ${port}`));
