//Create function to handle the login form created in the login.handlebars
const loginForm = async (event) => {
    event.preventDefault();

    //Grab user input from email and password fields
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    //if value is in each, post values to json data
    if (email && password) {
        const response = await fetch ('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        //if response is successful - go back to home page
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in');
        }
    }
};


const registerUserForm = async (event) => {
    event.preventDefault();

    const name = 
}

document.querySelector('.login-form').addEventListener('submit', loginForm);