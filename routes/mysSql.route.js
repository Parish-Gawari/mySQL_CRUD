const express = require("express");
const Controller = require("../controllers/mysql.controllers");
const router = express.Router();

router.post("/", Controller.Post);
router.get("/:id", Controller.GetOne);
router.patch("/:id", Controller.Upsert);
router.delete("/:id", Controller.Delete);
router.put("/:id", Controller.Put);

module.exports = router;
