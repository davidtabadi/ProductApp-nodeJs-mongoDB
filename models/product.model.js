// require mongoose and then define the schema for our model.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this is the Schema (Collection) in our model
let ProductSchema = new Schema(
        {
                name: { type: String, required: true, max: 100 },
                price: { type: Number, requred: true, min: 0 },
                description: { type: String, required: true },
        }
);

// Export the model to use it in other files of the project
// const model = mongoose.model('Product', ProductSchema);
// module.exports = model;
module.exports = mongoose.model('Product', ProductSchema);