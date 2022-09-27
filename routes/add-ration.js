const express = require('express');

const router = express.Router();

router.get('/',(req,res,next) => {
    console.log("From Add ration");
    res.json({
        message: 'Add Ration'
    });
});

module.exports = router;