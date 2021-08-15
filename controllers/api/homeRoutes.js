const { GroceryItems } = require('../../models');
const router = require('express').Router();
const authorize = require('../../utils/auth');


router.post('/homepage', authorize, async (req, res) => {
    try {
        const newGroceryItem = await GroceryItems.create({
            ...req.body,
            item: req.render.item,
        });

        res.status(200).json(newGroceryItem);
    } catch (err) {
        res.status(400).json(err);
    }
});



router.get('/', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.get('/homepage', async (req, res) => {
    res.render("homepage");
});
// this is getting all items by name and Id and sending it out to the page
// router.get('/', async (req, res) => {
//     try {
//         const groceryData = await GroceryItems.findAll();
//         // this is how it goes out
//         res.render('homepage', groceryData);
//     } catch (err) {
//         console.log(err);
//     res.status(500).json(err);
//     }
// });



module.exports = router;