//API routes// need to add this in package.json
const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

//Reading the jsonfile
//Replace html front end filename here//db.json is going to be  under the existing db folder
router.get('/api/Filename', (req,res) => {
       let grocerydata= JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

       res.json(grocerydata);
});

// POST request OR Create //Replace filename here
router.post('/api/Filename-html front end', (req,res) => {
    //get  grocery item from end user  (client end)
    const newGroceryitem = req.body;

    console.log("newly created grocery item");

    // npm package for uniqueid uuid
    newgroceryitem.id = uuidv4();

    // grab data from the db.json & push the newitem into the database
    let grocerydata = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    grocerydata.push(newGroceryitem);

    // write to db.json
    fs.writeFileSync('./db/db.json', JSON.stringify(grocerydata));
    console.log('\nSuccesfully added the new groceryitem to db.json!');

    res.json(grocerydata);
});

//Replace filename here 
router.delete('/api/REplace filename/:id', (req,res) => {
    // access data note from client
    let id = req.params.id;
    
    console.log("this is gonna delete ur grocery item");

    let grocerydata = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    // can use filter or for loop
    for(let i=0; i<grocerydata.length;i++){
        if(id == grocerydata[i].id){
            grocerydata.splice(i,1);

        // write to db.json
            fs.writeFileSync('./db/db.json', JSON.stringify(grocerydata));
            console.log('\nSuccesfully deleted the item!');

            res.json(grocerydata);
            return;
        }
    }
  
});