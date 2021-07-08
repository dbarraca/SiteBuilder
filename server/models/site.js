const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const SiteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sections:  {
        type: Array
    }
});

const Site = mongoose.model('site', SiteSchema);

module.exports = Site;