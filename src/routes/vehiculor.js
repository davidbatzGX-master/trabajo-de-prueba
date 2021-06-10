const express = require('express');
const router = express.Router();

const vehiculoController = require('../controllers/vehiculoController');

router.get('/',vehiculoController.list);
router.post('/add',vehiculoController.save);
router.get('/delete/:id',vehiculoController.delete);
router.get('/update/;id',vehiculoController.edit);

module.exports = router;