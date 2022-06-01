const Menu = require('../../models/menu')

function homeController() {
    return {
        async index(req, res) {
            const food = await Menu.find()
                // console.log(food)
            return res.render('home', { food: food })
        }

        // const food = await Menu.find()
        // return res.render('home', { food: chicken })


    }
}


module.exports = homeController