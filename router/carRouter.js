const express = require('express');
const carsModel = require('./carModel');
const router = express.Router();
const db = require('../data/db-config');

router.get('/', async (req,res) => {
    try {
        console.log("In get")
      
        
        const cars = await carsModel.find();
        // const cars = await db("cars");
        
        // console.log('cars ', cars)
        res.json(cars);
    }
    catch (error) {
        console.log("error ", error)
        res.status(500).json({error: "Unable to retrieve cars.", errorMessage:error});
    }
})

router.get('/:id', async(req,res) => {
    const {id} = req.params;
    try {
        const cars = await carsModel.findById(id);
        if(cars){
            res.json(cars);
        }
        else{
            res.status(404).json({ message: 'Could not find car with given id.'});
        }
    }
    catch (error) {
        res.status(500).json({error: 'Unable to retrieve cars.'})
    }
});

router.post('/', async(req,res) => {
    const carInfo = req.body;
    console.log("req ", req);
    console.log("carinfo ", carInfo);
    try {
        const [id] = await carsModel.add(carInfo);
        res.status(201).json(carInfo);
   }
   catch (error) {
        res.status(500).json({error: 'Unable to store'})
   }
});

module.exports = router;
