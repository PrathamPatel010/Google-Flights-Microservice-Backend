const validateUserAuth = (req,res,next) => {
    if (!req.body.email || !req.body.password){
        return res.status(400).json({
            success:false,
            data:{},
            message:'Something went wrong',
            err: 'Email or Password missing in request'
        });
    }
    next();
}

const validateUserRoleAuth = (req,res,next) => {
    if (!req.body.userId) {
        return res.status(400).json({
            success:false,
            data:{},
            message:'Something went wrong',
            err: 'userId is missing is in the request body'
        });
    }

    next();
}

module.exports = {validateUserAuth,validateUserRoleAuth};