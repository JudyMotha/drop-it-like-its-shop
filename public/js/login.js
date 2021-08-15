//Create function to handle the login form created in the login.handlebars
const loginForm = async (event) => {
    event.preventDefault();

    //Grab user input from email and password fields
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    //if value is in each, post values to json data
    if (email && password) {
        const response = await fetch ('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        console.log('this is a test');

        //if response is successful - take user to homepage
        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert('Failed to log in');
        }
    }
};

//Create function to handle the register form created in login.handlebars
const registerUserForm = async (event) => {
    event.preventDefault();

    //Grab user input from registration fields
    const name = document.querySelector('#name-register').value.trim();
    const email = document.querySelector('#email-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();

    //if values are in each field, post values to json data
    if (name && email && password) {
        const response = await fetch ('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        //if response is successful - take user to homepage
        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert(response.statusText);
        }
    }
};


//Add event listeners for submit buttons
document.querySelector('.login-container').addEventListener('submit', loginForm);
document.querySelector('.register-form').addEventListener('submit', registerUserForm);