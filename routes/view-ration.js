const express = require('express');
const router = express.Router();

const DUMMY_RATION = [
    {
        id: '1',
        type: 'food',
        calories: '2000',
        exp_date: '24-10-2022',
        litre: ''
    },
    {
        id: '2',
        type: 'water',
        calories: '',
        exp_date: '',
        litre: '1'
    },
    {
        id: '3',
        type: 'food',
        calories: '1500',
        exp_date: '12-10-2022',
        litre: ''
    },
    {
        id: '4',
        type: 'water',
        calories: '',
        exp_date: '',
        litre: '2'
    },

]

router.get('/',(req,res,next) => {
    res.send({DUMMY_RATION})
});

router.get('/ration/:id',(req,res,next) => {
    
    const uid = req.params.id;
    const ration = DUMMY_RATION.find(r => {
        return uid === r.id;
    })
    console.log(ration)
    if(ration){
        res.json({ration});
        console.log(ration,"if")
    } else {
        console.log(ration,"else")
        let error = new Error('Couldn\'t find this id');
        error.code = 404;
        next(error);
    }

});

module.exports = router;