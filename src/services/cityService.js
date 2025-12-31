const { CityRepository } = require("../repositories/index");

class cityService {
    constructor() {
        this.cityrepository = new CityRepository();
    }

    async createcity(data) {
        try {
            return await this.cityrepository.createCity(data);
        } catch (error) {
            throw error;
        }
    }

    async deletecity(cityid) {
        try {
            return await this.cityrepository.deleteCity(cityid); // ✅ FIX
        } catch (error) {
            throw error;
        }
    }

    async updatecity(cityid, data) {
        try {
            return await this.cityrepository.updateCity(cityid, data);
        } catch (error) {
            throw error;
        }
    }

    async getcity(cityid) {
        try {
            return await this.cityrepository.getCity(cityid);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = cityService;
