const { cityService } = require("../services/index");

const CityService = new cityService();

const create = async (req, res) => {
    try {
        const city = await CityService.createcity(req.body);

        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created city",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create city",
            err: error.message 
        });
    }
};

const destroy = async (req, res) => {
    try {
        const response = await CityService.deletecity(req.params.id);

        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted city",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete city",
            err: error
        });
    }
};

const update = async (req, res) => {
    try {
        const city = await CityService.updatecity(req.params.id, req.body);

        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully updated city",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update city",
            err: error
        });
    }
};

const get = async (req, res) => {
    try {
        const city = await CityService.getcity(req.params.id);

        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully fetched city",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get city",
            err: error
        });
    }
};

const getAll= async (req,res)=>{
    try{
        const cities= await CityService.getallcities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: "Successfully fetched all cities",
            err: {}
        });
    }catch(error){
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the cities",
            err: error
        })
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
};
