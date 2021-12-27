const express = require("express");
const router = express.Router();
const { getPrivateData, postComments, getComments } = require("../controllers/private")
const {protected}=require('../middleware/auth')

router.route("/").get(protected,getPrivateData);

router.route("/comments").get(protected,getComments)

router.route("/comments").post(protected,postComments);

module.exports = router;
