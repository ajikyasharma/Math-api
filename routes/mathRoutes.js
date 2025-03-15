const express = require("express");
const router = express.Router();
const { addNumbers, calculateFactorial, generateFibonacci } = require("../controllers/mathControllers"); // ✅ Import Fix

// Routes
router.post("/addition", addNumbers); // ✅ Ensure function exists
router.get("/factorial/:number", calculateFactorial);
router.get("/fibonacci/:count", generateFibonacci);

module.exports = router;
