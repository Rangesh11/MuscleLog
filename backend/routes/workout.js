const express = require('express');
const router = express.Router();

const workout = require('../models/workoutschema');
const {createworkout,getworkout,getworkouts,deleteworkout,updateworkout}=require("../controller/workoutcontroller")

router.get('/',getworkouts);

router.get('/:id',getworkout);

router.post('/', createworkout);


router.delete('/:id',deleteworkout);

router.patch('/:id',updateworkout);

module.exports = router;
