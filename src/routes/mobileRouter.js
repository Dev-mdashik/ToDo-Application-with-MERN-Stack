const express = require('express')
const Router = express.Router();
const {createMobile, getMobiles, updateMobiles, deleteMobiles} = require('../controllers/mobileControllers');


Router.post('/createMobiles', createMobile);
Router.get('/getMobiles', getMobiles);
Router.put('/updateMobiles/:id', updateMobiles);
Router.delete('/deleteMobiles/:id', deleteMobiles);

module.exports = Router