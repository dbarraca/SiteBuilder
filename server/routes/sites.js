const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

// Site Model
const Site = require('../models/site');

// @route   Get /sites
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

// @route Get /sites/subdomain/:subdomain
// @desc Get One Site by subdomain
// @access Public
router.get('/subdomain/:subdomain', async (req, res) => {
    try {
        const site = await Site.findOne({subdomain: req.params.subdomain}).exec();

        return res.status(200).json(site);
    }   
    catch (e) {
        return res.status(400).json({ msg: e.message });
    }
});

// @route POST /sites/:siteId/sections
// @desc Add one section to a site
// @access Public
router.post('/:siteId/sections', auth, async (req, res) => {
    try {
        const site = await Site.findById(req.params.siteId);

        site.sections.push({
            type: req.body.sectionType,
            order: site.sections.length + 1
        });

        await site.save();

        return res.status(200).json(site);
    }
    catch (e) {
        return res.status(400).json({ msg: e.message });
    }
});

// @route PUT /sites/:siteID/sections/:sectionId
// @desc Delete one section of a site
// @access Public
router.put('/:siteId/sections/:sectionId/up', auth, async (req, res) => {
    try {
        const site = await Site.findById(req.params.siteId);

        // console.log("sections", site.sections);
        console.log("section moved up", site.sections.indexOf(req.body.section));

        // console.log("section moved up", site.sections.indexOf(req.body.section));
        // console.log("section moved up", "_id", req.body.section);

        // site.sections.set()

        // await site.save();

        /*        
        site.updateOne(
            { _id: req.params.siteId, section: req.params.sectionId },
            { $set: { "grades.$" : 444 } }
        )
        */

        return res.status(200).json(site);

    }
    catch (e) {
        return res.status(400).json({ msg: e.message });
    }
});

// @route Delete /sites/:siteID/sections/:sectionId
// @desc Delete one section of a site
// @access Public
router.delete('/:siteId/sections/:sectionId', auth, async (req, res) => {
    try {
        const site = await Site.findById(req.params.siteId);

        site.sections.pull(req.params.sectionId);

        await site.save();

        return res.status(200).json(site);

    }
    catch (e) {
        return res.status(400).json({ msg: e.message });
    }
});


module.exports = router;