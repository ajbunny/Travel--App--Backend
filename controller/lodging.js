const express = require('express');
const router = express.Router();
const Lodging = require('../models/lodgingdb')

//INDEX
router.get('/', (req, res) =>{
    Lodging.find({}, (err, foundLodging) =>{
        res.json(foundLodging);
    });
});

