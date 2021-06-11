const User = require('../models/User');
const bcrypt = require('bcryptjs');

const userController = {
    register: async function (req, res) {

        const selectedUser = await User.findOne({ email: req.body.email })

        if (selectedUser) {
            return res.status(400).send("Email já existe")
        }

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
        });

        try {
            const savedUser = await user.save();
            res.send(savedUser);
        } catch (error) {
            res.status(400).send(error);
        }

    },

    login: function (req, res) {
        let password = req.body.password;
        let email = req.body.email;

        let checkUser = User.findOne({ email: email })

        if (checkUser) {
            res.send("Usuário existente")
            console.log(checkUser)
        } else {
            res.status(404).send("usuario nao encontrado")
        }


    },

}

module.exports = userController;