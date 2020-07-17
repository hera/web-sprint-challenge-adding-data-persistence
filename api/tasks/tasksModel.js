const db = require("../../data/dbConfig");

module.exports = {
    getTasks,
    getTaskById,
    addTask
};

function getTasks () {
    return db("Task")
        .select(
            "Task.Id",
            "Task.Description",
            "Task.Notes",
            "Task.IsCompleted",
            "Project.Name AS ProjectName",
            "Project.Description AS ProjectDescription"
        )
        .join("Project", "Task.ProjectId", "=", "Project.Id");
}

function getTaskById (Id) {
    return db("Task").where({Id});
}

function addTask (data) {
    return db("Task")
        .insert(data, "Id")
        .then(ids => {
            console.log(ids);
            return getTaskById(ids[0]);
        });
}