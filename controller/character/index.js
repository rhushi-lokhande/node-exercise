var express = require('express'),
    router = express.Router(),
    controller = require('./character.controller');

router.get('/character/', controller.get);
router.get('/character/:id', controller.getCharecterDetails);
module.exports = router;