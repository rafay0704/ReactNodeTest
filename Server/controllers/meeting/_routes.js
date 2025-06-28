const express = require('express');
const router = express.Router();
const controller = require('./meeting');
const auth = require('../../middelwares/auth'); // protect routes

router.post('/add', auth , controller.add);
router.get('/view/', auth , controller.index);
router.get('/view/:id', auth , controller.view);
router.delete('/delete/:id', auth , controller.deleteData);
router.post('/deleteMany', auth ,  controller.deleteMany);

module.exports = router;
