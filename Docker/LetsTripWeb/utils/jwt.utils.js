var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = 'asxccftrfgbnhjuí36kjh3plq0sdfghsz42vbhj8';

module.exports = {
    generateTokenForUser: function(userData) {
        return jwt.sign({
            userId: userData.id,
            isAdmin: userData.isAdmin
        },
        JWT_SIGN_SECRET,
        {
            expireIn: '1h'
        })
    }
}