const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Travel = require('../models/travel');

// Find All Vaccines
router.get('/', (req, res) => {
    Travel.find({})
        .then(travels => {
            console.log('All Travels', travels);
            res.json({ travels: travels });
        })
        .catch(error => {
            console.log('error', error);
            res.json({ message: "Error occurred, please try again" })
        });
});

// Find One Travel (by Id)
router.get('/:id', (req, res) => {
    console.log('find travel by Id', req.params.id);
    Travel.findOne({ _id: mongoose.Types.ObjectId(req.params.id) })
        .then(travel => {
            console.log('Here is the travel', travel);
            res.json({ travel: travel });
        })
        .catch(error => {
            console.log('error', error);
            res.json({ message: "Error ocurred, please try again" });
        });
});

// Create One Travel
router.post('/', (req, res) => {
    Travel.create({
        location: req.body.location,
        restriction: req.body.restriction
    })
        .then(travel => {
            console.log('New Travel >>>', travel);
            res.json({ travel: travel });
        })
        .catch(error => {
            console.log('error', error)
            res.json({ message: "Error occurred, please try again" });
        });
});

// Update One Travel
router.put('/:id', (req, res) => {
    console.log('route is being on PUT')
    Travel.findById(req.params.id)
        .then(foundTravel => {
            console.log('Travel found', foundTravel);
            Travel.findByIdAndUpdate(req.params.id, {
                location: req.body.location ? req.body.location : foundTravel.location,
                restriction: req.body.restriction ? req.body.restriction : foundTravel.restriction,
            }, {
                upsert: true
            })
                .then(travel => {
                    console.log('Travel was updated', travel);
                    res.redirect(`/travels/${req.params.id}`);
                })
                .catch(error => {
                    console.log('error', error)
                    res.json({ message: "Error occured, please try again" })
                })
        })
        .catch(error => {
            console.log('error', error)
            res.json({ message: "Error occured, please try again" })
        })
});

// Delete One Travel
router.delete('/:id', (req, res) => {
    Travel.findByIdAndRemove(req.params.id)
        .then(response => {
            console.log('This was deleted', response);
            res.json({ message: `Travel ${req.params.id} was deleted` });
        })
        .catch(error => {
            console.log('error', error)
            res.json({ message: "Error occured, please try again" });
        });
});

module.exports = router;

