ItemEvents.rightClicked('minecraft:glass_bottle', event => event.cancel())
/* ItemEvents.firstRightClicked('survive:filled_canteen', event => event.cancel())
ItemEvents.firstRightClicked('survive:canteen', event => event.cancel()) */

ItemEvents.firstRightClicked('minecraft:glass_bottle', e => {
    const {block} = e.target;
    if(!block || block.id != 'minecraft:water' && block.id != 'minecraft:still_water') return;
    e.item.count--;
    e.server.scheduleInTicks(0, () => e.player.give('kubejs:salty_water_bottle'));
    e.cancel();
})

ItemEvents.firstRightClicked('minecraft:glass_bottle', e => {
    const {block} = e.target;
    if(!block || block.id != 'survive:purified_water' && block.id != 'minecraft:still_water') return;
    e.item.count--;
    e.server.scheduleInTicks(0, () => e.player.give('kubejs:salty_water_bottle'));
    e.cancel();
})

ItemEvents.firstRightClicked('survive:canteen', e => {
    const {block} = e.target;
    if(!block || block.id != 'minecraft:water' && block.id != 'minecraft:still_water') return;
    e.cancel();
})

ItemEvents.firstRightClicked('survive:canteen', e => {
    const {block} = e.target;
    if(!block || block.id != 'survive:purified_water' && block.id != 'minecraft:still_water') return;
    e.cancel();
})

ItemEvents.firstRightClicked('survive:filled_canteen', e => {
    const {block} = e.target;
    if(!block || block.id != 'minecraft:water' && block.id != 'minecraft:still_water') return;
    e.cancel();
})

ItemEvents.firstRightClicked('survive:filled_canteen', e => {
    const {block} = e.target;
    if(!block || block.id != 'survive:purified_water' && block.id != 'minecraft:still_water') return;
    e.cancel();
})



/* ItemEvents.firstRightClicked('cold_sweat:waterskin', event => event.cancel())

ItemEvents.firstfirstRightClicked('cold_sweat:waterskin', e => {
    const {block} = e.target;
    if(!block || block.id != 'minecraft:water' && block.id != 'minecraft:still_water') return;
    e.cancel();
})

ItemEvents.firstRightClicked('thirst:terracotta_bowl', event => event.cancel())

ItemEvents.firstfirstRightClicked('thirst:terracotta_bowl', e => {
    const {block} = e.target;
    if(!block || block.id != 'minecraft:water' && block.id != 'minecraft:still_water') return;
    e.cancel();
}) */