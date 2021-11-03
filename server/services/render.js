
exports.homeRoutes = (req,res) => {
    session=req.session;
    if(session.userid){
    }
    res.render('index')
}

exports.authMiddleware = (req,res) => {
    res.render('dashboard')
}

exports.dashboard = (req,res) => {
    res.render('dashboard')
}


