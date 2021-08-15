//API routes// need to add this in package.json
const router = require('express').Router();
// const fs = require('fs');
const { GroceryItems } = require('../../models');


//CREATE a grocery item
router.post('/', async (req, res) => {
    try {
        const groceryData = await GroceryItems.create({
            item: req.body.item,
        });
        res.status(200).json(groceryData)
    } catch (err) {
        res.status(400).json(err);
    }
});
//CREATE a grocery item
// router.post('/', (req,res) => {
//     GroceryItems.create(req.body)
//     .then((newItem) => {
//         res.json(newItem);
//     })
//     .catch((err) => {
//         res.json(err);
//     });
// });

//READ grocery items
router.get('/', async (req, res) => {
    GroceryItems.findAll().then((newItem) => {
        res.json(newItem);
    });
});

// // need to send the data to mysql
// router.post('/api/homepage', async (req,res) => {
//     //get  grocery item from end user  (client end)
//     try {
//         const newGroceryItem = await GroceryItems.create({
//             list_id: req.body.list_id,
//             item: req.body.item,
//         })
//         res.json(newGroceryItem);
//     } catch(err){
//         console.log(err);
//         res.status(500).json(err);
//     }
   

    
// });

// router.get('/api/groceryitems', async (req,res) => {
//     try {
//         const pullItem = await 
//     }
// })

//Replace filename here 
// router.delete('/api/homepage/:id', (req,res) => {
//     // access data note from client
//     let id = req.params.id;
    
//     console.log("this is gonna delete ur grocery item");

//     let groceryData = JSON.parse(fs.readFileSync('../../seeds/item.json', 'utf8'));

//     // can use filter or for loop
//     for(let i=0; i<groceryData.length;i++){
//         if(id == groceryData[i].id){
//             groceryData.splice(i,1);

//         // write to db.json
//             fs.writeFileSync('../../seeds/item.json', JSON.stringify(grocerydata));
//             console.log('\nSuccesfully deleted the item!');

//             res.json(groceryData);
//             return;
//         }
//     }
  
// });

module.exports = router;