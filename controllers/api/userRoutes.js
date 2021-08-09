//Dependencies
const router = require('express').Router();
const { User } = require('../../models');

//POST login

router.post('/login', async (req, res) => {
    try {
        //from user data json - attempt to find email that has been input
        const userData = await User.findOne({ where: { email: req.body.email } });

        //if the input user data is not found, return message
        if (!userData) {
            res.status(400).json({ message: "Incorrect email or password, please try again" });
            return;
        }

        //from user data json - check password associated with input email
        const validPassword = await userData.checkPassword(req.body.password);

        //if the input password is not valid, return message
        if(!validPassword) {
            res.status(400).json({ message: "Incorrect email or password, please try again" });
            return;
        }

        //in session storage, reflect that user is logged in and display logged in message
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: "You are now logged in!" });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});


//POST logout
// checks if session is logged in, then destroys session

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() =>{
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;

