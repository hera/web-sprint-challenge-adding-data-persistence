const express = require("express");
const inspector = require("schema-inspector");

const tasksModel = require("./tasksModel");
const taskSchema = require("./taskSchema");


const router = express.Router();


// Get all tasks

router.get("/", (req, res) => {
    tasksModel.getTasks()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(error => {
            res.status(500).json({
                error: "Server error. Could not get all tasks.",
                description: error
            });
        });
});


// Add a new task

router.post("/", (req, res) => {
    const validationResult = inspector.validate(taskSchema, req.body);

    if (!validationResult.valid) {
        res.status(400).json({
            error: "Bad request",
            description: validationResult.error
        });
    }

    tasksModel.addTask(req.body)
        .then(task => {
            res.status(200).json(task);
        })
        .catch(error => {
            res.status(500).json({
                error: "Server error. Could not add a task.",
                description: error
            });
        });
});

module.exports = router;