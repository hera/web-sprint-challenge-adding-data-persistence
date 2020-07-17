
exports.seed = function(knex) {
    return knex("ProjectResource").truncate()
        .then(function () {
            return knex("ProjectResource").insert([
                {
                    ProjectId: 1,
                    ResourceId: 2
                },
                {
                    ProjectId: 1,
                    ResourceId: 4
                },
                {
                    ProjectId: 1,
                    ResourceId: 5
                },
                {
                    ProjectId: 1,
                    ResourceId: 6
                },
                {
                    ProjectId: 1,
                    ResourceId: 7
                },
                // ----------------------------
                {
                    ProjectId: 2,
                    ResourceId: 1
                },
                {
                    ProjectId: 2,
                    ResourceId: 8
                },
                {
                    ProjectId: 2,
                    ResourceId: 9
                },
                
            ]);
        });
};
