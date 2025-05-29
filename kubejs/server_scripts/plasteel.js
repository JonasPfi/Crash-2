ServerEvents.recipes(event => {
  event.custom({
    type: 'pneumaticcraft:thermo_plant',
    exothermic: false,
    fluid_input: {
      type: 'pneumaticcraft:fluid',
      amount: 1000,
      tag: 'pneumaticcraft:plastic'
    },
    item_input: {
      tag: 'forge:dusts/steel'
    },
    item_output: {
      count: 4,
      item: 'kubejs:light_plasteel_block'
    },
    pressure: 1.5
  }).id('crash_landing:light_plasteel_block');

  event.replaceInput(
    {
      input: 'minecraft:stone', output:
        [
          "nfm:beige_modern_chair",
          "nfm:black_modern_chair",
          "nfm:blue_modern_chair",
          "nfm:brown_modern_chair",
          "nfm:cyan_modern_chair",
          "nfm:gray_modern_chair",
          "nfm:green_modern_chair",
          "nfm:light_blue_modern_chair",
          "nfm:light_gray_modern_chair",
          "nfm:lime_modern_chair",
          "nfm:magenta_modern_chair",
          "nfm:orange_modern_chair",
          "nfm:pink_modern_chair",
          "nfm:purple_modern_chair",
          "nfm:red_modern_chair",
          "nfm:white_modern_chair",
          "nfm:yellow_modern_chair",

          "nfm:beige_modern_coffee_table",
          "nfm:black_modern_coffee_table",
          "nfm:blue_modern_coffee_table",
          "nfm:brown_modern_coffee_table",
          "nfm:cyan_modern_coffee_table",
          "nfm:gray_modern_coffee_table",
          "nfm:green_modern_coffee_table",
          "nfm:light_blue_modern_coffee_table",
          "nfm:light_gray_modern_coffee_table",
          "nfm:lime_modern_coffee_table",
          "nfm:magenta_modern_coffee_table",
          "nfm:orange_modern_coffee_table",
          "nfm:pink_modern_coffee_table",
          "nfm:purple_modern_coffee_table",
          "nfm:red_modern_coffee_table",
          "nfm:white_modern_coffee_table",
          "nfm:yellow_modern_coffee_table",

          "nfm:beige_modern_kitchen_counter",
          "nfm:black_modern_kitchen_counter",
          "nfm:blue_modern_kitchen_counter",
          "nfm:brown_modern_kitchen_counter",
          "nfm:cyan_modern_kitchen_counter",
          "nfm:gray_modern_kitchen_counter",
          "nfm:green_modern_kitchen_counter",
          "nfm:light_blue_modern_kitchen_counter",
          "nfm:light_gray_modern_kitchen_counter",
          "nfm:lime_modern_kitchen_counter",
          "nfm:magenta_modern_kitchen_counter",
          "nfm:orange_modern_kitchen_counter",
          "nfm:pink_modern_kitchen_counter",
          "nfm:purple_modern_kitchen_counter",
          "nfm:red_modern_kitchen_counter",
          "nfm:white_modern_kitchen_counter",
          "nfm:yellow_modern_kitchen_counter",

          "nfm:beige_modern_kitchen_sink",
          "nfm:black_modern_kitchen_sink",
          "nfm:blue_modern_kitchen_sink",
          "nfm:brown_modern_kitchen_sink",
          "nfm:cyan_modern_kitchen_sink",
          "nfm:gray_modern_kitchen_sink",
          "nfm:green_modern_kitchen_sink",
          "nfm:light_blue_modern_kitchen_sink",
          "nfm:light_gray_modern_kitchen_sink",
          "nfm:lime_modern_kitchen_sink",
          "nfm:magenta_modern_kitchen_sink",
          "nfm:orange_modern_kitchen_sink",
          "nfm:pink_modern_kitchen_sink",
          "nfm:purple_modern_kitchen_sink",
          "nfm:red_modern_kitchen_sink",
          "nfm:white_modern_kitchen_sink",
          "nfm:yellow_modern_kitchen_sink",

          "nfm:beige_modern_table",
          "nfm:black_modern_table",
          "nfm:blue_modern_table",
          "nfm:brown_modern_table",
          "nfm:cyan_modern_table",
          "nfm:gray_modern_table",
          "nfm:green_modern_table",
          "nfm:light_blue_modern_table",
          "nfm:light_gray_modern_table",
          "nfm:lime_modern_table",
          "nfm:magenta_modern_table",
          "nfm:orange_modern_table",
          "nfm:pink_modern_table",
          "nfm:purple_modern_table",
          "nfm:red_modern_table",
          "nfm:white_modern_table",
          "nfm:yellow_modern_table",

          "nfm:oven_dark",
          "nfm:oven_light",
          "nfm:oven_range_hood_dark",
          "nfm:oven_range_hood_light",
          "nfm:shower_head_dark",
          "nfm:shower_head_light",
          "nfm:sink_dark",
          "nfm:sink_light",
          "nfm:_television_stand"
        ]
    },
    'minecraft:stone',
    'kubejs:light_plasteel_block'
  )
});