const UserService = require('../services/user-service');
const {StatusCodes} = require("http-status-codes");

const userService = new UserService();
const createUser = async(req,res) => {
    try{
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password,
        });
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'User created successfully!',
            data: response,
            error:{},
        });
    } catch (error){
        console.log(error);
        res.status(error.statusCode).json({
            message: 'Something went wrong',
            success: false,
            data: {},
            err: error
        });
    }
}

const signIn = async(req,res) => {
    try{
        const response = await userService.signIn(req.body.email,req.body.password);
        return res.status(200).json({
            success: true,
            data: response,
            message: 'Successfully signed-in',
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

const checkUserAuth = async(req, res) => {
    try{
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticated(token);
        res.status(200).json({
            success: true,
            data: response,
            message: 'User is authenticated and token is valid',
            err: {}
        });
    } catch (error){
        res.status(500).json({
            message: 'Something went wrong',
            success: false,
            data: {},
            err: error
        });
    }
}

const isAdmin = async(req,res) => {
    // we expect userId parameter in request body to check if user has admin privileges
    try{
        const response = await userService.isAdmin(req.body.userId);
        res.status(200).json({
            success: true,
            data: response,
            message: 'User is admin or not fetched successfully',
            err: {}
        });
    } catch (error){
        res.status(500).json({
            message: 'Something went wrong',
            success: false,
            data: {},
            err: error
        });
    }
}

module.exports = {createUser,signIn,checkUserAuth,isAdmin};