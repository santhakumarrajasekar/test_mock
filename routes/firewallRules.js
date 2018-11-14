var express = require('express');
var auth = require('../lib/auth');
var http = require('http');
var deep_equal = require('deep-equal');
var router = express.Router();

/**
 * GET /firewall-rules/<customer-name>/<device-name>. Return a list of firewall rules for the specified customer and device
 */
router.get('/:site/', auth.authorize, function (request, response) {
    console.log('GET firewall rules:');
    console.log("Path param site value: " + request.params.site);
    console.log("Query param customer value: " + request.query.customer);
    console.log("Query param device value: " + request.query.device);

    if (!request.query.device || !request.query.customer) {
        response.status(400);
        response.json({ "status": "Bad Request" });
    }

   
});

/**
* POST /firewall-rules/<customer-name>/<device-name>. Updates firewall rules for the specified customer and device
*/
router.post('/:site/', auth.authorize, function (request, response) {
    console.log('POST firewall rules:');
    console.log("Path param site value: " + request.params.site);
    console.log("Query param customer value: " + request.query.customer);
    console.log("Query param device value: " + request.query.device);
    console.log("Initial Body--->" + JSON.stringify(request.body));

    if (!request.query.device || !request.query.customer) {
        response.status(400);
        response.json({ "status": "Bad Request" });
    }

    var site = decodeURIComponent(request.params.site);
    var customer = decodeURIComponent(request.query.customer);
    var device = decodeURIComponent(request.query.device);

    var finalJSON = request.body;
    var finalResult = [];

   

});

function custom_sort(a, b) {
    return new Date(b["last_updated"]).getTime() - new Date(a["last_updated"]).getTime();
}

function custom_sort_by_name(a, b) {
    return (a["name"] < b["name"]) ? -1 : (a["name"] > b["name"]) ? 1 : 0;
}

module.exports = router;