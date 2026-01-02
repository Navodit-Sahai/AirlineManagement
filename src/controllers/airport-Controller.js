const {airportService}=require('../services/index');
const AirportService=new airportService();
const create=async (req,res)=>{
    try{
        const response=await AirportService.create(req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully created airport",
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            err:error,
            message:'cannot create a new airport'
        })
    }
}
module.exports={
    create
}