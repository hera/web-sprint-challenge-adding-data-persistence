const db = require("../../data/dbConfig");

module.exports = {
    getTasks
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