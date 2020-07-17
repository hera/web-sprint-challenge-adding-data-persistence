
const resourceSchema = {
    type: "object",
    strict: true,
    properties: {
        Name: {
            type: "string",
            maxLength: 128
        },
        Description: {
            type: "string",
            optional: true
        }
    }
}

module.exports = resourceSchema;