const express = require('express');
const router = express.Router();

const workout = require('../models/workoutschema');

router.get('/', async (req, res) => {
    res.json({ msg: "get all documents" });
});

router.get('/:id', async (req, res) => {
    res.json({ msg: "get specific document" });
});

router.post('/', async (req, res) => {
    const { title, load, reps } = req.body;
    try {
        const Workout = await workout.create({ title, load, reps });
        res.status(200).json(Workout);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

router.post('/:id', (req, res) => {
    res.json({ msg: "post specific document" });
});

router.delete('/', (req, res) => {
    res.json({ msg: "delete all documents" });
});

router.patch('/:id', (req, res) => {
    res.json({ msg: "update specific document" });
});

module.exports = router;
