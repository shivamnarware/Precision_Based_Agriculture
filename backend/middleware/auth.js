const jwt = require("jsonwebtoken");
const User = require("../models/Users");
const ErrorResponse = require("../utils/errorResponse");

exports.protected = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Shivam")) {
        token = req.headers.authorization.split(" ")[1];
    }
    // console.log(token);
    if (!token) {
        return next(new ErrorResponse("Not authorize to access the route", 401))
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        const user = await User.findById(decoded.id);
        if (!user) {
            return next(new ErrorResponse("No user find with this id", 404));
        }
        req.user = user;
        next();
    } catch (error) {
        next(new ErrorResponse("Not authorize to access the route", 401));
    }
}



