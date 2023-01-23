const express = require('express');
const router = express.Router();
const Locations = require('../models/locationdb.js');


//INDEX
router.get('/', (req, res) =>{
    Locations.find({}, (err, foundLocations) =>{
        res.json(foundLocations);
    });
});

//New will be handled by React applications
//DELETE
router.delete('/:id',(req, res) =>{
        Locations.findByIdAndRemove(req.params.id, (err, deletedLocations)=>{
            res.json(deletedLocations);
        });
    });

//UPDATE
router.put('/:id', (req, res)=>{
    Locations.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedLocations)=>{
        res.json(updatedLocations);
    });
});
// CREATE
router.post('/', (req, res)=>{
    Locations.create(req.body, (err, createdLocations)=>{
        res.json(createdLocations); //.json() will send proper headers in response so client knows it's json coming back
    });
});
// EDIT - Will be handled by React application
// Show
router.get('/:id', (req, res)=>{
    Locations.findById(req.params.id, (err, foundLocations)=>{
        res.json(foundLocations);
    });
});


module.exports = router;