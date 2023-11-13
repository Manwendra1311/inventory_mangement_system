const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await collection.findOne({ username, password });

    if (user) {
      res.json("exist");
    } else {
      res.json("not exist");
    }
  } catch (error) {
    console.log(error);
    res.json("not exist");
  }
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const data = {
    username: username,
    password: password,
  };

  try {
    const check = await collection.findOne({ username });

    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
      await collection.insertOne(data);
    }
  } catch (error) {
    console.log(error);
    res.json("not exist");
  }
});

app.listen(3000, () => {
  console.log("port connected");
});
