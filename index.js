const express = require("express");
const cors = require("cors")
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});
