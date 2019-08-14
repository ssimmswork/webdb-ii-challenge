const express = require('express');
const knex = require('knex');
const db = require('../data/db-config');
const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const cars = await db('cars');
        res.json(cars);
    }
    catch (error) {
        res.status(500).json({error: "Unable to retrieve cars."});
    }
})

router.get('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const cars = await db('cars').where({id});
        res.json(cars);
    }
    catch (error) {
        res.status(500).json({error: 'Unable to retrieve cars.'})
    }
});

router.post('/', async(req,res) => {
    try {
        const carInfo = req.body;
        const [id] = await db('cars').insert(carInfo);
        const newCar = await db('cars').where({id});
        res.status(201).json(newCar);
   }
   catch (error) {
        res.status(500).json({error: 'Unable to store'})
   }
});

module.exports = router;
