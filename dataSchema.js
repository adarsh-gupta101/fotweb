const mongoose = require('mongoose');


const dataSchema = mongoose.Schema({
    Q1: { type: String },
    Q2: { type: String },
    Q3: { type: String },
  
    Q4: { type: String },
    Q5: { type: String },
    Q6: { type: String },
    name: { type: String },
    mobile:{type:String},
  });
  module.exports = mongoose.model("dataschema", dataSchema);
  