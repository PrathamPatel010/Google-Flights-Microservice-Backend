const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserRepository = require('../repository/user-repository');
const {JWT_KEY} = require('../config/serverConfig');

class UserService{
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data){
        try{
            const user = await this.userRepository.create(data);
            return user;
        } catch (error){
            console.log('Something went wrong in user service layer');
            throw error;
        }
    }

    createToken(user){
        try{
            const token = jwt.sign(user,JWT_KEY,{expiresIn:'1d'});
            return token;
        } catch (error){
            console.log('Something went wrong in token creation');
            throw error;
        }
    }

    verifyToken(token){
        try{
            const response = jwt.verify(token,JWT_KEY);
            return response;
        } catch (error){
            console.log('Something went wrong in token verification');
            throw error;
        }
    }

    checkPassword(userInputPlainPassword,encryptedPassword){
        try{
            return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
        } catch (error){
            console.log('Something went wrong in password comparison');
            throw error;
        }
    }


}

module.exports = UserService;