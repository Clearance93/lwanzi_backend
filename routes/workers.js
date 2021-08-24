
var express = require('express');
var router = express.Router();
var Workers = require('../Models/Workers');


router.get('/', (req, res) => {
    Workers.find((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});


router.post('/', (req, res) => {
    Workers.create((req.body), (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = router;