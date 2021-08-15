const saveItem = async (event) => {
    event.preventDefault();

    const newItemInput = document.querySelector('#add-item').value.trim();

    if (newItemInput) {
        const response = await fetch ('/api/groceryitems', {
            method: 'POST',
            body: JSON.stringify({ newItemInput }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert ('Failed to add grocery item to list');
        }
    }
};





document.querySelector('#save-item').addEventListener('click', saveItem);
// document.querySelector("#save-list").addEventListener('submit', saveList);