
const mongodb = require("../../config/mongodb");

module.exports.add = (customer, cb)=>{
    const collection = mongodb.getCollection("customer");
    collection.insertOne(customer)
        .then((res)=>{
            cb();
        });
}

module.exports.getAll = (cb)=>{
    const collection = mongodb.getCollection("customer");
    collection.find().toArray()
        .then((res)=>{
            cb(res);
        })
}