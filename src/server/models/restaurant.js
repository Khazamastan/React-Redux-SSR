var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var LimitSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    start: {type : Date},
    end: {type: Date}
  })

var hoursSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
})

var RestaurantSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true, max: 100},
    address: {type: String},
    phone: {type: String, required: true},
    deliveryPhone: {type: String, required: true},
    hours: {type: hoursSchema}
});


// Export the model
module.exports = mongoose.model('Restaurant', RestaurantSchema);