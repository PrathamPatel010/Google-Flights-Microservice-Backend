class CrudService{
    constructor(repository) {
        this.repository = repository;
    }

    async create(data){
        try{
            const result = await this.repository.create(data);
            return result;
        } catch (err){
            console.log(`Something went wrong in crud service layer`);
            throw {message:err.message};
        }
    }

    async delete(id){
        try{
            const response = await this.repository.destroy(id);
            return response;
        } catch (err){
            console.log(`Something went wrong in crud service layer`);
            throw {message:err.message};
        }
    }

    async get(id){
        try{
            const response = await this.repository.get(id);
            return response;
        } catch (err){
            console.log(`Something went wrong in crud service layer`);
            throw {message:err.message};
        }
    }

    async getAll(){
        try{
            const response = await this.repository.getAll();
            return response;
        } catch (err){
            console.log(`Something went wrong in crud service layer`);
            throw {message:err.message};
        }
    }

    async update(id,data){
        try{
            const response = await this.repository.update(id,data);
            return response;
        } catch (err){
            console.log(`Something went wrong in crud service layer`);
            throw {message:err.message};
        }
    }
}

module.exports = CrudService;