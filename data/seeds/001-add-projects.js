
exports.seed = function(knex) {
    return knex("Project").truncate()
        .then(function () {
            return knex("Project").insert([
                {
                    Name: "House Renovation",
                },
                {
                    Name: "Cleaning",
                    Description: "Clean the whole area",
                    IsCompleted: true
                }
            ]);
        });
};
