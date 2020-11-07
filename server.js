const express = require("express");
const app = express();

const port = process.env.PORT || 3456;

app.get("/", (req, res) => {
  res.send("Hello.");
});

app.listen(port, () => console.log(`app listening at port ${port}`));
