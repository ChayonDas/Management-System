// server/routes/user.js
const express = require("express");
const router = express.Router();
const userController=require("../controllers/userController");


//create find update delete
router.get("/",userController.view);
router.post("/",userController.find);
router.get("/adduser",userController.form);
router.post("/adduser",userController.create);





// Export the router
module.exports = router;
