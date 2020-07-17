const express = require("express");
const resourcesModel = require("./resourcesModel");

const router = express.Router();

router.get("/", (req, res) => {
    resourcesModel.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(error => {
            res.status(500).json({
                error: "Server error. Could not get all resources.",
                description: error
            });
        });
});

module.exports = router;