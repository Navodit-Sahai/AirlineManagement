const {Airplane}=require('../models/index');

class AirplaneRepository{
    async getAirplane(id){
        try{
            const airplane=Airplane.findByPk(id);
            return id;
        }catch(error){
            console.log("something went wrong");
            throw {error}; 
        }
    }
}
module.exports=AirplaneRepository;