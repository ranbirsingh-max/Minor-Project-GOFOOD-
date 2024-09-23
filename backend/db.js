

const mongoose = require('mongoose');
const mongoUrl = 'mongodb+srv://charakranbirsingh:Miniproject@cluster2.hkaqt5e.mongodb.net/';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoUrl, { useNewUrlParser: true });
        console.log("Connected to MongoDB");

        const foodItemsCollection = mongoose.connection.db.collection("food_items");
        const foodCategoryCollection = mongoose.connection.db.collection("food_category");

        const foodItems = await foodItemsCollection.find({}).toArray();
        const foodCategory = await foodCategoryCollection.find({}).toArray();

        global.food_items = foodItems;
        global.food_category = foodCategory;

        
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = mongoDB;
