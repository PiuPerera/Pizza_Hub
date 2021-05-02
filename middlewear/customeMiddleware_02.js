
function customeMiddleware_02(req, res, next){
    console.log("Custome Middleware 2 executing....");
    next();
};

module.exports = customeMiddleware_02;