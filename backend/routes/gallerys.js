var express = require('express');
var router = express.Router();
const galleryController = require('../controllers/gallerysController')



/* GET users listing. */
  router.get('/', galleryController.index);

  router.get('/:id', galleryController.show);

  router.post('/', galleryController.create);

  router.put('/:id', galleryController.update);

  router.delete('/:id', galleryController.delete);

module.exports = router;
