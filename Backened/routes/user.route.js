const express = require("express");
const router = express.Router();
const controllers = require("../controllers/user.controller.js");


router.get("/", controllers.getUsers);
router.get("/:id", controllers.getUser);
// router.put("/:id", controllers.updateUser);
// router.delete("/:id", controllers.deleteUser);

module.exports = router;