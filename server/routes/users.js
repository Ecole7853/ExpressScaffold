var express = require('express');
var router = express.Router();
const { users } = require("../controllers");
/* GET users listing. */
router.get("/", users.getAllUsers);

module.exports = router;
