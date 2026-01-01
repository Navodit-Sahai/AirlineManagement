const express = require("express");
const app = express();

const { PORT } = require("./config/serverconfig.js");
const ApiRoutes = require("./routes/index");
const db=require("./models/index");
const {Airplane}=require("./models/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", ApiRoutes);

const setupAndStartServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
    if(process.env.SYNC_DB){
        db.sequelize.sync({alter:true});
    }
    await Airplane.create({
        modelNumber:'Bombardier CRJ'
    })
  } catch (error) {
    console.error("Server start error:", error);
  }
};

setupAndStartServer();
