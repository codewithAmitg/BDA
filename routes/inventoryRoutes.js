const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const {
  createInventoryController,
  getInventoryController,
} = require("../controllers/inventoryController");
const router = express.Router();

//routes

//ADD INVENTORY || POST
router.post("/create-inventory", authMiddelware, createInventoryController);

//GET ALL BlOOD RECORDS || GET
router.get("/get-inventory", authMiddelware, getInventoryController);

module.exports = router;
