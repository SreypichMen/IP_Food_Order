const mongoose = require('mongoose')

module.exports = async() => {
    try {
        await mongoose.connect('mongodb+srv://Food_Order:pich130820@cluster0.oz7wcbw.mongodb.net/food_order?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDB connected><");
    } catch (error) {
        console.log("MongoDB err: ", error);
    }
}