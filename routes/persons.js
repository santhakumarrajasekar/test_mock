var express = require('express');
var auth = require('../lib/auth');
//var rdb = require('../lib/rethink');
var http = require('http');
var deep_equal = require('deep-equal');
var router = express.Router();

router.get('/', auth.authorize, function (request, response) {
    console.log('Advanced steering  |GET Applications : ');

    var personResponse = {
        "persons": [
            {
                "name": "santha",
                "id": "1",
                "family": [
                    "santhafamily"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "priya",
                "id": "2",
                "family": [
                    "santhafamily"
                ],
                "subfamily": [
                    "audio_video"
                ]
            }
        ]
    }

    response.status(200);
    response.json(personResponse);

});


module.exports = router;