var express = require('express')
var router = express.Router();
var Vendor = require('../models/vendors')

router.get('/', async (req, res, next) => {
    try {
        console.log('working')
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})



router.post('/', async (req, res) => {
    try {
        const createdVendor = await Vendor.create(req.body);
        console.log('post response')
        res.json({
            status: 200,
            data: createdVendor
        })
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})

module.exports = router