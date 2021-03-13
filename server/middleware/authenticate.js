// user should be Object .. not an variable
const {User} = require('./../models/user');

// this is middleware
const authenticate = (req, res, next) => {
    // we need to pass their token for login
    const token = req.header('x-auth');

    //user-schema
    User.findByToken(token).then((user) => {
        if (!user) {
            return Promise.reject();
        }
        req.user = user;
        req.token = token;
        console.log('token -->', token)
        next();
    }).catch((e) => {
        // 401 - unauthorized 
        res.status(401).send();
    });
}

module.exports = {
    authenticate
}