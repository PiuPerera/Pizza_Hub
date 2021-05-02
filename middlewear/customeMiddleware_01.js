
function customeMiddleware_01(req, res, next){
    console.log("Custome Middleware 1 executing....");
    next();
}

module.exports = customeMiddleware_01;