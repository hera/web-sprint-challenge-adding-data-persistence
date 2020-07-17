const express = require("express");
const inspector = require("schema-inspector");

const resourcesModel = require("./resourcesModel");
const resourceSchema = require("./resourceSchema");


const router = express.Router();


// Get all resources

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


// Add a new resource

router.post("/", (req, res) => {
    const validationResult = inspector.validate(resourceSchema, req.body);

    if (!validationResult.valid) {
        res.status(400).json({
            error: "Bad request",
            description: validationResult.error
        });
    }

    resourcesModel.addResource(req.body)
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(error => {
            res.status(500).json({
                error: "Server error. Could not add a resource.",
                description: error
            });
        });
});


module.exports = router;