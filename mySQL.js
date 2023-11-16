const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("digiKull", "admin", "tRUTYaZb", {
  host: "mysql-151724-0.cloudclusters.net",
  port: "19232",
  dialect: "mysql",
});

module.exports = sequelize;
