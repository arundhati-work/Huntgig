const express = require('express');
const router = express.Router();
const Company = require('../models/Company');

router.get('/', async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const { name, image } = req.body;
    const newCompany = new Company({ name, image });

    try {
        const savedCompany = await newCompany.save();
        res.status(201).json(savedCompany);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
