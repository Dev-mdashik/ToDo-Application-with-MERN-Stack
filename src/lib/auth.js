const jwt = require('jsonwebtoken');
require('dotenv').config()

const generateToken = (user) => {
    if(!user) return {error: 'User not found'}
    try {
        const token = jwt.sign({user}, process.env.SECRET_KEY, {
            algorithm: 'HS512',
            expiresIn: '1d'
        })
        return token
    } catch (error) {
        return { error: error.message };
    }
};

module.exports = {generateToken}