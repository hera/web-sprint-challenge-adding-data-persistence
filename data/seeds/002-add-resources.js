
exports.seed = function(knex) {
    return knex("Resource").truncate()
        .then(function () {
            return knex("Resource").insert([
                {
                    Name: "Broom",
                    Description: "Nice and sturdy"
                },
                {
                    Name: "Screwdriver",
                },
                {
                    Name: "Brush",
                    Description: "Perfect for painting"
                },
                {
                    Name: "Tape",
                },
                {
                    Name: "Paint",
                    Description: "Beige"
                },
                {
                    Name: "Wood",
                },
                {
                    Name: "Drill",
                    Description: "So powerful!"
                },
                {
                    Name: "Dustpan",
                },
                {
                    Name: "Mop"
                }
            ]);
        });
};
