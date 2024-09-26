const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    add,
}

function find(){
    // console.log("Finding cars");
    // console.log(db.client);
    return db('cars');
};

function findById(id){
    return db('cars')
        .where({id})
        .first()
};

function add(car){
    console.log("car ",car);
    return db('cars')
        .insert(car)
};