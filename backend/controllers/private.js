// const User=require("../models/Users");
const Comment = require("../models/Comments");
const Reply = require("../models/Reply");
exports.getPrivateData = (req, res, next) => {
    res.status(200).json({
        sucess: "true",
        data: "you got access to private route"
    });
};

exports.getComments = async (req, res, next) => {
    const data = await Comment.find({}).populate('reply').exec();
    // console.log(data);
    res.status(200).json({
        sucess: "true",
        data: data
    });
}

exports.postComments = async (req, res, next) => {
    const comment = req.body;
    const data = await Comment.create({ text: comment.data });
    data.author._id = req.user._id;
    data.author.username = req.user.username;
    // console.log(data);
    data.save();
    res.status(200).json({
        sucess: "true",
        data: data
    });
}

exports.getReplyComments = async (req, res, next) => {
    console.log(req.params.replyid);
    const data = await Comment.findById(req.params.replyid);
    console.log(data);
    res.status(200).json({
        sucess: "true",
        data: data
    })
}

exports.postReplyComments = async (req, res, next) => {
    const {result} = req.body;
    console.log(result);
    const comment = await Comment.findById(req.params.replyid).populate('reply').exec();;
    const data = await Reply.create({ text: result});
    comment.reply.push(data);
    comment.save();
    console.log(comment)
    res.status(200).json({
        sucess: "true",
        data: comment
    })
}