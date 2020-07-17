const db = require("../../data/dbConfig");

module.exports = {
    getProjects,
    getProjectById,
    addProject,
    getTasksByProjectId
};

function getProjects () {
    return db("Project");
}

function getProjectById (Id) {
    return db("Project").where({Id});
}

function addProject (data) {
    return db("Project")
        .insert(data, "Id")
        .then(ids => {
            console.log(ids);
            return getProjectById(ids[0]);
        });
}

function getTasksByProjectId (ProjectId) {
    return db("Task")
        .where({ProjectId});
}