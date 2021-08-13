//API routes// need to add this in package.json
const router = require('express').Router();
const fs = require('fs');
const { GroceryItems } = require('../../models');
// const { v4: uuidv4 } = require('uuid');

//Reading the jsonfile

// router.get('/api/homepage', (req,res) => {
//        let groceryData= JSON.parse(fs.readFileSync('../../seeds/item.json', 'utf8'));

//        res.json(groceryData);
// });

// need to send the data to mysql
router.post('/api/homepage', async (req,res) => {
    //get  grocery item from end user  (client end)
    try {
        const newGroceryItem = await GroceryItems.create({
            id: req.body.id,
            list_id: req.body.list_id,
            groceryItem: req.body.groceryItem,
        })
        res.json(newGroceryItem);
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
   

    
});

//Replace filename here 
router.delete('/api/homepage/:id', (req,res) => {
    // access data note from client
    let id = req.params.id;
    
    console.log("this is gonna delete ur grocery item");

    let groceryData = JSON.parse(fs.readFileSync('../../seeds/item.json', 'utf8'));

    // can use filter or for loop
    for(let i=0; i<groceryData.length;i++){
        if(id == groceryData[i].id){
            groceryData.splice(i,1);

        // write to db.json
            fs.writeFileSync('../../seeds/item.json', JSON.stringify(grocerydata));
            console.log('\nSuccesfully deleted the item!');

            res.json(groceryData);
            return;
        }
    }
  
});

module.exports = router;