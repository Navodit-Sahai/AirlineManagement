const express = require("express");
const app = express();

const { PORT } = require("./config/serverconfig.js");
const ApiRoutes = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
