const { GroceryItems } = require('../models');
const router = require('express').Router();



//Rendering the homepage
// router.get('/', async (req, res) => {
//     try {
//         res.render('homepage', { items });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// this is getting all items by name and Id and sending it out to the page
// router.get('/', async (req, res) => {
//     try {
//         const groceryData = await GroceryItems.findAll();
//         // this is how it goes out
//         res.render('homepage', {"groceryData": groceryData});
//     } catch (err) {
//         console.log(err);
//     res.status(500).json(err);
//     }
// });


router.get('/', async (req, res) => {
    const groceryData = await GroceryItems.findAll().catch((err) => { 
        res.json(err);
    });
        const items = groceryData.map((item) => item.get({ plain: true }));
        res.render('homepage', { items });
});


module.exports = router;