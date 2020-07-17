const express = require("express");

const tasksModel = require("./tasksModel");


const router = express.Router();


// Get all resources

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

module.exports = router;