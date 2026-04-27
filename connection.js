const { Client } = require("pg");
const client = new Client({
  host: "ec2-18-215-96-22.compute-1.amazonaws.com",
  user: "aovwtadwcnfter",
  port: 5432,
  password: "d29523fe73d672ee48bee2165941b59e78f1ef2eb647d8dc609444e2e99796d7",
  database: "d66g02gmcrr96p",
  ssl: { rejectUnauthorized: false },
});
client.connect();

function getdata(req, res) {
  client.query("Select * from questions", (err, result) => {
    if (!err) {
      if (result.rows.length > 1) {
        res.send(result.rows);
        console.log(result.rows);
      } else {
        res.send("empty");
      }
    } else {
      console.log(err.message);
      res.status(404).send("Error in fetching data");
    }
  });
}
function getplayersdata(req, res) {
  client.query("Select * from players", (err, result) => {
    if (!err) {
      res.send(result.rows);
      console.log(result.rows);
    } else {
      console.log(err.message);
      res.status(404).send("Error in fetching data");
    }
  });
}

function insertplayerdata(req, res) {
  const { name, errcount, date, time } = req.body;
  console.log(req.body);
  client.query(
    "INSERT INTO players(name,errcount,date,time) VALUES ($1, $2 ,$3 ,$4)",
    [name, errcount, date, time],
    (err, result) => {
      if (!err) {
        console.log(result);
        res.status(201).send(`Player added `);
      } else {
        console.log(err.message);
        res.status(404).send("Error in inserting data");
      }
    },
  );
}

module.exports = { getdata, getplayersdata, insertplayerdata };
