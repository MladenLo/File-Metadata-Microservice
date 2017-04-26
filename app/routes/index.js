//Loading modules
var express = require('express');
var multer  = require('multer');
var upload = multer();
var router = express.Router();

//Loading controllers
var indexController = require('../controllers/indexController');

//Routes
router.get('/', indexController.index);

router.post('/', upload.single('uploaded_file'), indexController.uploadFile);

module.exports = router;