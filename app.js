const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

const apiRoutes = require("./src/modules/routes/routes");

app.use(cors());

const uri =
  "mongodb+srv://SleptsovKonstantin:sleptsov123321@cluster0.omltj.mongodb.net/Todolist?retryWrites=true&w=majority";
mongoose.connect(uri);

app.use(express.json());
app.use("/", apiRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
