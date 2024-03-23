const UserService = require('../services/user-service');

const userService = new UserService();
const createUser = async(req,res) => {
    try{
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password,
        });
        return res.status(201).json({
            success: true,
            message: 'User created successfully!',
            data: response,
            error:{},
        });
    } catch (error){
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong',
            success: false,
            data: {},
            err: error
        });
    }
}

module.exports = {createUser};