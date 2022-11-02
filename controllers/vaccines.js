const express = require('express');
const router = express.Router();
const Vaccine = require('../models/vaccine');
const mongoose = require('mongoose');

// Find All Travels
router.get('/', (req, res) => {
    Vaccine.find({})
    .then(vaccines => {
        console.log('All Vaccines', vaccines);
        res.json({ vaccines: vaccines });
    })
    .catch(error => {
        console.log('error', error);
        res.json({ message: "Error occurred, please try again" })
    });
});

// Find One Vaccine (by Id)
router.get('/:id', (req, res) => {
    console.log('find vaccine by Id', req.params.id);
    Vaccine.findOne({ _id: mongoose.Types.ObjectId(req.params.id) })
    .then(vaccine => {
        console.log('Here is the vaccine', vaccine);
        res.json({ vaccine: vaccine });
    })
    .catch(error => {
        console.log('error', error);
        res.json({ message: "Error ocurred, please try again" });
    });
});

// Create One Vaccine
router.post('/', (req, res) => {
    Vaccine.create({
        vaccineBrand: req.body.vaccineBrand,
        phase: req.body.phase,
        date: req.body.date
    })
    .then(vaccine => {
        console.log('New Vaccine >>>', vaccine);
        res.json({ vaccine: vaccine });
    })
    .catch(error => {
        console.log('error', error)
        res.json({ message: "Error occurred, please try again" });
    });
});

// Update One Vaccine
router.put('/:id', (req, res) => {
    console.log('route is being on PUT')
    Vaccine.findById(req.params.id)
    .then(foundVaccine => {
        console.log('Vaccine found', foundVaccine);
        Vaccine.findByIdAndUpdate(req.params.id, {
            vaccineBrand: req.body.vaccineBrand ? req.body.vaccineBrand : foundVaccine.vaccineBrand,
            phase: req.body.phase ? req.body.phase : foundVaccine.phase,
        }, {
            upsert: true
        })
        .then(vaccine => {
            console.log('Vaccine was updated', vaccine);
            res.redirect(`/vacines/${req.params.id}`);
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

// Delete One Vaccine
router.delete('/:id', (req, res) => {
    Vaccine.findByIdAndRemove(req.params.id)
    .then(response => {
        console.log('This was deleted', response);
        res.json({ message: `Vaccine ${req.params.id} was deleted` });
    })
    .catch(error => {
        console.log('error', error)
        res.json({ message: "Error occured, please try again" });
    });
});

module.exports = router;