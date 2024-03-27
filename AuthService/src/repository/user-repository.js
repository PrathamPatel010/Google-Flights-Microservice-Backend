const {User,Role} = require('../models/index');
const {UniqueConstraintError,ValidationError,NotFoundError} = require('../utils/errors');
class UserRepository{
    async create(data){
        try{
            const user = await User.create(data);
            return user;
        } catch (error){
            if (error.name==="SequelizeUniqueConstraintError"){
                throw new UniqueConstraintError(error);
            }
            if (error.name==="SequelizeValidationError"){
                throw new ValidationError(error);
            }
            console.log('Something went wrong in user repository layer');
            throw error;
        }
    }

    async destroy(userId){
        try{
            await User.destroy({
                where:{
                    id:userId,
                }
            });
            return true;
        } catch (error){
            console.log('Something went wrong in user repository layer');
            throw error;
        }
    }

    async getById(userId){
        try{
            const user = await User.findByPk(userId,{
                attributes:['email','id']
            });
            if (!user){
                throw new NotFoundError({message:'No user found !!',explanation:'Please check the userId again'});
            }
            return user;
        } catch(error){
            console.log('Something went wrong in user repository layer');
            throw error;
        }
    }

    async getByEmail(userEmail){
        try{
            const user = await User.findOne({
                where:{
                    email: userEmail
                }
            });
            if (!user){
                throw new NotFoundError({message:'No user found !!',explanation:'Please check the emailID again'});
            }
            return user;
        } catch(error){
            console.log('Something went wrong in user repository layer');
            throw error;
        }
    }

    async isAdmin(userId){
        try{
            const user = await User.findByPk(userId);
            if (!user){
                throw new NotFoundError({message:'No user found !!',explanation:'Please check the userId again'});
            }
            const adminRole = await Role.findOne({
                where:{
                    name: 'ADMIN'
                }
            });
            const result = await user.hasRole(adminRole);
            if (!result){
                return {message: 'User is not admin'};
            }
            return {message: 'User is admin'};
        } catch(error){
            console.log('Something went wrong in user repository layer');
            throw error;
        }
    }
}

module.exports = UserRepository;