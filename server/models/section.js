const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const SectionSchema = new Schema({
    type: {
        type: String,
        required: true
    }
});

const Section = mongoose.model('section', SectionSchema);

module.exports = Section;