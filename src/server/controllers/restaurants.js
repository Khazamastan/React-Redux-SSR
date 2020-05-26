var restaurant = require('../models/restaurant');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.restaurant_create = function (req, res) {
    var restaurant = new restaurant(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    restaurant.save(function (err) {
        if (err) {
            return res.send(err);
        }
        res.send('restaurant Created successfully')
    })
};

exports.restaurant_details = function (req, res, next) {
    restaurant.findOne({}, function (err, restaurant) {
        if (err) return res.send("ERROR");
        res.send({message: "Hello", restaurant});
    })
};

exports.All = function (req, res, next) {
    restaurant.find({}, function (err, restaurant) {
        if (err) return res.send("ERROR");
        res.send(restaurant);
    })
};

exports.restaurant_update = function (req, res) {
    restaurant.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, restaurant) {
        if (err) return res.send(err);
        res.send('restaurant udpated.');
    });
};

exports.restaurant_delete = function (req, res) {
    restaurant.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.send(err);
        res.send('Deleted successfully!');
    })
};