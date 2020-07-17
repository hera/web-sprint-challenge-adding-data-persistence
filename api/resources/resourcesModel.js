const db = require("../../data/dbConfig");

module.exports = {
    getResources,
    getResourceById,
    addResource
};

function getResources () {
    return db("Resource");
}

function getResourceById (Id) {
    return db("Resource").where({Id});
}

function addResource (data) {
    return db("Resource")
        .insert(data, "Id")
        .then(ids => {
            console.log(ids);
            return getResourceById(ids[0]);
        });
}