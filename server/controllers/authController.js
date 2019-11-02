const bcrypt = require('bcryptjs')

module.exports = {
    login: async (req, res) => {
        const { email, password } = req.body
        const db = req.app.get('db')
        let foundUser = await db.check_email([email])
        console.log(foundUser)
        foundUser = foundUser[0]
        console.log(foundUser)
        if(!foundUser){
            return res.status(409).send('Invalid credentials')
        }
        const authenticated = bcrypt.compareSync(password, foundUser.password)
        if(authenticated){
            delete foundUser.password;
            req.session.user = foundUser;
            res.status(202).send(req.session.user);
        } else {
            console.log('hit')
            res.status(401).send('invalid credentials')
        }
    },
    register: async (req, res) => {
        const { email, password, isAdmin } = req.body;
        const db = req.app.get('db');

        let foundUser = await db.check_email(email);
        foundUser = foundUser[0]
        if(foundUser){
            res.status(409).send('Email Exists')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        let newUser = await db.register(email, hash, isAdmin);
        newUser = newUser[0];
        // delete newUser.password
        req.session.user = {...newUser}
        res.status(200).send(req.session.user);
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200);
    }    
}