const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Section Schema
const SectionSchema = new Schema({
    type: {
        type: String,
        required: true
    }
});

// create Schema
const SiteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sections: {
        type: [SectionSchema]
    }
});

const Site = mongoose.model('site', SiteSchema);

module.exports = Site;