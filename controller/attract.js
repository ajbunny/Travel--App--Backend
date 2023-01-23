const express = require('express');
const router = express.Router();
const Attractions = require('../models/attactdb.js');

//INDEX
router.get('/', (req, res) =>{
    Attractions.find({}, (err, foundAttractions) =>{
        res.json(foundAttractions);
    });
});

//New will be handled by React applications
//DELETE
router.delete('/:id',(req, res) =>{
        Attractions.findByIdAndRemove(req.params.id, (err, deletedAttractions)=>{
            res.json(deletedAttractions);
        });
    });

//UPDATE
router.put('/:id', (req, res)=>{
    Attractions.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedAttractions)=>{
        res.json(updatedAttractions);
    });
});
// CREATE
router.post('/', (req, res)=>{
    Attractions.create(req.body, (err, createdAttractions)=>{
        res.json(createdAttractions); //.json() will send proper headers in response so client knows it's json coming back
    });
});
// EDIT - Will be handled by React application
// Show
router.get('/:id', (req, res)=>{
    Attractions.findById(req.params.id, (err, foundAttractions)=>{
        res.json(foundAttractions);
    });
});


module.exports = router;