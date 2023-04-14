


const adminAuth = (req,res,next) => {
    //temporary for dev purposes
    //after passport/ jwt implementation finished then this function will be finished
    console.log("adminAuth called, dev mode = all pass")
    return next()


    if (req.user.isAdmin) {
        return next()
    } 
    return res.status(403).send("error notAdmin")
}
module.exports = adminAuth;