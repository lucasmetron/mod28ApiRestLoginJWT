const userController = {
    register: function (req, res) {

        console.log("resgitro")
        res.send("Registro Novo")

    },

    login: function (req, res) {
        console.log("login")
        res.send("Login Novo")
    },

}


module.exports = userController;