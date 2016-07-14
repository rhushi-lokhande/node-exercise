var request = require('request');
exports.get = function get(url, sucessCb, errorCB) {
    console.log(url);
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            return sucessCb(JSON.parse(body)); // Print the google web page.
        }
        return errorCB(error);
    })
}