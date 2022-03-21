var express = require('express');
var router = express.Router();


router.use("/users", require("./users"));

/**
 * @desc Catch 404 errors
 */
router.use("*", (req, res, next) => {
    res.status().send();
})

module.exports = router;
