const express = require("express");
const app = express();
const sequelize = require("./mySQL");
const sqlRouter = require("./routes/mysSql.route");
app.use(express.json());
connectMySql = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been Estalished Successfully");
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
};
connectMySql();
app.use("/mysql", sqlRouter);
app.listen(8090, () => {
  console.log("Server Running on Port 8090");
});
