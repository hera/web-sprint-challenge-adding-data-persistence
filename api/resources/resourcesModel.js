const db = require("../../data/dbConfig");

module.exports = {
    getResources,
    getResourceById,
    addResource,
    getProjectsByResourceId
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

function getProjectsByResourceId (ResourceId) {
    return db("ProjectResource")
        .select("Project.Id", "Project.Name", "Project.Description", "Project.IsCompleted")
        .join("Resource", "ProjectResource.ResourceId", "=", "Resource.Id")
        .join("Project", "ProjectResource.ProjectId", "=", "Project.Id")
        .where({ResourceId});
}