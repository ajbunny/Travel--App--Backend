const express = require('express');
const router = express.Router();
const Lodging = require('../models/lodgingdb')

//INDEX
router.get('/', (req, res) =>{
    Lodging.find({}, (err, foundLodging) =>{
        res.json(foundLodging);
    });
});

//New will be handled by React applications
//DELETE
router.delete('/:id',(req, res) =>{
        Lodging.findByIdAndRemove(req.params.id, (err, deletedLodging)=>{
            res.json(deletedLodging);
        });
    });

//UPDATE
router.put('/:id', (req, res)=>{
    Lodging.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedLodging)=>{
        res.json(updatedLodging);
    });
});
// CREATE
router.post('/', (req, res)=>{
    Lodging.create(req.body, (err, createdLodging)=>{
        res.json(createdLodging); //.json() will send proper headers in response so client knows it's json coming back
    });
});
// EDIT - Will be handled by React application
// Show
router.get('/:id', (req, res)=>{
    Lodging.findById(req.params.id, (err, foundLodging)=>{
        res.json(foundLodging);
    });
});


module.exports = router;