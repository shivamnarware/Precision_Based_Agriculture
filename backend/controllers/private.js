// const User=require("../models/Users");
const Comment=require("../models/Comments");

exports.getPrivateData = (req, res, next) => {
    res.status(200).json({
       sucess:"true",
       data:"you got access to private route"
    });
};

exports.getComments=async(req,res,next)=>{
    const data= await Comment.find({}).populate("reply");
    console.log(data);
    res.status(200).json({
        sucess:"true",
        data:data
     });  
}

exports.postComments=async(req,res,next)=>{
    const comment=req.body;
    const data=await Comments.create({text:comment});
    data.author._id = req.user._id;
    data.author.username = req.user.username;
    console.log(data);
    data.save();
    res.status(200).json({
        sucess:"true",
        data:data
    });
}