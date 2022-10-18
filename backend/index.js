const express = require("express");
const app = express();
const port = 9000;

app.listen(port, () => console.log(`listening on port: ${port}`));

app.get("/", (request, response) => {
  response.send("We Did it");
});
app.get("/users/", (request, response) => {
  response.send("users");
});
// app.get("/login/:email/:password/", async (req: request, res: response) => {
//   try {
//     //get if username matches
//     username = true;
//     //get if password matches
//     password = true;

//     if (username & password) {
//       res.json(true);
//     } else {
//       res.json(false);
//     }
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });
