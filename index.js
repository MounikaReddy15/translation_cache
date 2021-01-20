const express = require("express");
const cors = require("cors");
const redis = require("redis");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 6000;
// const REDIS_PORT = process.env.PORT || 6379;

// create redis client
// const client = redis.createClient(REDIS_PORT);

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  } else console.log(`Server is running on port: ${port}`);
});
