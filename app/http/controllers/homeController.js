const Menu = require("../../models/menu")

function homeController() {
    return {
        home(req, res) {
            console.log('home');

            Menu.find({}, function(err, docs) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("First function call : ", docs);
                    res.render("home", { data: docs })
                }
            });
        },
    }
}

module.exports = homeController