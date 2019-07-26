var express = require('express');
var router = express.Router();
const performanceController = require('../controllers/performancesController')

/* GET users listing. */
router.get('/', performanceController.index);

router.get('/:id', performanceController.show);

router.post('/', performanceController.create);

router.put('/:id', performanceController.update);

router.delete('/:id', performanceController.delete);


module.exports = router;
