const express = require("express");
const router = express.Router();
const { getPrivateData } = require("../controllers/private")
const {protected}=require('../middleware/auth')

router.route("/").get(protected,getPrivateData);

module.exports = router;
