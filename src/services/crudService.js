const {CrudRepository}=require('../repositories/index');
class CrudService{
    constructor(repository){
        this.repository=repository
    }
    async create(data){
        try{
            const response=await this.repository.create(data);
            return response;
        }catch(error){
            console.log("something went wrong");
            throw error;
        }
    }
    async destroy(id){
        try{
            const response =await this.repository.destroy(id);
            return response;

        }catch(error){
            console.log("something went wrong");
            throw error;
        }
    }
    async get(id){
        try{
            const response=await this.repository.get(id);
            return response;

        }catch(error){
            console.log("something went wrong");
            throw error;
        }

    }
    async getAll(){
        try{
            const responses=await this.repository.getAll();
            return responses;

        }catch(error){
            console.log("something went wrong");
            throw error;
        }

    }
    async update(modelId,data){
        try{
            const resonse=await this.repository.update(modelId);
            return response;

        }catch(error){
            console.log("something went wrong");
            throw error;
        }

    }
}
module.exports=CrudService;

