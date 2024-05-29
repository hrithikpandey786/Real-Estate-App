const express = require("express");
const router = express.Router();
const controllers = require("../controllers/user.controller.js");
const verifyToken = require("../middleware/verifyToken.js");

router.get("/", controllers.getUsers);
router.get("/:id", verifyToken, controllers.getUser);
router.put("/:id", verifyToken, controllers.updateUser);
router.delete("/:id", verifyToken, controllers.deleteUser);

module.exports = router;