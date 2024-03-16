const {City} = require('../models/index');

class CityRepository{
    async createCity({name}){ /* Destructuring Object like: {name:"Ahmedabad"}*/
        try{
            const city = await City.create({name});
            return city;
        } catch (err){
            console.log(`Something went wrong in CityRepository layer`);
            throw {message:err};
        }
    }

    async deleteCity({cityId}){
        try{
            await City.destroy({
                where:{
                    id:cityId
                }
            });
            return true;
        } catch (err){
            console.log(`Something went wrong in CityRepository layer`);
            throw {message:err};
        }
    }

    async updateCity(cityId,data){
        try{
            const city = await City.update(data,{
                where:{
                    id:cityId
                }
            });
            return city;
        } catch (err){
            console.log(`Something went wrong in CityRepository layer`);
            throw {message:err};
        }
    }

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;
        } catch (err){
            console.log(`Something went wrong in CityRepository layer`);
            throw {message:err};
        }
    }


}

module.exports = CityRepository;