ServerEvents.recipes(event => {

    const add_sieve = function (input, output, chance, mesh_tier, multip) {
        event.custom({
            "type": "exdeorum:compressed_sieve",
            "ingredient": {
                "item": input
            },
            "mesh": mesh_tier,
            "result": output,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 3.0,
                "p": chance * multip
            }
        });
    };

    // ========= dust =========

    const crushed_end_stone_results = {
        'minecraft:chorus_fruit': 0.04,
        'minecraft:ender_pearl': 0.03,
        'tconstruct:ender_slime_ball': 0.02,
        'tconstruct:ender_slime_sapling': 0.01,
        'tconstruct:ender_slime_grass_seeds': 0.01,
        'minecraft:ender_eye': 0.01,
        'minecraft:chorus_flower': 0.01
    };

    const mesh = {
        'exdeorum:string_mesh': 2,
        'exdeorum:flint_mesh': 2.2,
        'exdeorum:iron_mesh': 2.4,
        'exdeorum:golden_mesh': 2.6,
        'exdeorum:diamond_mesh': 2.8,
        'exdeorum:netherite_mesh': 3.0
    };

    for (const [output, chance] of Object.entries(crushed_end_stone_results)) {
        for (const [mesh_tier, multip] of Object.entries(mesh)) {
            add_sieve('exdeorum:compressed_crushed_end_stone', output, chance, mesh_tier, multip);
        }
    }

});
