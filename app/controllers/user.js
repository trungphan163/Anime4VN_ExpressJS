const db = require('../../db');

module.exports.home = function (req, res, next) {
    let id = req.param.id;
    let user = db.get('users').find({
        id: id
    }).value();

    res.render('user/home', {
        user: user
    });
    next();
}