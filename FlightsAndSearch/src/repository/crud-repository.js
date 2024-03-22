class CrudRepository{

    constructor(model) {
        this.model = model;
    }
    async create(data){
        try{
            const result = await this.model.create(data);
            return result;
        } catch (err){
            console.log(`Something went wrong in CRUD Repo layer`);
            throw {message:err};
        }
    }

    async destroy(modelId){
        try{
            await this.model.destroy({
                where:{
                    id:modelId,
                }
            });
            return true;
        } catch (err){
            console.log(`Something went wrong in CRUD Repo layer`);
            throw {message:err};
        }
    }

    async get(modelId){
        try{
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (err){
            console.log(`Something went wrong in CRUD Repo layer`);
            throw {message:err};
        }
    }

    async getAll(modelId){
        try{
            const result = await this.model.findAll(modelId);
            return result;
        } catch (err){
            console.log(`Something went wrong in CRUD Repo layer`);
            throw {message:err};
        }
    }

    async update(modelId,data){
        try{
            const result = this.model.update(data,{
                where:{
                    id:modelId
                }
            });
            return result;
        } catch (err){
            console.log(`Something went wrong in CRUD Repo layer`);
            throw {message:err};
        }
    }

}

module.exports = CrudRepository;