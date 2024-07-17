const Mobile = require('../models/mobile')

const createMobile = async (req, res) => {    
    const {name, price, description} = req.body;      
    try {
        const postMobile = await Mobile.create({name, price, description});        
        res.status(200).json({status: 'success', data: postMobile, message: 'Data posted successfully'})
    }
    catch (e) {
        res.status(500).json({status: 'fail', message: 'Internal Server Error', error : e.message})
    }

}

const getMobiles = async (req,res) => {    
    try {
        const fetchedData = await Mobile.find({});
        console.error('fetchdata',fetchedData)
        res.status(200).json({status: 'success', message: 'Data retrieved successfully', data: fetchedData})
    }
    catch(e) {        
        res.status(404).json({status: 'Bad Request', message: e.message})
    }
}

const updateMobiles = async (req, res) => {    
    try {
        const {id} = req.params;
        const {name, price, description} = req.body;

        if(!id) {res.status(404).json({status: 'fail', message: 'Bad Request'})}

        const data = await Mobile.findByIdAndUpdate(id, {name, price, description}, {new: true});
        res.status(200).json({status: 'success', message: 'Data Updated successfully', data: data})
    } catch (e) {        
        res.status(500).json({status: 'fail', message: 'Internal server error'})
    }
}

const deleteMobiles = async (req, res) => {
    try {
        const {id} = req.params;
        if(!id) {res.status(404).json({status: 'fail', message: 'Bad Request'})}
        
        const data = await Mobile.findByIdAndDelete(id, {new: true});
        res.status(200).json({status: 'success', message: 'Data Deleted successfully', data: data})
    } catch (e) {
        res.status(500).json({status: 'fail', message: 'Internal server error'})
    }
}

module.exports = {createMobile, getMobiles, updateMobiles, deleteMobiles};