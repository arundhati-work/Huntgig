const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const contact = new Contact({ name, email, message });
        await contact.save();
        res.status(201).json({ message: 'Thank you for reaching out! We will get back to you soon.' });
    } catch (error) {
        console.error('Error saving contact submission:', error);
        res.status(500).json({ message: 'Failed to save your message. Please try again later.' });
    }
});

module.exports = router;
