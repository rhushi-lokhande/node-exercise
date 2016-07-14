var http = require('../../data/http');

exports.get = function(req, res, next) {
    http.get('http://swapi.co/api/people/' + (req.query.page ? "?page=" + req.query.page : ''), function(data) {
        console.log(data);
        res.render('character/character', {
            title: 'Express',
            charecters: data,
            curPage: req.query.page || 1
        });
    }, function(error) {
        console.log(error);
    })

}

exports.getCharecterDetails = function(req, res, next) {
    http.get('http://swapi.co/api/people/' + req.params.id, function(data) {
        console.log(data);
        return res.render('character/characterDetails', {
            title: 'Express',
            charecters: data,
            curPage: req.query.page || 1
        });
    }, function(error) {
        console.log(error);
    })
}
exports.index = function(req, res, next) {
    return res.render('index', {
        title: 'Express',
    });
}