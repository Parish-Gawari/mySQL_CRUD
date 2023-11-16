const { Sequelize, DataTypes, where } = require("sequelize");
const sequelize = new Sequelize("digiKull", "admin", "tRUTYaZb", {
  host: "mysql-151724-0.cloudclusters.net",
  port: "19232",
  dialect: "mysql",
});
const User = sequelize.define(
  "users",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

const CreateUser = async (body) => {
  return await User.create(body);
};

const readUser = async (id) => {
  return await User.findOne({
    where: {
      id: id,
    },
  });
};

const updateUser = async (body, id) => {
  return await User.update(
    { name: body.name, email: body.email },
    {
      where: {
        id: id,
      },
    }
  );
};
const upsertUser = async (body, id) => {
  return await User.upsert(
    { name: body.name, email: body.email, id: id },
    {
      where: {
        id: id,
      },
    }
  );
};

const deleteUser = async (id) => {
  return await User.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  CreateUser,
  deleteUser,
  updateUser,
  upsertUser,
  readUser,
};
