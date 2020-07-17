
exports.seed = function(knex) {
    return knex("Task").truncate()
        .then(function () {
            return knex("Task").insert([
                {
                    Description: "Paint the floor in the kitchen",
                    Notes: "Please don't let the cat in!",
                    IsCompleted: false,
                    ProjectId: 1
                },
                {
                    Description: "Tile the wall in bathroom",
                    ProjectId: 1
                },
                {
                    Description: "Sweep the floor in the blue room",
                    ProjectId: 2,
                    IsCompleted: true,
                }
            ]);
        });
};
