
const projectSchema = {
    type: "object",
    strict: true,
    properties: {
        Name: {
            type: "string"
        },
        Description: {
            type: "string",
            optional: true
        },
        IsCompleted: {
            type: "boolean",
            optional: true
        }
    }
}

module.exports = projectSchema;