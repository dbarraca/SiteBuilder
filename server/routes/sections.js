const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

// Section Model
const Section = require('../models/section');

// @route   Get /sections
// @ desc   Get all sections
// @ access Public
router.get('/', async (req, res) => {
    try {
        const sections = await Section.find();

        return res.status(200).json(sections);
    }
    catch (e) {
        return res.status(400).json({ msg: e.message });
    }
});

// @route   Get /sections/:siteId
// @ desc   Get all sections belonging to a site
// @ access Public
router.get('/:siteId', async (req, res) => {
    try {
        console.log("site in backend: ", req.params.siteId);

        const sections = await Section.find({ siteId: req.params.siteId });

        return res.status(200).json(sections);
    }
    catch (e) {
        return res.status(400).json({ msg: e.message });
    }
});

module.exports = router;