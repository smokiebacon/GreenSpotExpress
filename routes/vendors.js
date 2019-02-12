var express = require('express')
var router = express.Router();


// VENDOR SHOW ROUTE [LIST OF ALL VENDORS]
router.get('/', async (req, res, next) => {
    try {
        const allVendors = await Vendor.find()
        console.log(allVendors)
        res.json({
            status: 200,
            data: allVendors
        })
    } catch (err){
        res.send(err)
    }
})


// CREATE NEW VENDOR ROUTE
router.post('/', async (req, res) => {
    console.log(req.body)
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


// SHOW VENDOR PAGE [INDIVIDUAL VENDOR]
router.get('/:id', async (req, res, next) => {
    try {
        const foundVendor = await Vendor.findById(req.params.id)
        res.json({
            status: 200,
            data: foundVendor
        })
    } catch (err){
        res.send(err)
    }
})

// EDIT VENDOR PAGE
router.put('/:id', async (req, res) => {
    try {
        const updatedVendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json({
            status: 200,
            data: updatedVendor
        })
    } catch (err) {
        res.send(err)
    }
})

// DELETE VENDOR PAGE
router.delete('/:id', async (req, res) => {
    try {
        const deletedVendor = await Vendor.findByIdAndRemove(req.params.id)
        res.json({
            status: 200,
            data: deletedVendor
        })
    } catch(err){
        res.send(err);
    }
})




module.exports = router