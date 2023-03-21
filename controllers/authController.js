const User = require('../models/userModel')

exports.signup = async (req, res, next) => {
    console.log(req.body)
    const newUser = await User.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            user: newUser
        }
    })
}
