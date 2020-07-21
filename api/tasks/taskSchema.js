
const taskSchema = {
    type: "object",
    strict: true,
    properties: {
        Description: {
            type: "string"
        },
        Notes: {
            type: "string",
            optional: true
        },
        IsCompleted: {
            type: "boolean",
            optional: true
        },
        ProjectId: {
            type: "number"
        }
    }
}

module.exports = taskSchema;