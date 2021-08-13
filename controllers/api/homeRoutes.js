const { GroceryItems } = require('../../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const groceryData = await GroceryItems.findAll({
            include: [
                {
                    attributes: ["groceryItem", "id"],
                }
            ]
        })
        res.render('homepage');
    } catch (err) {
        console.log(err);
    res.status(500).json(err);
    }
    
});

module.exports = router;