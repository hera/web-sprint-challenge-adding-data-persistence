const db = require("../../data/dbConfig");

module.exports = {
    getAllProjects
};

function getAllProjects () {
    return db("Project");
}