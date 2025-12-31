const express = require("express");
const app = express();

const { PORT } = require("./config/serverconfig.js");
const ApiRoutes = require("./routes/index");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", ApiRoutes);

const setupAndStartServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
  } catch (error) {
    console.error("Server start error:", error);
  }
};

setupAndStartServer();
