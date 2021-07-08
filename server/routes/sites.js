const express = require("express");
const router = express.Router();

// Site Model
const Site = require('../models/site');

// @route   Get api/sites
// @ desc   Get all sites
// @ access Public
router.get('/', async (req, res) => {
    try {
        const sites = await Site.find();

        return res.status(200).json(sites);
    }
    catch (e) {
        return res.status(400).json({ msg: e.message });
    }
});

// @route Get /sites
// @desc Get One Site
// @access Public
router.get('/:id', async (req, res) => {
    try {
        const site = await Site.findById(req.params.id);

        return res.status(200).json(site);
    }   
    catch (e) {
        return res.status(400).json({ msg: e.message });
    }
});

// @route Get /sites/subdomain
// @desc Get One Site by subdomain
// @access Public
router.get('/subdomain/:subdomain', async (req, res) => {
    try {
        console.log(req.params.subdomain);
        const site = await Site.findOne({subdomain: req.params.subdomain}).exec();

        return res.status(200).json(site);
    }   
    catch (e) {
        return res.status(400).json({ msg: e.message });
    }
});

module.exports = router;