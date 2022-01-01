const express = require("express");
const router = express.Router();
const { getPrivateData, postComments, getComments, getReplyComments, postReplyComments } = require("../controllers/private")
const {protected}=require('../middleware/auth')

router.route("/").get(protected,getPrivateData);

router.route("/comments").get(protected,getComments)

router.route("/comments").post(protected,postComments);

router.route('/comments/:replyid').get(getReplyComments)

router.route('/comments/:replyid').post(postReplyComments)

module.exports = router;
