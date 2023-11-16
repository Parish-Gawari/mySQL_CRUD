const {
  CreateUser,
  readUser,
  updateUser,
  upsertUser,
  deleteUser,
} = require("../db/userModel");

const Controller = {
  Post: (req, res) => {
    const body = req.body;
    CreateUser(body)
      .then((data) => {
        res.json({
          data: data,
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  },
  GetOne: (req, res) => {
    const id = req.params.id;
    readUser(id)
      .then((data) => {
        res.json({
          data: data,
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  },
  Put: (req, res) => {
    const body = req.body;
    const id = req.params.id;
    updateUser(body, id)
      .then((result) => {
        res.json({
          message: "Success",
          result,
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  },

  Upsert: (req, res) => {
    const body = req.body;
    const id = req.params.id;
    upsertUser(body, id)
      .then((result) => {
        res.json({
          message: "Success",
          result,
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  },
  Delete: (req, res) => {
    const id = req.params.id;
    deleteUser(id)
      .then((result) => {
        res.json({
          message: "Success",
          result,
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  },
};

module.exports = Controller;
