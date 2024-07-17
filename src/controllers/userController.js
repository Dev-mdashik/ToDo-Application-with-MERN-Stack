const User = require('../models/user');
const {generateToken} = require('../lib/auth')

const login = async (req, res) => {
    const {email, password} = req.body;    
    try {        
        const credential = {
            username: email,
            pass: password
        }
        const checkUser = await User.findOne({email, password});
        console.log('email',email)
        if(checkUser) {            
            const token = await generateToken(credential)
            return res.status(200).json({status:'success',message:'Logged Successfully', datas: checkUser, token: token});
        } else {            
            return res.status(404).json({status:'Failure',message:'Bad Request'});
        }
    } catch (error) {
        res.status(500).json({status: 'Failed', message: error?.message})
    }
}

module.exports = {login};