//Loading modules (multer module helps us with dealing with file upload https://www.npmjs.com/package/multer)
//var multer  = require('multer');

var indexController = {};

//Home page controller, responsible for showing file upload form
indexController.index = function(req, res){
    res.render('index');
};

//Handling file upload
indexController.uploadFile = function(req, res){
    if(req.file !== undefined){
        var result = {
            size: req.file.size
        };
        res.setHeader('Content-Type', 'application/json');
        return res.send(JSON.stringify(result)); 
    } else {
        var result = {
            error: "You need to upload file. Try again."
        };
        res.setHeader('Content-Type', 'application/json');
        return res.send(JSON.stringify(result));
    }
};

module.exports = indexController;