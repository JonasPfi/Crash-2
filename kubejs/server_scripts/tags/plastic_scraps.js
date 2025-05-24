ServerEvents.tags('item', event => {
    event.add('crash_landing:plastic_scraps_1',
        'mekanism:hdpe_pellet', // 0.25, previously .33333 plastic
    )
    event.add('crash_landing:plastic_scraps_2',
        'kubejs:plastic_scrap', // 0.5 plastic
        'pneumaticcraft:failed_pcb', // 0.5 plastic
        'mekanism:hdpe_rod', // 0.5, previously 1, previously 1.33333 plastic
        '#forge:slabs/plastic', // 0.5 plastic
        '#forge:slabs/plastic/glow', // 0.5 plastic
        '#forge:slabs/plastic/transparent' // 0.5 plastic
    )
    event.add('crash_landing:plastic_scraps_3',
        '#forge:stairs/plastic', // 0.75 plastic if you follow logical rules, the recipe costs 1.5 plastic but I will ignore that
        '#forge:stairs/plastic/glow', // 0.75 plastic if you follow logical rules, the recipe costs 1.5 plastic but I will ignore that
        '#forge:stairs/plastic/transparent' // 0.75 plastic if you follow logical rules, the recipe costs 1.5 plastic but I will ignore that
    )
    event.add('crash_landing:plastic_scraps_4',
        '#mekanismadditions:plastic_blocks', // 1 plastic
        '#pneumaticcraft:plastic_bricks', // 1 plastic
        'industrialforegoing:conveyor', // 1 plastic
        'mekanism:hdpe_sheet', // 1 plastic
        'mekanism:hdpe_stick' // 1, previously 2, previously 2.66666 plastic
    )
    event.add('crash_landing:plastic_scraps_8',
        '#forge:fences/plastic', // 2, previously 8, previously 9.33333 plastic
        '#forge:fences/plastic/glow', // 2, previously 8, previously 9.33333 plastic
        '#forge:fences/plastic/transparent' // 2, previously 8, previously 9.33333 plastic
    )
    event.add('crash_landing:plastic_scraps_24',
        '#forge:fence_gates/plastic', // 6, previously 10, previously 12.66666 plastic
        '#forge:fence_gates/plastic/glow', // 6, previously 10, previously 12.66666 plastic
        '#forge:fence_gates/plastic/transparent' // 6, previously 10, previously 12.66666 plastic
    )
})

ServerEvents.recipes(event => {
    const registerMelting = (input, fluid, amount) => {
      // Defines the ingredient based on if the input is an item or tag
      const ingredient = input.startsWith('#')
        ? { tag: input.slice(1) }
        : { item: input };
  
      // Creates a recipe name from the input name
      const clean = input.startsWith('#') ? input.slice(1) : input;
      const suffix = clean.split(':')[1];
  
      // Tinkers’ Construct melting
      event.custom({
        type: 'tconstruct:melting',
        ingredient: ingredient,
        result: { fluid: fluid, amount: amount },
        temperature: 600,
        time: 25
      }).id(`crash_landing:melting/${suffix}`);
  
      // Thermal Magma Crucible
      event.custom({
        type: 'thermal:crucible',
        ingredient: ingredient,
        result: [{ fluid: fluid, amount: amount }],
        energy: 400
      }).id(`crash_landing:crucible/${suffix}`);
    };
  
    registerMelting('#crash_landing:plastic_scraps_1', 'pneumaticcraft:plastic', 250);
    registerMelting('#crash_landing:plastic_scraps_2', 'pneumaticcraft:plastic', 500);
    registerMelting('#crash_landing:plastic_scraps_3', 'pneumaticcraft:plastic', 750);
    registerMelting('#crash_landing:plastic_scraps_4', 'pneumaticcraft:plastic', 1000);
    registerMelting('#crash_landing:plastic_scraps_8', 'pneumaticcraft:plastic', 2000);
    registerMelting('#crash_landing:plastic_scraps_24', 'pneumaticcraft:plastic', 6000);
  });
  