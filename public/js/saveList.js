const newItemInput = document.querySelector('#add-item').value.trim();
const saveListBtn = document.querySelector('#save-list');
const saveItemBtn = document.querySelector('#save-item');
const listContainer = document.querySelector('#list-container');


let activeItem = {};

const saveItem = (event) => {
    fetch('/api/groceryitems', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: { "Content-Type": 'application/json', },
    });
    saveItem.then()
}

const saveList = (list) =>
    fetch('/api/grocerylists', {
        method: 'POST',
        body: JSON.stringify(list),
        headers: { 'Content-Type': 'application/json', },
    });



const handleItemSave = () => {
    const newItemInput = req.body;

    saveItem (newItemInput).then(() => {
        newItemInput.append(listContainer);
    })
};



    

document.querySelector('#save-item').addEventListener('submit', saveItem);
document.querySelector("#save-list").addEventListener('submit', saveList);