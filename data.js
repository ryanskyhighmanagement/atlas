/* Atlas dataset
   countries -> places. Edit freely: the app reads everything from here.

   Country: { id, name, region, summary, soundProfile, hero, places }
     id            ISO 3166-1 numeric code as a string (matches the map boundaries)
     soundProfile  space | jungle | ocean | rainforest | city | metropolis | desert | mountains | temple
     hero          image for the country header (same format as place.image)
     bounds        optional, [[south, west], [north, east]] to frame the country by hand

   Place: { name, lat, lng, category, tagline, description, bestTime, image, sound?, zoom? }
     category      City | Nature | Historical | Beach | Mountain | Culture
     lead          optional: hand-picked opening photos, by Wikimedia Commons file name
     add           optional: extra photos found in wider searches and approved by eye (fingerprints, like skip)
     skip          optional: photos checked by eye and removed from this place's gallery (short fingerprints of the
                   file names; a plain piece of a file name works too)
     image         "wiki:Article title" uses that Wikipedia article's lead photo,
                   or any full https:// image URL (for example an images.unsplash.com link)
     wiki          optional, the Wikipedia article about the place itself, used to gather its photo gallery
                   (only needed when image points at a single landmark rather than the place)
     more          optional, extra Wikipedia articles (sights within the place) whose photos join its gallery
     photos        optional, a list of full https:// image URLs shown first in the gallery
     aka           optional, extra names the search should match (also allowed on countries)
     sound         optional, overrides the country's soundProfile for this place
     zoom          optional, map zoom when flying to this place
*/
window.ATLAS_DATA = { countries: [
  /* ---------- North America ---------- */
  {
    id: "484", name: "Mexico", region: "North America", soundProfile: "city",
    summary: "Maya pyramids in the jungle, Caribbean reef water, and one of the great food cultures on Earth.",
    hero: "wiki:Teotihuacan",
    places: [
      { name: "Cancún", pics: ["bf91", "19k2hd", "1de5pa", "1de5ph", "rvxok", "z9iuk"], add: ["161p0ab", "pxh1wl", "18aalbd", "1gton58", "i9ekj1", "19jarpk"], lat: 21.1619, lng: -86.8515, category: "Beach", sound: "ocean",
        tagline: "Caribbean turquoise on the Yucatán coast",
        description: "A long ribbon of white sand separates the Caribbean from Nichupté Lagoon, and the water on the sea side is a blue so bright it looks retouched. Days are for snorkelling the Mesoamerican Reef, the second-largest barrier reef on Earth, or taking the 20-minute ferry to slow, sandy Isla Mujeres. After dark the Hotel Zone turns loud, warm and unapologetically festive.",
        bestTime: "Dec–Apr (dry season)", image: "wiki:Cancún", more: ["Isla Mujeres"] },
      { name: "Mexico City", pics: ["os3x6", "wh0i1", "x3sf", "ougar", "1claq3", "2foz54", "18smbz", "1aviwd", "1e7b50", "wt10o", "1wpy59", "yh7a0", "2hygvp"], add: ["wcpnse", "1j8hsjw", "10kiyl5", "9z5w6y", "1h9ynge"], lead: ["Mexico City Reforma skyline.jpg", "Catedral ciudad de México. Junio 2017.jpg", "Ciudad.de.Mexico.City.Distrito.Federal.DF.Paseo.Reforma.Skyline.jpg", "Ciudad.de.Mexico.City.- Paseo.Reforma.Skyline CDMX 2018.jpg"], skip: ["1fc3uq5", "b7taek", "i2bzww", "1q1cf86", "e33gz9", "1hrqdir", "187kbhz", "1qqi2tl", "1f8x4df"], lat: 19.4326, lng: -99.1332, category: "City", sound: "city",
        tagline: "A high-altitude capital built on an Aztec lake",
        description: "At 2,240 metres the air is thin and the light is sharp, and the ruins of the Aztec Templo Mayor sit a few steps from the cathedral on the vast Zócalo. Spend a morning in the National Museum of Anthropology, an afternoon drifting through the canals of Xochimilco on a painted trajinera, and every evening eating tacos al pastor shaved straight from the spit.",
        bestTime: "Mar–May (warm, before the rains)", image: "wiki:Palacio de Bellas Artes", wiki: "Mexico City", more: ["Historic center of Mexico City", "Xochimilco"] },
      { name: "Chichén Itzá", pics: ["ck48b", "38d9j4", "gkmgo", "4yezz", "13vkkk", "1hoevw", "ufjyr", "gb10h", "10v82m"], add: ["1ehb3h9", "1pum15r", "10apx2d", "7rzu89", "x6lvja", "q5s438"], skip: ["fy9wvv"], lat: 20.6843, lng: -88.5678, category: "Historical", sound: "temple",
        tagline: "The great Maya city of the Yucatán",
        description: "The stepped pyramid of El Castillo rises 30 metres above a clearing of pale stone and heat. On the spring and autumn equinoxes the afternoon sun throws a rippling serpent of shadow down its northern staircase, and a single handclap at its base comes back as a chirp like a quetzal's call. Nearby lie the largest ball court in Mesoamerica and the still, green Sacred Cenote.",
        bestTime: "Nov–Mar (cooler, drier)", image: "wiki:Chichen Itza" },
      { name: "Tulum", pics: ["rapa7", "13vjzf", "yh718", "26ko83", "csw2m", "h56c1"], add: ["1j3uk5p", "1on9tuy", "43ap2x", "1x6d6gd", "if3l3t", "1yn4drs"], lat: 20.2148, lng: -87.4290, category: "Historical", sound: "ocean",
        tagline: "A walled Maya port on a cliff above the sea",
        description: "Tulum is the only major Maya city built right on the coast, its grey stone Castillo perched on a 12-metre cliff with iguanas sunning on the walls and turquoise surf below. Come at opening time, before the heat and the tour buses, then cool off in the clear freshwater of a nearby cenote such as Gran Cenote or Dos Ojos.",
        bestTime: "Nov–Apr (dry season)", image: "wiki:Tulum" }
    ]
  },
  {
    id: "840", name: "United States", aka: ["USA", "America", "United States of America"], region: "North America", soundProfile: "city",
    summary: "Canyon country, volcanic islands and the most restless city on the planet.",
    hero: "wiki:Monument Valley",
    places: [
      { name: "New York City", add: ["ww4ekk", "1vy8cvh", "rpm1n"], skip: ["1qj8axp"], lat: 40.7128, lng: -74.0060, category: "City", sound: "metropolis",
        tagline: "The city that walks fast and never switches off",
        description: "Steam rises from the street grates, taxis lean on their horns, and eight million people move at a pace that pulls you along with it. Walk the Brooklyn Bridge at sunset for the skyline, lose an afternoon in the Metropolitan Museum, then find the quiet in the 341 hectares of Central Park. The subway runs all night, and so does the city.",
        bestTime: "Apr–Jun, Sep–Nov", image: "wiki:Brooklyn Bridge", wiki: "New York City" },
      { name: "Miami", add: ["a6n10n", "1jv56w9", "1whzx84"], lat: 25.7617, lng: -80.1918, category: "City", sound: "ocean",
        tagline: "Art Deco, Latin rhythm and warm Atlantic water",
        description: "Miami faces the Atlantic across Biscayne Bay, and Miami Beach sits on a barrier island just offshore. Along Ocean Drive, hundreds of pastel Art Deco hotels from the 1930s glow in neon after dark. In Little Havana, old men play dominoes in the park and the coffee comes short, sweet and strong, while the Wynwood district has turned its warehouse walls into one of the largest outdoor galleries of street art anywhere.",
        bestTime: "Dec–Apr (dry season)", image: "wiki:Miami", more: ["Miami Beach, Florida", "Miami Beach Architectural District"] },
      { name: "Grand Canyon", pics: ["329p53", "2tl6gg", "262paz", "391os5"], add: ["18djr85", "nxyqw4", "1ufgc4u", "qdllce", "refuih", "xgej5z"], lat: 36.0544, lng: -112.1401, category: "Nature", sound: "desert", zoom: 10,
        tagline: "A mile-deep cut through two billion years of rock",
        description: "The Colorado River has carved a gorge 446 kilometres long and more than 1.6 kilometres deep, and from the South Rim the silence is as big as the view. Be at Mather Point for sunrise, when the layered walls go from violet to burning orange, then drop below the rim on the Bright Angel Trail to feel the scale in your legs.",
        bestTime: "Mar–May, Sep–Nov", image: "wiki:Grand Canyon" },
      { name: "Hawaii", add: ["v5jxy5", "3y7gxl", "1t06bfb", "75oyka", "q9fxos", "143azv9"], skip: ["dwno2z", "jw87od", "1xt3kkx"], aka: ["Honolulu", "Oahu", "Maui", "Kauai"], lat: 21.2793, lng: -157.8292, category: "Beach", sound: "ocean", zoom: 7,
        tagline: "Volcanic islands in the middle of the Pacific",
        description: "Warm trade winds, the smell of plumeria, and surf rolling onto Waikīkī, where modern surfing was popularised. Each island has its own mood: Oʻahu for the crater of Diamond Head and the North Shore waves, the Big Island for the glowing lava fields of Kīlauea, and Kauaʻi for the fluted green cliffs of the Nā Pali Coast.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Diamond Head, Hawaii", wiki: "Hawaiian Islands" },
      { name: "Yellowstone", add: ["cxx685", "1vz6r3t", "1k04rky", "l2u3wz", "by6pwu"], lat: 44.4605, lng: -110.8281, category: "Nature", sound: "mountains", zoom: 8,
        tagline: "The world's first national park, still steaming",
        description: "Established in 1872, Yellowstone sits on top of a supervolcano, and the ground lets you know: Old Faithful erupts roughly every 90 minutes and Grand Prismatic Spring glows in rings of blue, green and rust. Drive the Lamar Valley at dawn to watch bison herds cross the road and, with luck, a wolf pack on the far ridge.",
        bestTime: "May–Sep", image: "wiki:Yellowstone National Park" },
      { name: "San Francisco", add: ["1oklmzd"], skip: ["10ixwtm", "1i5ug07"], lat: 37.7749, lng: -122.4194, category: "City", sound: "city",
        tagline: "Hills, fog and a red bridge",
        description: "Fog pours through the Golden Gate in the afternoon and the bridge's towers, painted International Orange since 1937, float above it. Ride a clanging cable car over Nob Hill, take the ferry to the cold cellblocks of Alcatraz, and warm up afterwards with sourdough and clam chowder on the waterfront.",
        bestTime: "Sep–Oct (warmest, clearest)", image: "wiki:Golden Gate Bridge", wiki: "San Francisco" }
    ]
  },
  {
    id: "124", name: "Canada", region: "North America", soundProfile: "mountains",
    summary: "Glacier lakes, old stone streets and a wilderness that starts at the edge of every city.",
    hero: "wiki:Mount Robson",
    places: [
      { name: "Banff", pics: ["2q95l9", "1auvc5", "194rke", "1be60r", "1bgm76"], add: ["18h12x5", "z035iq", "rctmof", "1sg1z25", "suq75r", "p81pnv", "18g3j5q"], lat: 51.1784, lng: -115.5708, category: "Mountain", sound: "mountains",
        tagline: "Turquoise lakes in the Canadian Rockies",
        description: "Canada's first national park, created in 1885, is all sharp limestone peaks, cold pine air and lakes coloured an unreal turquoise by glacial rock flour. Paddle a canoe across Lake Louise, reach Moraine Lake for sunrise, then drive the Icefields Parkway north past hanging glaciers toward Jasper.",
        bestTime: "Jun–Sep (hiking), Dec–Mar (skiing)", image: "wiki:Banff National Park" },
      { name: "Vancouver", add: ["6w9thw", "3qjjj9", "tah0nz", "73xhtf"], skip: ["tydm4f", "o85jy4"], lat: 49.2827, lng: -123.1207, category: "City", sound: "city",
        tagline: "A glass city between the ocean and the mountains",
        description: "Snow-capped peaks sit right behind the downtown towers, and the Pacific wraps around three sides. Cycle the seawall around the cedars of Stanley Park, eat your way through the Granville Island market, and be on a ski slope within half an hour of leaving the beach.",
        bestTime: "Jun–Sep", image: "wiki:Vancouver" },
      { name: "Montreal", add: ["1tfbgu7", "14wlcrp", "190rewj", "1wnvxzx"], skip: ["13oqxwt"], lat: 45.5017, lng: -73.5673, category: "City", sound: "city",
        tagline: "The largest French-speaking city in the Americas",
        description: "Cobblestones and grey stone in Old Montreal, the deep blue and gold interior of Notre-Dame Basilica, and the smell of wood-fired bagels drifting out of St-Viateur at any hour. Climb Mount Royal for the view over downtown to the St. Lawrence, then stay out late: in summer the city turns into one long festival, led by the Jazz Fest.",
        bestTime: "Jun–Sep (festival season)", image: "wiki:Notre-Dame Basilica (Montreal)", wiki: "Montreal" },
      { name: "Niagara Falls", add: ["z73hbr", "ev0uiu", "1lskmyd", "1sknxj5", "16t51m8", "neswyw"], lat: 43.0799, lng: -79.0747, category: "Nature", sound: "ocean",
        tagline: "A wall of water you feel in your chest",
        description: "The Horseshoe Falls drop about 57 metres in a curved curtain, and the roar and mist reach you long before the view does. Take the boat into the basin and you will come back soaked and grinning. After dark the falls are lit in colour, and in winter the spray freezes onto every railing and tree.",
        bestTime: "Jun–Aug", image: "wiki:Niagara Falls" },
      { name: "Quebec City", add: ["1q5tuos", "1fgen77", "uitb5y", "3lao35", "1ta5f2n"], skip: ["1npwwel"], lat: 46.8139, lng: -71.2080, category: "Historical", sound: "city",
        tagline: "A walled French city above the St. Lawrence",
        description: "Founded by Samuel de Champlain in 1608, Old Quebec is the only walled city north of Mexico, a tangle of steep lanes, copper roofs and stone houses under the turrets of the Château Frontenac. It is at its most atmospheric in deep winter, with snow on the ramparts and the Carnival in full swing.",
        bestTime: "Jun–Sep, Feb (Winter Carnival)", image: "wiki:Old Quebec", wiki: "Quebec City" }
    ]
  },

  /* ---------- Central America & Caribbean ---------- */
  {
    id: "188", name: "Costa Rica", region: "Central America", soundProfile: "jungle",
    summary: "Cloud forest, volcanoes and two coasts packed into a country you can cross in a day.",
    hero: "wiki:Poás Volcano",
    places: [
      { name: "Monteverde Cloud Forest", pics: ["yg66i", "yf5iy", "5ar17", "2lai29", "yhuhn", "xwrpx", "2zrb8r", "wc8oz"], add: ["n18b57", "s71nqx", "1gz4wnn"], lat: 10.3010, lng: -84.7950, category: "Nature", sound: "rainforest",
        tagline: "A forest that lives inside the clouds",
        description: "Mist drifts through the canopy on the continental divide and everything drips: moss, orchids, tree ferns, the hanging bridges themselves. Walk slowly and listen. The metallic call of the three-wattled bellbird carries for hundreds of metres, and with a good guide you may see the emerald tail of a resplendent quetzal.",
        bestTime: "Dec–Apr (drier months)", image: "wiki:Monteverde Cloud Forest Reserve" },
      { name: "La Fortuna & Arenal Volcano", skip: ["1bt51mp", "10g7hwd", "fsa9i1"], pics: ["skh51", "2fe93x", "2mh8kk", "2efphn", "2mbro8", "2lnh27", "2m4ocw", "2fcwjf", "2eryt6", "110ixm", "2lxivb"], add: ["1ubejir", "fc1leh", "oilij"], aka: ["Arenal"], lat: 10.4626, lng: -84.7032, category: "Mountain", sound: "jungle",
        tagline: "A perfect volcanic cone above hot springs",
        description: "Arenal's near-symmetrical cone erupted almost daily from 1968 until 2010 and now rests above the town, often wearing a cap of cloud. Hike the old lava fields, swim under the 70-metre La Fortuna waterfall, then end the day in a river of naturally heated water with the jungle humming around you.",
        bestTime: "Dec–Apr (dry season)", image: "wiki:Arenal Volcano", more: ["Arenal Volcano National Park"] },
      { name: "Manuel Antonio", pics: ["ewd2j", "o4ups", "1dlmt2", "wg5hs", "wg5hi"], skip: ["tzkyvw"], lat: 9.3920, lng: -84.1370, category: "Beach", sound: "ocean",
        tagline: "Where the rainforest runs onto the beach",
        description: "Costa Rica's smallest national park packs white-sand coves, warm Pacific water and thick jungle into a few square kilometres. Sloths hang above the trails, scarlet macaws cross overhead, and white-faced capuchin monkeys will open your bag if you leave it on the sand.",
        bestTime: "Dec–Apr (dry season)", image: "wiki:Manuel Antonio National Park" },
      { name: "Tortuguero", pics: ["1v82a9", "65spp", "1jkw6y", "4nnfn", "4kwds", "4pbm2", "20ccx", "pbsus"], lat: 10.5425, lng: -83.5024, category: "Nature", sound: "rainforest",
        tagline: "Jungle canals and nesting sea turtles",
        description: "There are no roads here. You arrive by boat through brown-water canals walled with rainforest, past caimans, herons and basilisk lizards that run across the surface. From July to October green sea turtles haul themselves up the dark beach at night to lay their eggs, as they have for millennia.",
        bestTime: "Jul–Oct (turtle nesting)", image: "wiki:Tortuguero National Park" }
    ]
  },
  {
    id: "320", name: "Guatemala", region: "Central America", soundProfile: "jungle",
    summary: "Maya temples above the canopy, a volcanic lake, and a colonial city ringed by fire.",
    hero: "wiki:Volcán de Fuego",
    places: [
      { name: "Tikal", pics: ["gob10", "31d642", "165veu", "165vf0", "165veq", "2593aa", "ygs17", "1ss7b0", "1ss8i4", "325ap6"], add: ["1gc9px1", "hf41iy", "2nxw2x", "1o1lstw", "80my2o"], skip: ["o45ai9"], lat: 17.2220, lng: -89.6237, category: "Historical", sound: "rainforest",
        tagline: "Maya temples rising out of the rainforest",
        description: "One of the great cities of the Classic Maya, Tikal lies deep in the Petén jungle, its limestone temples breaking through the canopy. Climb Temple IV before dawn and wait in the dark: the forest wakes with the roar of howler monkeys, and then the tops of the other pyramids appear through the mist.",
        bestTime: "Nov–Apr (dry season)", image: "wiki:Tikal" },
      { name: "Antigua Guatemala", pics: ["1re2vt", "25p3aj", "1xeepe", "25p3ai"], add: ["x27b7s", "x6kqbx", "2tn96q", "n7kk26", "1czwl1b", "1i6x8hu", "1l9oon"], skip: ["ed7rch"], lat: 14.5586, lng: -90.7295, category: "Historical", sound: "city",
        tagline: "A colonial capital watched by three volcanoes",
        description: "Cobbled streets, ochre walls and ruined baroque churches left as they fell in the earthquakes of 1773. The yellow Santa Catalina Arch frames Volcán de Agua, and on clear nights you can watch Fuego cough red sparks on the horizon. During Holy Week the streets are carpeted with intricate designs of dyed sawdust and flowers.",
        bestTime: "Nov–Apr (dry season)", image: "wiki:Antigua Guatemala" },
      { name: "Lake Atitlán", pics: ["1fsz2b", "1hbaz7", "1g2kls", "1rwl2u", "6kuwn", "257ihe", "1rx3gc", "103njn", "10v6gd"], add: ["yw6i0f", "1yr0n6x", "11aeclh", "1oqwy2q", "c48lc4", "11whkm4"], skip: ["iwkis"], lat: 14.6907, lng: -91.2025, category: "Nature", sound: "mountains",
        tagline: "A highland lake ringed by volcanoes",
        description: "The deepest lake in Central America fills a huge volcanic caldera, with three volcanoes standing over its southern shore. Maya villages line the water, each with its own weaving and character, and you move between them by small public boat. Mornings are glassy calm; by afternoon the wind called the Xocomil whips up the surface.",
        bestTime: "Nov–Apr (dry season)", image: "wiki:Volcán San Pedro", wiki: "Lake Atitlán" }
    ]
  },
  {
    id: "192", name: "Cuba", region: "Caribbean", soundProfile: "ocean",
    summary: "Faded colonial grandeur, tobacco valleys and music spilling out of every doorway.",
    hero: "wiki:Malecón, Havana",
    places: [
      { name: "Havana", add: ["pdq1a4", "5tld75", "b0gyfs", "1hg0f1y", "1wsbtff", "11whjph"], skip: ["1r0ssih", "sc22p9", "1hyjs5b", "3hr215", "69nwkl", "d0c19a"], lat: 23.1136, lng: -82.3666, category: "City", sound: "city",
        tagline: "A city of crumbling palaces and 1950s chrome",
        description: "Old Havana is a UNESCO-listed maze of arcades, peeling pastel facades and plazas where a son band is always playing somewhere. Ride in a 1950s American convertible, walk the eight-kilometre Malecón seawall at sunset when waves break over the road, and follow the sound of a trumpet into the nearest bar.",
        bestTime: "Nov–Apr (dry season)", image: "wiki:Plaza Vieja, Havana", wiki: "Havana" },
      { name: "Viñales", add: ["1cqbsvu", "7rp72r", "udxrl5"], lat: 22.6167, lng: -83.7167, category: "Nature", sound: "jungle",
        tagline: "Red earth, tobacco fields and limestone giants",
        description: "Rounded limestone hills called mogotes rise straight out of a flat valley of rust-red soil. Farmers still plough with oxen and dry tobacco leaves in thatched barns, and they will roll you a cigar on the spot. Explore on horseback in the cool of early morning, when mist sits between the hills.",
        bestTime: "Nov–Apr (dry season)", image: "wiki:Viñales Valley" },
      { name: "Trinidad", pics: ["1iw6ot", "180c9y", "1dii5w", "2es7dk"], add: ["a93hs", "1a3ecbk", "h0bfhn"], lat: 21.8024, lng: -79.9843, category: "Historical", sound: "city",
        tagline: "A sugar town frozen in the 1800s",
        description: "Founded in 1514 and made rich by sugar, Trinidad has barely changed since the trade collapsed: cobblestones, tiled roofs, and houses painted mint, yellow and pink. Climb the bell tower for the view to the Caribbean, then spend the evening on the stone steps of the Casa de la Música, where the whole town comes to dance salsa.",
        bestTime: "Nov–Apr (dry season)", image: "wiki:Trinidad, Cuba" },
      { name: "Varadero", pics: ["2ts4iv", "266cfi", "2ts4j2", "szq8a", "4imc5", "1loxl1", "1loxl6", "254yiy"], skip: ["1g9gn0"], lat: 23.1394, lng: -81.2861, category: "Beach", sound: "ocean",
        tagline: "Twenty kilometres of white Caribbean sand",
        description: "Varadero occupies the narrow Hicacos Peninsula, and almost its entire northern shore is one continuous beach of fine pale sand and shallow, bath-warm water. It is Cuba's classic place to do very little: swim, sail a catamaran, drink something cold under a palm.",
        bestTime: "Nov–Apr (dry season)", image: "wiki:Varadero" }
    ]
  },

  /* ---------- South America ---------- */
  {
    id: "170", name: "Colombia", region: "South America", soundProfile: "jungle",
    summary: "Andean cities of eternal spring, a walled Caribbean port, and jungle that runs down to the sea.",
    hero: "wiki:El Peñón de Guatapé",
    places: [
      { name: "Medellín", pics: ["1n6e2w", "2dg4bn", "2dga14", "2dgadv", "1fkfcq", "2l67ne", "1n6ymb", "2dga29", "2dga2s", "1jk219"], skip: ["1flg67t", "10nw9ru", "f59n7g", "185zur2", "tw8tuz", "4z3ebv", "r49ryh", "59iyqy", "ljrolh", "cd9xh2"], add: ["cd1kec", "9md86n"], lead: ["Panorámica Medellín.jpg", "Valley of Medellín- skyline.jpg", "View of Medellín at night.JPG", "Panorámica desde el Cerro El Volador hacia el centro de la ciudad - 3.jpg", "Medellín skyline02.jpg", "Metrocable in Medellín by night.jpg", "NATURALEZA VS CIUDAD MEDELLIN 2016.jpg"], lat: 6.2442, lng: -75.5812, category: "City", sound: "city",
        tagline: "The City of Eternal Spring",
        description: "Medellín fills a green Andean valley at about 1,500 metres, which keeps the air spring-warm all year. Ride the Metrocable gondolas up over the hillside barrios, walk the street-art-covered outdoor escalators of Comuna 13, and stand among the 23 rounded bronze sculptures that Fernando Botero gave to his home city in Plaza Botero. In August the Feria de las Flores covers the streets in flowers.",
        bestTime: "Dec–Mar (driest months)", image: "wiki:Medellín", more: ["El Poblado", "Cerro Nutibara", "Pueblito Paisa"] },
      { name: "Bogotá", pics: ["cwerg", "d04kf", "d04kg", "cqab5"], add: ["13pvkqg", "kunfhp", "ev36lq"], skip: ["ru1ui", "2m53i7", "sgiibc", "1snnhl0", "1ajctxg", "yrzcac", "1m9lg9z", "9l10t7", "1hmybjx"], lat: 4.7110, lng: -74.0721, category: "City", sound: "city",
        tagline: "A high Andean capital under Monserrate",
        description: "Bogotá sprawls across a plateau 2,640 metres up, with the green wall of the eastern hills behind it and cool, thin air all year. Wander the steep colonial streets of La Candelaria, where almost every wall is a mural, and see tens of thousands of pre-Columbian gold pieces glowing in the dark rooms of the Gold Museum. Ride the cable car up Monserrate at dusk and watch the city lights switch on to the horizon.",
        bestTime: "Dec–Mar (driest months)", image: "wiki:Bogotá" },
      { name: "Cartagena", pics: ["xcaq", "1ni7p8", "11t8dz", "2rrrpg"], skip: ["105qgxl"], add: ["t9cqty"], lat: 10.3910, lng: -75.4794, category: "Historical", sound: "ocean",
        tagline: "A walled colonial port on the Caribbean",
        description: "Thick stone ramparts built to keep out pirates still wrap the old city, and inside them bougainvillea spills from wooden balconies over streets painted yellow, coral and blue. Explore the tunnels of the Castillo San Felipe fortress in the morning, hide from the midday heat, then join everyone on top of the walls for sunset and a sea breeze.",
        bestTime: "Dec–Apr (dry, breezy)", image: "wiki:Castillo San Felipe de Barajas", wiki: "Cartagena, Colombia" },
      { name: "Tayrona National Park", pics: ["1lyupa", "379hog", "o4q3c", "o4q59", "1b4r95", "1b4r94", "o4q3e", "o4q3i", "wr2z1"], add: ["j466nh"], skip: ["z9qkm", "1w0vmxu", "1tvyh2t", "62fmri", "qi4asc", "1dl3ina", "1psmh8e"], lat: 11.3247, lng: -73.9644, category: "Nature", sound: "jungle",
        tagline: "Where the Sierra Nevada meets the Caribbean",
        description: "Jungle trails wind for a couple of hours past giant boulders and palms to wild golden beaches like Cabo San Juan, with howler monkeys overhead and the world's highest coastal mountain range behind you. There are no roads to the best coves, only footpaths. The park closes for a few weeks each year at the request of the Indigenous peoples of the Sierra, so the land can rest.",
        bestTime: "Dec–Mar (dry; check annual closures)", image: "wiki:Tayrona National Natural Park" },
      { name: "Cocora Valley", pics: ["1mw2t6", "1mvqp2", "1mw2o2", "29urrd", "1mw2p8", "248c3t", "380ff1", "1msni5", "10ugd8"], skip: ["1aiecdj", "tbsgq1"], add: ["172xdmb", "ofthp5", "9rpqoe", "ccqci5"], lead: ["Palma de Cera, Colombia (40487072844).jpg", "Paisaje Valle del Cocora.jpg", "Valle del Cocora junio 2025 03.jpg"], lat: 4.6386, lng: -75.4870, category: "Nature", sound: "rainforest",
        tagline: "The tallest palm trees on Earth",
        description: "In the coffee hills above the town of Salento, wax palms shoot up to 60 metres out of bright green pasture, thin as matchsticks and often half lost in cloud. They are Colombia's national tree. Hike the loop through cloud forest and over wooden bridges, then come back to town for trout and a cup of coffee grown down the road.",
        bestTime: "Dec–Mar, Jul–Aug", image: "wiki:Cocora Valley", more: ["Salento, Quindío"] }
    ]
  },
  {
    id: "604", name: "Peru", region: "South America", soundProfile: "mountains",
    summary: "The heartland of the Inca: stone cities in the clouds, high valleys, and a serious food capital on the Pacific.",
    hero: "wiki:Colca Canyon",
    places: [
      { name: "Machu Picchu", skip: ["1iozomt"], pics: ["ppai5", "ppah7", "2tsis0", "1ow7b", "2f8bzz", "fpoil", "wtfv0", "woz84", "1f3d1d", "2t9lac", "1kdpv7", "vvmau", "woz1s", "1216lq", "2ii7c6"], add: ["1emikhs"], lat: -13.1631, lng: -72.5450, category: "Historical", sound: "mountains",
        tagline: "The lost city of the Incas",
        description: "Built around 1450 for the emperor Pachacuti and abandoned about a century later, Machu Picchu sits on a ridge at 2,430 metres with cloud forest falling away on every side. Arrive early, when mist is still lifting off the terraces and the granite walls are cold to the touch. The stones are cut so precisely that they have stood through five centuries of earthquakes without mortar.",
        bestTime: "May–Sep (dry season)", image: "wiki:Machu Picchu" },
      { name: "Cusco", pics: ["fxbct", "fxbcu", "1kde1c", "1ddiur", "11wm42", "ppict", "17mjwh", "17mk0y", "1u0uql", "1d32vv", "wt15b"], add: ["956q2u", "1tyav2w"], skip: ["1v49q29", "1w9rlgd", "1uov2av"], lat: -13.5320, lng: -71.9675, category: "City", sound: "mountains",
        tagline: "The Inca capital, 3,400 metres up",
        description: "Spanish churches and arcades stand directly on top of Inca walls of fitted stone, including the famous twelve-angled block on Hatun Rumiyoc street. The altitude makes the first day slow, so sip coca tea, wander the Plaza de Armas, and browse the fruit and bread stalls of San Pedro market before heading to the Qorikancha, once the empire's Temple of the Sun.",
        bestTime: "May–Sep (dry season)", image: "wiki:Cusco" },
      { name: "Lima", pics: ["fxc5z", "1iwv11", "gof7g", "pgq2i", "pgq2s", "1gk7dz", "f9r7e", "hcsms", "1udjqu", "1d0e5x", "pgv7b", "hz5c8"], add: ["dnlpx8"], lead: ["Miraflores Costa Verde Skyline (Lima, Peru).jpg", "Plaza Mayor de Lima (1).jpg", "La Costa Verde y Miraflores, desde Barranco (3545043786).jpg", "Palacio municipa Plaza Mayor, Lima Pérou en 2011.jpg"], skip: ["1v49q29", "1mhfrs7", "1y231lh", "1ubze9k", "vucsem", "1q0kwyw", "1vl2dcp", "1473ckd", "avnjj1", "a8fr4q", "pwjzlh", "1b9jq6h", "b8g5e6", "1vardf9", "1ys6k7s"], lat: -12.0464, lng: -77.0428, category: "City", sound: "city",
        tagline: "A food capital on the Pacific cliffs",
        description: "Lima sits on tall cliffs above grey-green Pacific surf, with paragliders drifting past the parks of Miraflores. It is one of the world's great eating cities: order ceviche at lunch, when the fish is freshest. In the middle of the modern city, the adobe pyramid of Huaca Pucllana is about 1,500 years old.",
        bestTime: "Dec–Apr (sunny summer)", image: "wiki:Miraflores District, Lima", wiki: "Lima", more: ["Historic Centre of Lima", "Barranco District"] },
      { name: "Sacred Valley", pics: ["pi3xh", "2t5gyu", "1n7qji", "21aci3", "2i0z16", "pi3xb", "11tsp9", "36n0ge"], add: ["qzjrqg", "48coht"], skip: ["lj2ypa", "131knry", "1xxm7al", "1n0oc3a", "9dify5", "8opft5"], lat: -13.3050, lng: -72.1160, category: "Culture", sound: "mountains", zoom: 10,
        tagline: "Terraces, markets and fortresses along the Urubamba",
        description: "Between Cusco and Machu Picchu the Urubamba River runs through a valley of Inca terraces and Quechua villages. Bargain for weavings at Pisac market, climb the massive stone steps of the fortress at Ollantaytambo, and see the thousands of salt pools at Maras, harvested by hand since before the Incas.",
        bestTime: "May–Sep (dry season)", image: "wiki:Sacred Valley", more: ["Ollantaytambo", "Pisac", "Maras, Peru"] },
      { name: "Rainbow Mountain", pics: ["2ht807", "2syolp", "2rpv8d"], add: ["1oei05j", "4d3mo2"], lat: -13.8700, lng: -71.3030, category: "Mountain", sound: "mountains",
        tagline: "Striped mineral slopes above 5,000 metres",
        description: "Vinicunca is banded in rust red, mustard, turquoise and lavender by layers of mineral sediment, and it was hidden under snow until fairly recently. The trailhead is a three-hour drive from Cusco and the walk tops out at around 5,000 metres, so the thin air is the real challenge. Herds of alpacas graze the valley on the way up.",
        bestTime: "May–Sep (dry season)", image: "wiki:Vinicunca" }
    ]
  },
  {
    id: "076", name: "Brazil", region: "South America", soundProfile: "jungle",
    summary: "The world's largest rainforest, its most spectacular waterfalls, and a city that lives on the beach.",
    hero: "wiki:Christ the Redeemer (statue)",
    places: [
      { name: "Rio de Janeiro", pics: ["1pvkx4", "27nq17", "2l2pjl", "2l9o77", "t23ww", "es04p", "2hrc8m", "mj5ey", "1pvkyc", "o4ekd", "38n1gw", "18dhga", "t0tka"], add: ["1jd85ux", "gheroa", "1amrj8h"], skip: ["fzuqv2", "8x3v07", "wujhjd", "1l6j27k", "1458wnk"], lat: -22.9068, lng: -43.1729, category: "City", sound: "ocean",
        tagline: "Granite peaks, samba and the Atlantic",
        description: "Rio is squeezed between jungle-covered granite mountains and the sea, and life happens on the sand of Copacabana and Ipanema. Ride the cable car up Sugarloaf at sunset, stand under the 30-metre Christ the Redeemer on top of Corcovado, and in the evening follow the drums to a samba bar in Lapa.",
        bestTime: "Dec–Mar (summer and Carnival)", image: "wiki:Sugarloaf Mountain", wiki: "Rio de Janeiro", more: ["Christ the Redeemer (statue)", "Copacabana, Rio de Janeiro"] },
      { name: "São Paulo", pics: ["l5ah8", "lejxc", "19xd8s", "npt5y", "1crf54", "w1zx8", "2gy7t3", "kpo26", "19xd8q"], add: ["18lz55v"], skip: ["1yfanmm", "qa60p", "10lq7kd", "18g16zj"], lat: -23.5505, lng: -46.6333, category: "City", sound: "metropolis",
        tagline: "The biggest city in the Americas",
        description: "São Paulo is a horizon of towers in every direction, loud, fast and endlessly hungry. On Sundays Avenida Paulista closes to cars and fills with musicians, skaters and food stalls beneath MASP, the art museum that hangs from two red concrete beams. Eat a mortadella sandwich in the stained-glass Municipal Market, walk the graffiti alley of Beco do Batman, and end the night with ramen in Liberdade, home to the largest Japanese community outside Japan.",
        bestTime: "Apr–Sep (drier, milder)", image: "wiki:São Paulo" },
      { name: "Amazon Rainforest", pics: ["1ixydg", "pt9p0", "bae87", "28hhbb", "dd7az", "2q9ivd", "2q9ivh", "289bez", "20iln5", "8f2mc", "7wjwj", "279sv5", "2ugv4q", "1cv042", "y7u3e", "dczhi", "25g20z", "1ju4u7", "ifbhm"], add: ["1hus50b", "1ct2oy", "15waj7b", "1fub8bs"], skip: ["1ez7quj", "9n254e", "zm9c2k", "166k7tt", "125e1yd", "1l5n6de", "1qo44jd"], aka: ["Manaus", "Amazonas"], lat: -3.1190, lng: -60.0217, category: "Nature", sound: "rainforest", zoom: 8,
        tagline: "The largest rainforest on Earth",
        description: "From the river port of Manaus, boats head into a world of flooded forest, pink river dolphins and a wall of sound: parrots, frogs, cicadas and howler monkeys, all at once. Just downstream, the black water of the Rio Negro and the sandy water of the Solimões run side by side for kilometres without mixing. Nights on the river are completely dark and full of stars.",
        bestTime: "Jun–Nov (lower water, more trails)", image: "wiki:Amazon rainforest", more: ["Amazon River", "Manaus"] },
      { name: "Iguaçu Falls", pics: ["1drelf", "uur2s", "uur6l", "10tpai", "1ju6w3", "1ju6w4", "1gxjfx", "25afh6", "2azdey", "2hxcyx", "1iahse"], skip: ["1uch7sv", "1bs9hga", "8zz7j2", "yvf4f", "u16ava", "l5nj8c", "193jhsy", "lg76bd"], add: ["1q160gz"], aka: ["Iguazu Falls", "Foz do Iguaçu"], lat: -25.6953, lng: -54.4367, category: "Nature", sound: "rainforest",
        tagline: "275 waterfalls in the subtropical jungle",
        description: "The Iguaçu River spreads out and drops over a cliff nearly three kilometres wide, in hundreds of separate falls. The Brazilian side gives the wide panorama, ending on a walkway that takes you into the spray of the Devil's Throat, where the noise drowns out speech. Toucans, butterflies and coatis are everywhere along the trail.",
        bestTime: "Mar–May, Aug–Oct", image: "wiki:Iguazu Falls", more: ["Iguaçu National Park", "Iguazú National Park"] },
      { name: "Salvador", pics: ["1uk1l6", "1usenf", "21hie7", "q30m1", "173d5j", "o75eg", "zddc4"], add: ["9zz9qc", "185m2hr", "9tq7dh", "5wm09i", "uq9sln"], skip: ["6dznt5", "8v123b", "jlu2w8", "s97960", "r4tzwa", "7d3vgx", "kkymm7", "1na46ft", "1a3chx5", "xc1xz6", "1hmzxk"], lat: -12.9777, lng: -38.5016, category: "Culture", sound: "ocean",
        tagline: "The heart of Afro-Brazilian culture",
        description: "Brazil's first capital, founded in 1549, is a city of drums. In the hilltop Pelourinho district, cobbled lanes run between colonial houses painted in every colour and gold-lined baroque churches. Watch a circle of capoeira, eat acarajé fried in palm oil from a street stall, and hear the Olodum percussion group rehearse in the open air.",
        bestTime: "Sep–Mar", image: "wiki:Pelourinho", wiki: "Salvador, Bahia" }
    ]
  },
  {
    id: "032", name: "Argentina", region: "South America", soundProfile: "mountains",
    summary: "Tango and steak in the capital, vineyards under the Andes, and Patagonia's walls of ice.",
    hero: "wiki:El Chaltén",
    places: [
      { name: "Buenos Aires", pics: ["tyuqr", "13gyii", "1elslx", "1hzia7", "9hpkb", "1elsno", "1hy5l7", "aj4h3", "ufcd2"], add: ["9mh7eg", "1g1ps5y", "o6azni"], lead: ["Buenos Aires Puerto Madero 29.jpg", "ObeliscoBA2015.jpg", "El caminito7 - Buenos Aires - Argentina.jpg", "Buenos Aires Puerto Madero 18.jpg", "Caminito Farolito.jpg"], skip: ["1rf3obg", "ac8ohk", "11pnfwv", "1tacoi4", "q3fkgn", "106xjgq", "1j0hclu", "7qzpfc"], lat: -34.6037, lng: -58.3816, category: "City", sound: "city",
        tagline: "Tango, late dinners and faded grandeur",
        description: "Wide avenues, Parisian facades and cafés where nobody hurries. Watch tango danced in the square in San Telmo, see the painted tin houses of Caminito in La Boca, and walk the marble alleys of Recoleta Cemetery to the tomb of Eva Perón. Dinner starts at ten and is usually a steak from a wood-fired parrilla.",
        bestTime: "Mar–May, Sep–Nov", image: "wiki:Caminito", wiki: "Buenos Aires" },
      { name: "Perito Moreno Glacier", pics: ["aj4nw", "2jq199", "2wx6ye", "2yyucf", "aj4nl", "j1l89", "729qc", "2yfj3k", "32d4kj", "14k2e4"], add: ["11vge1a", "1wxdvv5", "rv6lxx", "b2bkwk", "8573t9", "x718h0", "1qg50rm"], skip: ["9a5dy1"], lat: -50.4967, lng: -73.1377, category: "Nature", sound: "mountains",
        tagline: "A five-kilometre wall of blue ice",
        description: "The front of the glacier stands about 70 metres above the milky water of Lago Argentino, and it is constantly moving. Stand on the walkways and wait: the ice groans and cracks like gunfire, and every so often a tower the size of a building peels away and crashes into the lake.",
        bestTime: "Nov–Mar (southern summer)", image: "wiki:Perito Moreno Glacier" },
      { name: "Bariloche", pics: ["37ftle", "u0gn8", "uuq05", "gqlfx", "cwand"], add: ["1bop69b", "1c0929w", "1dfh1em", "1j6501t", "1tu2ipt", "1m4aihd", "1q8dnrp"], skip: ["1kwhtfz"], lat: -41.1335, lng: -71.3103, category: "Mountain", sound: "mountains",
        tagline: "Alpine lakes at the gate of Patagonia",
        description: "Bariloche sits on the shore of the deep blue Nahuel Huapi lake, surrounded by forested peaks. Drive or cycle the Circuito Chico for one lake view after another, ski Cerro Catedral in winter, and work through the chocolate shops on the main street, a tradition brought by Central European settlers.",
        bestTime: "Dec–Mar (summer), Jul–Sep (skiing)", image: "wiki:Nahuel Huapi Lake", wiki: "Bariloche" },
      { name: "Mendoza", pics: ["d0179"], add: ["1istris", "1rd8tty", "nv2j95", "4c31se"], lead: ["Vineyard in Mendoza, Argentina.jpg", "Los Pioneros Vineyard 2.jpg"], skip: ["296trz", "1rvuek1"], lat: -32.8895, lng: -68.8458, category: "Culture", sound: "mountains",
        tagline: "Malbec vineyards under the Andes",
        description: "Rows of vines run toward a wall of snow-capped mountains, irrigated by meltwater channels first dug before the Spanish arrived. Cycle between wineries, taste Malbec where it grows best, and have a long lunch outdoors. To the west stands Aconcagua, at 6,961 metres the highest mountain outside Asia.",
        bestTime: "Mar–Apr (harvest), Oct–Nov", image: "wiki:Aconcagua", wiki: "Mendoza, Argentina" }
    ]
  },
  {
    id: "152", name: "Chile", region: "South America", soundProfile: "mountains",
    summary: "A sliver of a country running from the driest desert on Earth to the glaciers of Patagonia.",
    hero: "wiki:Osorno (volcano)",
    places: [
      { name: "Torres del Paine", pics: ["1gj2z3", "aipmv", "aj3py", "aj3q8", "2xqtfj", "2xrgaf", "2edsot", "2gzub8", "ejzdc", "1gj3i8"], skip: ["pviuzx", "76xbu4", "67ui2g", "5cin7a", "1veprs"], add: ["1w5s9j6", "1y3p1dt", "wq6tqo", "89u4aa"], lat: -50.9423, lng: -73.4068, category: "Mountain", sound: "mountains", zoom: 9,
        tagline: "Granite towers at the end of the world",
        description: "Three sheer granite spires stand above a turquoise glacial lake, and the Patagonian wind is strong enough to lean on. Trek the multi-day W route past glaciers and hanging valleys, or hike up to the base of the towers for dawn, when the rock turns red. Guanacos graze the steppe and condors ride the gusts overhead.",
        bestTime: "Nov–Mar (southern summer)", image: "wiki:Cordillera Paine", wiki: "Torres del Paine National Park" },
      { name: "Atacama Desert", skip: ["km75ow", "1ugfy0r", "1g1qxua", "1x00cfh", "1pg5l0j", "1vbvv03"], pics: ["sx3q3", "sx2jk", "swsbr", "swur3", "18vlvu", "10u2j9", "113jiz", "2yj62v", "yv2t0", "1n6jrx", "cvt0l", "10ydx1"], add: ["7qhp1n", "x6sqeq", "1nbaupq", "z570io", "14z6ptp"], lat: -22.9087, lng: -68.1997, category: "Nature", sound: "desert", zoom: 9,
        tagline: "The driest non-polar desert on Earth",
        description: "Around the adobe village of San Pedro lie salt flats, rust-red canyons and the wind-carved Valle de la Luna, which glows at sunset. Wake before dawn for the El Tatio geysers, steaming at 4,300 metres in the freezing air. The night sky here is among the clearest anywhere, which is why the world's largest telescopes are built nearby.",
        bestTime: "Mar–May, Sep–Nov", image: "wiki:Valle de la Luna (Chile)", wiki: "Atacama Desert" },
      { name: "Easter Island", pics: ["2h6wq1", "18vlvg", "1iae8b", "ekuqt"], add: ["11mwq49", "1ollxyz", "1lcg1ub"], skip: ["106r687", "143dnlh", "1hekywu", "1l9uuv9", "1hb7teq"], aka: ["Rapa Nui", "Moai"], lat: -27.1127, lng: -109.3497, category: "Historical", sound: "ocean", zoom: 11,
        tagline: "The moai of Rapa Nui",
        description: "One of the most remote inhabited islands on the planet, more than 3,500 kilometres from the mainland. The Rapa Nui people carved nearly a thousand giant stone figures here; at the Rano Raraku quarry hundreds still lie half finished in the grass. Watch the sun rise behind the fifteen moai of Ahu Tongariki, with Pacific surf breaking behind them.",
        bestTime: "Dec–Mar (warmest)", image: "wiki:Moai", wiki: "Easter Island" },
      { name: "Valparaíso", pics: ["aiikv", "1adqts", "391u11", "we89f", "yncr5", "j3hn6", "1c4l6w", "1e7gos", "1jgu5z", "178xs4", "1uwaec", "98ho5", "h0f0q", "1e7gr0"], add: ["1og0ixa"], skip: ["xa3frp", "1knm8s7", "m2hu7s", "1x4yu5h"], lat: -33.0472, lng: -71.6127, category: "Culture", sound: "ocean",
        tagline: "A port city painted in every colour",
        description: "Houses of corrugated iron in bright paint tumble down more than forty hills to the Pacific, linked by staircases and creaking century-old funiculars. Almost every wall is a mural. Visit La Sebastiana, the poet Pablo Neruda's eccentric house above the bay, and get lost on Cerro Alegre and Cerro Concepción.",
        bestTime: "Oct–Apr", image: "wiki:Valparaíso" }
    ]
  },
  {
    id: "218", name: "Ecuador", region: "South America", soundProfile: "mountains",
    summary: "Fearless wildlife in the Galápagos, a colonial capital on the equator, and an avenue of volcanoes.",
    hero: "wiki:Quilotoa",
    places: [
      { name: "Galápagos Islands", pics: ["m7q8p", "m7qab", "bbsgm", "bc66q", "2yd723", "anebw", "o4urh", "gdxh2", "ht8re", "2frs9q"], skip: ["n56ned", "1tey82r", "jlyfkm", "3giecb"], add: ["puw0ce", "1dxn0zt", "134hg6w", "1w3n1fv", "17d0r5p", "1eljuzz"], lat: -0.7402, lng: -90.3134, category: "Nature", sound: "ocean", zoom: 8,
        tagline: "Wildlife that never learned to fear people",
        description: "On these volcanic islands 1,000 kilometres offshore, sea lions sleep on the benches, marine iguanas pile up on black lava, and blue-footed boobies dance a few steps from your feet. Giant tortoises roam the highlands of Santa Cruz. Charles Darwin visited in 1835, and what he saw here shaped the theory of evolution.",
        bestTime: "Dec–May (warm, calm seas)", image: "wiki:Galápagos Islands" },
      { name: "Quito", pics: ["5rz4g", "758iq", "75bur", "p49fo", "ssast", "2j39c7", "2i8bv0", "2iq0e4", "p45pd", "7dgkp"], skip: ["1avwwdw", "17074x5", "1y82bxc", "1glmzw4", "exlhgv", "trbe7k"], add: ["g8gwim", "4v28bk", "szwego", "2k9l9z", "n3r6ya", "1175u51", "1k1ut5f"], lat: -0.2202, lng: -78.5123, category: "Historical", sound: "city",
        tagline: "A colonial capital at 2,850 metres",
        description: "Quito's old town was one of the first places ever added to the UNESCO World Heritage list, in 1978. Whitewashed streets lead to the church of La Compañía, whose interior is covered almost entirely in gold leaf. Ride the cable car up the side of Pichincha volcano for the view, then stand with a foot in each hemisphere at the equator line just north of the city.",
        bestTime: "Jun–Sep (dry season)", image: "wiki:El Panecillo", wiki: "Quito" },
      { name: "Cotopaxi", pics: ["m82f4", "16h6um", "dk6q", "sp6ez", "21qukw", "2o1h3h", "sp6fg", "spzch", "y7mre", "o4uut", "y7mrh", "sp6go"], skip: ["1tekh1l", "60x995"], lat: -0.6838, lng: -78.4372, category: "Mountain", sound: "mountains",
        tagline: "A snow-capped cone on the Avenue of the Volcanoes",
        description: "At 5,897 metres Cotopaxi is one of the highest active volcanoes in the world, a near-perfect white cone above the cold, windy grassland of the páramo. Wild horses graze around Limpiopungo lagoon at its foot, and you can drive to a car park at 4,600 metres and walk up to the climbers' refuge.",
        bestTime: "Jun–Sep, Dec–Jan", image: "wiki:Cotopaxi" }
    ]
  },
  {
    id: "068", name: "Bolivia", region: "South America", soundProfile: "mountains",
    summary: "The high Andes at their most otherworldly: salt to the horizon, and a capital in the sky.",
    hero: "wiki:Laguna Colorada",
    places: [
      { name: "Salar de Uyuni", pics: ["scm0c", "1jkbky", "103how", "2lvgud", "scm0v", "12t80", "130d3", "kdpks", "scm0e", "o4vzt", "tbtrg"], add: ["j2ffqm", "1v1z6g2", "1ic24tt", "ppvtxd", "w6g0kw"], lat: -20.1338, lng: -67.4891, category: "Nature", sound: "desert", zoom: 8,
        tagline: "The largest salt flat on Earth",
        description: "More than 10,000 square kilometres of blinding white salt at 3,650 metres, cracked into hexagons and perfectly flat. After summer rain a thin layer of water turns it into the world's biggest mirror, and the sky and ground become one. In the middle stands Incahuasi, a rocky island covered in giant cacti.",
        bestTime: "Jan–Mar (mirror effect), May–Oct (dry)", image: "wiki:Salar de Uyuni" },
      { name: "La Paz", pics: ["h48z9", "2evvvc", "17lb0k"], add: ["libakm", "fkt928", "9ixnww", "p0sok0", "f9ch5u", "yn9eke"], lead: ["Illimani visto desde La Paz.jpg", "Illimani de noche.jpg", "Illimani colorido.jpg"], skip: ["1ez7w6k", "1hk2nc6", "9zog2v"], lat: -16.4897, lng: -68.1193, category: "City", sound: "city",
        tagline: "A city poured into a canyon at 3,600 metres",
        description: "Brick houses climb every wall of a steep canyon, with the triple peak of Illimani white above them. The best way to see it is from the air: the city's public transport is a network of cable cars gliding over the rooftops. Down below, the Witches' Market sells herbs, charms and dried llama fetuses for offerings to Pachamama.",
        bestTime: "May–Oct (dry season)", image: "wiki:La Paz" },
      { name: "Lake Titicaca", pics: ["2luhws", "3741xn", "ww5to", "1iln8n", "2f8c0n", "212l7", "f9qgw", "o4w46", "2f8c0r"], add: ["jh1oou", "1t67a2k", "bjb5p8", "zvdn7t", "h7kxm7", "2n9g7c"], skip: ["1n8l4ml"], lat: -16.0170, lng: -69.1780, category: "Nature", sound: "mountains", zoom: 10,
        tagline: "A sacred inland sea in the sky",
        description: "At 3,812 metres Titicaca is often called the highest navigable lake in the world, deep blue under intense Andean light. From the town of Copacabana a boat crosses to Isla del Sol, where Inca legend says the sun was born. There are no cars on the island, only stone paths, terraces and silence.",
        bestTime: "May–Oct (dry season)", image: "wiki:Isla del Sol", wiki: "Lake Titicaca" }
    ]
  },

  /* ---------- Europe ---------- */
  {
    id: "250", name: "France", region: "Europe", soundProfile: "city",
    summary: "The world's most visited country: a capital of light, châteaux on the river, and the blue of the Mediterranean.",
    hero: "wiki:Château de Chenonceau",
    places: [
      { name: "Paris", pics: ["1obh2", "1qsff", "aendx", "ioc2u", "qvxs5", "qzxkl", "1vnlnx", "25hms", "b5uc1", "cld9e", "1djq4s", "390bwn"], add: ["flub05", "1h22deu", "ho9i9s"], lead: ["Eiffel tower from trocadero.jpg", "View of Pont d'Iéna from Trocadéro, Paris, 2008.jpg"], skip: ["wf5tv0", "19mb5s2", "121tlqp", "xcv12o", "16rpi4w"], lat: 48.8566, lng: 2.3522, category: "City", sound: "city",
        tagline: "The City of Light",
        description: "Zinc rooftops, the smell of warm bread from a corner boulangerie, and the Seine sliding under stone bridges. The Eiffel Tower, built for the 1889 World's Fair, sparkles for five minutes at the top of every hour after dark. Give the Louvre a morning, climb the steps of Montmartre, then do as Parisians do and sit on a café terrace watching the street.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Eiffel Tower", wiki: "Paris" },
      { name: "French Riviera", pics: ["1mq3x", "5gavn", "9cqwe", "bjxa2", "y2wvx"], add: ["1g4vpao", "tlbcr4", "7wibhr", "1klyhqz", "d1etu2"], skip: ["tw3hse"], aka: ["Nice", "Côte d'Azur", "Monaco", "Cannes"], lat: 43.6950, lng: 7.2650, category: "Beach", sound: "ocean", zoom: 10,
        tagline: "The Côte d'Azur, from Nice to Monaco",
        description: "A coastline of deep blue water, palm trees and ochre old towns, lit by the clear light that drew Matisse and Chagall here. Walk the Promenade des Anglais along the pebble beach in Nice, climb to the medieval village of Èze high above the sea, and take the coastal train past Cap Ferrat to Monaco.",
        bestTime: "May–Jun, Sep", image: "wiki:Promenade des Anglais", wiki: "French Riviera" },
      { name: "Loire Valley", pics: ["161tlz", "162a6y", "1i3zp8", "1h9v37", "2wi4m1", "ms8x2", "1bdgtr", "11eq2i"], add: ["t02nh0", "nlmn6o", "14v3skk"], lat: 47.6161, lng: 1.5170, category: "Historical", sound: "rainforest", zoom: 9,
        tagline: "The valley of the kings' châteaux",
        description: "French kings and their courts built hundreds of châteaux along this quiet, wide river. Chambord, begun in 1519 for Francis I, has a famous double-helix staircase where two people can climb without ever meeting. Chenonceau stretches across the River Cher on stone arches, and between them lie vineyards, slow villages and flat cycling paths.",
        bestTime: "May–Jun, Sep–Oct", image: "wiki:Château de Chambord", wiki: "Loire Valley" },
      { name: "Mont-Saint-Michel", pics: ["3apvr1", "ja2qi", "2ied5q", "2wapvl", "3amuvf", "gp1uf"], add: ["16xwv4w", "7v6qw6", "1nc9fbk", "jn3oj", "q3c29v"], lat: 48.6361, lng: -1.5115, category: "Historical", sound: "ocean",
        tagline: "An abbey on a tidal island",
        description: "A medieval abbey crowns a granite rock in a huge bay where the tides are among the strongest in Europe. At low water the island stands in kilometres of wet sand; at the highest tides the sea surrounds it completely. Climb the single steep street to the cloister at the top, and stay until the day visitors leave and the lanes go quiet.",
        bestTime: "May–Sep", image: "wiki:Mont-Saint-Michel" }
    ]
  },
  {
    id: "380", name: "Italy", region: "Europe", soundProfile: "city",
    summary: "Two and a half thousand years of art and empire, served with the best food you will ever eat.",
    hero: "wiki:Val d'Orcia",
    places: [
      { name: "Rome", pics: ["4j58d", "a604p", "hypb6", "tu0pb", "18fd5k", "19xwe6", "2ii2ym", "2fcj0y", "4jwm1", "1cf8g9", "1g650i", "2vuxlc", "2k5vbv"], add: ["eihf2c", "hipxb3", "1f5xa3s", "16swlzl", "rj0j6m", "bidggl"], lat: 41.9028, lng: 12.4964, category: "Historical", sound: "city",
        tagline: "The Eternal City",
        description: "Ancient, baroque and modern Rome are stacked on top of each other, and you walk through all three in a single street. Stand in the Colosseum, opened in AD 80 for around 50,000 spectators, then under the open oculus of the Pantheon, whose concrete dome has stood for nearly 1,900 years. Finish with a plate of cacio e pepe in Trastevere.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Colosseum", wiki: "Rome" },
      { name: "Venice", pics: ["bkbr6", "dt8bl", "kqma2", "pseo5", "2dqf7o", "2l9h2w", "7wv5j", "e6je5", "ef4wy"], add: ["wsdmzr", "1lnasda", "14i8bf7", "pww3am", "3m9prx"], skip: ["gkchd8", "6rambw"], lat: 45.4408, lng: 12.3155, category: "City", sound: "ocean",
        tagline: "A city built on water",
        description: "Venice stands on 118 small islands joined by around 400 bridges, and there is not a single car. The sounds are footsteps, church bells and water slapping against stone. Ride a vaporetto down the Grand Canal past the palaces, see the gold mosaics of St Mark's Basilica, then put the map away and get lost in the back alleys.",
        bestTime: "Apr–Jun, Sep–Nov", image: "wiki:Grand Canal (Venice)", wiki: "Venice" },
      { name: "Amalfi Coast", pics: ["2k5mtx", "1tpi8j", "1tpi8t"], add: ["me1x3i", "737vz8", "2ld4c", "1t8iaui", "aocxiq", "1hdp012", "1sz2j0w"], skip: ["1l0am0m"], lat: 40.6281, lng: 14.4850, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "Cliffside villages above the Tyrrhenian Sea",
        description: "A narrow road twists for about 50 kilometres along cliffs planted with lemon terraces, with pastel villages stacked vertically above small pebble coves. Positano is the postcard, Ravello has the hilltop gardens, and the Path of the Gods trail gives you the whole coast from above. The lemons here are the size of a fist and end up as limoncello.",
        bestTime: "May–Jun, Sep", image: "wiki:Amalfi Coast" },
      { name: "Tuscany", pics: ["g8eof", "15pgla", "22swdi", "g5a1q", "2b3hcn", "2ghi3q", "2s9rib", "luua8", "wbfru", "3415ud", "3aw8mb"], aka: ["Florence", "Firenze", "Siena"], lat: 43.7696, lng: 11.2558, category: "Culture", sound: "city", zoom: 9,
        tagline: "Renaissance cities and cypress-lined hills",
        description: "Florence is where the Renaissance began: Brunelleschi's huge brick dome, finished in 1436, still dominates the skyline, and the Uffizi holds Botticelli's Birth of Venus. Outside the city the landscape becomes rolling wheat fields, vineyards and lines of cypress trees, with hill towns like Siena and San Gimignano on the ridges.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Florence Cathedral", wiki: "Florence" },
      { name: "Cinque Terre", pics: ["2b5oso", "2bbmje", "2u7l1p", "gkx6", "2ssbej", "1bvzt5", "2eexph"], add: ["sd0ck3", "bshbux", "101eb10", "2p102m", "1ghsppa"], lat: 44.1270, lng: 9.7090, category: "Nature", sound: "ocean", zoom: 12,
        tagline: "Five fishing villages clinging to the cliffs",
        description: "Five small villages of tall, colourful houses are wedged into a steep stretch of the Ligurian coast, linked by footpaths, a local train and boats. Cars barely reach them. Hike between villages through terraced vineyards high above the sea, then swim off the rocks in the harbour and order trofie with fresh pesto, which comes from this region.",
        bestTime: "May–Jun, Sep", image: "wiki:Cinque Terre" }
    ]
  },
  {
    id: "724", name: "Spain", region: "Europe", soundProfile: "city",
    summary: "Moorish palaces, Gaudí's wild architecture, and a country that eats dinner at ten.",
    hero: "wiki:Alcázar of Seville",
    places: [
      { name: "Barcelona", pics: ["18pxqf", "5clhk", "568r8", "4537", "171y60", "x8x8x", "5dosj", "kqwfr", "ton5x", "11kfwa", "17fx9m", "2efl0c", "2i91mz", "15cww9", "y7zsp", "2efkyx"], add: ["17b8mxr", "1k9epr", "k3hn1i"], skip: ["1dbyjqv", "kvfngo", "10ka98b", "mjwxup"], lat: 41.3851, lng: 2.1734, category: "City", sound: "city",
        tagline: "Gaudí's city by the Mediterranean",
        description: "Antoni Gaudí's Sagrada Família has been under construction since 1882, and its interior feels like a forest of stone trees lit in stained-glass colour. Wander the dark lanes of the Gothic Quarter, snack your way through La Boqueria market, climb to the mosaics of Park Güell, and end the day with your feet in the sand at Barceloneta.",
        bestTime: "May–Jun, Sep–Oct", image: "wiki:Sagrada Família", wiki: "Barcelona" },
      { name: "Madrid", pics: ["2mvp5t", "df4gn", "67eya", "1cnd5x", "7gm9o", "160296", "gx6e0", "bgjhn", "b5t5h", "h0bq6", "jsmuc", "drgol", "14l0bs", "11a9xu", "15110s"], skip: ["10prlqb", "hvao0h", "5ixt0t", "n5hqs7", "1cro91s", "oy6pjx", "kqh1ho"], add: ["1euzbtj", "1xu4v1w", "fn5yci"], lat: 40.4168, lng: -3.7038, category: "City", sound: "city",
        tagline: "A capital that comes alive at night",
        description: "Madrid is about art and appetite. The Prado holds Velázquez's Las Meninas and Goya's dark late paintings, and Retiro Park is where the city rows boats and naps on Sundays. Evenings start late: move from bar to bar eating tapas in La Latina, and expect the streets to be full well past midnight.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Plaza Mayor, Madrid", wiki: "Madrid" },
      { name: "Seville", pics: ["2gg99a", "1ci3yh", "2jzvo", "14k2ko", "pw880", "12otkp", "2gg990", "h2s6v", "ovikd", "16ga9l", "4naek", "rmbw8", "3tfks", "4xzhl", "wum8a", "ovq0m", "pjyk6", "15inew", "2bfejf", "3cfcv0"], add: ["1sm7wxe", "fmtnkl", "1v1mn6k", "1y9abw8", "13eqgqe", "hdzdnw"], skip: ["x1nvc7", "19ga2l1", "11zhbcu", "6dfkaw"], lat: 37.3891, lng: -5.9845, category: "Culture", sound: "city",
        tagline: "Orange blossom, flamenco and Moorish palaces",
        description: "In spring the whole city smells of orange blossom. The Real Alcázar is a palace of carved plaster, tiles and still pools, and next door stands the largest Gothic cathedral in the world, with a former minaret, the Giralda, as its bell tower. Cross the river to Triana at night to hear flamenco where it grew up.",
        bestTime: "Mar–May, Oct–Nov", image: "wiki:Plaza de España, Seville", wiki: "Seville" },
      { name: "Granada", pics: ["clvce", "xarzu", "1mler1", "dtflp", "18ydnh", "itkro", "cl5uu", "ite0h", "9jl9z", "1kmcpo", "iu24f", "17m8vl", "2bfeje", "vsspx"], add: ["1sb7gq5", "cmmp8q", "1r0q0cg", "roy1vv", "qv0qb4", "ew3qjk"], skip: ["aw6ozt", "110f89z", "avwti4", "iwu1ce", "rt36le", "1voy02d"], aka: ["Alhambra"], lat: 37.1760, lng: -3.5881, category: "Historical", sound: "temple",
        tagline: "The Alhambra, last palace of Moorish Spain",
        description: "The Alhambra sits on a red hill with the snow of the Sierra Nevada behind it. Inside, the Nasrid Palaces are rooms of lace-like stucco, cedar ceilings and courtyards where water runs quietly through marble channels. Watch it turn gold at sunset from the San Nicolás viewpoint in the old Albaicín quarter across the valley.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Alhambra", wiki: "Granada" },
      { name: "Mallorca", pics: ["tpjj2", "13ytyj", "1dfsbf", "xqwgy"], add: ["vreeea", "uzbs3h", "ap7vb1", "1pewlah", "1h69u4s", "bwj8td"], skip: ["1tqpksw", "1osnzag"], aka: ["Majorca", "Palma"], lat: 39.6167, lng: 2.9833, category: "Beach", sound: "ocean",
        tagline: "Turquoise coves under a mountain range",
        description: "Palma's Gothic cathedral rises straight out of the old sea walls, and the old town behind it is a maze of courtyards and tapas bars. Beyond the city, the Serra de Tramuntana mountains run along the northwest coast: drive the hairpin road down to Sa Calobra, wander the stone villages of Valldemossa and Deià, and swim in clear coves you reach on foot.",
        bestTime: "May–Jun, Sep–Oct", image: "wiki:Palma Cathedral", wiki: "Mallorca", more: ["Palma de Mallorca", "Serra de Tramuntana", "Sa Calobra", "Cap de Formentor", "Valldemossa"] },
      { name: "Ibiza", pics: ["2bzt49", "cfv8t", "2bztzs", "chhp3", "2ibsxx", "bvlie", "vo1gx", "2cd79f", "1nm6s7", "9dph2", "3acrs", "2cd7uw", "2ffmlg", "2q857t", "2r0mxw", "ehj08"], add: ["p6z6yf", "156odbb", "e08eqx", "1plw8mz"], skip: ["18vls0e", "1a8c2ku", "188xby1", "1r7r62o", "pq6qm9", "sqjfao", "1p7qedy", "kn5fyo", "2g21fm", "9ejz0a", "g5fsao", "6ynkmh", "vtkatz", "1a4czbb", "1bawxzp", "i72p2e", "x2rd19", "1h9qlpc"], aka: ["Eivissa"], lat: 38.9800, lng: 1.4300, category: "Beach", sound: "ocean",
        tagline: "White walls, hidden coves and famous sunsets",
        description: "Ibiza is far more than its clubs. The old walled town of Dalt Vila climbs a hill above the harbour, and the island's west coast is a string of pine-backed coves with water so clear the boats seem to float. Watch the sun go down behind the rock of Es Vedrà from Cala d'Hort, then head back to Sant Antoni or Ibiza Town for the night.",
        bestTime: "Jun, Sep", image: "wiki:Es Vedrà", wiki: "Ibiza", more: ["Ibiza (city)", "Dalt Vila", "Es Vedrà", "Cala d'Hort", "Sant Antoni de Portmany"] },
      { name: "Cádiz", pics: ["rniyx", "1d96kt", "ejb9c", "2dmteg", "ejb9d", "20z2hm", "32vlxf", "2yhv26", "a4gd7"], add: ["1lgg588", "18zqoxd", "17r3wjs", "1edmmb3", "ylg9y1"], skip: ["16wpj2w", "j5pr9l", "1kibjov", "1w6v2tg", "ucj94j", "6wwoo9"], aka: ["Cadiz"], lat: 36.5297, lng: -6.2925, category: "Historical", sound: "ocean",
        tagline: "One of Europe's oldest cities, wrapped in sea",
        description: "Cádiz sits on a narrow spit almost surrounded by the Atlantic and has been lived in for about 3,000 years. The golden dome of its cathedral looks out over the sea wall, the lanes of the old town are cool and narrow, and the little beach of La Caleta sits between two old forts. Climb the Torre Tavira for the view, then eat fried fish from a paper cone.",
        bestTime: "May–Jun, Sep–Oct", image: "wiki:Cádiz Cathedral", wiki: "Cádiz", more: ["Cádiz Cathedral", "Castle of San Sebastián (Cádiz)", "La Caleta"] }
    ]
  },
  {
    id: "620", name: "Portugal", region: "Europe", soundProfile: "ocean",
    summary: "Tiled cities on steep hills, port wine cellars, and golden cliffs facing the Atlantic.",
    hero: "wiki:Douro",
    places: [
      { name: "Lisbon", pics: ["ywwmn", "1wqwfh", "6lnv7", "1d190f", "cz3ru", "zuei9", "1b0tuz", "33ko9g", "33x2tj"], add: ["1yrrh7f", "ak4lbg", "1dj1ynk", "vhi9bn", "kj34og", "1gzpu19"], skip: ["t7nxw5", "1cwya2h", "i77fmi", "1ytdkf"], lat: 38.7223, lng: -9.1393, category: "City", sound: "city",
        tagline: "Seven hills, yellow trams and Atlantic light",
        description: "Lisbon climbs steeply from the wide Tagus, and the rattling yellow Tram 28 will carry you up through the lanes of Alfama, where fado drifts out of small restaurants at night. Out at Belém, see the stone tower that watched the explorers' ships leave, then queue for a warm custard tart from the bakery that has made them since 1837.",
        bestTime: "Mar–Jun, Sep–Oct", image: "wiki:Belém Tower", wiki: "Lisbon" },
      { name: "Porto", pics: ["byeeu", "byibi", "lw2on", "15c3hw", "1gn0fk", "1gnav0", "2rthod", "1cnyck", "m3l4i", "33x3vl"], add: ["4v1pae", "1wqazte", "bkl1rm", "1w7merr", "1cme8i8", "16ojs3g", "19w1nhf"], skip: ["t7nxw5", "ynxi89"], lat: 41.1579, lng: -8.6291, category: "City", sound: "city",
        tagline: "Port wine and tiled facades on the Douro",
        description: "Tall, narrow houses in faded colours step down to the Douro, under the double-deck iron arch of the Dom Luís I Bridge. Cross it to the old port wine lodges of Vila Nova de Gaia for a tasting, and do not miss São Bento station, whose hall is lined with about 20,000 blue and white tiles showing scenes from Portuguese history.",
        bestTime: "May–Sep", image: "wiki:Dom Luís I Bridge", wiki: "Porto" },
      { name: "Algarve", pics: ["2wfvh", "775mp", "ldyb1", "ldyo0", "22hd2m", "376gj2", "376h0l", "376pe2"], add: ["hyruzi", "pvmmdn", "1uqo5wr", "xl1e3q", "13tf36a", "1idnviu"], skip: ["wh3usv"], lat: 37.0810, lng: -8.6690, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "Golden cliffs and sea caves",
        description: "Portugal's south coast is a run of honey-coloured cliffs, rock arches and sheltered coves with clear, cold Atlantic water. Take a small boat or kayak from Lagos around the stacks of Ponta da Piedade and into the sea caves, then eat grilled sardines with your feet almost in the sand.",
        bestTime: "May–Jun, Sep", image: "wiki:Ponta da Piedade", wiki: "Algarve" },
      { name: "Sintra", pics: ["1cryy0", "1i3n5q", "1wsbyl", "2rtjy5", "21lxh8", "19kzcb", "1bmlwx"], add: ["1o7rjyd", "uurvrr", "7mmv2v", "axycas", "1t63jmu"], lat: 38.7876, lng: -9.3906, category: "Historical", sound: "rainforest",
        tagline: "Fairy-tale palaces in a misty forest",
        description: "In cool, wooded hills half an hour from Lisbon, Portuguese royalty built their summer retreats. The Pena Palace, finished in 1854, is a riot of red and yellow towers on a hilltop that is often wrapped in cloud. Nearby, the gardens of Quinta da Regaleira hide a spiral stone well you can descend into the earth.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Pena Palace", wiki: "Sintra" }
    ]
  },
  {
    id: "826", name: "United Kingdom", aka: ["UK", "Britain", "England", "Scotland"], region: "Europe", soundProfile: "city",
    summary: "A thousand years of history in one capital, and wild, empty Highlands a train ride north.",
    hero: "wiki:Palace of Westminster",
    places: [
      { name: "London", pics: ["cuuq", "esia", "qg3v", "ehamh", "iq9bj", "ire62", "1eqr0n", "k4ygf", "t4v75", "2vyz3o", "mijde", "2ny4jh", "fcx00"], add: ["h7bqds", "1qluys2", "13ya051", "gr2w10"], skip: ["1p36crx"], lat: 51.5074, lng: -0.1278, category: "City", sound: "metropolis",
        tagline: "A world city on the Thames",
        description: "Red buses, black cabs, and a crowd that always knows where it is going. The Tower of London has guarded the river for nearly a thousand years, the big museums are free, and the Underground has been running since 1863. Walk the South Bank from Westminster to Tower Bridge, then eat your way around Borough Market.",
        bestTime: "May–Sep", image: "wiki:Tower Bridge", wiki: "London" },
      { name: "Edinburgh", pics: ["ayf9r", "ayjit", "ayjph", "i9n9f", "kves3", "tfr0z", "1n8esw", "1n8et5", "2h0bf6", "2h2lwa"], add: ["f1ajwx", "1w0p9o7", "ueg1lg", "1lanvff", "s73jqa", "10xg0y"], lat: 55.9533, lng: -3.1883, category: "Historical", sound: "city",
        tagline: "A castle on a volcano above a medieval town",
        description: "Edinburgh Castle sits on the plug of an extinct volcano, and the cobbled Royal Mile runs down from it between tall stone tenements and narrow closes. Climb Arthur's Seat for a view over the whole city to the sea. Every August the Fringe, the largest arts festival in the world, fills every room and street corner with performers.",
        bestTime: "May–Sep (August for the festivals)", image: "wiki:Edinburgh Castle", wiki: "Edinburgh" },
      { name: "Scottish Highlands", pics: ["55dtx", "mvjfb", "phf9g", "1uvkay", "1uvkif", "2falqr", "2fhbud", "ski2", "qper1", "qt39y"], add: ["1wr7mh7", "jyopch", "1qfwk19", "1l45mky", "1x9cogu", "xpkmcm", "195xxhj"], lat: 56.6826, lng: -5.1023, category: "Mountain", sound: "mountains", zoom: 8,
        tagline: "Glens, lochs and big empty skies",
        description: "North of the cities, Scotland opens into bare mountains, dark lochs and weather that changes every ten minutes. Drive through the brooding valley of Glen Coe, look for the monster on Loch Ness, and climb Ben Nevis, at 1,345 metres the highest peak in Britain. Evenings mean a peat fire and a whisky.",
        bestTime: "May–Sep", image: "wiki:Eilean Donan", wiki: "Scottish Highlands" },
      { name: "Stonehenge", pics: ["xwip3", "xy85n", "3g9xz", "1czzkj", "3beu25", "2durm7"], add: ["1dy2jen", "83qddw", "2xa5ug", "1xdgxgt", "1jvgbh"], skip: ["y1pjhq"], lat: 51.1789, lng: -1.8262, category: "Historical", sound: "temple",
        tagline: "A 4,500-year-old stone circle on Salisbury Plain",
        description: "The great sarsen stones were raised on Salisbury Plain around 2500 BC, and the smaller bluestones were dragged some 240 kilometres from west Wales. Nobody knows exactly why. The circle lines up with sunrise on the summer solstice and sunset on the winter solstice, and on a windy grey day it still feels like a place of ceremony.",
        bestTime: "May–Sep", image: "wiki:Stonehenge" }
    ]
  },
  {
    id: "372", name: "Ireland", region: "Europe", soundProfile: "ocean",
    summary: "Green fields to the edge of Atlantic cliffs, and a pub with live music in every village.",
    hero: "wiki:Skellig Michael",
    places: [
      { name: "Dublin", pics: ["rz68q", "s5dxm", "y6sva", "1lhu7h", "3m0ve", "v84tn", "4avn7", "298i5a", "14zrcc"], add: ["xcybu4", "mv1ys5", "xjxck4", "62b5nf"], lead: ["Dubln - River Liffey with Ha'Penny Bridge in distance.jpg", "2008-05-23 The Temple Bar, Dublin, Ireland.jpg", "Ha'penny Bridge & River Liffey, Dublin (507194) (32094198423).jpg", "Long Room Interior, Trinity College Dublin, Ireland - Diliff.jpg", "Picture of The Temple Bar in Dublin - Photo du bar The Temple Bar à Dublin.jpg", "Ha'penny Bridge & River Liffey, Dublin (507190) (32906849205).jpg"], skip: ["yn2l5o", "f43qlv"], lat: 53.3498, lng: -6.2603, category: "City", sound: "city",
        tagline: "A literary capital with a pub on every corner",
        description: "Dublin is small, walkable and talkative. See the Book of Kells, an illuminated gospel made around the year 800, in the old library of Trinity College, then tour the Guinness brewery at St James's Gate, which has been brewing since 1759. At night, find a pub with a traditional session and stay for the fiddles.",
        bestTime: "May–Sep", image: "wiki:Ha'penny Bridge", wiki: "Dublin" },
      { name: "Cliffs of Moher", pics: ["1cvhkx", "33ko3i", "2iqr6j", "2anfe6", "2anhj3"], add: ["33qdiv", "1c320xg", "1u6p3pf", "1suhi21", "ieso1v", "qkk3w1"], skip: ["z1aayr"], lat: 52.9715, lng: -9.4309, category: "Nature", sound: "ocean",
        tagline: "Sheer Atlantic cliffs on the west coast",
        description: "For 14 kilometres the edge of County Clare drops straight into the Atlantic, reaching 214 metres at its highest point. Wind hammers the clifftop path, waves boom far below, and from April to July puffins nest on the ledges. On a clear day you can see the Aran Islands and the mountains of Connemara.",
        bestTime: "May–Sep", image: "wiki:Cliffs of Moher" },
      { name: "Ring of Kerry", pics: ["1ovnag", "nqr4u", "319q8j", "33zzny", "14zpd6"], add: ["bf0c09", "6smyub", "gxmwo5", "efuk7o"], skip: ["6q0pn6"], lat: 52.0599, lng: -9.5044, category: "Nature", sound: "ocean", zoom: 9,
        tagline: "A coastal loop through Ireland's wild southwest",
        description: "This 179-kilometre circuit runs past mountains, peat bogs, stone-walled fields and long empty beaches. Start among the lakes and oak woods of Killarney National Park, and look out to sea for Skellig Michael, a jagged rock where monks built a monastery of stone beehive huts more than a thousand years ago.",
        bestTime: "May–Sep", image: "wiki:Ring of Kerry" }
    ]
  },
  {
    id: "352", name: "Iceland", region: "Europe", soundProfile: "mountains",
    summary: "An island still being made: geysers, glaciers, black beaches and light that never behaves.",
    hero: "wiki:Skógafoss",
    places: [
      { name: "Reykjavik", add: ["s1wgn4", "17i2s2g", "tt83fq", "nu1ha7", "y9jiqb", "1rsbzu3"], lat: 64.1466, lng: -21.9426, category: "City", sound: "ocean",
        tagline: "The world's northernmost capital",
        description: "A small, colourful city of tin-clad houses facing a cold bay and a flat-topped mountain. Take the lift up the concrete tower of Hallgrímskirkja, shaped like a column of cooling basalt, for the view over the rooftops. Then do what locals do in any weather: sit in an outdoor geothermal pool and talk.",
        bestTime: "Jun–Aug (midnight sun), Sep–Mar (northern lights)", image: "wiki:Hallgrímskirkja", wiki: "Reykjavík" },
      { name: "Golden Circle", add: ["1vft05", "1q1y5ud", "18qz54s", "fg3z6s", "sqsz0l", "80lcmc"], aka: ["Gullfoss", "Geysir", "Thingvellir"], lat: 64.3271, lng: -20.1199, category: "Nature", sound: "mountains", zoom: 9,
        tagline: "A rift valley, a geyser and a thundering waterfall",
        description: "On this one-day loop from the capital you walk at Þingvellir in the crack between the North American and Eurasian plates, where Iceland's parliament first met in 930. At Geysir, Strokkur throws boiling water into the air every few minutes. And at Gullfoss a whole river drops in two steps into a narrow canyon, filling the air with spray.",
        bestTime: "Jun–Aug", image: "wiki:Gullfoss", wiki: "Golden Circle (Iceland)" },
      { name: "Blue Lagoon", pics: ["269lyh", "10yn7p", "sr6u7", "2020nh"], add: ["13ce0e5", "1d8kdo5", "ossf38"], skip: ["zbk247"], lat: 63.8804, lng: -22.4495, category: "Nature", sound: "mountains",
        tagline: "Milky blue water in a black lava field",
        description: "Geothermal seawater, rich in silica and kept at around 38°C, fills a pool surrounded by jagged black lava. Steam drifts across the surface and in winter you can float in the warmth with snow falling on your face. Volcanic activity on the peninsula has closed it at times in recent years, so check before you go.",
        bestTime: "Year-round", image: "wiki:Blue Lagoon (geothermal spa)" },
      { name: "Jökulsárlón", add: ["zb6psa", "xbi758", "k565sv", "n3i3ls", "1prmckm", "23b15b"], lat: 64.0784, lng: -16.2306, category: "Nature", sound: "ocean",
        tagline: "A lagoon of drifting icebergs",
        description: "Blue and white icebergs break off a glacier tongue and drift slowly across this deep lagoon toward the sea, creaking and rolling over as they melt. Seals swim between them. Across the road, chunks of ice wash up on a black sand beach and shine like glass, which is why it is called Diamond Beach.",
        bestTime: "Jun–Sep", image: "wiki:Jökulsárlón" }
    ]
  },
  {
    id: "578", name: "Norway", region: "Europe", soundProfile: "mountains",
    summary: "Fjords cut deep into the mountains, fishing villages above the Arctic Circle, and the northern lights.",
    hero: "wiki:Trolltunga",
    places: [
      { name: "Geirangerfjord", add: ["xyqqz7", "1yrnuu1", "nf5td1", "bpg64", "1vslecs", "dr0ajn"], lat: 62.1049, lng: 7.0950, category: "Nature", sound: "mountains", zoom: 10,
        tagline: "The classic Norwegian fjord",
        description: "A narrow arm of deep green water runs between rock walls more than a thousand metres high, with waterfalls like the Seven Sisters dropping straight into the fjord. Abandoned farms cling to ledges far above the water. See it from a boat or kayak, then drive the hairpins up to a viewpoint to look down on the ferries.",
        bestTime: "May–Sep", image: "wiki:Geirangerfjord" },
      { name: "Lofoten Islands", add: ["rume36", "62jf10", "11lyzua", "25e8yk", "wi7s7p", "mzfwis", "r2mmoz"], lat: 67.9324, lng: 13.0887, category: "Nature", sound: "ocean", zoom: 9,
        tagline: "Jagged peaks rising straight out of the Arctic sea",
        description: "Above the Arctic Circle, granite mountains stand directly out of the ocean, with red fishermen's cabins on stilts along the shore and racks of cod drying in the wind. In midsummer the sun does not set for weeks; from September to March the northern lights move over the peaks. The beaches are white, empty and very cold.",
        bestTime: "Jun–Aug (midnight sun), Sep–Mar (aurora)", image: "wiki:Reine, Norway", wiki: "Lofoten" },
      { name: "Bergen", add: ["1zjn7h", "1fe4fps", "tqrrlc", "1cncgoa", "gb7xo0"], lead: ["Bryggen, Bergen, Noruega, 2019-09-08, DD 115-117 PAN.jpg", "Fassaden in Bryggen, Bergen N.jpg"], skip: ["14yhknt", "6umtk0", "1960z26"], lat: 60.3913, lng: 5.3221, category: "City", sound: "ocean",
        tagline: "A wooden harbour town between seven mountains",
        description: "The leaning, brightly painted timber warehouses of Bryggen date from the days when Bergen was a Hanseatic trading port, and their narrow wooden alleys still smell of tar. Take the funicular up Mount Fløyen for the view, eat at the fish market, and bring a raincoat: this is one of the wettest cities in Europe.",
        bestTime: "May–Sep", image: "wiki:Bryggen", wiki: "Bergen" },
      { name: "Tromsø", add: ["g6j5th", "19r6mcb", "kze6y2", "1dl7gs7", "1cvemzh", "yiqpa4"], lat: 69.6492, lng: 18.9553, category: "Nature", sound: "mountains",
        tagline: "The Arctic city under the northern lights",
        description: "Far north of the Arctic Circle, Tromsø is one of the best places in the world to see the aurora, which can ripple green and violet across the whole sky on clear winter nights. By day there is dog sledding, whale watching in the fjords, and the white peaks of the Arctic Cathedral across the bridge.",
        bestTime: "Sep–Mar (northern lights)", image: "wiki:Arctic Cathedral", wiki: "Tromsø" }
    ]
  },
  {
    id: "276", name: "Germany", region: "Europe", soundProfile: "city",
    summary: "A capital that reinvents itself, fairy-tale castles in the Alps, and beer gardens under chestnut trees.",
    hero: "wiki:Cologne Cathedral",
    places: [
      { name: "Berlin", pics: ["hs8ng", "ht76f", "i39gk", "mcghg", "nosxo", "o2rl7", "svdwb", "uh3lp", "1tfllf", "392dl9", "3cifsv"], add: ["f9wgl7", "1jggmdv", "y9upis"], skip: ["s8mgz5", "15sdftn", "79jljf"], lat: 52.5200, lng: 13.4050, category: "City", sound: "city",
        tagline: "A capital shaped by its own history",
        description: "Berlin wears the twentieth century openly. Walk through the Brandenburg Gate, along the 1.3-kilometre painted stretch of the Wall at the East Side Gallery, and up the glass dome of the Reichstag. Then spend the rest of the day on Museum Island or in a canal-side bar, because this is also one of Europe's most relaxed and creative cities.",
        bestTime: "May–Sep", image: "wiki:Brandenburg Gate", wiki: "Berlin" },
      { name: "Neuschwanstein Castle", pics: ["xb4h6", "xbdqg", "1xzimv", "2bwetx", "1yy2tp", "t81xv", "2qfime"], add: ["gc94jv", "1q071v3", "1itgz1x", "15p0rkh", "orfotn"], skip: ["wx7wj5"], lat: 47.5576, lng: 10.7498, category: "Historical", sound: "mountains",
        tagline: "The castle that inspired the fairy tales",
        description: "King Ludwig II of Bavaria began this white limestone fantasy in 1869 on a crag above an Alpine gorge, and it was still unfinished when he died. Its towers helped inspire Disney's Sleeping Beauty castle. For the famous view, walk to the Marienbrücke, a footbridge strung across the ravine behind it.",
        bestTime: "May–Oct", image: "wiki:Neuschwanstein Castle" },
      { name: "Munich", pics: ["3u7w6", "8yzx6", "eusyr", "f3p6c", "ger2y", "giwlm", "fu5vq", "ga3wx", "2wl0m7", "1z4mj5", "2ya6yd", "37267s"], add: ["jblqkd", "jye5m7"], skip: ["13yhi85"], lat: 48.1351, lng: 11.5820, category: "City", sound: "city",
        tagline: "Beer gardens, baroque churches and the Alps nearby",
        description: "On Marienplatz the town hall's glockenspiel figures dance above the crowd, and in the English Garden surfers ride a standing wave on a city stream. Summer evenings belong to the beer gardens, where you bring your own food and share long tables under chestnut trees. Oktoberfest takes over from late September.",
        bestTime: "May–Oct", image: "wiki:Marienplatz", wiki: "Munich" }
    ]
  },
  {
    id: "528", name: "Netherlands", region: "Europe", soundProfile: "city",
    summary: "Canals, bicycles, Golden Age paintings and tulip fields below sea level.",
    hero: "wiki:Zaanse Schans",
    places: [
      { name: "Amsterdam", pics: ["2plqo", "m77f0", "uhk7o", "x8njj", "15rdny", "ojzk3", "yq2bt", "1kwq9t", "2jxnhq", "1ohxb", "l1thj"], add: ["ihg8z7"], skip: ["1t9u9vb", "1djj1ur", "8wx701", "13r71qv"], lat: 52.3676, lng: 4.9041, category: "City", sound: "city",
        tagline: "A seventeenth-century city of canals",
        description: "Rings of canals lined with tall, narrow merchant houses, many of them leaning slightly, and more bicycles than people. See Rembrandt's Night Watch in the Rijksmuseum and the sunflowers in the Van Gogh Museum, visit the Anne Frank House, then rent a bike or a small boat and see the city the way it was designed to be seen.",
        bestTime: "Apr–May (tulips), Jun–Sep", image: "wiki:Keizersgracht", wiki: "Amsterdam" },
      { name: "Keukenhof", pics: ["y1l0t", "yb5co", "1l74ix", "elngj"], add: ["1qvomkl", "1jb57h0", "bv9vss", "1i6efq8", "kpef6q", "1d352st"], lat: 52.2697, lng: 4.5469, category: "Nature", sound: "rainforest",
        tagline: "Seven million spring bulbs in bloom",
        description: "For about eight weeks each spring this garden near Lisse opens with roughly seven million tulips, daffodils and hyacinths planted by hand in sweeping bands of colour. The scent of hyacinth hangs in the air. Around the park, the commercial bulb fields stripe the flat landscape in red, yellow and purple.",
        bestTime: "Mid-Apr (peak bloom)", image: "wiki:Keukenhof" },
      { name: "Kinderdijk", pics: ["30mse", "xulbd", "1igalz", "11fs7w", "13vlw1", "2h8a44", "quxy5", "12ee9u"], add: ["k3r65c", "tugktz", "752d59"], skip: ["x8c2mk", "168m5j2"], lat: 51.8839, lng: 4.6364, category: "Historical", sound: "mountains",
        tagline: "Nineteen windmills on the polder",
        description: "A row of nineteen windmills built around 1740 stands along reed-lined canals, where they once pumped water out of land lying below sea level. It is the largest group of old windmills in the country. Walk or cycle the dikes early or late in the day, when the sails and the big Dutch sky reflect in the still water.",
        bestTime: "Apr–Oct", image: "wiki:Kinderdijk" }
    ]
  },
  {
    id: "756", name: "Switzerland", region: "Europe", soundProfile: "mountains",
    summary: "The Alps at their most dramatic, reached by some of the world's most scenic trains.",
    hero: "wiki:Eiger",
    places: [
      { name: "Zermatt & the Matterhorn", pics: ["6dk4p", "9nob1", "l4nz7", "ng923", "5bm0s", "1lbxip", "2et50p", "2yykag"], add: ["1nem5bk", "s4yw8x", "1u06spo", "2z9bkb", "h9622y", "2r4xxs"], lat: 46.0207, lng: 7.7491, category: "Mountain", sound: "mountains",
        tagline: "The most recognisable mountain in the Alps",
        description: "The Matterhorn's crooked pyramid, 4,478 metres high, stands alone above the car-free village of Zermatt. Take the cog railway up to Gornergrat at 3,089 metres for a panorama of glaciers and four-thousand-metre peaks. At dawn the summit catches the first pink light while the valley is still dark and silent.",
        bestTime: "Jun–Sep (hiking), Dec–Apr (skiing)", image: "wiki:Matterhorn", wiki: "Zermatt" },
      { name: "Jungfrau Region", pics: ["202sp", "4f2al", "4icym", "cvwx6", "dm1o1", "202qvt", "23o9uu", "29lxg7"], add: ["1jkkr5b", "1xt1651", "1v3er1l", "13vf9fo", "1nybyba", "1xc9crh"], skip: ["hlz5nz"], lat: 46.5936, lng: 7.9091, category: "Mountain", sound: "mountains", zoom: 10,
        tagline: "Waterfalls, cowbells and the wall of the Eiger",
        description: "The Lauterbrunnen valley is a deep, flat-floored trench with 72 waterfalls falling from its cliffs, including the nearly 300-metre Staubbach. Above it, trains and cable cars climb to villages with no road access and on to the Jungfraujoch, the highest railway station in Europe at 3,454 metres. The sound of the place is cowbells and running water.",
        bestTime: "Jun–Sep", image: "wiki:Lauterbrunnen" },
      { name: "Lucerne", pics: ["yo2t", "qqic5", "113gfy", "1al5qc", "1ct737", "2t8inq", "w9uqu"], add: ["bioxj9", "141whnd", "1djhx78", "ltzq8q", "idd2ka"], lat: 47.0502, lng: 8.3093, category: "City", sound: "city",
        tagline: "A lakeside town under the Alps",
        description: "Lucerne's wooden Chapel Bridge, first built in the 1300s and lined with painted panels under its roof, crosses the river beside an old stone water tower. Paddle steamers leave from the quay for a lake ringed with mountains, and the world's steepest cogwheel railway climbs Mount Pilatus just outside town.",
        bestTime: "May–Sep", image: "wiki:Kapellbrücke", wiki: "Lucerne" }
    ]
  },
  {
    id: "040", name: "Austria", region: "Europe", soundProfile: "city",
    summary: "Imperial palaces, coffee houses and concert halls, with the Alps filling the rest of the map.",
    hero: "wiki:Hohensalzburg Fortress",
    places: [
      { name: "Vienna", pics: ["jzpvv", "1g4djm", "2tb2", "hxgan", "jp22y", "2vwyd1", "15z8hv", "1jsz7r", "1jvfhu", "kmygw", "1j0dut", "1ru6ta", "1df361"], add: ["h5cy9w", "1dxf74f", "1l9cvtk"], skip: ["3sbs5x", "1jhlxdw", "pb1f5z", "a4fbaz", "m2tcua"], lat: 48.2082, lng: 16.3738, category: "City", sound: "city",
        tagline: "The imperial capital of music and coffee",
        description: "For centuries the seat of the Habsburgs, Vienna is a city of palaces, opera and unhurried coffee houses where you can sit for hours over one cup and a slice of Sachertorte. Tour the 1,441-room Schönbrunn Palace and its gardens, stand under the patterned tile roof of St Stephen's Cathedral, and get a standing ticket for the State Opera.",
        bestTime: "Apr–Jun, Sep–Oct, Dec (Christmas markets)", image: "wiki:Schönbrunn Palace", wiki: "Vienna" },
      { name: "Salzburg", pics: ["9s9ii", "13jdqw", "1ckkr5", "1cko0e", "20l6rd", "20nomi", "2iy47a", "1gz7jr", "2ej1ry", "12s617"], add: ["4oohjc", "44qdfp", "19wzklq", "rj4rzx", "1o7en08"], lat: 47.8095, lng: 13.0550, category: "Culture", sound: "city",
        tagline: "Mozart's baroque hometown",
        description: "A compact old town of domes and church spires sits between a fast green river and a cliff topped by a white fortress. Mozart was born here in 1756, in a yellow house on the Getreidegasse you can still visit. Fans of The Sound of Music will recognise the Mirabell Gardens, and the Alps begin at the edge of town.",
        bestTime: "May–Sep, Dec", image: "wiki:Salzburg" },
      { name: "Hallstatt", pics: ["1rtvtx", "2zy6ot", "1rtvtz", "1rtvu5", "1o1sk", "zx9dw", "143hve", "2p3ypl", "10se4y"], add: ["32myxz", "18y5szx", "11oe20h", "rx0x3x", "18xecdw", "1e4w11m"], skip: ["1arr6gf"], lat: 47.5622, lng: 13.6493, category: "Nature", sound: "mountains",
        tagline: "A lakeside village under the mountains",
        description: "Hallstatt is a single row of wooden houses and a slim church spire squeezed between a dark Alpine lake and a steep mountainside. People have mined salt above the village for about 7,000 years, and you can still ride into the mine. Come early or stay overnight to see the lake perfectly still, before the day visitors arrive.",
        bestTime: "May–Oct", image: "wiki:Hallstatt" }
    ]
  },
  {
    id: "203", name: "Czechia", aka: ["Czech Republic"], region: "Europe", soundProfile: "city",
    summary: "Gothic spires, castle towns on river bends, and the best beer in the world for the price.",
    hero: "wiki:Old Town Square",
    places: [
      { name: "Prague", add: ["phbesd", "1fxdf2g", "1ey94o7", "1cufg1r"], skip: ["18yp7a"], lat: 50.0755, lng: 14.4378, category: "City", sound: "city",
        tagline: "The city of a hundred spires",
        description: "Prague escaped the worst of the wars, so its medieval core is intact. Cross the Charles Bridge, begun in 1357 and lined with thirty statues, early in the morning before the crowds. Watch the Astronomical Clock strike the hour, as it has since 1410, then climb to the castle above the river and reward yourself with a cold pilsner.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Charles Bridge", wiki: "Prague" },
      { name: "Český Krumlov", pics: ["15a9ih", "1by6ea", "7kvz6", "rjni4"], add: ["unxg1i", "1k3dit6", "15kzvlp", "1its2at", "1w063h3", "1eefbli", "baj1gh"], lat: 48.8127, lng: 14.3175, category: "Historical", sound: "city",
        tagline: "A storybook town in a river bend",
        description: "The Vltava River loops almost completely around this small town of red roofs and crooked lanes, with a huge castle and its painted round tower standing above. Little has changed in the centre since the 1700s. In summer people float lazily past the old walls on rafts and canoes.",
        bestTime: "May–Sep", image: "wiki:Český Krumlov" },
      { name: "Kutná Hora", pics: ["k2fo2", "30dzjn", "2d8jm7"], add: ["11ovdri", "iytb30", "i1kwe7"], lat: 49.9619, lng: 15.2883, category: "Historical", sound: "temple",
        tagline: "A silver town and a chapel made of bones",
        description: "Medieval silver mines made Kutná Hora one of the richest towns in Bohemia, and paid for the soaring Gothic church of St Barbara. Its strangest sight is the Sedlec Ossuary, a small chapel decorated with the bones of tens of thousands of people, including a chandelier said to contain every bone in the human body.",
        bestTime: "Apr–Oct", image: "wiki:Sedlec Ossuary", wiki: "Kutná Hora" }
    ]
  },
  {
    id: "348", name: "Hungary", region: "Europe", soundProfile: "city",
    summary: "Grand cafés, thermal baths and a capital split in two by the Danube.",
    hero: "wiki:Széchenyi Chain Bridge",
    places: [
      { name: "Budapest", add: ["1mpoed4", "1puqh0p"], skip: ["dbqz0", "1yjg3zu"], lat: 47.4979, lng: 19.0402, category: "City", sound: "city",
        tagline: "The Pearl of the Danube",
        description: "Hilly Buda and flat Pest face each other across the river, joined by the Chain Bridge and watched over by the neo-Gothic Parliament. The city sits on thermal springs: soak in the steaming outdoor pools of the Széchenyi Baths, where regulars play chess in the water even in winter. After dark, head to the ruin bars built in abandoned courtyards of the old Jewish Quarter.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Hungarian Parliament Building", wiki: "Budapest" },
      { name: "Lake Balaton", pics: ["ht3bv", "305lzs", "1kzfwa"], add: ["jzfwy6", "leffga", "z55zh9", "l4fmiw", "oh0vwa"], lat: 46.9130, lng: 17.8930, category: "Nature", sound: "ocean", zoom: 9,
        tagline: "Central Europe's inland sea",
        description: "The largest lake in Central Europe is long, shallow and warm, with water the colour of milky jade. Hungarians spend their summers here swimming, sailing and eating fried fish at lakeside stalls. On the north shore, the Tihany peninsula has an abbey above lavender fields, and the volcanic hills of Badacsony are covered in vineyards.",
        bestTime: "Jun–Aug", image: "wiki:Lake Balaton" },
      { name: "Eger", add: ["q4v0vh", "11qk4bc", "1btzzmm", "sk6ted"], skip: ["rnq1ex"], lat: 47.9025, lng: 20.3772, category: "Historical", sound: "city",
        tagline: "A baroque wine town with a hero's castle",
        description: "Eger's castle is famous for holding off a much larger Ottoman army in 1552, and the town below is a pretty tangle of baroque streets with one slender Ottoman minaret still standing. A short walk away, in the Valley of the Beautiful Women, dozens of cellars cut into the rock pour the local red blend known as Bull's Blood.",
        bestTime: "May–Oct", image: "wiki:Eger minaret", wiki: "Eger" }
    ]
  },
  {
    id: "191", name: "Croatia", region: "Europe", soundProfile: "ocean",
    summary: "Walled stone cities on the Adriatic, a thousand islands, and waterfalls in the forest.",
    hero: "wiki:Zlatni Rat",
    places: [
      { name: "Dubrovnik", add: ["1hbkpeh", "1k74b00", "2yyxa0", "1s2xbvj", "1b9uit9", "gkgcbw", "q9ukl"], lat: 42.6507, lng: 18.0944, category: "Historical", sound: "ocean",
        tagline: "The Pearl of the Adriatic",
        description: "A complete medieval city of pale stone and terracotta roofs, enclosed by walls nearly two kilometres around that you can walk along the top of. The limestone main street has been polished to a shine by centuries of feet. Swim off the rocks below the walls, then take the cable car up Mount Srđ for sunset.",
        bestTime: "May–Jun, Sep–Oct", image: "wiki:Walls of Dubrovnik", wiki: "Dubrovnik" },
      { name: "Plitvice Lakes", add: ["bwwf45", "t935ds", "1q2rhp8", "1fo2yng", "fe5a8", "1qbmo4y"], lat: 44.8654, lng: 15.5820, category: "Nature", sound: "rainforest",
        tagline: "Sixteen lakes joined by waterfalls",
        description: "In a forested valley, sixteen lakes in shades of turquoise and emerald spill into one another over natural dams of travertine. Wooden boardwalks carry you just above the surface, close enough to see trout hanging in the clear water, with the sound of falling water all around. It has been a UNESCO site since 1979.",
        bestTime: "May–Jun, Sep–Oct", image: "wiki:Plitvice Lakes National Park" },
      { name: "Split", add: ["j065eg", "lmvo27", "x96thf", "llxx95", "wvgrgh", "j03m0c"], lead: ["Split - pogled na rivu.jpg"], skip: ["18ith8j", "vechsu"], lat: 43.5081, lng: 16.4402, category: "Historical", sound: "ocean",
        tagline: "A city living inside a Roman palace",
        description: "The Roman emperor Diocletian built his retirement palace here around AD 305, and the city simply grew into it. Today a few thousand people live within its walls, with cafés in the old courtyard, laundry strung between Roman columns, and bars in the vaulted cellars. Ferries leave from the harbour in front for the islands of Hvar and Brač.",
        bestTime: "May–Jun, Sep–Oct", image: "wiki:Diocletian's Palace", wiki: "Split, Croatia" }
    ]
  },
  {
    id: "300", name: "Greece", region: "Europe", soundProfile: "ocean",
    summary: "Whitewashed islands in a deep blue sea, and the ruins where Western civilisation started.",
    hero: "wiki:Navagio",
    places: [
      { name: "Santorini", add: ["kzjyza", "1j14dkw", "1t7mh9q", "cnsl52", "1r0wd3n", "of93qb"], lead: ["1000 Three domes of Oia in Santorini Photo by Giles Laurent.jpg", "Oia - Santorini - Greece - 16.jpg", "07-17-2012 - Oia - Santorini - Greece - 15.jpg", "Thira (Santorini) - Ia-01.jpg"], skip: ["1wwlsmw", "cpnons", "1sht8jd", "xu2u9j"], lat: 36.3932, lng: 25.4615, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "White villages on the rim of a drowned volcano",
        description: "Around 3,600 years ago a massive eruption blew out the centre of this island, leaving a crescent of cliffs around a sea-filled caldera. White cube houses and blue-domed churches now line the rim. Walk the clifftop path from Fira to Oia for sunset, swim off the black and red volcanic beaches, and try the crisp local Assyrtiko wine.",
        bestTime: "May–Jun, Sep–Oct", image: "wiki:Oia, Greece", wiki: "Santorini" },
      { name: "Athens", add: ["xwx0tc", "immqkj", "160bfqr", "57fun2", "1gwekx0", "1l9po55"], lat: 37.9838, lng: 23.7275, category: "Historical", sound: "city",
        tagline: "The birthplace of democracy",
        description: "The Parthenon, built between 447 and 432 BC, stands on the rock of the Acropolis above a loud, sun-bleached modern city. Climb up early, before the marble starts to radiate heat, then see the original sculptures in the Acropolis Museum below. Evenings are for the tavernas of Plaka, with the temple lit up overhead.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Acropolis of Athens", wiki: "Athens" },
      { name: "Meteora", add: ["17lc3bm", "wh0ya6", "9fc1k", "m4ivbw", "2pvvoq"], skip: ["1ed9q6e"], lat: 39.7217, lng: 21.6306, category: "Culture", sound: "temple",
        tagline: "Monasteries balanced on pillars of rock",
        description: "Giant columns of sandstone rise hundreds of metres from the plain of Thessaly, and on top of them monks built monasteries from the 1300s onward, hauling up supplies and each other in nets. Six are still active and open to visitors by steps cut into the rock. At sunset the pillars glow and bells carry across the valley.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Meteora" }
    ]
  },
  {
    id: "792", name: "Turkey", aka: ["Türkiye"], region: "Europe & Asia", soundProfile: "city",
    summary: "Where two continents meet: imperial mosques, cave towns and ruins from every age.",
    hero: "wiki:Blue Mosque, Istanbul",
    places: [
      { name: "Istanbul", add: ["l27j3s", "nish8y", "htjbhf", "87h3m9"], skip: ["1gnf036", "7ftc2n", "pt00gt", "pjn390"], lat: 41.0082, lng: 28.9784, category: "City", sound: "city",
        tagline: "One city on two continents",
        description: "The call to prayer echoes between minarets, ferries criss-cross the Bosphorus, and seagulls follow them from Europe to Asia and back. Stand under the vast dome of Hagia Sophia, completed in 537, lose your bearings among the roughly 4,000 shops of the Grand Bazaar, and drink tea from a tulip-shaped glass on the water at dusk.",
        bestTime: "Apr–May, Sep–Oct", image: "wiki:Hagia Sophia", wiki: "Istanbul" },
      { name: "Cappadocia", add: ["juet04", "1pi3d95", "ak3rp6", "m73nhh"], lead: ["Hot air balloons over valleys near Göreme, Cappadocia at dawn 2.JPG", "Cappadocia Aerial View Landscape.jpg", "Hot air balloons over valleys near Göreme, Cappadocia at dawn 4.JPG"], skip: ["34y4v7", "qppef9"], lat: 38.6431, lng: 34.8289, category: "Nature", sound: "desert", zoom: 11,
        tagline: "Fairy chimneys and hot-air balloons at dawn",
        description: "Volcanic ash hardened into soft rock, and wind and water carved it into cones, pillars and honeycombed cliffs. People hollowed out homes, churches painted with frescoes, and entire underground cities. At sunrise, dozens of hot-air balloons lift off together and drift silently over the valleys, with only the roar of burners breaking the quiet.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Cappadocia" },
      { name: "Pamukkale", pics: ["287yvo", "14lry8", "14lrya", "1k36v5", "35xhbk", "35xh9t", "35xgml", "35xhb0", "35xhbd"], add: ["1uubxb", "rv09uh", "1fecn45", "u4taby", "18bng3k"], skip: ["6pe1uw"], lat: 37.9204, lng: 29.1187, category: "Nature", sound: "desert",
        tagline: "White terraces of mineral water",
        description: "Hot springs rich in calcium have spilled down this hillside for thousands of years, leaving bright white terraces filled with pale blue pools. You walk up barefoot through the warm water. At the top lie the ruins of the Roman spa city of Hierapolis, including a pool where you can swim over fallen marble columns.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Pamukkale" },
      { name: "Ephesus", pics: ["y24x9", "18vif9", "2eg4bm"], add: ["a1ip03", "1ahnpxv", "1jmjiw8", "v83asx", "nj3yz5"], skip: ["bodxei"], lat: 37.9411, lng: 27.3417, category: "Historical", sound: "temple",
        tagline: "One of the best-preserved cities of the ancient world",
        description: "Walk down a marble street grooved by chariot wheels, past the two-storey facade of the Library of Celsus, to a theatre that held around 25,000 people. Ephesus was one of the great ports of the Roman Empire before its harbour silted up. Nearby stood the Temple of Artemis, one of the Seven Wonders of the Ancient World.",
        bestTime: "Apr–May, Sep–Oct", image: "wiki:Ephesus" }
    ]
  },

  /* ---------- Africa ---------- */
  {
    id: "818", name: "Egypt", region: "Africa", soundProfile: "desert",
    summary: "Five thousand years of history along a single river, with the desert pressing in on both sides.",
    hero: "wiki:Great Sphinx of Giza",
    places: [
      { name: "Cairo & the Giza Pyramids", pics: ["2091uj", "78t4d", "alxrp", "26x7qs", "11e1cc", "741qu"], add: ["1az3vzn", "rkm2j3", "3cquc8", "1yuqpve", "fktzfm", "d3jmxo"], skip: ["1eswpel"], aka: ["Pyramids of Giza", "Great Pyramid", "Sphinx"], lat: 29.9792, lng: 31.1342, category: "Historical", sound: "desert",
        tagline: "The last standing wonder of the ancient world",
        description: "The Great Pyramid was built around 2560 BC from some 2.3 million stone blocks, and it remained the tallest structure on Earth for nearly four thousand years. Stand at its base and the scale is hard to take in. The Sphinx keeps watch nearby, and at the edge of the plateau the city of Cairo begins, loud and endless, with the Nile running through it.",
        bestTime: "Oct–Apr (cooler months)", image: "wiki:Giza pyramid complex" },
      { name: "Luxor", add: ["1m8p2x3", "h01n4h", "tru2gm", "yxqkkh", "1xq1cu1"], lat: 25.6872, lng: 32.6396, category: "Historical", sound: "temple",
        tagline: "Ancient Thebes, city of temples and tombs",
        description: "On the east bank, the temple of Karnak has a hall of 134 giant columns carved from top to bottom. Across the Nile, in the dry cliffs of the Valley of the Kings, pharaohs were buried in painted tombs whose colours are still bright; Tutankhamun's was found here in 1922. Go at sunrise, when the light is soft and the heat has not arrived.",
        bestTime: "Oct–Apr (cooler months)", image: "wiki:Karnak", wiki: "Luxor" },
      { name: "Abu Simbel", add: ["15wuf8t", "1s1rkmr", "4z1w88"], lat: 22.3372, lng: 31.6258, category: "Historical", sound: "temple",
        tagline: "Ramesses II carved into a mountain",
        description: "Four seated statues of Ramesses II, each about 20 metres tall, guard a temple cut into the rock near the Sudanese border. In the 1960s the entire monument was sawn into blocks and moved uphill to save it from the rising waters of Lake Nasser. Twice a year, the dawn sun reaches down the corridor to light the statues in the inner sanctuary.",
        bestTime: "Oct–Apr (cooler months)", image: "wiki:Abu Simbel" },
      { name: "Red Sea Reefs", add: ["bz9u7o", "1hw4drh", "1h4qxk0", "16txkhe"], skip: ["1c04wgh", "1n411ni"], lat: 27.7300, lng: 34.2500, category: "Beach", sound: "ocean", zoom: 9,
        tagline: "Coral walls where the desert meets the sea",
        description: "Bare desert mountains run straight down to some of the clearest, warmest water in the world. At Ras Mohammed, at the tip of the Sinai, coral walls drop away into deep blue and are crowded with fish in every colour. You can snorkel from the beach and see more in ten minutes than on most reefs in a day.",
        bestTime: "Mar–May, Sep–Nov", image: "wiki:Sharm El Sheikh" }
    ]
  },
  {
    id: "504", name: "Morocco", region: "Africa", soundProfile: "desert",
    summary: "Walled medinas, snow on the Atlas, and the first dunes of the Sahara.",
    hero: "wiki:Aït Benhaddou",
    places: [
      { name: "Marrakech", add: ["1uioj70", "1uvmddn", "1r1fuzd", "pxetuq", "1gco02b", "1d08quj"], skip: ["1imcm57"], lat: 31.6295, lng: -7.9811, category: "City", sound: "city",
        tagline: "The Red City",
        description: "As the sun goes down, the great square of Jemaa el-Fnaa fills with smoke from food stalls, drummers, storytellers and snake charmers, under the 77-metre minaret of the Koutoubia. Behind it the souks are a maze of spice, leather and brass. When it gets too much, step through a plain door into the calm courtyard of a riad, or the cobalt blue Majorelle Garden.",
        bestTime: "Mar–May, Sep–Nov", image: "wiki:Jemaa el-Fnaa", wiki: "Marrakesh" },
      { name: "Sahara Desert", add: ["1g3nwxf", "k0skr9", "m98nim", "1mv0g9i", "1s3t7hd"], aka: ["Merzouga", "Erg Chebbi"], lat: 31.0994, lng: -4.0127, category: "Nature", sound: "desert", zoom: 10,
        tagline: "The dunes of Erg Chebbi",
        description: "Near the village of Merzouga, orange dunes rise up to 150 metres out of flat black stone desert. Ride a camel in as the light turns the sand from gold to deep red, then sleep in a camp among the dunes. The silence at night is complete, and the sky has more stars than you knew were there.",
        bestTime: "Oct–Apr", image: "wiki:Erg Chebbi" },
      { name: "Fes", add: ["ocwqe3", "1jfu6vd", "1fbbzg6", "kashc8", "1iebrwy", "13wu30d"], skip: ["bgdeot"], lat: 34.0181, lng: -5.0078, category: "Historical", sound: "city",
        tagline: "A medieval city that still works like one",
        description: "The old medina of Fes is one of the largest car-free urban areas in the world: thousands of alleys where goods still move by donkey and handcart. From a balcony you can look down on the Chouara tannery, where hides are dyed in stone vats of colour as they have been for centuries. The al-Qarawiyyin, founded in 859, is often called the oldest university still operating.",
        bestTime: "Mar–May, Sep–Nov", image: "wiki:Chouara Tannery", wiki: "Fez, Morocco" },
      { name: "Chefchaouen", add: ["hy3a92", "auf30p", "105vda6", "45l4m4", "1yisupo", "1le9uoh", "1wfisho"], lat: 35.1688, lng: -5.2636, category: "Culture", sound: "mountains",
        tagline: "The blue city in the Rif Mountains",
        description: "Founded in 1471, this small mountain town is painted in every shade of blue, from pale sky to deep indigo: walls, steps, doors and flowerpots. It is quiet, cool and made for wandering without a plan. Climb to the Spanish Mosque on the hill opposite for sunset over the rooftops.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Chefchaouen" }
    ]
  },
  {
    id: "404", name: "Kenya", region: "Africa", soundProfile: "jungle",
    summary: "The classic safari: open savanna, big cats, and elephants under Kilimanjaro.",
    hero: "wiki:Mount Kenya",
    places: [
      { name: "Maasai Mara", add: ["1ic3hvf", "kg7g1c", "14972au", "189pqcc", "bffsjl", "1sy2t3z", "wxrzvl"], lat: -1.4900, lng: 35.1400, category: "Nature", sound: "jungle", zoom: 9,
        tagline: "The stage of the Great Migration",
        description: "Rolling golden grassland dotted with flat-topped acacias, and more lions, cheetahs and leopards than almost anywhere in Africa. From roughly July to October, more than a million wildebeest and zebra arrive from the Serengeti and plunge across the Mara River past waiting crocodiles. Dawn game drives start in the cold and end with coffee in the bush.",
        bestTime: "Jul–Oct (migration)", image: "wiki:Maasai Mara" },
      { name: "Amboseli", pics: ["1o9qzq", "1c9mg1", "2hxusa", "1o9ras", "2hyybb", "1o9qfr"], add: ["4q2t9r", "l5vui4", "1xyflcy", "jpyin8", "1u7j393", "fs5jj6"], lat: -2.6527, lng: 37.2606, category: "Nature", sound: "jungle", zoom: 10,
        tagline: "Elephants in front of Kilimanjaro",
        description: "Amboseli is known for its big elephant herds, which walk across dusty plains and green swamps with the snow-capped dome of Kilimanjaro rising behind them, just over the border in Tanzania. The mountain is clearest at dawn and dusk, before and after the clouds gather.",
        bestTime: "Jun–Oct, Jan–Feb", image: "wiki:Mount Kilimanjaro", wiki: "Amboseli National Park" },
      { name: "Lamu", pics: ["wtd3s", "1jttal", "3337v1", "1jttdu", "3338ks"], add: ["1fajdsg", "1d5o7mt"], lead: ["Lamu 2015-76 (24088960521).jpg", "Usita wa Mui Lamu Old Town.jpg", "Lamu old town street.jpg"], lat: -2.2717, lng: 40.9020, category: "Culture", sound: "ocean",
        tagline: "A Swahili island town without cars",
        description: "Lamu Old Town is the oldest and best-preserved Swahili settlement in East Africa, a UNESCO site of coral-stone houses, carved wooden doors and alleys too narrow for cars. Transport is by donkey or by dhow, the traditional sailing boat. Life moves at walking pace, between the mosque, the waterfront and the beach.",
        bestTime: "Jul–Oct, Dec–Mar", image: "wiki:Lamu Island" }
    ]
  },
  {
    id: "834", name: "Tanzania", region: "Africa", soundProfile: "jungle",
    summary: "The Serengeti plains, Africa's highest mountain, and the spice island of Zanzibar.",
    hero: "wiki:Lake Manyara National Park",
    places: [
      { name: "Serengeti", add: ["wxrzvl", "1a41csu", "11ivlj7", "1xt5jd", "4rua1v", "t7fqrc", "1660tkx"], lat: -2.3333, lng: 34.8333, category: "Nature", sound: "jungle", zoom: 8,
        tagline: "The endless plain",
        description: "The name comes from a Maasai word for a land that runs on forever, and that is exactly how it looks: grass to the horizon, broken only by granite outcrops where lions sleep. Over a million wildebeest circle through the park each year following the rains. In January and February thousands of calves are born every day on the southern plains.",
        bestTime: "Jun–Oct (dry), Jan–Feb (calving)", image: "wiki:Serengeti National Park" },
      { name: "Mount Kilimanjaro", pics: ["1j8kt7", "1s86ne", "1z53vl", "1c9mgx"], add: ["1h0yx57", "1o65775", "ruhfj", "pp9ay1", "14o5hfs"], lat: -3.0674, lng: 37.3556, category: "Mountain", sound: "mountains", zoom: 9,
        tagline: "The roof of Africa",
        description: "At 5,895 metres Kilimanjaro is the highest mountain in Africa and the tallest free-standing mountain in the world. No ropes are needed to climb it, only time and lungs. The trek passes through rainforest, moorland and alpine desert before the final cold night push to the glaciers at Uhuru Peak for sunrise.",
        bestTime: "Jan–Mar, Jun–Oct", image: "wiki:Mount Kilimanjaro" },
      { name: "Zanzibar", add: ["9iyulf", "5g2g0d", "1g1xlrs", "1txm7ij"], lead: ["Puerto de Stone Town, Zanzíbar, Tanzania, 2024-05-31, DD 01.jpg", "White sandy beach at Nungwi, Zanzibar.jpg", "Departamento de museos y antigüedades, Stone Town, Zanzíbar, Tanzania, 2024-05-31, DD 33-35 HDR.jpg", "Water at Nungwi, Kaskazini A, Unguja North, Zanzibar.jpg"], skip: ["1bfiz2", "14ki51s", "1dc2s65"], lat: -6.1622, lng: 39.1921, category: "Beach", sound: "ocean", zoom: 10,
        tagline: "Spice island in the Indian Ocean",
        description: "Stone Town is a tangle of alleys, carved doors and balconies that mixes Swahili, Arab, Indian and European history, and it smells of cloves and the sea. At sunset the Forodhani Gardens fill with food stalls grilling seafood. Beyond town, the east and north coasts have white sand and water in three shades of blue.",
        bestTime: "Jun–Oct, Dec–Feb", image: "wiki:Stone Town", wiki: "Zanzibar" },
      { name: "Ngorongoro Crater", pics: ["1zmu21", "38tcvx", "38tf5n", "38syi3"], add: ["chvlhj", "18sd843", "1we0q2x", "n1yh14"], lat: -3.1618, lng: 35.5877, category: "Nature", sound: "jungle", zoom: 10,
        tagline: "A lost world inside a volcano",
        description: "A huge volcano collapsed here millions of years ago, leaving a crater about 600 metres deep and nearly 20 kilometres across. Its floor is a natural enclosure for around 25,000 large animals, including lions, elephants and some of the last black rhinos in Tanzania. You drive down the wall at dawn, through cloud, into the grassland below.",
        bestTime: "Jun–Oct (dry season)", image: "wiki:Ngorongoro Conservation Area" }
    ]
  },
  {
    id: "710", name: "South Africa", region: "Africa", soundProfile: "ocean",
    summary: "A city under a flat-topped mountain, wild coastline, and some of Africa's best wildlife.",
    hero: "wiki:Blyde River Canyon",
    places: [
      { name: "Cape Town", add: ["zkh7rj", "1v2hjtp", "1tooly7"], lat: -33.9249, lng: 18.4241, category: "City", sound: "ocean",
        tagline: "A city between a mountain and two oceans",
        description: "Table Mountain, more than a kilometre high and often draped in a cloth of cloud, stands directly behind the city. Take the cable car up, walk the bright painted streets of Bo-Kaap, and drive the peninsula to Cape Point, stopping at Boulders Beach to see African penguins waddling between the granite rocks.",
        bestTime: "Nov–Mar (summer)", image: "wiki:Table Mountain", wiki: "Cape Town" },
      { name: "Kruger National Park", add: ["scc5bo", "12orb9z", "1ym4wzx", "1dlxx4i"], lat: -24.9948, lng: 31.5919, category: "Nature", sound: "jungle", zoom: 8,
        tagline: "Big Five country",
        description: "One of Africa's largest reserves, nearly 20,000 square kilometres of bushveld that you can explore in your own car. Lions, leopards, elephants, rhinos and buffalo all live here. The best hours are the first and last of the day, when the light is low, the air is cool and animals come down to the rivers to drink.",
        bestTime: "May–Sep (dry, best game viewing)", image: "wiki:Kruger National Park" },
      { name: "Garden Route", pics: ["1494mp", "1494iv", "1494in"], add: ["63tcbe", "1tr45o", "1s22fr9"], skip: ["4wcn74", "1c68oww", "zc0yd2", "6wp0fi"], lat: -34.0363, lng: 23.0471, category: "Nature", sound: "ocean", zoom: 9,
        tagline: "Forests, lagoons and cliffs along the Indian Ocean",
        description: "A scenic drive of about 300 kilometres along the south coast, through old-growth forest, past lagoons and over river gorges. Stop in Knysna for oysters by the lagoon, walk the suspension bridge over the Storms River mouth in Tsitsikamma, and watch for dolphins and whales from the cliffs.",
        bestTime: "Sep–Apr", image: "wiki:Tsitsikamma National Park", wiki: "Garden Route" }
    ]
  },
  {
    id: "516", name: "Namibia", region: "Africa", soundProfile: "desert",
    summary: "Red dunes, salt pans and one of the emptiest, most beautiful landscapes on Earth.",
    hero: "wiki:Deadvlei",
    places: [
      { name: "Sossusvlei", add: ["luag44", "19rhg2o", "enyeww", "1h23ucs", "go0g7q", "lrgsj4", "1n80nyt"], lat: -24.7275, lng: 15.3429, category: "Nature", sound: "desert", zoom: 10,
        tagline: "The red dunes of the Namib",
        description: "Some of the tallest sand dunes in the world, over 300 metres high, glow deep orange at sunrise with one side in sharp black shadow. Climb a ridge barefoot while the sand is still cool. Below lies Deadvlei, a white clay pan dotted with the black skeletons of camel thorn trees that died centuries ago and never decayed in the dry air.",
        bestTime: "May–Oct", image: "wiki:Dune 45", wiki: "Sossusvlei" },
      { name: "Etosha National Park", pics: ["1v7ozz", "1qqd5i", "2f4mg0", "1qqd5o"], add: ["19lq3a", "y3u3v0", "vmnl3g", "cn16u5", "10nmea5"], lat: -18.8556, lng: 16.3293, category: "Nature", sound: "desert", zoom: 8,
        tagline: "Wildlife around a vast white salt pan",
        description: "Etosha is built around a shimmering salt pan so large it can be seen from space. In the dry season every animal must come to the waterholes, so you park and wait as elephants, giraffes, zebras and lions arrive in turn. Several camps have floodlit waterholes where rhinos come to drink at night.",
        bestTime: "May–Oct (dry season)", image: "wiki:Etosha National Park" },
      { name: "Fish River Canyon", pics: ["1elfuj", "yf0zo", "170sg3"], add: ["xql55v", "cyanj4", "wa7ihw", "1b2djvh", "1khbcgs", "1p75ai"], lead: ["Namibia Fischfluss-Canyon 56.jpg", "Namibia Fischfluss-Canyon 13.jpg", "Namibia Fischfluss-Canyon 11.jpg", "Namibia Fischfluss-Canyon 18.jpg"], skip: ["2wc2zx"], lat: -27.5890, lng: 17.6140, category: "Nature", sound: "desert", zoom: 9,
        tagline: "The largest canyon in Africa",
        description: "A gash in the dry plateau about 160 kilometres long and up to 550 metres deep, with a thin river looping along the bottom. From the rim at dawn it is utterly silent, and the rock goes from grey to gold as the sun comes up. There is rarely anyone else at the viewpoint.",
        bestTime: "May–Sep", image: "wiki:Fish River Canyon" }
    ]
  },

  /* ---------- Middle East ---------- */
  {
    id: "400", name: "Jordan", region: "Middle East", soundProfile: "desert",
    summary: "A city carved from rose-red rock, a desert of sandstone giants, and the lowest sea on Earth.",
    hero: "wiki:Jerash",
    places: [
      { name: "Petra", add: ["1ethx3b", "181sp84", "1vzu8il", "1ma7vkc", "wkmhk"], lat: 30.3285, lng: 35.4444, category: "Historical", sound: "temple",
        tagline: "The rose-red city carved into the rock",
        description: "You enter through the Siq, a narrow gorge more than a kilometre long with walls that almost close overhead. At its end the Treasury appears through the gap, a 40-metre facade cut straight into the pink sandstone by the Nabataeans some 2,000 years ago. Keep going: the climb of around 800 steps to the Monastery is worth every one.",
        bestTime: "Mar–May, Sep–Nov", image: "wiki:Petra" },
      { name: "Wadi Rum", pics: ["od55p", "2gxmnw", "1dpcol", "owmw9"], add: ["1yj2fqo", "1i8rswu", "1fogxrs", "yy0t8z", "zhmfcs", "sb528s", "vq2olv"], skip: ["k3ka1j"], lat: 29.5765, lng: 35.4199, category: "Nature", sound: "desert", zoom: 10,
        tagline: "The Valley of the Moon",
        description: "Sheer sandstone mountains rise from a floor of red sand in a desert so otherworldly that it stands in for Mars in films. Cross it by jeep or camel with Bedouin guides, scramble up a rock bridge, and spend the night in a camp where dinner is cooked underground and the Milky Way is the only light.",
        bestTime: "Mar–May, Sep–Nov", image: "wiki:Wadi Rum" },
      { name: "Dead Sea", add: ["460zfw", "1gtjkpd", "1cqo1jl", "1s126dc", "o2nj"], lat: 31.5590, lng: 35.4732, category: "Nature", sound: "desert", zoom: 10,
        tagline: "Floating at the lowest point on land",
        description: "The shore of the Dead Sea lies more than 400 metres below sea level, and the water is nearly ten times saltier than the ocean. You cannot sink: lie back and you bob on the surface like a cork, in warm, oily-feeling water, with the hills of the far shore hazy in the heat. Cover yourself in the black mineral mud first.",
        bestTime: "Mar–May, Sep–Nov", image: "wiki:Dead Sea" }
    ]
  },
  {
    id: "784", name: "United Arab Emirates", aka: ["UAE", "Emirates"], region: "Middle East", soundProfile: "desert",
    summary: "Record-breaking skylines on the Gulf, with the empty desert an hour away.",
    hero: "wiki:Burj Al Arab",
    places: [
      { name: "Dubai", pics: ["1zikwk", "2ee7bh"], add: ["1oznqv0", "4cuhs8", "12itihf"], lead: ["Dubai Skyline mit Burj Khalifa (cropped).jpg", "Burj Khalifa Night View 01.jpg"], skip: ["1mw4as0", "1i57ft0", "hljyvp"], lat: 25.1972, lng: 55.2744, category: "City", sound: "city",
        tagline: "A skyline that rose out of the sand",
        description: "The Burj Khalifa, 828 metres high, is the tallest building in the world, and from its observation deck the desert and the Gulf look like a map. For the older city, cross Dubai Creek on a wooden abra for one dirham and walk the gold and spice souks, where the air smells of saffron and frankincense.",
        bestTime: "Nov–Mar", image: "wiki:Burj Khalifa", wiki: "Dubai" },
      { name: "Abu Dhabi", add: ["1bvy9cc", "iadh0e", "1io02wl"], lat: 24.4128, lng: 54.4750, category: "Culture", sound: "temple",
        tagline: "The white marble Grand Mosque",
        description: "The Sheikh Zayed Grand Mosque has 82 white marble domes, courtyards inlaid with flower patterns, and room for around 40,000 worshippers. Inside lies one of the largest hand-knotted carpets in the world, and near sunset the marble turns from white to gold to blue. Across town, the Louvre Abu Dhabi sits under a huge latticed dome that scatters light like palm shade.",
        bestTime: "Nov–Mar", image: "wiki:Sheikh Zayed Grand Mosque", wiki: "Abu Dhabi" },
      { name: "The Empty Quarter", pics: ["1wue6o", "14jpsl", "1z1cn4"], add: ["14aiywt"], lat: 23.1300, lng: 53.7700, category: "Nature", sound: "desert", zoom: 9,
        tagline: "The largest sand desert on Earth",
        description: "South of the Liwa oasis the Rub' al Khali begins, a sea of dunes that stretches unbroken into Saudi Arabia and Oman. The ridges run to the horizon in orange and gold, some of them hundreds of metres high. There is nothing here but wind, sand and the tracks of the occasional camel.",
        bestTime: "Nov–Mar", image: "wiki:Rub' al Khali" }
    ]
  },

  /* ---------- Asia ---------- */
  {
    id: "392", name: "Japan", region: "Asia", soundProfile: "city",
    summary: "Neon and silence side by side: the world's biggest city, ancient temples, and a perfect volcano.",
    hero: "wiki:Himeji Castle",
    places: [
      { name: "Tokyo", add: ["1x5w328", "ry8tfq", "6gxo0r", "i8a2w4"], lat: 35.6812, lng: 139.7671, category: "City", sound: "metropolis",
        tagline: "The largest city on Earth",
        description: "At Shibuya Crossing, thousands of people flood the intersection every time the lights change, under walls of video screens. Yet a few minutes away the forest path to Meiji Shrine is hushed. Visit the incense and lanterns of Sensō-ji in Asakusa, eat sushi for breakfast near the old Tsukiji market, and see Shinjuku's neon alleys after dark.",
        bestTime: "Mar–Apr (cherry blossom), Oct–Nov", image: "wiki:Shibuya Crossing", wiki: "Tokyo" },
      { name: "Kyoto", add: ["11z1yzf", "igz8dm", "1h9r6bq", "1w9lj8j"], skip: ["1makpi6", "dsudvf"], lat: 35.0116, lng: 135.7681, category: "Culture", sound: "temple",
        tagline: "A thousand years as the imperial capital",
        description: "Kyoto was Japan's capital for more than a millennium and still has around 1,600 temples. Walk through the thousands of vermilion torii gates that tunnel up the hillside at Fushimi Inari, see the Golden Pavilion reflected in its pond, and stand in the green light of the Arashiyama bamboo grove. In Gion at dusk you may glimpse a geiko on her way to an appointment.",
        bestTime: "Late Mar–Apr, Nov (autumn leaves)", image: "wiki:Fushimi Inari-taisha", wiki: "Kyoto" },
      { name: "Mount Fuji", add: ["fbgp4i", "19ry5gm", "1dsg1cz", "1xdy7hq", "vhkj9o", "er767d"], skip: ["uoy1jv", "sfcps1"], lat: 35.3606, lng: 138.7274, category: "Mountain", sound: "mountains", zoom: 9,
        tagline: "Japan's sacred volcano",
        description: "Fuji's symmetrical cone, 3,776 metres high and snow-capped for much of the year, has been painted and worshipped for centuries. The official climbing season runs from early July to early September, and most people climb at night to watch sunrise from the summit. For the classic view, see it reflected in Lake Kawaguchi on a still winter morning.",
        bestTime: "Jul–Sep (climbing), Nov–Feb (clearest views)", image: "wiki:Mount Fuji" },
      { name: "Nara", pics: ["1vw5kl", "22zu31", "26zhma", "22zu30", "3m26y"], add: ["135c16h"], lat: 34.6851, lng: 135.8048, category: "Historical", sound: "temple",
        tagline: "A giant Buddha and a park full of deer",
        description: "Japan's first permanent capital is home to Tōdai-ji, a vast wooden hall housing a bronze Buddha about 15 metres tall. The surrounding park belongs to more than a thousand wild deer, which are considered sacred. Buy a packet of deer crackers and some of them will bow to you before taking one.",
        bestTime: "Mar–May, Oct–Nov", image: "wiki:Tōdai-ji", wiki: "Nara (city)" }
    ]
  },
  {
    id: "156", name: "China", region: "Asia", soundProfile: "city",
    summary: "The longest wall ever built, an army of clay soldiers, and landscapes straight out of a scroll painting.",
    hero: "wiki:Temple of Heaven",
    places: [
      { name: "Great Wall", add: ["vjjkzb", "14o85z7", "3x6e2i", "pfn6ej", "1dpw91s", "16isla8"], aka: ["Great Wall of China", "Mutianyu"], lat: 40.4319, lng: 116.5704, category: "Historical", sound: "mountains",
        tagline: "A stone dragon across the mountains",
        description: "The wall rides the crest of steep green ridges north of Beijing, climbing and dropping with watchtowers at every high point. The restored Ming-era section at Mutianyu is less crowded than Badaling and just as dramatic, and you can ride a toboggan back down. Despite the legend, it cannot be seen with the naked eye from space.",
        bestTime: "Apr–May, Sep–Oct", image: "wiki:Great Wall of China" },
      { name: "Beijing", add: ["o7q0uo", "1kdwsqp", "p1b7qb", "a63dwf"], aka: ["Forbidden City"], lat: 39.9163, lng: 116.3972, category: "Historical", sound: "city",
        tagline: "The Forbidden City and the old hutongs",
        description: "The Forbidden City, completed in 1420, was home to 24 emperors and closed to ordinary people for five centuries. Walk through its sequence of vast courtyards and red halls with golden roofs. Then explore the hutongs, the old grey-brick alley neighbourhoods, and watch locals practise tai chi at the Temple of Heaven in the early morning.",
        bestTime: "Apr–May, Sep–Oct", image: "wiki:Forbidden City", wiki: "Beijing" },
      { name: "Xi'an", add: ["v9iayf", "5nhr00", "deyfom"], aka: ["Terracotta Army", "Xian"], lat: 34.3841, lng: 109.2785, category: "Historical", sound: "temple",
        tagline: "The Terracotta Army",
        description: "In 1974 farmers digging a well struck a clay head, and underneath was an army of around 8,000 life-size soldiers, every face different, buried to guard China's first emperor, who died in 210 BC. They still stand in their trenches in battle formation. Back in the city, you can cycle the top of the complete Ming city wall.",
        bestTime: "Mar–May, Sep–Oct", image: "wiki:Terracotta Army", wiki: "Xi'an" },
      { name: "Zhangjiajie", pics: ["2ag3d0", "asb00", "1j7a9k", "c0z7p", "2oqpp", "d50c0", "2agu56", "2agu54", "2agu5b", "2agu5f", "2krqah", "2agu58"], lat: 29.3249, lng: 110.4343, category: "Nature", sound: "mountains", zoom: 10,
        tagline: "A forest of stone pillars in the mist",
        description: "Thousands of narrow sandstone columns, some more than 200 metres tall and topped with pine trees, rise out of a subtropical forest. When mist fills the valleys they appear to float, which is why they helped inspire the floating mountains in the film Avatar. Glass walkways and a cliffside elevator test your head for heights.",
        bestTime: "Apr–May, Sep–Oct", image: "wiki:Zhangjiajie National Forest Park" },
      { name: "Shanghai", add: ["c27gz5", "1wh8r75", "xmadu2", "1ifrel3"], skip: ["4blotr", "532cly", "14qoj84"], lat: 31.2304, lng: 121.4737, category: "City", sound: "metropolis",
        tagline: "China's city of the future",
        description: "On one bank of the Huangpu River stands the Bund, a sweep of grand 1920s banks and hotels. On the other is Pudong, a skyline of glass towers led by the twisting 632-metre Shanghai Tower, all of it built in a single generation. Between them: plane-tree-lined lanes, the old Yu Garden, and baskets of soup dumplings.",
        bestTime: "Mar–May, Sep–Nov", image: "wiki:The Bund", wiki: "Shanghai" }
    ]
  },
  {
    id: "410", name: "South Korea", region: "Asia", soundProfile: "city",
    summary: "Royal palaces between skyscrapers, a volcanic island, and food worth the flight.",
    hero: "wiki:Bukchon Hanok Village",
    places: [
      { name: "Seoul", pics: ["23iven", "23ivf7", "23ixqx", "lppia"], add: ["r3fzmk", "1mxwomu", "4pv3kq", "1f1by76"], skip: ["i0v2oe"], lat: 37.5665, lng: 126.9780, category: "City", sound: "city",
        tagline: "Palaces, neon and all-night markets",
        description: "The 14th-century palace of Gyeongbokgung sits with mountains behind it and office towers in front, and the royal guard still changes at the gate in bright robes. Wander the tiled-roof houses of Bukchon, then head to Gwangjang Market for mung bean pancakes sizzling on huge griddles. The city barely slows down at night.",
        bestTime: "Apr–May, Sep–Nov", image: "wiki:Gyeongbokgung", wiki: "Seoul" },
      { name: "Jeju Island", pics: ["31f1v", "2fv1b7", "1pz1g", "yy1gd"], add: ["1tblltg", "tirs2a", "1qdrcer", "1qycllt", "1czsucc"], lat: 33.4580, lng: 126.9425, category: "Nature", sound: "ocean", zoom: 10,
        tagline: "A volcanic island of craters and sea divers",
        description: "Jeju is built from black lava, with Hallasan, South Korea's highest mountain, at its centre. Climb the steps of Seongsan Ilchulbong, a crater rising out of the sea, for sunrise. Along the shore you may see the haenyeo, women who free-dive for shellfish without oxygen tanks, a tradition passed down for generations.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Seongsan Ilchulbong", wiki: "Jeju Island" },
      { name: "Busan", add: ["195q6qf", "588i10", "1w7a1md", "7l73sp"], skip: ["w5okwv"], lat: 35.1796, lng: 129.0756, category: "City", sound: "ocean",
        tagline: "Korea's port city of beaches and seafood",
        description: "South Korea's second city spreads between green mountains and the sea. Pick your dinner live from the tanks at Jagalchi, the country's largest fish market, climb the stairways of the pastel-painted Gamcheon Culture Village, and visit Haedong Yonggungsa, a Buddhist temple built on rocks right above the waves.",
        bestTime: "May–Jun, Sep–Oct", image: "wiki:Gamcheon Culture Village", wiki: "Busan" },
      { name: "Gyeongju", add: ["1h80lqm", "1qwwwzu", "bb4um6", "pkoihe"], skip: ["czwfd4"], lat: 35.8562, lng: 129.2247, category: "Historical", sound: "temple",
        tagline: "The museum without walls",
        description: "For nearly a thousand years this was the capital of the Silla kingdom. Its kings lie under smooth grass mounds that rise like hills in the middle of town. In the forested hills nearby are the painted halls and stone pagodas of Bulguksa temple, and the Seokguram grotto, where a granite Buddha looks out toward the sea.",
        bestTime: "Apr (cherry blossom), Oct", image: "wiki:Bulguksa", wiki: "Gyeongju" }
    ]
  },
  {
    id: "764", name: "Thailand", region: "Asia", soundProfile: "temple",
    summary: "Golden temples, street food on every corner, and limestone islands in warm green water.",
    hero: "wiki:Wat Phra Kaew",
    places: [
      { name: "Bangkok", add: ["6sbln4", "18dmad", "857lkc", "at69le"], skip: ["1mibzs5", "oft497", "jymgrl", "1qrzz0u"], lat: 13.7563, lng: 100.5018, category: "City", sound: "city",
        tagline: "A city of temples, canals and street food",
        description: "Heat, traffic, incense and the smell of grilling pork: Bangkok is a lot, in the best way. See the glittering Grand Palace and the 46-metre reclining Buddha at Wat Pho, then take a river boat to Wat Arun as its porcelain-covered spire catches the sunset. At night, eat your way down the neon-lit main street of Chinatown.",
        bestTime: "Nov–Feb (cool season)", image: "wiki:Wat Arun", wiki: "Bangkok" },
      { name: "Chiang Mai", add: ["fewdmt", "1wsdrvl", "1xyupcv", "j225ew", "vccr4"], lat: 18.7883, lng: 98.9853, category: "Culture", sound: "temple",
        tagline: "The temple city of the north",
        description: "Inside the moat and crumbling brick walls of the old city there are dozens of temples, monks in saffron robes, and a slower rhythm than Bangkok. Climb the 306 steps flanked by serpents to the golden stupa of Wat Phra That Doi Suthep on the mountain above. In November, thousands of paper lanterns are released into the night sky for Yi Peng.",
        bestTime: "Nov–Feb (cool season)", image: "wiki:Wat Phra That Doi Suthep", wiki: "Chiang Mai" },
      { name: "Phuket", add: ["1079wp9", "1fmfbys", "u2m2sg", "1tv4ivv", "i2iwwi", "3mmjay"], skip: ["12kbcic", "14g7ddy"], lat: 7.8804, lng: 98.3923, category: "Beach", sound: "ocean", zoom: 10,
        tagline: "Thailand's biggest island",
        description: "Phuket has a beach for every mood along its west coast, from busy Patong to quiet coves, all with warm Andaman Sea water. Take a longtail boat into Phang Nga Bay, where sheer limestone towers rise out of the green water. In Phuket Old Town, rows of pastel Sino-Portuguese shophouses hide excellent cafés and noodle shops.",
        bestTime: "Nov–Apr (dry season)", image: "wiki:Phang Nga Bay", wiki: "Phuket province" },
      { name: "Ayutthaya", add: ["fefgqa", "8d453r", "zcb6qm", "axiryp", "yjcojx"], lat: 14.3532, lng: 100.5685, category: "Historical", sound: "temple",
        tagline: "The ruined capital of old Siam",
        description: "From 1351 until Burmese armies destroyed it in 1767, Ayutthaya was one of the largest and richest cities in Asia. What remains is a park of red-brick towers, headless Buddhas and leaning stupas. The most famous sight is at Wat Mahathat, where a stone Buddha head is held gently in the roots of a fig tree.",
        bestTime: "Nov–Feb (cool season)", image: "wiki:Wat Mahathat (Ayutthaya)", wiki: "Ayutthaya Historical Park" }
    ]
  },
  {
    id: "704", name: "Vietnam", region: "Asia", soundProfile: "jungle",
    summary: "Limestone islands in emerald water, lantern-lit old towns, and soup for breakfast.",
    hero: "wiki:Golden Bridge (Vietnam)",
    places: [
      { name: "Ha Long Bay", pics: ["13o52v", "13o551", "13o52t"], add: ["g0it8l", "1iigl08", "155wj3b", "1tm9zaq", "1dw0nk5"], lat: 20.9101, lng: 107.1839, category: "Nature", sound: "ocean", zoom: 10,
        tagline: "Thousands of limestone islands in an emerald sea",
        description: "Nearly two thousand limestone islands and pillars, topped with jungle, rise straight out of calm green water. Spend a night on a boat to see the bay at dawn, when mist hangs between the peaks and the only sound is an oar. Kayak through low arches into hidden lagoons, and explore caves hung with stalactites.",
        bestTime: "Oct–Dec, Mar–May", image: "wiki:Hạ Long Bay" },
      { name: "Hoi An", pics: ["2boi75", "1qyo0c", "24e4ec", "1g5bdj"], add: ["18x28jp", "1io1vzy", "1f3ij65", "1bikaae", "1gb6rke", "17ksyw9"], lat: 15.8801, lng: 108.3380, category: "Historical", sound: "city",
        tagline: "A lantern-lit trading port",
        description: "Hoi An's old town of mustard-yellow merchant houses has barely changed since it was a busy port between the 15th and 19th centuries. Cars are kept out, and at night hundreds of silk lanterns light the streets and float on the river. Get a suit made by one of the town's tailors, and try cao lầu, a noodle dish found only here.",
        bestTime: "Feb–Apr", image: "wiki:Japanese Bridge", wiki: "Hội An Old Town" },
      { name: "Hanoi", add: ["d1zgsz"], skip: ["pgqugz"], lat: 21.0278, lng: 105.8342, category: "City", sound: "city",
        tagline: "A thousand-year-old capital on two wheels",
        description: "A river of motorbikes flows through the Old Quarter, where each narrow street was once dedicated to a single trade. Start the day like a local on a tiny plastic stool with a bowl of phở, walk around Hoàn Kiếm Lake as the city does its morning exercises, and stop for an egg coffee, whipped thick and sweet.",
        bestTime: "Oct–Dec, Mar–Apr", image: "wiki:Hoàn Kiếm Lake", wiki: "Hanoi" },
      { name: "Sa Pa", add: ["vbjq8t", "nsi3hs", "1r9hpkz", "qfgcrw", "1jclk92", "1yoyh37"], skip: ["18dhktq"], lat: 22.3364, lng: 103.8438, category: "Mountain", sound: "mountains", zoom: 10,
        tagline: "Rice terraces in the northern mountains",
        description: "Near the Chinese border, rice terraces step down entire mountainsides like green staircases, turning gold just before the September harvest. Trek between villages of the Hmong and Red Dao people, staying overnight in a family home. Above it all is Fansipan, at 3,147 metres the highest peak in Indochina.",
        bestTime: "Sep–Oct (golden terraces), Mar–May", image: "wiki:Sa Pa" }
    ]
  },
  {
    id: "116", name: "Cambodia", region: "Asia", soundProfile: "temple",
    summary: "The temples of Angkor, half swallowed by jungle, and a capital on the Mekong.",
    hero: "wiki:Ta Prohm",
    places: [
      { name: "Angkor Wat", add: ["1i3b7iw", "ab3f0w", "rbryjv", "17s63f1", "1ydlrqr"], lat: 13.4125, lng: 103.8670, category: "Historical", sound: "temple",
        tagline: "The largest religious monument in the world",
        description: "Built in the early 12th century for King Suryavarman II, Angkor Wat is a stone model of the Hindu universe, surrounded by a moat wide enough to look like a lake. Come before dawn to watch its five towers appear in silhouette and reflect in the lily pond. Inside, hundreds of metres of walls are carved with battles, gods and dancing apsaras.",
        bestTime: "Nov–Feb (cool, dry)", image: "wiki:Angkor Wat" },
      { name: "Angkor Thom & Ta Prohm", add: ["gdilre", "18a6suj", "tje8qv", "1n2duhf", "43dqmf"], skip: ["96qsqk"], lat: 13.4412, lng: 103.8590, category: "Historical", sound: "rainforest",
        tagline: "Stone faces and temples in the grip of the jungle",
        description: "At the Bayon, in the centre of the walled city of Angkor Thom, more than 200 giant stone faces smile calmly down from the towers. Nearby, Ta Prohm has been left much as it was found: huge silk-cotton and fig trees grow out of the roofs, their roots pouring over the walls like wax, with parrots calling above.",
        bestTime: "Nov–Feb (cool, dry)", image: "wiki:Bayon", wiki: "Angkor Thom" },
      { name: "Phnom Penh", pics: ["1ciq26", "kqyd9", "54xap", "18mfnz", "yvj05", "5bdho", "yqads", "yh20q"], add: ["1muhys3", "1br0p3a"], skip: ["1wdcgsb"], lat: 11.5564, lng: 104.9282, category: "City", sound: "city",
        tagline: "The capital where the rivers meet",
        description: "Cambodia's capital sits where the Tonlé Sap joins the Mekong, and the riverfront promenade comes alive at dusk. The Royal Palace has golden spired roofs and a pagoda floored with thousands of silver tiles. The Tuol Sleng museum, a former prison, is a hard but important visit for understanding the country's recent history.",
        bestTime: "Nov–Feb (cool, dry)", image: "wiki:Royal Palace of Cambodia", wiki: "Phnom Penh" }
    ]
  },
  {
    id: "360", name: "Indonesia", region: "Asia", soundProfile: "ocean",
    summary: "Seventeen thousand islands: temple ceremonies, smoking volcanoes, and dragons.",
    hero: "wiki:Kelimutu",
    places: [
      { name: "Bali", add: ["k8ozm6", "vbw6qj", "1lyoomd", "1954xeu", "19xybmu", "kt2kba"], skip: ["2md6fl", "2b1f8l"], aka: ["Ubud"], lat: -8.5069, lng: 115.2625, category: "Culture", sound: "temple", zoom: 10,
        tagline: "The Island of the Gods",
        description: "Every morning Balinese families set out small palm-leaf offerings of flowers and incense, and the smoke drifts through the streets. Around Ubud, rice terraces step down the hills, watered by a thousand-year-old cooperative irrigation system. See a temple on its lake or clifftop at sunset, when the gamelan plays and the sky turns orange.",
        bestTime: "Apr–Oct (dry season)", image: "wiki:Pura Ulun Danu Bratan", wiki: "Bali" },
      { name: "Borobudur", pics: ["265f9d", "o9fub", "1qm2fq", "o1xdp", "24pz88", "na8fk", "o1wld", "o1wn0", "na8eg"], add: ["344fwp", "ao9728", "wrg23z", "xr8l8a", "16jdqtx"], lat: -7.6079, lng: 110.2038, category: "Historical", sound: "temple",
        tagline: "The world's largest Buddhist temple",
        description: "Built in the 9th century and later buried for centuries under volcanic ash and jungle, Borobudur is a stone mountain of nine stacked terraces. Pilgrims walk clockwise up past more than 2,600 carved relief panels to the top, where 72 bell-shaped stupas each hold a seated Buddha, looking out at the volcanoes of central Java.",
        bestTime: "May–Oct (dry season)", image: "wiki:Borobudur" },
      { name: "Komodo National Park", pics: ["zvacy", "1yjplz", "13fmdo"], add: ["1vr4m0n", "nmq689", "16vdn11", "17p4fm", "e17707", "zdowqe"], lat: -8.5500, lng: 119.4833, category: "Nature", sound: "ocean", zoom: 9,
        tagline: "Home of the dragon",
        description: "The Komodo dragon, the largest lizard on Earth at up to three metres long, lives wild only on a few dry, hilly islands here. Rangers lead walks to see them. The sea is as impressive as the land: climb Padar Island for a view over three curved bays, then snorkel with manta rays and rest on a beach of pink sand.",
        bestTime: "Apr–Nov", image: "wiki:Komodo National Park" },
      { name: "Mount Bromo", add: ["1nnypv4", "1kjyzde", "t6oxmc", "1c2n9uo", "11wgn48", "f4hhm"], lat: -7.9425, lng: 112.9530, category: "Mountain", sound: "mountains",
        tagline: "A smoking crater in a sea of sand",
        description: "Bromo is an active volcano standing inside a much larger ancient caldera, on a flat plain of grey volcanic sand. Watch sunrise from the rim of the outer crater as mist fills the basin and the cones rise out of it, then cross the sand and climb the stairs to look straight down into the rumbling, sulphurous vent.",
        bestTime: "May–Oct (dry season)", image: "wiki:Mount Bromo" }
    ]
  },
  {
    id: "458", name: "Malaysia", region: "Asia", soundProfile: "jungle",
    summary: "A capital of towers and street food, a colonial port, and ancient rainforest on Borneo.",
    hero: "wiki:Batu Caves",
    places: [
      { name: "Kuala Lumpur", add: ["10rqxg3", "833kaf", "13uyr7h", "15dbikk", "1onenjr"], skip: ["ooia9"], lat: 3.1579, lng: 101.7116, category: "City", sound: "city",
        tagline: "Twin towers above a tropical capital",
        description: "The 452-metre Petronas Towers, linked by a skybridge, shine silver over a city of malls, mosques and food courts. Just outside town, climb 272 rainbow-painted steps past a giant golden statue into the limestone Batu Caves, a Hindu shrine full of monkeys. At night, follow the smoke to the open-air grills of Jalan Alor.",
        bestTime: "May–Jul, Dec–Feb", image: "wiki:KLCC Park", wiki: "Kuala Lumpur" },
      { name: "Penang", add: ["shs8ou", "ogrl99", "16ab9ev", "1mdfd18", "1rdk4uc"], lat: 5.4141, lng: 100.3288, category: "Culture", sound: "city",
        tagline: "Street food capital of Malaysia",
        description: "George Town, a UNESCO-listed old port, is a grid of Chinese shophouses, clan temples, mosques and colonial buildings, with playful murals painted on its walls. People come here above all to eat: smoky char kway teow, sour and spicy assam laksa, all cooked at hawker stalls that have been perfecting one dish for decades.",
        bestTime: "Dec–Mar", image: "wiki:George Town, Penang" },
      { name: "Borneo", pics: ["osabb", "1iz19h", "25z904", "y7qgo", "3ccra1"], add: ["1vdhwcg", "1qddtkg", "1envl4m", "1g73t1p", "5cam7f"], skip: ["9iwv8o", "1fe2t2l"], lat: 6.0750, lng: 116.5586, category: "Nature", sound: "rainforest", zoom: 8,
        tagline: "Orangutans and one of Earth's oldest rainforests",
        description: "The Malaysian state of Sabah holds some of the oldest rainforest on Earth. See orphaned orangutans swing in for feeding time at the Sepilok rehabilitation centre, cruise the Kinabatangan River at dusk looking for proboscis monkeys and pygmy elephants, and climb Mount Kinabalu, 4,095 metres of bare granite above the clouds.",
        bestTime: "Mar–Oct", image: "wiki:Mount Kinabalu", wiki: "Sabah" }
    ]
  },
  {
    id: "702", name: "Singapore", region: "Asia", soundProfile: "city",
    summary: "A garden city-state where futuristic towers stand beside hawker stalls and temples.",
    hero: "wiki:Merlion Park",
    places: [
      { name: "Marina Bay", add: ["1xhskyk", "dpkzwe", "elbglh", "529pwa", "1ppa40q"], lat: 1.2834, lng: 103.8607, category: "City", sound: "city", zoom: 14,
        tagline: "The skyline of the future",
        description: "Three towers topped by what looks like a ship hold up the rooftop infinity pool of Marina Bay Sands, 57 floors above the water. Walk the loop around the bay after dark, when the financial district lights up and the Merlion, half lion and half fish, spouts water into the harbour.",
        bestTime: "Feb–Apr (driest months)", image: "wiki:Marina Bay Sands", wiki: "Marina Bay, Singapore" },
      { name: "Gardens by the Bay", add: ["19einzn", "1a9bt6p", "zut7mo", "qco90l", "1hbc40y", "1gbrwxs"], lat: 1.2816, lng: 103.8636, category: "Nature", sound: "rainforest", zoom: 15,
        tagline: "A grove of giant steel trees",
        description: "The Supertrees are vertical gardens up to 50 metres tall, wrapped in ferns and orchids and joined by an aerial walkway. Every evening they pulse with light and music. Next door, the cooled glass Cloud Forest dome holds a mist-covered mountain of plants and a 35-metre indoor waterfall.",
        bestTime: "Feb–Apr (driest months)", image: "wiki:Gardens by the Bay" },
      { name: "Chinatown & Hawker Centres", add: ["15vnmfw", "1ix4kds", "122anuc", "3xxf6h", "1kslafa", "uh5orh"], lat: 1.2838, lng: 103.8440, category: "Culture", sound: "city", zoom: 15,
        tagline: "Where Singapore eats",
        description: "Singapore's hawker culture is recognised by UNESCO, and for good reason: for a few dollars you get some of the best food in Asia, served on a plastic tray. Join the longest queue at Maxwell Food Centre for Hainanese chicken rice, then wander the restored shophouses, the Buddha Tooth Relic Temple and the city's oldest Hindu temple, all within a few streets.",
        bestTime: "Feb–Apr (driest months)", image: "wiki:Chinatown, Singapore" }
    ]
  },
  {
    id: "608", name: "Philippines", region: "Asia", soundProfile: "ocean",
    summary: "More than seven thousand islands of white sand, limestone lagoons and rice terraces.",
    hero: "wiki:Mayon",
    places: [
      { name: "El Nido, Palawan", pics: ["1ye8vl", "1ifpyh", "1ifpyb", "1ifpyg"], add: ["ua9tkq", "1yb8whb", "8b8q1b", "14skbwd", "1xji04o", "1qpx2vy", "140jk52"], lat: 11.1800, lng: 119.3900, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "Hidden lagoons among limestone cliffs",
        description: "Around El Nido, black limestone cliffs rise from water that shifts from jade to turquoise, hiding lagoons you enter by kayak through gaps in the rock. Days are spent island hopping by outrigger boat, snorkelling over coral, and eating grilled fish on an empty beach.",
        bestTime: "Dec–May (dry season)", image: "wiki:El Nido, Palawan" },
      { name: "Boracay", pics: ["1i87gq", "1il8bh", "1i87gr", "1hvsuy"], add: ["1mqsmue", "1gcqxe4", "1u842u9", "rm8iij", "zznx8g", "g5rmic"], skip: ["1g7q7ks", "enl1ex", "1b8up5n"], lat: 11.9674, lng: 121.9248, category: "Beach", sound: "ocean", zoom: 13,
        tagline: "Four kilometres of powder-white sand",
        description: "White Beach is the reason people come: sand as fine as flour, shallow clear water, and palm trees leaning over it. In 2018 the island was closed to visitors for six months to clean it up, and it reopened with limits on visitor numbers. At sunset, traditional paraw sailboats with blue sails glide along the shore.",
        bestTime: "Nov–May (dry season)", image: "wiki:Boracay" },
      { name: "Chocolate Hills", add: ["1lw1s60", "132yc4", "1rlbz2i"], skip: ["17br8mo"], lat: 9.8297, lng: 124.1397, category: "Nature", sound: "jungle", zoom: 11,
        tagline: "More than a thousand perfect mounds",
        description: "On the island of Bohol, at least 1,260 grass-covered limestone hills of almost identical shape spread to the horizon. They are green in the rainy season and turn chocolate brown in the dry months, which gives them their name. The same island is home to the tarsier, a tiny primate with enormous eyes.",
        bestTime: "Dec–May (dry season)", image: "wiki:Chocolate Hills" },
      { name: "Banaue Rice Terraces", pics: ["cuot5", "1cobsg", "1zdg6w", "21tl9f"], add: ["fnrujw", "wmj3y", "1v3gwv", "1g1c9f4", "1sh4x2z"], lat: 16.9238, lng: 121.0570, category: "Culture", sound: "mountains",
        tagline: "Stairways carved into the mountains",
        description: "The Ifugao people carved these terraces into the steep mountains of northern Luzon by hand, and their descendants still farm them. The paddies follow the contours of the slopes like a giant amphitheatre, fed by water channelled from the forests above. Hike to the village of Batad to stand in the middle of them.",
        bestTime: "Apr–May (green), Dec–Mar", image: "wiki:Banaue Rice Terraces" }
    ]
  },
  {
    id: "356", name: "India", region: "Asia", soundProfile: "temple",
    summary: "A monument to love in white marble, desert palaces, and the oldest living city on the Ganges.",
    hero: "wiki:Amer Fort",
    places: [
      { name: "Taj Mahal", pics: ["1pvxmb", "gzij9", "1pvxm6"], add: ["1a8e0t0", "ura8za", "13amhiv", "4qu7ju", "1fbn7f2", "uoa5z"], aka: ["Agra"], lat: 27.1751, lng: 78.0421, category: "Historical", sound: "temple",
        tagline: "A marble monument to love",
        description: "The Mughal emperor Shah Jahan built the Taj Mahal as a tomb for his wife Mumtaz Mahal; work began in 1632 and took around twenty years. The white marble changes colour with the light, from soft pink at dawn to gold at dusk. Up close, the walls are inlaid with flowers made of semi-precious stones.",
        bestTime: "Oct–Mar (closed on Fridays)", image: "wiki:Taj Mahal" },
      { name: "Jaipur", add: ["75jvet", "l2x78a", "14d6488", "lf0cph", "1y8e1ls"], skip: ["1seoc6s"], lat: 26.9124, lng: 75.7873, category: "City", sound: "city",
        tagline: "The Pink City of Rajasthan",
        description: "The old city was painted terracotta pink in 1876 to welcome a royal visitor, and it has stayed that way. The Hawa Mahal, or Palace of Winds, has 953 small windows that let royal women watch the street unseen. Above the city, the honey-coloured Amber Fort climbs a ridge, with mirrored halls that glitter by candlelight.",
        bestTime: "Oct–Mar (cool, dry)", image: "wiki:Hawa Mahal", wiki: "Jaipur" },
      { name: "Varanasi", pics: ["8pxzp", "1r8b9t", "4o75r"], add: ["1te8lne", "1f10htv", "1nkhj9b", "1jzj2s7", "yxue5m"], skip: ["nw400r"], lat: 25.3176, lng: 82.9739, category: "Culture", sound: "temple",
        tagline: "The sacred city on the Ganges",
        description: "One of the oldest continuously inhabited cities in the world, Varanasi is where Hindus come to bathe in the Ganges and to cremate their dead. Take a rowing boat at dawn past the stone steps of the ghats as pilgrims wade into the water. Every evening at Dashashwamedh Ghat, priests perform the aarti with fire, bells and chanting.",
        bestTime: "Oct–Mar (cool, dry)", image: "wiki:Dashashwamedh Ghat", wiki: "Varanasi" },
      { name: "Kerala Backwaters", add: ["a8vph0", "1xfu6uf", "pb5r52", "xrq8tr", "1dm418o"], lat: 9.4981, lng: 76.3388, category: "Nature", sound: "rainforest", zoom: 10,
        tagline: "Palm-lined canals in the tropical south",
        description: "Behind the coast of Kerala lies a network of lagoons, lakes and canals shaded by coconut palms. Drift through it on a kettuvallam, a converted rice barge with a thatched roof, past villages where daily life happens on the water: children going to school by canoe, fishermen casting nets, kingfishers on the wires.",
        bestTime: "Nov–Feb", image: "wiki:Kerala backwaters" }
    ]
  },
  {
    id: "524", name: "Nepal", region: "Asia", soundProfile: "mountains",
    summary: "The roof of the world: eight of the ten highest mountains, and temples full of prayer flags.",
    hero: "wiki:Machapuchare",
    places: [
      { name: "Kathmandu", pics: ["2oryxm", "13bv49", "1hkwoe"], add: ["cjjvmj", "2lkojh", "12hjx60", "sxp7u5"], skip: ["1vk6ok4", "21gv9b", "s3z0ll"], lat: 27.7172, lng: 85.3240, category: "Culture", sound: "temple",
        tagline: "A valley of temples and prayer wheels",
        description: "Incense, bells and motorbike horns fill the lanes of the old city. At Boudhanath, one of the largest stupas in the world, Tibetan pilgrims circle clockwise under the painted eyes of the Buddha, spinning prayer wheels. Climb the long staircase to Swayambhunath at sunset for a view over the whole valley, shared with a troop of monkeys.",
        bestTime: "Oct–Nov, Mar–Apr", image: "wiki:Boudhanath", wiki: "Kathmandu" },
      { name: "Everest Region", pics: ["21u4i9", "28fb1u", "2g4tqz", "bjwla"], add: ["dtwd54", "1i9dl7b", "dd6j4a", "1n5sob", "1pbwxm4", "qmq8fg", "1gfleak"], aka: ["Mount Everest", "Everest Base Camp"], lat: 27.9881, lng: 86.9250, category: "Mountain", sound: "mountains", zoom: 10,
        tagline: "The trail to the top of the world",
        description: "Mount Everest stands 8,849 metres above sea level. The classic trek to its base camp takes about two weeks from the tiny airstrip at Lukla, climbing through Sherpa villages, across swinging suspension bridges and past the monastery at Tengboche. The air gets thin, the peaks get enormous, and prayer flags snap in the wind at every pass.",
        bestTime: "Mar–May, Oct–Nov", image: "wiki:Mount Everest" },
      { name: "Pokhara", pics: ["2szxkk", "3680wz", "127uep", "zbtxd"], add: ["1maiksk", "19f6f82", "o8zadr", "f6tj4n", "1ipjnsg"], lat: 28.2096, lng: 83.9856, category: "Nature", sound: "mountains",
        tagline: "A lakeside town under the Annapurnas",
        description: "On clear mornings the snow peaks of the Annapurna range and the sharp fishtail summit of Machapuchare are mirrored in the still water of Phewa Lake. Pokhara is where trekkers rest before and after the trails. Row a painted boat out on the lake, or run off a hilltop at Sarangkot strapped to a paraglider.",
        bestTime: "Oct–Nov, Mar–Apr", image: "wiki:Phewa Lake", wiki: "Pokhara" },
      { name: "Chitwan National Park", pics: ["1hz2q5", "1a65kw", "1hy80d", "14nese", "36lzax"], add: ["qif5z0", "18otzfn", "j3xtqc", "hq6m5c"], lat: 27.5291, lng: 84.3542, category: "Nature", sound: "jungle", zoom: 10,
        tagline: "Rhinos and tigers in the lowland jungle",
        description: "In the hot, flat south of Nepal, far from the mountains, tall grassland and sal forest shelter greater one-horned rhinoceroses, Bengal tigers, sloth bears and gharial crocodiles. Rhinos are easy to see; a tiger takes luck. Explore by jeep, on foot with a guide, or drifting down the river in a dugout canoe at dawn.",
        bestTime: "Oct–Mar", image: "wiki:Chitwan National Park" }
    ]
  },
  {
    id: "144", name: "Sri Lanka", region: "Asia", soundProfile: "jungle",
    summary: "An island of tea hills, ancient rock fortresses, elephants and palm-lined beaches.",
    hero: "wiki:Adam's Peak",
    places: [
      { name: "Sigiriya", pics: ["1i1x9j", "1i1x9h", "1hdx3w"], add: ["1pm2fwb", "1q1qkdw", "jupp8", "106unmi", "mac4w"], lat: 7.9570, lng: 80.7603, category: "Historical", sound: "jungle",
        tagline: "The Lion Rock fortress",
        description: "A column of rock nearly 200 metres high stands alone above the jungle, and in the 5th century King Kashyapa built his palace on its flat top. The climb passes ancient frescoes of women painted on the cliff and then two enormous stone lion paws that once formed the gateway. From the summit the forest stretches flat in every direction.",
        bestTime: "Jan–Apr", image: "wiki:Sigiriya" },
      { name: "Kandy", add: ["1h6bv7m", "vvkjyc", "18ir7wm", "1e616ap", "mzh6ch", "1kf8k3p"], lat: 7.2906, lng: 80.6337, category: "Culture", sound: "temple",
        tagline: "The hill capital and the Temple of the Tooth",
        description: "Set around a lake in green hills, Kandy is home to the Temple of the Tooth, which holds Sri Lanka's most sacred Buddhist relic. Come for the evening ceremony of drums and offerings of lotus flowers. From here, one of the most scenic train rides in the world winds slowly up through the tea plantations.",
        bestTime: "Jan–Apr; Jul–Aug (Esala Perahera)", image: "wiki:Temple of the Tooth", wiki: "Kandy" },
      { name: "Ella", add: ["177wxzh", "iyb39n", "iq4wcv", "9jju9n", "1x1g0cm"], lat: 6.8667, lng: 81.0466, category: "Nature", sound: "rainforest",
        tagline: "Tea country and the Nine Arch Bridge",
        description: "A small village high in the hills, surrounded by bright green tea bushes and often wrapped in cool mist. Walk along the railway track to the Nine Arch Bridge, a stone viaduct curving through the jungle, and wait for the blue train to cross. Little Adam's Peak is an easy sunrise hike with a huge view.",
        bestTime: "Jan–May", image: "wiki:Nine Arch Bridge", wiki: "Ella, Sri Lanka" },
      { name: "Galle Fort", pics: ["fozpn", "v3i85", "ih5na", "2h1ykz"], add: ["r0rt6r", "1topl8g", "pda516", "w9lpav", "1hap25d"], lat: 6.0260, lng: 80.2170, category: "Historical", sound: "ocean",
        tagline: "A Dutch colonial fort on the Indian Ocean",
        description: "First built by the Portuguese and greatly expanded by the Dutch from 1649, the fort is a small walled town of churches, verandas and quiet streets on a rocky headland. Every evening the whole town seems to walk the ramparts to watch the sun set over the sea, past the white lighthouse and boys diving from the walls.",
        bestTime: "Dec–Apr", image: "wiki:Galle Fort" }
    ]
  },
  {
    id: "860", name: "Uzbekistan", region: "Asia", soundProfile: "temple",
    summary: "The great cities of the Silk Road, tiled in every shade of blue.",
    hero: "wiki:Shah-i-Zinda",
    places: [
      { name: "Samarkand", add: ["pt0rz2", "1veyv3e", "52t2qv", "176h4rc", "1cl5e0b"], skip: ["arlgyf", "xf7s6t", "1dbimh1"], lat: 39.6542, lng: 66.9597, category: "Historical", sound: "temple",
        tagline: "The crossroads of the Silk Road",
        description: "The Registan is one of the great squares of the world: three enormous madrasas facing each other, covered from ground to dome in blue, turquoise and gold tilework. Samarkand was the capital of the conqueror Timur, who lies under a ribbed blue dome nearby. Come back at dusk, when the square is lit and nearly empty.",
        bestTime: "Apr–May, Sep–Oct", image: "wiki:Registan", wiki: "Samarkand" },
      { name: "Bukhara", add: ["1whqej3", "sctzrp", "1wyvs8x", "13ef53m", "1rfk90c", "ftk3tn"], skip: ["4iqbtw", "tyb4yl", "flu5sh"], lat: 39.7747, lng: 64.4286, category: "Historical", sound: "temple",
        tagline: "A holy city of domes and caravanserais",
        description: "Bukhara's old centre is a living medieval town of mud-brick lanes, covered bazaars and more than a hundred protected monuments. The Kalyan Minaret, built in 1127, so impressed Genghis Khan that he is said to have spared it. In the evening everyone gathers around the pool of Lyabi-Hauz, under mulberry trees centuries old.",
        bestTime: "Apr–May, Sep–Oct", image: "wiki:Po-i-Kalyan", wiki: "Bukhara" },
      { name: "Khiva", add: ["1yokmxz", "1sjqai1", "1lidxv9", "r8gljb", "bhtxw4", "l6m4zi"], lat: 41.3783, lng: 60.3639, category: "Historical", sound: "desert",
        tagline: "A walled desert city frozen in time",
        description: "Inside its curving mud walls, Khiva's inner town of Itchan Kala is so completely preserved that it feels like a film set, with no modern buildings in sight. The stubby Kalta Minor minaret, wrapped in bands of turquoise tile, was meant to be the tallest in Central Asia but was never finished. Climb the walls at sunset as the desert light turns the city gold.",
        bestTime: "Apr–May, Sep–Oct", image: "wiki:Itchan Kala", wiki: "Khiva" }
    ]
  },

  /* ---------- Oceania ---------- */
  {
    id: "036", name: "Australia", region: "Oceania", soundProfile: "ocean",
    summary: "A harbour city, the planet's largest coral reef, and a red rock in the middle of nowhere.",
    hero: "wiki:Sydney Harbour Bridge",
    places: [
      { name: "Sydney", add: ["17qdwby", "19xjos", "qxu6u1"], skip: ["v97cql", "1qk534k"], lat: -33.8568, lng: 151.2153, category: "City", sound: "city",
        tagline: "The harbour city",
        description: "The white sails of the Opera House, opened in 1973, sit on a point in one of the world's great natural harbours, next to the steel arch of the Harbour Bridge. Take a ferry across to Manly for the best view of both, then walk the clifftop path from Bondi to Coogee, stopping to swim at the ocean pools along the way.",
        bestTime: "Sep–Nov, Mar–May", image: "wiki:Sydney Opera House", wiki: "Sydney" },
      { name: "Great Barrier Reef", pics: ["1qj2ha", "1yue87", "1pcr98", "1pd0r1"], add: ["1xcf0r8", "je63u8", "1s72e8z", "mmw5rx", "18acvqg", "tyi7j3"], lat: -16.7594, lng: 145.9731, category: "Nature", sound: "ocean", zoom: 8,
        tagline: "The largest living structure on Earth",
        description: "The reef runs for about 2,300 kilometres along the Queensland coast and is made up of nearly 3,000 individual reefs. Put your face in the water and it is another world: coral gardens, giant clams, green turtles and clouds of fish in impossible colours. Warming seas have caused repeated coral bleaching, so see it with an operator that supports reef conservation.",
        bestTime: "Jun–Oct", image: "wiki:Green Island (Queensland)", wiki: "Great Barrier Reef" },
      { name: "Uluru", add: ["1fnusv3", "1uxadte", "16ut9ta", "wet1si", "536cnb", "bn0hu5", "3enspx", "1h94q9x"], skip: ["lw1rte", "1ynxxst"], lat: -25.3444, lng: 131.0369, category: "Nature", sound: "desert", zoom: 11,
        tagline: "The red heart of Australia",
        description: "A single sandstone rock 348 metres high rises from a flat red desert, and at sunrise and sunset it glows as if lit from inside. Uluru is sacred to the Anangu people, its traditional owners, and climbing it has been prohibited since 2019. Walk the ten-kilometre track around the base instead, past waterholes and ancient rock art.",
        bestTime: "May–Sep (cooler months)", image: "wiki:Uluru" },
      { name: "Great Ocean Road", pics: ["17nszv", "17nt0g", "17nt0w", "1jenk6"], add: ["1j96861", "1aouchu", "limsrs", "cw4e9f", "159wbx8", "1kza71w"], lat: -38.6621, lng: 143.1051, category: "Nature", sound: "ocean", zoom: 10,
        tagline: "Limestone stacks in the Southern Ocean",
        description: "This 243-kilometre coastal road was built by soldiers returning from the First World War and is the world's largest war memorial. It winds past surf beaches and rainforest to the Twelve Apostles, a line of golden limestone stacks standing in heavy surf. Come at dusk, when the cliffs glow and little penguins come ashore below.",
        bestTime: "Dec–Mar", image: "wiki:The Twelve Apostles (Victoria)", wiki: "Great Ocean Road" }
    ]
  },
  {
    id: "554", name: "New Zealand", region: "Oceania", soundProfile: "mountains",
    summary: "Fiords, glaciers and volcanoes at the bottom of the world, with hardly anyone around.",
    hero: "wiki:Lake Tekapo",
    places: [
      { name: "Queenstown", add: ["1yl3lto", "nsf9me", "wwg1wa", "9lcr5d", "1c9kk9e", "ce8mwj"], lat: -45.0312, lng: 168.6626, category: "Mountain", sound: "mountains",
        tagline: "The adventure capital of the world",
        description: "Queenstown sits on the shore of the long, cold Lake Wakatipu, facing the jagged ridge of the Remarkables. Commercial bungy jumping started here in 1988, off the Kawarau Bridge, and you can still jump from the same spot. If that is not your thing, ride the gondola up for the view, or ski the surrounding fields in winter.",
        bestTime: "Dec–Feb (summer), Jun–Aug (skiing)", image: "wiki:Queenstown, New Zealand" },
      { name: "Milford Sound", pics: ["esiw", "5diur", "1je63o", "1jcga8", "tlebd"], add: ["1dq1jmt", "zjhnxg", "1xkiprp", "1mam10p", "fth4nf", "1jp36ha"], lat: -44.6414, lng: 167.8974, category: "Nature", sound: "rainforest", zoom: 10,
        tagline: "A fiord of waterfalls and sheer rock walls",
        description: "Mitre Peak rises more than 1,600 metres straight out of dark, still water at the head of this fiord. It is one of the wettest places on Earth, and that is the best time to see it: after rain, hundreds of temporary waterfalls pour down the cliffs. Take a boat out toward the sea, past seals asleep on the rocks.",
        bestTime: "Nov–Apr", image: "wiki:Milford Sound" },
      { name: "Rotorua", pics: ["tsmli", "bxlyl", "5kmu3"], add: ["1pl4awo", "iqn7yg", "a9f99h", "118349u"], lat: -38.1368, lng: 176.2497, category: "Culture", sound: "mountains",
        tagline: "Geysers, mud pools and Māori culture",
        description: "You smell Rotorua before you see it: the sulphur of a town built on a geothermal field. Mud pools bubble by the roadside and the Pōhutu geyser erupts up to 30 metres high several times a day. This is also a heartland of Māori culture, where you can share a meal cooked in an earth oven and watch a haka performed at close range.",
        bestTime: "Nov–Apr", image: "wiki:Whakarewarewa", wiki: "Rotorua" },
      { name: "Aoraki / Mount Cook", add: ["154myg4", "14vbpu6", "fjnrhc", "1x0alx6", "1skq5wn", "p4wrab", "xq8tca"], lat: -43.5950, lng: 170.1418, category: "Mountain", sound: "mountains", zoom: 10,
        tagline: "New Zealand's highest peak",
        description: "At 3,724 metres, Aoraki towers over a valley of glaciers and milky turquoise lakes. The Hooker Valley Track is an easy three-hour return walk across swing bridges to a lake where icebergs float in front of the mountain. The area is an international dark sky reserve, so stay for the stars.",
        bestTime: "Dec–Mar", image: "wiki:Aoraki / Mount Cook" }
    ]
  },
/* ---------- Added: more of the Americas ---------- */
  {
    id: "591", name: "Panama", region: "Central America", soundProfile: "jungle",
    summary: "A canal between two oceans, a skyline on the Pacific, and islands on both coasts.",
    hero: "wiki:Casco Viejo, Panama",
    places: [
      { name: "Panama City", pics: ["5bmoo", "1fdf20", "2xy4b2", "uywgi", "10h2sk"], add: ["1jbvp56", "1k4jfy2", "1y4rrl0", "1g3go3q"], lead: ["Panama City Skyline 1.jpg", "Panama City Skyline 2017.jpg", "Panama City financial district.jpg", "Panama City Skyline 180107.jpg"], skip: ["18v3d5i", "1g9t68n", "1v8pk9g"], lat: 8.9824, lng: -79.5199, category: "City", sound: "city",
        tagline: "Glass towers beside a colonial quarter",
        description: "A wall of skyscrapers rises along the Pacific, and a short walk away the old quarter of Casco Viejo is all balconies, church towers and plazas, rebuilt after the pirate Henry Morgan sacked the original city in 1671. Walk the Cinta Costera at sunset for the skyline, then climb Ancón Hill, where sloths and toucans live within sight of the towers.",
        bestTime: "Jan–Apr (dry season)", image: "wiki:Panama City" },
      { name: "Panama Canal", pics: ["1fdf2q", "cy4p6"], add: ["1snu7n0", "agf6t9", "q9iuy", "aur313"], lead: ["Locomotives Tow Container Ship through Miraflores Locks - Panama Canal.jpg", "Cruise ship passing Miraflores Locks 2019-10-24.jpg", "Miraflores Locks, Panama - 11.jpg"], skip: ["p06wkp", "12xstg1", "16qwy6v"], lat: 9.0153, lng: -79.5897, category: "Culture", sound: "city",
        tagline: "Ships climbing over a continent",
        description: "Opened in 1914, the canal lifts ships 26 metres above sea level through a staircase of locks and carries them 80 kilometres between the Atlantic and the Pacific. At the Miraflores Locks you stand a few metres from a container ship as it rises with the water, pulled into place by small electric locomotives called mules.",
        bestTime: "Jan–Apr (dry season)", image: "wiki:Bridge of the Americas", wiki: "Panama Canal" },
      { name: "San Blas Islands", pics: ["anmb3", "bj7s7", "f9wif", "10z8be"], add: ["1airp6n", "b9tnek", "trz486", "1ssjo3a"], skip: ["dodfe4"], lat: 9.5700, lng: -78.8200, category: "Beach", sound: "ocean", zoom: 10,
        tagline: "Hundreds of palm islands run by the Guna",
        description: "More than 360 small coral islands lie off the Caribbean coast, most of them a ring of white sand around a handful of coconut palms. They belong to the Guna people, who govern the territory themselves and keep it free of big resorts. You sleep in a simple cabin over the sand and eat the fish that was caught that morning.",
        bestTime: "Dec–Apr", image: "wiki:Guna Yala" },
      { name: "Bocas del Toro", pics: ["sux8v", "2fl0jw", "kccbr", "17w50b", "1o7ddi", "sux8i", "sux8r", "sux8x", "sux8u", "ta248", "2t5pxe", "xzzgf", "10y7wn", "2t5pk5", "o4uq8", "uywg3", "uywg6"], skip: ["gq64pk"], lat: 9.3403, lng: -82.2420, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "Caribbean islands of surf and stilt houses",
        description: "A cluster of jungle-covered islands near the Costa Rican border, where painted wooden houses stand on stilts over the water and boats are the taxis. Starfish Beach has calm, clear water with red starfish on the sandy bottom, and on Bastimentos tiny red poison dart frogs hop across the forest trail.",
        bestTime: "Feb–Apr, Sep–Oct", image: "wiki:Bastimentos Island", wiki: "Bocas del Toro Archipelago" },
      { name: "Boquete", pics: ["1j5jba", "1j5jbq", "1j5jb9", "dzytf", "1ff7iv", "2t14ce", "176adq", "2azrg", "f9qh0", "tl4xq"], add: ["1y8l9sw", "qp458d", "1eec2su", "15q6x9b", "10cwzt9"], skip: ["1aa4t3a", "2oisti"], lat: 8.7800, lng: -82.4400, category: "Mountain", sound: "rainforest",
        tagline: "Cool highlands of coffee and cloud forest",
        description: "A small town in a green valley under Volcán Barú, at 3,475 metres the highest point in Panama. The mild climate grows some of the most prized coffee in the world, the Geisha variety. Hike the Quetzal Trail through cloud forest, or start in the dark and reach the volcano's summit for sunrise, where on a clear morning you can see both oceans.",
        bestTime: "Dec–Apr (dry season)", image: "wiki:Boquete, Chiriquí", more: ["Volcán Barú"] }
    ]
  },
  {
    id: "862", name: "Venezuela", region: "South America", soundProfile: "jungle",
    summary: "The world's highest waterfall, flat-topped mountains older than the dinosaurs, and Caribbean atolls.",
    hero: "wiki:Canaima National Park",
    places: [
      { name: "Angel Falls", pics: ["1td35u", "jp2dg", "jnipc", "wgp5x", "1qqrbp", "26ms6r"], add: ["1hi5g0h"], lat: 5.9701, lng: -62.5362, category: "Nature", sound: "rainforest",
        tagline: "The highest waterfall on Earth",
        description: "Water drops 979 metres from the top of the Auyán-tepui tabletop mountain, so far that much of it turns to mist before reaching the ground. There is no road. You fly into Canaima, travel upriver by dugout canoe, then walk through the jungle to the viewpoint, where the spray reaches you on the breeze.",
        bestTime: "Jun–Nov (fullest flow)", image: "wiki:Angel Falls" },
      { name: "Mount Roraima", pics: ["jms5w", "jmgu1", "2xgbt", "o4v0v", "o4v1e", "o4v0a", "o4v12", "a52nw", "a52jr"], add: ["qokfk3", "1i0dagd", "5727v", "na1nb2", "1y206bk"], lat: 5.1433, lng: -60.7625, category: "Mountain", sound: "mountains",
        tagline: "A table mountain above the clouds",
        description: "Roraima is a tepui, a flat-topped block of sandstone with sheer cliffs 400 metres high, among the oldest rock formations on the planet. The trek to the top takes several days, and the summit is a strange plateau of black rock, crystal beds and plants that grow nowhere else. It helped inspire Arthur Conan Doyle's novel The Lost World.",
        bestTime: "Dec–Apr (drier months)", image: "wiki:Mount Roraima" },
      { name: "Los Roques", add: ["18t2tkr", "14lbydf", "2rc0lx", "1of2nuk", "1uqy5ya", "6teo5h", "15nlcqx"], lat: 11.8500, lng: -66.7500, category: "Beach", sound: "ocean", zoom: 10,
        tagline: "A coral atoll of white sandbars",
        description: "An archipelago of some 350 islands, cays and sandbanks around a shallow lagoon, about 160 kilometres north of the mainland and protected as a national park since 1972. The water runs through every shade of turquoise, and the sand is so white and fine it stays cool underfoot. Small boats drop you on an empty cay for the day with a cooler and a parasol.",
        bestTime: "Year-round (driest Jan–Jun)", image: "wiki:Los Roques Archipelago" },
      { name: "Caracas", pics: ["b3mvd"], add: ["v1r9z5", "1j3ltsc", "1bys5pg", "1d1g85j", "16cgt4r"], lead: ["Caracas vista desde el cerro El Ávila.JPG", "Panoramic View of Caracas from Avila Mont.jpg", "Caracas desde el ávila.jpg"], skip: ["k47v6t", "1f626l0"], lat: 10.4806, lng: -66.9036, category: "City", sound: "city",
        tagline: "A capital in a valley under El Ávila",
        description: "Caracas fills a long valley at about 900 metres, with the green wall of the Ávila mountain separating it from the Caribbean. A cable car climbs the mountain to more than 2,000 metres for a view of the city on one side and the sea on the other. Simón Bolívar, who led much of South America to independence, was born here in 1783.",
        bestTime: "Dec–Apr (dry season)", image: "wiki:Caracas" }
    ]
  },
  {
    id: "858", name: "Uruguay", region: "South America", soundProfile: "ocean",
    summary: "A quiet corner of the continent: an old riverside capital, a colonial port, and long Atlantic beaches.",
    hero: "wiki:Cabo Polonio",
    places: [
      { name: "Montevideo", pics: ["srlkm", "1puqyz", "1puqz7", "2ekm7w"], add: ["68i7xm", "dyd9ds", "1ix0c6u"], skip: ["lcilyj", "owsyd8", "1o3l93i", "1g4d3wr"], lat: -34.9011, lng: -56.1645, category: "City", sound: "city",
        tagline: "A relaxed capital on the Río de la Plata",
        description: "The Rambla, a waterfront promenade more than 20 kilometres long, runs the whole length of the city, and at sunset everyone is on it with a thermos and a mate gourd. In the Ciudad Vieja, the old port market is now a hall of wood-fired grills. Candombe drumming, brought by enslaved Africans, still fills the streets of Barrio Sur on weekend evenings.",
        bestTime: "Nov–Mar", image: "wiki:Montevideo" },
      { name: "Colonia del Sacramento", pics: ["ayvip", "akq84", "lk8e7", "h1tko", "akq87", "akq88", "umb8g", "ek00d", "38183c"], add: ["133m1zs", "1d2jkg8", "1qv8md3", "a51b4k"], lat: -34.4626, lng: -57.8400, category: "Historical", sound: "ocean",
        tagline: "A Portuguese outpost on the river",
        description: "Founded by the Portuguese in 1680 and fought over with Spain for a century, Colonia's old quarter is a small grid of cobbled lanes, low stone houses and a white lighthouse above the river. The Street of Sighs still has its original uneven paving. Vintage cars sit parked as decoration, and Buenos Aires is an hour away by ferry across the water.",
        bestTime: "Oct–Apr", image: "wiki:Colonia del Sacramento" },
      { name: "Punta del Este", pics: ["rd9u4", "rd9tn", "rd9tc", "21uke", "hc6fi"], add: ["wi8jmm", "7xmhx5", "p6i103", "14qfcwj", "fi0t4u"], lat: -34.9667, lng: -54.9500, category: "Beach", sound: "ocean",
        tagline: "The summer capital of the Southern Cone",
        description: "A narrow peninsula with the calm river on one side and Atlantic surf on the other. On Brava beach a giant concrete hand rises out of the sand, a sculpture made in 1982. Up the coast, the village of José Ignacio is quieter and more stylish, and Casapueblo, a white cliffside building shaped by hand, is the place to watch the sun set.",
        bestTime: "Dec–Feb", image: "wiki:Punta del Este" }
    ]
  },
  {
    id: "600", name: "Paraguay", region: "South America", soundProfile: "jungle",
    summary: "Jesuit ruins in red stone, one of the largest dams ever built, and a slow riverside capital.",
    hero: "wiki:Palacio de los López",
    places: [
      { name: "Asunción", add: ["ji7hkl", "23dqwk", "qx81n7", "15clxkv"], skip: ["v0holn"], lat: -25.2637, lng: -57.5759, category: "City", sound: "city",
        tagline: "One of South America's oldest capitals",
        description: "Founded in 1537 on a bend of the Paraguay River, Asunción is unhurried and shaded by mango and lapacho trees, which turn the streets pink when they flower in late winter. See the pink Palacio de los López lit up at night and walk the riverfront Costanera. Paraguay is the only country in the Americas where an Indigenous language, Guaraní, is spoken by most of the population.",
        bestTime: "May–Sep (cooler months)", image: "wiki:Asunción" },
      { name: "Jesuit Missions of Trinidad", pics: ["32n5kh", "32n5ki", "wforw", "wfos6", "39p11g", "wfotj", "1rdn5o", "1rdn3f", "1rdn1l", "1rdnfa", "38qg25", "38qg31"], add: ["1jemh1c", "1p08yr8", "dypfcm"], lat: -27.1317, lng: -55.7028, category: "Historical", sound: "temple",
        tagline: "A mission town in red stone",
        description: "In the 1700s Jesuit priests and Guaraní communities built self-governing towns here, with workshops, schools and huge churches. La Santísima Trinidad de Paraná is the best preserved: a roofless church of carved red sandstone, with a frieze of angels playing harps and violins. It is a UNESCO site and one of the least visited on the continent.",
        bestTime: "May–Sep", image: "wiki:La Santísima Trinidad de Paraná" },
      { name: "Itaipu Dam", pics: ["gxhso", "qz3yt", "qz3z1", "23ean", "qz3yx", "10xhv1", "1r9ryi", "1vkdu7"], add: ["1ddyun9"], skip: ["1l7r7ok", "d5p5av", "1ixptol"], lat: -25.4081, lng: -54.5889, category: "Culture", sound: "ocean",
        tagline: "A wall of concrete across the Paraná",
        description: "Shared with Brazil, Itaipu is nearly eight kilometres long and 196 metres high, and for years it produced more electricity than any other dam on Earth. It supplies most of Paraguay's power. Tours take you along the top of the dam and, when the spillway is open, past a torrent that carries many times the flow of Iguaçu Falls.",
        bestTime: "Year-round", image: "wiki:Itaipu Dam" }
    ]
  },
  {
    id: "328", name: "Guyana", region: "South America", soundProfile: "rainforest",
    summary: "Untouched rainforest, a waterfall of enormous power, and a wooden capital on the Atlantic.",
    hero: "wiki:Essequibo River",
    places: [
      { name: "Kaieteur Falls", pics: ["10ypli", "10ypl8", "10yplf", "10ypll", "1f71u0", "10ypla"], add: ["tv5oq7"], lat: 5.1750, lng: -59.4800, category: "Nature", sound: "rainforest",
        tagline: "A single drop of 226 metres",
        description: "The Potaro River pours over a sandstone cliff in one unbroken fall of 226 metres, about four times the height of Niagara, in the middle of rainforest with no railings and almost no other visitors. You arrive by small plane and walk a few minutes to the edge. Tiny golden frogs live their whole lives inside the giant bromeliads near the rim.",
        bestTime: "Feb–Apr, Aug–Oct", image: "wiki:Kaieteur Falls" },
      { name: "Georgetown", pics: ["1hw5ur", "2ovico", "10ypep", "o4v2a", "of3zx", "1har3u", "10yph5", "2ovicu"], add: ["1t99yxn", "148iqjd", "2fhf48"], skip: ["19awhkg"], lat: 6.8013, lng: -58.1551, category: "City", sound: "city",
        tagline: "A capital of white wooden buildings",
        description: "Georgetown sits below sea level behind a sea wall, crossed by canals dug by the Dutch. Its buildings are tall, white and wooden, with louvred shutters to catch the breeze, and St George's Cathedral is one of the tallest wooden churches in the world. Stabroek Market, under an iron clock tower, sells everything from gold to river fish.",
        bestTime: "Feb–Apr, Aug–Oct", image: "wiki:Georgetown, Guyana" },
      { name: "Iwokrama Forest", pics: ["o4v1y"], lead: ["Iwokrama Rainforest, Guyana (12179378186).jpg", "Iwokrama Rainforest, Guyana (12179003713).jpg"], lat: 4.6700, lng: -58.6800, category: "Nature", sound: "rainforest", zoom: 9,
        tagline: "A million acres of protected rainforest",
        description: "In the centre of the country, Iwokrama protects nearly 3,700 square kilometres of rainforest, home to jaguars, giant river otters, harpy eagles and black caimans. A canopy walkway hangs 30 metres up among the treetops, and at dawn the forest wakes with howler monkeys and screaming pihas. Jaguars are seen here on the road more often than almost anywhere.",
        bestTime: "Sep–Apr", image: "wiki:Iwokrama Forest" }
    ]
  },
  {
    id: "740", name: "Suriname", region: "South America", soundProfile: "rainforest",
    summary: "A Dutch colonial capital built of wood, with rainforest covering nearly everything else.",
    hero: "wiki:Suriname River",
    places: [
      { name: "Paramaribo", pics: ["2k4v7g"], add: ["175zgla", "1utilat", "femn0b", "4wbdj5", "1x3oy36"], skip: ["1rrf72q"], lat: 5.8520, lng: -55.2038, category: "Historical", sound: "city",
        tagline: "A wooden Dutch city in the tropics",
        description: "The historic centre is a UNESCO site of white-painted wooden houses with green shutters, laid out by the Dutch in the 17th and 18th centuries. A mosque and a synagogue stand side by side on the same street, and the wooden cathedral of Saint Peter and Paul is among the largest wooden buildings in the Americas. Along the river, stalls sell Javanese, Creole and Indian food.",
        bestTime: "Feb–Apr, Aug–Nov", image: "wiki:Presidential Palace of Suriname", wiki: "Paramaribo" },
      { name: "Central Suriname Nature Reserve", lat: 4.0000, lng: -56.5000, category: "Nature", sound: "rainforest", zoom: 8,
        tagline: "Rainforest with almost no people in it",
        description: "This reserve protects 16,000 square kilometres of primary rainforest, more than a tenth of the country, and almost nobody lives inside it. Granite domes rise above the canopy, and the Raleigh Falls on the Coppename River are reached by boat. Climb the Voltzberg dome at dawn to see unbroken forest to every horizon.",
        bestTime: "Feb–Apr, Aug–Nov", image: "wiki:Central Suriname Nature Reserve" },
      { name: "Brownsberg Nature Park", pics: ["7g7qd", "3gcxd", "15hhps"], skip: ["1hlm365", "wtuj6p", "1m2bvs2"], lat: 4.9440, lng: -55.1830, category: "Nature", sound: "rainforest",
        tagline: "A forested plateau above a great lake",
        description: "A few hours south of the capital, a plateau 500 metres high looks out over the Brokopondo Reservoir, where the tops of drowned trees still stand in the water. Trails lead down through the forest to small waterfalls. Howler monkeys, toucans and bright blue morpho butterflies are easy to see.",
        bestTime: "Feb–Apr, Aug–Nov", image: "wiki:Brokopondo Reservoir", wiki: "Brownsberg Nature Park" }
    ]
  },

  /* ---------- Added: Northern and Eastern Europe ---------- */
  {
    id: "752", name: "Sweden", region: "Europe", soundProfile: "city",
    summary: "A capital spread across islands, deep forest and lakes, and the Arctic north under the aurora.",
    hero: "wiki:Stockholm City Hall",
    places: [
      { name: "Stockholm", add: ["1e51p26", "dyzfz0", "18utnau", "1a0ipbo"], lat: 59.3293, lng: 18.0686, category: "City", sound: "city",
        tagline: "A capital built on fourteen islands",
        description: "Water is everywhere: the city is spread over fourteen islands where a lake meets the Baltic. Gamla Stan, the old town, is a tangle of ochre and rust-coloured houses and lanes barely a metre wide. See the Vasa, a 17th-century warship that sank on its first voyage in 1628 and was raised almost intact, then take a boat out into the archipelago of some 30,000 islands.",
        bestTime: "May–Sep", image: "wiki:Gamla stan", wiki: "Stockholm" },
      { name: "Gothenburg", add: ["7i17mf", "xx827u", "17g7bzt"], lead: ["Feskekôrka July 2025 01.jpg", "Goteborg panorama from Skansen Kronan.jpg", "Feskekôrka September 2016 01.jpg"], skip: ["vu4ao9", "ptw64u", "1ivomtn", "1gw4ohq"], lat: 57.7089, lng: 11.9746, category: "City", sound: "ocean",
        tagline: "Sweden's easygoing west-coast port",
        description: "A city of canals dug by Dutch engineers, blue trams and seafood straight off the boats. Walk the wooden houses and cafés of the Haga district, known for cinnamon buns the size of a plate, and eat at the fish market hall locals call the Fish Church. Ferries run to the car-free islands of the southern archipelago in half an hour.",
        bestTime: "May–Sep", image: "wiki:Gothenburg" },
      { name: "Swedish Lapland", pics: ["2g627b", "39g1av", "39g1au", "bk3tk"], add: ["h4xsd7", "t0bnjf", "8dkgsg", "17pxrr1", "1osjlft", "1asd3cp", "12re907"], skip: ["uii4j6"], lat: 68.3495, lng: 18.8312, category: "Nature", sound: "mountains", zoom: 7,
        tagline: "Northern lights and the midnight sun",
        description: "Far above the Arctic Circle, Abisko has some of the clearest skies in the aurora zone, which makes it one of the most reliable places on Earth to see the northern lights. In summer the sun does not set for weeks and the Kungsleden trail runs for 440 kilometres through empty mountains. This is Sápmi, the homeland of the Sami, who still herd reindeer here.",
        bestTime: "Dec–Mar (aurora), Jun–Jul (midnight sun)", image: "wiki:Abisko National Park" },
      { name: "Visby", add: ["1kwtx4m", "atcxfn", "zsvni3", "1prq5vj", "1yeh3gy"], skip: ["ej6aun"], lat: 57.6348, lng: 18.2948, category: "Historical", sound: "ocean",
        tagline: "A walled Hanseatic town on Gotland",
        description: "On the island of Gotland in the Baltic, Visby is ringed by a medieval wall more than three kilometres long with dozens of towers still standing. Inside are cobbled lanes, rose-covered cottages and the roofless ruins of a dozen Gothic churches. In the Middle Ages it was one of the richest trading towns in northern Europe.",
        bestTime: "Jun–Aug", image: "wiki:Visby" }
    ]
  },
  {
    id: "246", name: "Finland", region: "Europe", soundProfile: "mountains",
    summary: "A hundred and eighty-eight thousand lakes, endless forest, saunas, and Lapland under the northern lights.",
    hero: "wiki:Koli National Park",
    places: [
      { name: "Helsinki", add: ["1suntgr", "1pgcdd", "1h9tt3y"], lead: ["Helsinki's Cathedral.jpg", "Helsinki Senate Square with flowers.jpg"], skip: ["tvlq51", "q9dexm"], lat: 60.1699, lng: 24.9384, category: "City", sound: "city",
        tagline: "A design capital on the Baltic",
        description: "The white Helsinki Cathedral stands above Senate Square, and the harbour market below sells salmon soup and cloudberries. The Temppeliaukio Church is blasted straight into solid granite, with a copper dome for a roof. A short ferry ride takes you to Suomenlinna, a sea fortress spread over six islands. Do as locals do and follow a public sauna with a jump into the sea.",
        bestTime: "May–Sep", image: "wiki:Helsinki Cathedral", wiki: "Helsinki" },
      { name: "Rovaniemi & Lapland", add: ["is2fe6", "1va4phy", "1cxchgs", "bewylu", "a1z3e4", "mn2ha7"], skip: ["1ni4vb7"], lat: 66.5039, lng: 25.7294, category: "Nature", sound: "mountains", zoom: 8,
        tagline: "The Arctic Circle in deep winter",
        description: "Rovaniemi sits right on the Arctic Circle, and from here north the land is snow-covered forest and fells for half the year. Travel by husky sled or reindeer sleigh, sleep in a glass-roofed cabin, and watch the northern lights, which appear on roughly every other clear night in the far north. In midsummer the sun never sets.",
        bestTime: "Dec–Mar (snow and aurora)", image: "wiki:Pallas-Yllästunturi National Park", wiki: "Rovaniemi" },
      { name: "Finnish Lakeland", add: ["jxzwr2", "oqz69q", "1l5b6ja", "1khztvo", "1ibtb42"], skip: ["16r6clr", "1jbg8e6"], lat: 61.8640, lng: 28.9010, category: "Nature", sound: "mountains", zoom: 8,
        tagline: "A maze of blue water and forest",
        description: "Eastern Finland is more water than land: Lake Saimaa alone has thousands of islands, and it is home to one of the rarest seals in the world. The 15th-century castle of Olavinlinna stands on a rock in the middle of a strait and hosts an opera festival each July. This is the country of the lakeside cabin, the wood-fired sauna and the midnight swim.",
        bestTime: "Jun–Aug", image: "wiki:Olavinlinna" }
    ]
  },
  {
    id: "643", name: "Russia", region: "Europe & Asia", soundProfile: "city", bounds: [[42, 27], [72, 150]],
    summary: "The largest country on Earth: onion domes, imperial palaces, and a lake that holds a fifth of the world's fresh water.",
    hero: "wiki:Saint Basil's Cathedral",
    places: [
      { name: "Moscow", add: ["q693u4", "mj2s7s", "1sipdj5", "44ycna", "1rxc05g"], lat: 55.7558, lng: 37.6173, category: "City", sound: "metropolis",
        tagline: "Red Square and the Kremlin",
        description: "The striped and swirling domes of St Basil's Cathedral, finished in 1561, stand at one end of Red Square, with the red walls of the Kremlin along its side. The metro is a sight in itself: stations built like underground palaces, with chandeliers, mosaics and marble. The Bolshoi Theatre has staged opera and ballet on the same square since 1825.",
        bestTime: "May–Sep", image: "wiki:Moscow Kremlin", wiki: "Moscow" },
      { name: "Saint Petersburg", add: ["1cviuz3", "iyi0aj", "l2cowy", "1i4i8h0", "gh3di2", "18v8c9o", "1616m3q"], skip: ["60ghth"], lat: 59.9311, lng: 30.3609, category: "City", sound: "city",
        tagline: "The imperial city on the Neva",
        description: "Peter the Great founded the city in 1703 on marshland, and it grew into a capital of canals, pastel palaces and golden spires. The Hermitage, in the green and white Winter Palace, holds around three million works of art. In late June the sun barely sets: these are the White Nights, when the bridges over the Neva are raised after midnight and the whole city stays out.",
        bestTime: "May–Sep (White Nights in June)", image: "wiki:Winter Palace", wiki: "Saint Petersburg" },
      { name: "Lake Baikal", add: ["1osxnmo", "z5g2tl", "11dfwap", "4lyozd", "1eh9o5", "1duhnng"], lat: 53.5587, lng: 108.1650, category: "Nature", sound: "mountains", zoom: 7,
        tagline: "The deepest lake in the world",
        description: "Baikal is 1,642 metres deep and around 25 million years old, and it holds about a fifth of all the unfrozen fresh water on Earth. The water is clear enough to see 40 metres down. In winter it freezes into transparent turquoise ice more than a metre thick, strong enough to drive on, and the only freshwater seal in the world lives along its shores.",
        bestTime: "Feb–Mar (ice), Jun–Aug", image: "wiki:Olkhon Island", wiki: "Lake Baikal" },
      { name: "Kamchatka", add: ["1f9hhbf", "1q5qxgy", "w4yjwr", "9z0ssg"], skip: ["16y3jqr", "4fy9v0"], lat: 54.4300, lng: 160.1400, category: "Nature", sound: "mountains", zoom: 7,
        tagline: "A peninsula of volcanoes and bears",
        description: "On Russia's Pacific edge, Kamchatka has around 160 volcanoes, about 29 of them active, rising above tundra and rivers thick with salmon. The Valley of Geysers, reached only by helicopter, is one of the largest geyser fields on Earth. Brown bears gather at Kuril Lake each summer to fish, sometimes dozens at a time.",
        bestTime: "Jul–Sep", image: "wiki:Klyuchevskaya Sopka", wiki: "Kamchatka Peninsula" },
      { name: "Suzdal", pics: ["1y6yjm", "13lmwg", "1kgkwz", "vu4p6"], add: ["hn61wz", "i25whm", "1qh8hz", "104vb7c"], lat: 56.4190, lng: 40.4490, category: "Historical", sound: "temple",
        tagline: "A town of monasteries on the Golden Ring",
        description: "A small town among meadows north-east of Moscow that never got a railway, and so never changed. Its skyline is all onion domes and white monastery walls, with a 13th-century cathedral whose blue domes are scattered with gold stars. Wooden houses with carved window frames line the lanes, and the local drink is medovukha, a light honey mead.",
        bestTime: "May–Sep", image: "wiki:Suzdal" }
    ]
  },
  {
    id: "616", name: "Poland", region: "Europe", soundProfile: "city",
    summary: "Medieval market squares, a capital rebuilt from rubble, Baltic amber and the peaks of the Tatras.",
    hero: "wiki:Malbork Castle",
    places: [
      { name: "Kraków", add: ["abrj4g"], lead: ["Krakow - Wawel from Vistula - 2.jpg", "Carriages at Rynek Główny. Krakow, Poland.jpg", "Krakow - Cloth Hall from Basilica - 1.jpg", "Krakow - Wawel from Vistula - 1.jpg"], skip: ["1ljd49t", "1ke0js4", "1bw7ip1"], lat: 50.0647, lng: 19.9450, category: "Historical", sound: "city",
        tagline: "The royal city on the Vistula",
        description: "Kraków's Main Market Square is one of the largest medieval squares in Europe, and it survived the war almost untouched. Every hour a trumpeter plays from the tower of St Mary's Basilica and breaks off mid-note, in memory of a watchman said to have been shot while sounding the alarm. Above the river, Wawel Castle was home to Polish kings for five centuries.",
        bestTime: "May–Sep", image: "wiki:Main Square, Kraków", wiki: "Kraków" },
      { name: "Warsaw", add: ["nwg1z6", "5pf4xs", "1jw3xzh", "b1n6tk"], lat: 52.2297, lng: 21.0122, category: "City", sound: "city",
        tagline: "A capital rebuilt brick by brick",
        description: "Around 85 percent of Warsaw was destroyed in the Second World War. Its Old Town was then rebuilt so faithfully, using old paintings and surviving fragments, that UNESCO lists the reconstruction itself as a World Heritage Site. Today the pastel market square sits a tram ride from a skyline of glass towers. Chopin grew up here, and his music is played on summer Sundays in Łazienki Park.",
        bestTime: "May–Sep", image: "wiki:Castle Square, Warsaw", wiki: "Warsaw" },
      { name: "Gdańsk", add: ["4931zv", "hnl8av", "1dguc8g", "6gkv6w", "12k8235"], skip: ["asz709", "5n2aol", "gr0tf"], lat: 54.3520, lng: 18.6466, category: "Historical", sound: "ocean",
        tagline: "A Hanseatic port on the Baltic",
        description: "Tall, narrow merchant houses with ornate gables line the Long Market, leading to a harbour front where a huge medieval wooden crane still stands over the water. Gdańsk has been the capital of Baltic amber for centuries, and Mariacka Street is lined with amber workshops. The Solidarity movement, which helped end communist rule in Europe, began in its shipyard in 1980.",
        bestTime: "May–Sep", image: "wiki:Gdańsk" },
      { name: "Zakopane & the Tatras", add: ["1qyamej", "18m9uah", "exmk85", "tq6p9h", "kl8o0l"], skip: ["cxl1xu", "1suvzm8", "oydzsr"], lat: 49.2992, lng: 19.9496, category: "Mountain", sound: "mountains",
        tagline: "Poland's mountain capital",
        description: "At the foot of the Tatra Mountains, Zakopane is known for its steep-roofed wooden houses and smoked sheep's cheese grilled at street stalls. The classic walk leads to Morskie Oko, a deep green lake ringed by granite peaks. In winter the town turns into the country's main ski resort.",
        bestTime: "Jun–Sep (hiking), Dec–Mar (skiing)", image: "wiki:Morskie Oko", wiki: "Zakopane" },
      { name: "Wieliczka Salt Mine", pics: ["1u8ma9"], add: ["ie7df2", "9trg6p"], lat: 49.9830, lng: 20.0540, category: "Historical", sound: "temple",
        tagline: "A cathedral carved from salt",
        description: "Salt was mined here from the 13th century until 2007. Miners carved chapels, statues and whole halls out of the grey rock salt as they went, and the Chapel of St Kinga, 101 metres underground, has an altar, reliefs and chandeliers all made of salt. The tourist route descends around 800 steps and covers only a small part of nearly 300 kilometres of tunnels.",
        bestTime: "Year-round", image: "wiki:Wieliczka Salt Mine" }
    ]
  },
  {
    id: "642", name: "Romania", region: "Europe", soundProfile: "city",
    summary: "Saxon towns and castles in Transylvania, one of Europe's great mountain roads, and a delta full of birds.",
    hero: "wiki:Peleș Castle",
    places: [
      { name: "Brașov", pics: ["wsqwz", "2ld7up", "2lcogg", "3kixa"], add: ["m2tudz", "1wgrff8", "bfn1s7", "19u14hk", "4jhu8e"], lat: 45.6427, lng: 25.5887, category: "Historical", sound: "city",
        tagline: "A Saxon town under the Carpathians",
        description: "Ringed by forested mountains, Brașov has a baroque main square and the Black Church, the largest Gothic church between Vienna and Istanbul, named after a fire in 1689 that blackened its walls. Strada Sforii is one of the narrowest streets in Europe, barely wide enough for one person. Brown bears live in the woods just outside town.",
        bestTime: "May–Sep", image: "wiki:Brașov" },
      { name: "Bran Castle", pics: ["cdk26", "kly9r", "1n89mg"], add: ["h7j2sy", "7kbf68"], skip: ["16ydeu9"], lat: 45.5149, lng: 25.3672, category: "Historical", sound: "mountains",
        tagline: "The castle the world calls Dracula's",
        description: "A 14th-century fortress perched on a rock at a mountain pass, all turrets, narrow staircases and a hidden passage between floors. It is sold as Dracula's castle, though Bram Stoker never visited Romania and the real Vlad the Impaler had little to do with it. The setting, between two mountain ranges, is the real draw.",
        bestTime: "May–Sep", image: "wiki:Bran Castle" },
      { name: "Transfăgărășan", pics: ["14o6yc", "2tlw8", "4n0vl"], add: ["ng2004", "13sbd1h", "sj84k6", "1tivjsd"], lat: 45.6000, lng: 24.6170, category: "Mountain", sound: "mountains",
        tagline: "A mountain road of endless hairpins",
        description: "Built in the early 1970s across the highest range in Romania, this road climbs to 2,042 metres in a long ladder of hairpin bends. At the top is Bâlea Lake, a glacial lake that is often still ringed with snow in June. The road is closed by snow for much of the year, usually opening only from July to October.",
        bestTime: "Jul–Oct (road open)", image: "wiki:Bâlea Lake", wiki: "Transfăgărășan" },
      { name: "Danube Delta", pics: ["2wpssr", "1k8obx"], add: ["pmsopj", "1floddv", "hhp5th", "fb5sha"], skip: ["hgukhr"], lat: 45.0833, lng: 29.5000, category: "Nature", sound: "jungle", zoom: 9,
        tagline: "Europe's great wetland",
        description: "After 2,850 kilometres the Danube breaks up into a maze of channels, lakes and reed beds before it reaches the Black Sea. It is the best-preserved river delta in Europe, with more than 300 species of birds, including huge colonies of pelicans. There are few roads, so you travel by small boat between fishing villages.",
        bestTime: "Apr–Jun, Sep", image: "file:Delta del Danubio, Rumanía, 2016-05-28, DD 12.jpg", wiki: "Danube Delta" },
      { name: "Bucharest", add: ["cvjjkj", "18w05s7", "1jatdjt", "1hkxhlw", "j5sj72"], lat: 44.4268, lng: 26.1025, category: "City", sound: "city",
        tagline: "Belle Époque streets and a giant palace",
        description: "Bucharest mixes Paris-style boulevards, Orthodox churches hidden between apartment blocks, and the Palace of the Parliament, one of the largest and heaviest buildings in the world, built in the 1980s for Nicolae Ceaușescu. The old town of Lipscani is packed with bars and terraces, and the Village Museum gathers old wooden houses from every region.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Palace of the Parliament", wiki: "Bucharest" }
    ]
  },
  {
    id: "100", name: "Bulgaria", region: "Europe", soundProfile: "city",
    summary: "Painted monasteries in the mountains, a city older than Rome, and beaches on the Black Sea.",
    hero: "wiki:Seven Rila Lakes",
    places: [
      { name: "Sofia", add: ["1j6895n", "v3mevc", "iqt4ev", "85oxm1", "1y87v3m"], lat: 42.6977, lng: 23.3219, category: "City", sound: "city",
        tagline: "A capital with a mountain at the end of the street",
        description: "The gold and green domes of the Alexander Nevsky Cathedral, one of the largest Orthodox churches in the world, dominate the centre. Roman ruins lie open beneath the streets and inside metro stations, and the 4th-century Rotunda of St George still stands in a courtyard. Mount Vitosha, 2,290 metres high, is half an hour away.",
        bestTime: "May–Sep", image: "wiki:Alexander Nevsky Cathedral, Sofia", wiki: "Sofia" },
      { name: "Rila Monastery", pics: ["ha1cy", "hkq9u", "y1fnb"], add: ["1cw9n0w", "1dt8vuh", "nnt2n2", "19ze23i"], lat: 42.1335, lng: 23.3401, category: "Culture", sound: "temple",
        tagline: "A painted monastery deep in the mountains",
        description: "Founded in the 10th century and hidden in a forested valley, the monastery is a ring of striped arcades and wooden balconies around a church covered inside and out in bright frescoes. It kept Bulgarian language and culture alive through centuries of Ottoman rule. The air smells of pine and woodsmoke, and a river runs just outside the walls.",
        bestTime: "May–Oct", image: "wiki:Rila Monastery" },
      { name: "Plovdiv", add: ["s60zr1", "1ck8k3d", "4s0ab8", "1fgu2qy", "10cwobt"], skip: ["ray7kj", "1j8xul1"], lat: 42.1354, lng: 24.7453, category: "Historical", sound: "city",
        tagline: "One of the oldest cities in Europe",
        description: "People have lived on Plovdiv's hills for around 8,000 years. A Roman theatre nearly 2,000 years old, found by accident after a landslide in the 1970s, still hosts concerts above the city. The old town is a climb of cobbled lanes between painted 19th-century houses whose upper floors lean out over the street.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Plovdiv" },
      { name: "Nessebar", add: ["d0dk94", "1894tgy", "12oc97j", "b6469o"], lat: 42.6594, lng: 27.7360, category: "Beach", sound: "ocean",
        tagline: "An ancient town on a Black Sea peninsula",
        description: "Nessebar's old town sits on a small rocky peninsula joined to the mainland by a narrow causeway, with more than 3,000 years of history and the ruins of dozens of Byzantine churches in striped brick and stone. Wooden houses hang over the lanes. The long sandy beaches of the Black Sea coast begin right beside it.",
        bestTime: "Jun–Sep", image: "wiki:Church of Christ Pantocrator, Nesebar", wiki: "Nesebar" }
    ]
  },
  {
    id: "703", name: "Slovakia", region: "Europe", soundProfile: "mountains",
    summary: "A small capital on the Danube, the highest peaks of the Carpathians, and castles on every hill.",
    hero: "wiki:Bojnice Castle",
    places: [
      { name: "Bratislava", add: ["19e5ifu", "7e4oxi", "ppq8s0", "d8skks", "77g8ze", "1pmm7td"], lat: 48.1486, lng: 17.1077, category: "City", sound: "city",
        tagline: "A compact capital on the Danube",
        description: "A white castle with four corner towers sits on a hill above the river, and below it the old town is a few pedestrian streets of pastel palaces and café terraces. Look for the bronze statue of a workman peering out of a manhole. Vienna is only an hour away, making these the two closest capital cities in Europe.",
        bestTime: "May–Sep", image: "wiki:Bratislava Castle", wiki: "Bratislava" },
      { name: "High Tatras", add: ["1lsr0kr", "1twhgre", "11dljoy", "1klkyaa", "42h978"], lat: 49.1667, lng: 20.1333, category: "Mountain", sound: "mountains", zoom: 10,
        tagline: "The smallest high mountain range in Europe",
        description: "The Tatras rise abruptly from the plain to more than 2,600 metres, with sharp granite peaks, over a hundred glacial lakes and chamois on the ridges. An electric railway links the resort villages along their foot. Walk to Štrbské Pleso, a lake that reflects the peaks, or take the cable car to Lomnický štít.",
        bestTime: "Jun–Sep (hiking), Dec–Mar (skiing)", image: "wiki:High Tatras" },
      { name: "Spiš Castle", add: ["1tf2lxw", "1irjw5s", "ye66nv", "1ivlamm", "1nvnrnj", "qrz7j1"], lat: 48.9995, lng: 20.7683, category: "Historical", sound: "mountains",
        tagline: "One of the largest castle ruins in Europe",
        description: "Spread across a limestone ridge above the fields, Spiš Castle covers more than four hectares of pale walls and towers begun in the 12th century. It burned in 1780 and has stood roofless since. From the upper keep you can see the whole Spiš region and, on a clear day, the Tatras.",
        bestTime: "May–Oct", image: "wiki:Spišské Podhradie", wiki: "Spiš Castle" }
    ]
  },
  {
    id: "705", name: "Slovenia", region: "Europe", soundProfile: "mountains",
    summary: "An alpine lake with an island church, a green capital, caves, and a sliver of Adriatic coast.",
    hero: "wiki:Triglav",
    places: [
      { name: "Lake Bled", pics: ["i0i5p", "2k715", "o8lgw", "r2pwl"], add: ["1sct3zr", "1cdje64", "fdwxmn", "14v9bl5", "qrppxc", "134qfr2", "ah8idz"], lat: 46.3625, lng: 14.0938, category: "Nature", sound: "mountains",
        tagline: "A church on an island in an alpine lake",
        description: "A small emerald lake with a tiny island and a white church in the middle, a medieval castle on a cliff above, and the Julian Alps behind. You reach the island in a pletna, a flat wooden boat rowed standing up, then climb 99 steps and ring the bell for luck. The local cream cake has been made the same way since 1953.",
        bestTime: "May–Sep", image: "wiki:Lake Bled" },
      { name: "Ljubljana", add: ["1dp6kjt", "34ypbr", "yel9rk", "cl3gxs", "8e4j7u"], skip: ["t4r36m", "n516jf"], lat: 46.0569, lng: 14.5058, category: "City", sound: "city",
        tagline: "A small, green capital on a river",
        description: "The centre is closed to cars, so the riverbanks are one long terrace of cafés under willow trees. The architect Jože Plečnik gave the city its bridges, colonnades and market, including the Triple Bridge. A funicular climbs to the castle on the hill, and bronze dragons guard the Dragon Bridge.",
        bestTime: "May–Sep", image: "wiki:Ljubljana" },
      { name: "Postojna Cave", pics: ["fibrs"], add: ["kgl9la", "1foext3"], skip: ["1vv11hb"], lat: 45.7830, lng: 14.2040, category: "Nature", sound: "temple",
        tagline: "An underground railway through the karst",
        description: "A small electric train carries you several kilometres into a cave system 24 kilometres long, through halls of stalactites, columns and curtains of stone. It is home to the olm, a pale, blind cave salamander that can live for a century. Nearby, Predjama Castle is built into the mouth of a cave halfway up a cliff.",
        bestTime: "Year-round", image: "wiki:Postojna Cave", more: ["Predjama Castle"] },
      { name: "Piran", pics: ["2e3nkj", "20njrl", "14piu2", "p1u3h"], add: ["1osth4f", "hh08dd", "1g32frq", "71hted", "voz874", "1s9odyo"], lat: 45.5283, lng: 13.5683, category: "Historical", sound: "ocean",
        tagline: "A Venetian town on the Adriatic",
        description: "Piran fills a narrow point of land with red roofs, a bell tower modelled on St Mark's in Venice, and an oval main square that was once the inner harbour. It belonged to Venice for five centuries and looks it. Salt has been harvested by hand in the pans just down the coast for some 700 years.",
        bestTime: "May–Sep", image: "wiki:Piran" }
    ]
  },
  {
    id: "688", name: "Serbia", region: "Europe", soundProfile: "city",
    summary: "A capital where two great rivers meet, a fortress on the Danube, and river canyons in the west.",
    hero: "wiki:Uvac",
    places: [
      { name: "Belgrade", add: ["1rbbejh", "g8ppua", "1rxtk8k", "1orbecq"], skip: ["w088qt"], lat: 44.7866, lng: 20.4489, category: "City", sound: "city",
        tagline: "Where the Sava meets the Danube",
        description: "Belgrade's fortress stands on a ridge above the meeting of two rivers, in a park where the whole city comes to watch the sunset. The Church of Saint Sava is one of the largest Orthodox churches in the world. In summer the nightlife moves onto splavovi, floating clubs and restaurants moored along the riverbanks.",
        bestTime: "May–Sep", image: "wiki:Belgrade Fortress", wiki: "Belgrade" },
      { name: "Novi Sad", add: ["al51hh", "kyoycn", "4pt2nz", "1uz0ppm", "x2w6hl"], lat: 45.2671, lng: 19.8335, category: "City", sound: "city",
        tagline: "A Danube city under a great fortress",
        description: "Across the river from the pastel centre, the Petrovaradin Fortress spreads over a hill with kilometres of tunnels beneath it. Its clock tower has the hands reversed, the large one showing the hours, so boatmen could read the time from a distance. Each July the fortress hosts EXIT, one of the biggest music festivals in Europe.",
        bestTime: "May–Sep", image: "wiki:Petrovaradin Fortress", wiki: "Novi Sad" },
      { name: "Uvac Canyon", pics: ["13gosc", "2th8rv", "2th8rz"], add: ["1lfec2u"], skip: ["1d4ik15"], lat: 43.3500, lng: 19.9500, category: "Nature", sound: "mountains",
        tagline: "A river folded into green meanders",
        description: "The Uvac River has cut a canyon through limestone hills in a series of tight loops, best seen from the Molitva viewpoint high above. The reserve is one of the last strongholds of the griffon vulture in the Balkans, and the birds, with wingspans close to three metres, circle at eye level.",
        bestTime: "May–Sep", image: "wiki:Uvac" }
    ]
  },
  {
    id: "070", name: "Bosnia and Herzegovina", region: "Europe", soundProfile: "city", aka: ["Bosnia"],
    summary: "An Ottoman bridge over an emerald river, a capital of minarets and church towers, and waterfalls in the hills.",
    hero: "wiki:Počitelj",
    places: [
      { name: "Mostar", pics: ["70cme", "1cz57a", "1t35ec", "5zt2v"], add: ["1wvm2cn", "ikpplq", "9zxqpe", "p5hmas", "ylf9vr"], lat: 43.3438, lng: 17.8078, category: "Historical", sound: "city",
        tagline: "The Old Bridge over the Neretva",
        description: "A single stone arch built by the Ottomans in 1566 spans the emerald Neretva. It was destroyed in the war in 1993 and rebuilt stone by stone, reopening in 2004. Members of the town's diving club still leap from the top, 24 metres above the cold water, as young men here have done for centuries.",
        bestTime: "May–Sep", image: "wiki:Stari Most" },
      { name: "Sarajevo", add: ["41yclh", "j8tbq6", "1ydpery", "fyurig"], skip: ["1mqsy3a", "1j07mmy", "bo8272"], lat: 43.8563, lng: 18.4131, category: "City", sound: "city",
        tagline: "Where East and West share a street",
        description: "In Baščaršija, the Ottoman bazaar, coppersmiths hammer coffee sets and the smell of grilled ćevapi fills the lanes. Walk a few steps west and the buildings turn Austro-Hungarian. A mosque, a synagogue, an Orthodox church and a Catholic cathedral stand within a few minutes of each other, all in a valley ringed by green hills.",
        bestTime: "May–Sep", image: "wiki:Baščaršija", wiki: "Sarajevo" },
      { name: "Kravica Waterfall", pics: ["1qamdh", "1qamc9"], add: ["1lalatf"], lat: 43.1561, lng: 17.6083, category: "Nature", sound: "rainforest",
        tagline: "A wide curtain of falls into a swimming lake",
        description: "The Trebižat River spills over a tufa cliff in a semicircle about 120 metres wide and 25 metres high, into a green pool where you can swim on hot days. Fig trees and poplars grow around it, and in spring the flow is at its strongest.",
        bestTime: "May–Sep", image: "wiki:Kravica (waterfall)" }
    ]
  },
  {
    id: "499", name: "Montenegro", region: "Europe", soundProfile: "ocean",
    summary: "A fjord-like bay on the Adriatic, walled towns, and black mountains with deep canyons.",
    hero: "wiki:Perast",
    places: [
      { name: "Bay of Kotor", pics: ["jtglf", "1els6a", "d6mgi"], add: ["d218c1", "1st112v", "4k2hl9", "1ubtu78", "1c1s1xf", "1pbfd9m"], skip: ["1nxas4m"], lat: 42.4247, lng: 18.7712, category: "Historical", sound: "ocean",
        tagline: "A walled town at the end of a deep bay",
        description: "Grey mountains drop straight into a winding inlet that looks like a fjord. At its far end, the walled town of Kotor is a knot of Venetian lanes and small squares, with fortifications zigzagging up the cliff behind it. Climb the 1,350 steps to the fortress of San Giovanni for the view down the whole bay.",
        bestTime: "May–Jun, Sep", image: "wiki:Kotor", more: ["Bay of Kotor"] },
      { name: "Sveti Stefan", pics: ["1razg3", "1ogx4"], add: ["fls8z5", "hoiinw", "1mlb4jn", "n9v7rx", "17xoj9r"], lat: 42.2558, lng: 18.8914, category: "Beach", sound: "ocean",
        tagline: "A fishing village turned island",
        description: "A cluster of red-roofed stone houses covers a tiny island joined to the shore by a narrow strip of sand. It was a fortified fishing village in the 15th century and became a hotel in the 1950s. The pink pebble beaches on either side of the causeway face it directly, and the nearby town of Budva has its own walled old quarter.",
        bestTime: "Jun–Sep", image: "wiki:Sveti Stefan" },
      { name: "Durmitor", add: ["1ngyybc", "1aund8d", "s0p7nj", "v3sm8h", "1ye5ipi"], skip: ["6vdrs8"], lat: 43.1280, lng: 19.0330, category: "Mountain", sound: "mountains", zoom: 10,
        tagline: "Black peaks and Europe's deepest canyon",
        description: "A national park of limestone peaks, pine forest and 18 glacial lakes, of which the Black Lake is the easiest to reach. Along its edge the Tara River has cut a canyon up to 1,300 metres deep, the deepest in Europe, crossed by a high arched bridge. You can raft the river below it.",
        bestTime: "Jun–Sep", image: "wiki:Durmitor" }
    ]
  },
  {
    id: "008", name: "Albania", region: "Europe", soundProfile: "ocean",
    summary: "Ottoman hill towns, wild mountains in the north, and some of the clearest water in the Mediterranean.",
    hero: "wiki:Butrint",
    places: [
      { name: "Berat", pics: ["37thkp", "17q2rt"], add: ["rq5kvh", "1bugx1z", "12kr95a", "r0qef3"], lat: 40.7058, lng: 19.9522, category: "Historical", sound: "city",
        tagline: "The town of a thousand windows",
        description: "White Ottoman houses climb the hillside in tiers, each with rows of large dark windows that seem to watch the river below. People still live inside the castle walls at the top, among small Byzantine churches. Berat has been inhabited for more than 2,400 years and is a UNESCO site.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Berat" },
      { name: "Albanian Riviera", pics: ["211eth", "211epl", "211ero", "xo0tn"], add: ["1plz4dw", "1jfjg09", "je1k9v", "7zihxa"], lat: 39.7667, lng: 20.0000, category: "Beach", sound: "ocean", zoom: 10,
        tagline: "Ionian coves under high mountains",
        description: "South of the Llogara Pass, a road winds above the Ionian Sea past white pebble coves and water in sharp blues and greens. At Ksamil, small islands sit a short swim from the beach, with Corfu visible across the strait. Nearby, the ruins of Butrint cover 2,500 years of Greek, Roman and Venetian history in a forest beside a lagoon.",
        bestTime: "Jun–Sep", image: "wiki:Ksamil" },
      { name: "Gjirokastër", add: ["19yy0b3", "19oatoj", "1jeceun", "1wwjpcl", "m9j6d2"], skip: ["pyma86"], lat: 40.0758, lng: 20.1389, category: "Historical", sound: "city",
        tagline: "The stone city",
        description: "Steep cobbled streets run between fortified tower houses roofed in heavy grey stone slabs, all under a huge castle on the ridge. The old bazaar still has its craftsmen. The writer Ismail Kadare was born here and set his novel Chronicle in Stone in these streets.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Gjirokastër" },
      { name: "Theth", pics: ["28fdcl", "28fdcj", "1tvn5a", "282ryn"], add: ["1d3axc8", "mnh9ps", "1mh8kpx", "1d8tok5", "htwkrw"], lat: 42.3958, lng: 19.7742, category: "Mountain", sound: "mountains",
        tagline: "A village in the Accursed Mountains",
        description: "A remote valley in the Albanian Alps, ringed by jagged limestone peaks and reached by a mountain road. Stone houses, a small church and a tower once used to shelter people caught in blood feuds are scattered across the meadows. The day's hike over the Valbona Pass to the next valley is one of the best walks in the Balkans.",
        bestTime: "Jun–Sep", image: "wiki:Theth" },
      { name: "Tirana", pics: ["12s2li", "jsaha"], add: ["ezeu8o", "4goq56", "1vsvptx"], lat: 41.3275, lng: 19.8187, category: "City", sound: "city",
        tagline: "A capital painted in bright colours",
        description: "Once one of the most closed cities in Europe, Tirana repainted its grey communist blocks in bold stripes and patterns in the 2000s. Skanderbeg Square is the wide centre, and Bunk'Art turns a huge Cold War bunker into a museum. A cable car climbs Mount Dajti for a view over the whole city.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Skanderbeg Square", wiki: "Tirana" }
    ]
  },
  {
    id: "233", name: "Estonia", region: "Europe", soundProfile: "city",
    summary: "A medieval walled capital, forest and bog to the horizon, and quiet Baltic islands.",
    hero: "wiki:Alexander Nevsky Cathedral, Tallinn",
    places: [
      { name: "Tallinn", pics: ["cu31g", "s8qzi", "1fdpwg", "1d9day", "ctkgo"], add: ["o8hr8d", "1pcjatk", "sepbrd", "1p21nyh", "a84y1n"], lead: ["Old town of Tallinn 06-03-2012.jpg", "Vanalinn Patkuli platvormilt 2013.jpg"], skip: ["1k2ro30"], lat: 59.4370, lng: 24.7536, category: "Historical", sound: "city",
        tagline: "A walled Hanseatic city, almost intact",
        description: "Tallinn's old town still has most of its medieval wall and more than twenty of its towers, with red conical roofs. The Town Hall Square has held markets since the Middle Ages, and a pharmacy on its corner has been open since at least 1422. Climb to the viewing platforms on Toompea Hill for the spires and the sea.",
        bestTime: "May–Sep", image: "wiki:Tallinn" },
      { name: "Lahemaa National Park", add: ["i60yzm", "actvmg", "rdk2gu", "1px49iw", "uu05gz"], lat: 59.5700, lng: 25.8000, category: "Nature", sound: "jungle", zoom: 10,
        tagline: "Bogs, forest and a boulder coast",
        description: "An hour east of the capital, Lahemaa is pine forest, wild coast scattered with huge boulders left by the glaciers, and bogs you cross on wooden boardwalks. The Viru bog trail passes dark pools and dwarf pines to a watchtower. Old manor houses stand restored among the trees.",
        bestTime: "May–Sep", image: "wiki:Lahemaa National Park" },
      { name: "Saaremaa", pics: ["1k5ahy", "ame9v", "11yfq6"], add: ["s0exvy", "1falfdn", "8slm0c", "6kw6v3"], skip: ["1sdsc5r"], lat: 58.2500, lng: 22.5000, category: "Nature", sound: "ocean", zoom: 9,
        tagline: "Windmills, juniper and a meteor crater",
        description: "Estonia's largest island is flat, quiet and scented with juniper, with thatched farmhouses and wooden windmills. Kuressaare has one of the best-preserved medieval castles in the Baltic. At Kaali, a round lake fills a crater made by a meteorite a few thousand years ago.",
        bestTime: "Jun–Aug", image: "wiki:Kuressaare Castle", wiki: "Saaremaa" }
    ]
  },
  {
    id: "428", name: "Latvia", region: "Europe", soundProfile: "city",
    summary: "An Art Nouveau capital, a long white Baltic beach, and castles in a forested river valley.",
    hero: "wiki:Rundāle Palace",
    places: [
      { name: "Riga", add: ["ni2yn0", "1keo4qd", "1vyxegv", "162vfh8", "3ssv2i"], lat: 56.9496, lng: 24.1052, category: "City", sound: "city",
        tagline: "The Art Nouveau capital of the Baltic",
        description: "Riga has one of the largest collections of Art Nouveau buildings in the world: whole streets of facades covered in faces, flowers and mythical creatures, especially along Alberta iela. The old town has church spires and the ornate House of the Blackheads. The central market fills five huge hangars originally built for Zeppelin airships.",
        bestTime: "May–Sep", image: "wiki:House of the Blackheads (Riga)", wiki: "Riga" },
      { name: "Jūrmala", pics: ["21nf9z", "2x5jhp", "3hd3r"], add: ["1v3y401", "5uek3r", "be75x6", "1kh4o8w", "1mskhng"], lat: 56.9680, lng: 23.7700, category: "Beach", sound: "ocean",
        tagline: "A seaside resort of wooden villas",
        description: "A string of small towns along more than 30 kilometres of wide, pale sand backed by pine forest, half an hour from Riga by train. It has been a spa resort since the 19th century, and hundreds of wooden villas with carved verandas and towers survive from those days. The Baltic here is shallow and calm.",
        bestTime: "Jun–Aug", image: "wiki:Majori", wiki: "Jūrmala" },
      { name: "Gauja National Park", pics: ["wnw81", "27qkuo", "ufy5d", "236jzg", "236jzc"], add: ["1j4rm1t", "xxv6f7", "7blihw"], lat: 57.1650, lng: 24.8500, category: "Nature", sound: "jungle", zoom: 10,
        tagline: "A river valley of castles and sandstone",
        description: "The Gauja River winds through a deep, forested valley with sandstone cliffs and caves along its banks. Around the town of Sigulda, the red-brick Turaida Castle rises above the trees, and a cable car crosses the valley high over the river. In autumn the whole valley turns gold.",
        bestTime: "May–Oct", image: "wiki:Turaida Castle", wiki: "Gauja National Park" }
    ]
  },
  {
    id: "440", name: "Lithuania", region: "Europe", soundProfile: "city",
    summary: "A baroque capital, a castle on a lake island, and giant dunes on a strip of sand in the Baltic.",
    hero: "wiki:Gediminas' Tower",
    places: [
      { name: "Vilnius", add: ["1xq7t9q", "1rgpqzh", "1idepmf", "ltun6d"], lat: 54.6872, lng: 25.2797, category: "Historical", sound: "city",
        tagline: "A baroque city of church towers",
        description: "Vilnius has one of the largest surviving medieval old towns in northern Europe, with dozens of baroque churches along winding streets. Cross the river to Užupis, a neighbourhood of artists that declared itself an independent republic in 1997, with its own constitution posted on a wall. Climb Gediminas' Tower for the view over the red roofs.",
        bestTime: "May–Sep", image: "wiki:Vilnius" },
      { name: "Trakai", add: ["1y1oe8b", "1mixthj", "1ve16ah", "d18uiz", "asobf3", "11v9d37"], lat: 54.6520, lng: 24.9340, category: "Historical", sound: "mountains",
        tagline: "A red castle on a lake island",
        description: "A Gothic castle of red brick, begun in the 14th century, stands on an island in Lake Galvė and is reached by a long wooden footbridge. It was a seat of the Grand Dukes of Lithuania. The town is also home to the Karaim, a small Turkic community brought here in the 1390s, whose meat pastries called kibinai are sold along the shore.",
        bestTime: "May–Sep", image: "wiki:Trakai Island Castle" },
      { name: "Curonian Spit", pics: ["nwuth", "15nk75", "n10t", "o51wb"], add: ["rgx5e6", "j25izg", "1cchfdr", "1de0bq3", "16dc3ar"], lat: 55.3000, lng: 21.0000, category: "Nature", sound: "ocean", zoom: 10,
        tagline: "A ribbon of dunes between lagoon and sea",
        description: "A strip of sand 98 kilometres long and in places only a few hundred metres wide separates a calm lagoon from the open Baltic. The Parnidis Dune near Nida rises more than 50 metres, with a view of water on both sides. Fishermen's cottages are painted deep red and blue, and smoked fish is sold from garden gates.",
        bestTime: "Jun–Aug", image: "wiki:Curonian Spit" },
      { name: "Hill of Crosses", pics: ["czywk"], add: ["der1qq", "12696av", "vb6qmo", "1kmjmv7", "ci8g8q"], lead: ["Kryžių kalnas (Góra Krzyży).JPG", "Hill of Crosses 1, Siauliai, Lithuania.JPG", "Colina de las Cruces, Lituania, 2012-08-09, DD 12.JPG", "Colina de las Cruces, Lituania, 2012-08-09, DD 01.JPG"], lat: 56.0153, lng: 23.4167, category: "Culture", sound: "temple",
        tagline: "A hill covered in a hundred thousand crosses",
        description: "On a small mound in open farmland stand well over 100,000 crosses of every size, left by pilgrims since the 19th century. Soviet authorities bulldozed the site several times, and each time people came back at night and put the crosses up again. The wind makes the rosaries and small crosses chime against each other.",
        bestTime: "May–Sep", image: "wiki:Hill of Crosses" }
    ]
  },
  {
    id: "804", name: "Ukraine", region: "Europe", soundProfile: "city",
    summary: "Golden-domed monasteries above the Dnipro, a coffee-house city in the west, and the green Carpathians.",
    hero: "wiki:Saint Sophia Cathedral, Kyiv",
    places: [
      { name: "Kyiv", add: ["ezbzls", "1nxu3tf"], lat: 50.4501, lng: 30.5234, category: "City", sound: "city",
        tagline: "A city of golden domes on the Dnipro",
        description: "Kyiv is more than 1,500 years old and spreads across wooded hills above a wide river. Saint Sophia Cathedral, begun in the 11th century, still has its original mosaics, and the Kyiv Pechersk Lavra is a monastery of gold domes built over a network of caves where monks lived and were buried. Chestnut trees line the main boulevard and flower each May.",
        bestTime: "May–Sep", image: "wiki:Kyiv Pechersk Lavra", wiki: "Kyiv" },
      { name: "Lviv", add: ["1gla7kj", "jmxnsv", "coiy09"], lead: ["Panorama Rynok Platz Blick NO Lemberg.JPG", "Old-Lviv-Panorama 01.JPG"], skip: ["1it1c1y", "1j1o2jp"], lat: 49.8397, lng: 24.0297, category: "Historical", sound: "city",
        tagline: "A Central European old town of cafés",
        description: "Lviv's centre is a UNESCO-listed mix of Renaissance, baroque and Art Nouveau, built when the city belonged to Poland and then to the Habsburgs. Market Square is ringed by tall merchant houses, each different. It has a serious coffee culture going back centuries, with cafés in cellars and courtyards, and an ornate opera house at the end of the main promenade.",
        bestTime: "May–Sep", image: "wiki:Lviv" },
      { name: "Odesa", add: ["q1qiwc", "pdw03c"], lead: ["Odessa Opera Theatre 2016 G1.jpg", "Одеський національний академічний театр опери та балету DJI 0112.jpg", "Operniy-1.jpg"], skip: ["ilq6xk", "1mm6us6"], lat: 46.4825, lng: 30.7233, category: "City", sound: "ocean",
        tagline: "A grand port on the Black Sea",
        description: "Founded in 1794, Odesa is a city of straight tree-lined boulevards, pale 19th-century facades and courtyards full of cats. The Potemkin Stairs run 192 steps down from the centre to the harbour, and the opera house is one of the most lavish in Europe. Its historic centre was added to the UNESCO World Heritage list in 2023.",
        bestTime: "May–Sep", image: "wiki:Odesa Opera and Ballet Theatre", wiki: "Odesa" },
      { name: "Carpathian Mountains", pics: ["gu9z4", "3ahtbw", "12e2w7", "2xwi0n"], add: ["4g8ro8", "5jgvi4", "1v20f2x", "11f3kaw", "12q35le", "1j4ozdf"], lat: 48.1600, lng: 24.5000, category: "Mountain", sound: "mountains", zoom: 9,
        tagline: "Green ridges and wooden churches",
        description: "In the south-west, forested ridges and open high meadows roll toward the Romanian border, topped by Hoverla at 2,061 metres. This is the home of the Hutsul people, known for their wooden churches, embroidery and the long alpine horn called the trembita. Shepherds still take their flocks up to the summer pastures.",
        bestTime: "Jun–Sep", image: "wiki:Hoverla" }
    ]
  },

  /* ---------- Added: Middle East ---------- */
  {
    id: "422", name: "Lebanon", region: "Middle East", soundProfile: "city",
    summary: "Roman temples, one of the oldest ports in the world, cedar forests, and a capital that never stops eating.",
    hero: "wiki:Raouché",
    places: [
      { name: "Beirut", add: ["1hggrnh", "13zqycg"], lead: ["Al Raouche Rocks.jpg", "Beirut skyline, Beirut, Lebanon.jpg", "Pigeon Rocks of Beirut, Rock of Raouche, Beirut, Lebanon.jpg", "Beirut skyline from O Monot hotel.jpg"], skip: ["1ontkdq", "6rgxrv"], lat: 33.8938, lng: 35.5018, category: "City", sound: "city",
        tagline: "A Mediterranean capital of many lives",
        description: "Beirut sits on a headland with the sea on three sides and snow-capped mountains behind. Walk the Corniche at sunset to the Pigeon Rocks, two stone arches standing in the water, then eat your way through a table of mezze. Roman baths, Ottoman houses, French-era buildings and new towers stand within a few streets of each other.",
        bestTime: "Apr–Jun, Sep–Nov", image: "wiki:Beirut" },
      { name: "Byblos", pics: ["1j9zt8", "lbdwj", "1j9zt6", "1j9zt7", "1j9zt2", "387k6g", "39rg0c"], add: ["ysnwk", "18lb885"], lat: 34.1230, lng: 35.6519, category: "Historical", sound: "ocean",
        tagline: "One of the oldest cities on Earth",
        description: "People have lived in Byblos for at least 7,000 years. The Phoenicians shipped cedar wood to Egypt from this small harbour, and the Greek word for book, and so the word Bible, comes from the city's name, because papyrus was traded through it. A Crusader castle stands over ruins from a dozen civilisations, beside a fishing port lined with restaurants.",
        bestTime: "Apr–Jun, Sep–Nov", image: "wiki:Byblos" },
      { name: "Baalbek", pics: ["nmzld", "1jkitr", "1jkiu3", "elk1d", "1jkiua", "1jkiu8"], add: ["1pfc896", "1vwtu8e"], lat: 34.0069, lng: 36.2039, category: "Historical", sound: "temple",
        tagline: "The largest temples Rome ever built",
        description: "In the Bekaa Valley stand the remains of a Roman sanctuary on a scale found nowhere else. Six columns of the Temple of Jupiter still rise about 20 metres, and the Temple of Bacchus next to it is one of the best-preserved Roman temples in the world, larger than the Parthenon. Some foundation blocks weigh around 800 tonnes each.",
        bestTime: "Apr–Jun, Sep–Nov", image: "wiki:Baalbek" },
      { name: "Jeita Grotto", pics: ["2xvfxr", "2xvfzj", "25v6lk"], skip: ["14nyids"], lat: 33.9433, lng: 35.6411, category: "Nature", sound: "temple",
        tagline: "Two caves of stone and water",
        description: "A cave system nearly nine kilometres long, on two levels. You walk through the upper gallery past huge chambers and one of the longest known stalactites in the world, then cross the lower cave by small boat on an underground river. The air is cool and still, and the only sound is dripping water.",
        bestTime: "Year-round (lower cave may close in winter)", image: "wiki:Jeita Grotto" },
      { name: "Cedars of God", pics: ["1jakjz", "9fqz8", "1jakjx", "1jakjw", "1j028q"], add: ["1ew4m8n", "1ythf4e"], skip: ["1cfyap3"], lat: 34.2439, lng: 36.0483, category: "Nature", sound: "mountains",
        tagline: "The last ancient cedars of Lebanon",
        description: "High in the mountains above the Qadisha Valley, a small grove holds some of the last survivors of the cedar forests that once covered the country and built Phoenician ships and ancient temples. Some trees are well over a thousand years old. The cedar is on the national flag, and the valley below hides monasteries cut into its cliffs.",
        bestTime: "May–Oct (hiking), Dec–Mar (snow)", image: "wiki:Cedars of God", more: ["Kadisha Valley"] }
    ]
  },
  {
    id: "512", name: "Oman", region: "Middle East", soundProfile: "desert",
    summary: "Forts and frankincense, canyons with green pools, high mountains, and beaches where turtles nest.",
    hero: "wiki:Muttrah",
    places: [
      { name: "Muscat", pics: ["2os53o"], add: ["10164sp", "1v83qom", "150gql", "x9u34b"], skip: ["fkrp3m", "18n2xnf"], lat: 23.5880, lng: 58.3829, category: "City", sound: "city",
        tagline: "A low white capital between mountains and sea",
        description: "Muscat has no skyscrapers: by law its buildings are low and pale, strung along the coast between bare brown mountains. The Sultan Qaboos Grand Mosque holds a vast hand-woven carpet and a chandelier 14 metres tall. In the old port of Muttrah, the souk smells of frankincense, which Oman has traded for thousands of years.",
        bestTime: "Oct–Mar", image: "wiki:Sultan Qaboos Grand Mosque", wiki: "Muscat" },
      { name: "Ras al Hadd", pics: ["101bb8", "jmyb", "2r2jc0", "34egnk", "2r2jbz", "18fxe3"], add: ["132xyru", "l8lxvd", "xx6mm1"], lat: 22.5333, lng: 59.7950, category: "Beach", sound: "ocean",
        tagline: "Where green turtles come ashore",
        description: "At the eastern tip of the Arabian Peninsula, the beaches around Ras al Hadd and Ras al Jinz are among the most important nesting sites for green turtles in the Indian Ocean. Guided walks go out after dark and before dawn to watch females dig their nests and hatchlings run for the sea. This is also the first place in Arabia to see the sunrise.",
        bestTime: "Jun–Sep (peak nesting), Oct–Mar (cooler)", image: "wiki:Ras al Hadd" },
      { name: "Nizwa", pics: ["1igrtn", "1hyr0m", "42mqh", "2srs8k", "2srs8l", "2srs8d", "2srs7b", "2srs7z", "2srs6z"], add: ["158q02r", "1hz99ui", "1c5fw01", "akygqu"], lat: 22.9333, lng: 57.5333, category: "Historical", sound: "city",
        tagline: "A fort town at the foot of the mountains",
        description: "Once the capital of Oman's interior, Nizwa is dominated by a 17th-century fort with a huge round tower you can climb for a view over date palms and the mountains. The souk is known for silver daggers and pottery. Early on Friday mornings, farmers parade goats and cattle around a ring at the livestock market, as they have for generations.",
        bestTime: "Oct–Mar", image: "wiki:Nizwa Fort", wiki: "Nizwa" },
      { name: "Wadi Bani Khalid", pics: ["2id51l", "2id50z", "2id51y", "2id51u", "2id4zq", "2id4zx"], add: ["1bp9vi8", "5s02gf", "1f2tmm9", "1oi3qmv", "6nv5i4"], lat: 22.6160, lng: 59.0930, category: "Nature", sound: "desert",
        tagline: "Green pools in a desert canyon",
        description: "A spring-fed canyon where clear turquoise pools sit between pale boulders and date palms, with water all year round. Swim up through the narrowing gorge to smaller pools and a cave at the head of the valley. It lies on the edge of the Sharqiya Sands, a sea of copper dunes where Bedouin families still live and desert camps take guests overnight.",
        bestTime: "Oct–Apr", image: "wiki:Wadi Bani Khalid" },
      { name: "Jebel Shams", pics: ["14vedh", "1b9s62", "2f7dk0", "1idmis", "2f7dk3", "14vecc", "13wx3s", "13wx57"], add: ["1rfera", "18f7umj", "tv9161"], lat: 23.2372, lng: 57.2636, category: "Mountain", sound: "mountains",
        tagline: "The Grand Canyon of Arabia",
        description: "At around 3,000 metres, Jebel Shams is the highest mountain in Oman, and beside it the ground falls away into Wadi Ghul, a canyon about a kilometre deep. The Balcony Walk follows a ledge along the canyon wall to an abandoned village. It is cool up here even in summer, and cold at night.",
        bestTime: "Oct–Apr", image: "wiki:Jebel Shams" }
    ]
  },
  {
    id: "682", name: "Saudi Arabia", region: "Middle East", soundProfile: "desert",
    summary: "Tombs carved into desert sandstone, a mud-brick first capital, and an old port on the Red Sea.",
    hero: "wiki:Masmak Fort",
    places: [
      { name: "AlUla & Hegra", pics: ["j5v2s", "1wsscd", "2rti65", "2rti7j", "2rti1r", "3af35y", "3af35t", "2rthzc", "3af35u"], add: ["csh1a5", "1rlb1c0", "td38c9", "xkyd61", "18auxhq"], skip: ["1hact6m"], lat: 26.7890, lng: 37.9540, category: "Historical", sound: "desert", zoom: 11,
        tagline: "The Nabataean city in the sandstone",
        description: "Hegra was the southern capital of the Nabataeans, the people who built Petra, and more than a hundred monumental tombs are carved into its lone sandstone outcrops, many with their facades still sharp after 2,000 years. It was Saudi Arabia's first UNESCO World Heritage Site. Around it, the AlUla valley is a landscape of palm oases and rock formations, including one shaped like an elephant.",
        bestTime: "Oct–Mar", image: "wiki:Al-Ula", wiki: "Hegra" },
      { name: "Riyadh", pics: ["fhoi9", "3btihd", "2sh1ow"], add: ["1sijzcm", "1xrizy0"], lead: ["Riyadh Skyline.jpg", "Riyadh Skyline showing the King Abdullah Financial District (KAFD) and the famous Kingdom Tower .jpg"], skip: ["1fgx2gk", "1ic60xq"], lat: 24.7136, lng: 46.6753, category: "City", sound: "city",
        tagline: "A desert capital growing upward",
        description: "Riyadh has grown from a walled oasis town into a capital of several million people in a single lifetime. The Kingdom Centre tower has a sky bridge across the gap at its top, 300 metres up. On the edge of the city, Diriyah is the mud-brick town where the Saudi state began in the 18th century, now restored and lit at night.",
        bestTime: "Nov–Mar", image: "wiki:Riyadh", more: ["Diriyah", "Kingdom Centre"] },
      { name: "Jeddah", add: ["1in0a2e", "wg4014", "nhyozc", "qn8pzy"], lead: ["Jeddah - 87654.jpg", "Old Jeddah - 55362181118.jpg", "Old Jeddah - 55362436320.jpg"], skip: ["179jzn7", "b7w8w4"], lat: 21.4858, lng: 39.1925, category: "City", sound: "ocean",
        tagline: "The old port on the Red Sea",
        description: "For centuries pilgrims on their way to Mecca landed at Jeddah, and its old quarter, Al-Balad, grew rich on the trade. Its tower houses are built of coral stone, with elaborate wooden balconies that catch the sea breeze. A long corniche runs beside the Red Sea, and the coral reefs offshore are among the least visited in the world.",
        bestTime: "Nov–Mar", image: "wiki:Al-Balad, Jeddah", wiki: "Jeddah" },
      { name: "The Empty Quarter", pics: ["1wue6o", "2z8vhn", "1wue62"], add: ["14aiywt"], lat: 20.5000, lng: 50.0000, category: "Nature", sound: "desert", zoom: 7,
        tagline: "The largest sand desert on Earth",
        description: "The Rub' al Khali covers about 650,000 square kilometres, most of it in Saudi Arabia: an unbroken sea of dunes, some more than 250 metres high, with almost no rain and no permanent settlements. The sand turns from pale gold to red as the light changes. The explorer Wilfred Thesiger crossed it by camel with Bedouin companions in the 1940s.",
        bestTime: "Nov–Feb", image: "wiki:Rub' al Khali" }
    ]
  },
  /* ---------- Europe: the rest ---------- */
  {
    id: "208", name: "Denmark", region: "Europe", soundProfile: "city",
    summary: "A capital of canals and bicycles, Hamlet's castle, and the sandbar where two seas meet.",
    hero: "wiki:Nyhavn",
    places: [
      { name: "Copenhagen", add: ["1jjdrgi", "17desku", "1ma6g2d", "1tubtb9", "rxrewp"], skip: ["g41vj3", "1lqo0en"], lat: 55.6761, lng: 12.5689, category: "City", sound: "city",
        tagline: "Canals, bicycles and painted harbour houses",
        description: "Copenhagen's 17th-century Nyhavn canal is lined with brightly painted townhouses and old wooden ships. Cycling is the normal way to get around, on wide lanes of its own, and harbour baths let people swim in clean water right in the city. Tivoli Gardens, opened in 1843, is one of the oldest amusement parks in the world.",
        bestTime: "May–Sep", image: "wiki:Nyhavn", wiki: "Copenhagen", more: ["Tivoli Gardens", "Christiansborg Palace"] },
      { name: "Kronborg Castle", add: ["pludtr", "r0jx4y", "s778ls", "1o4tfcy"], skip: ["1fa50yq", "ywvhkk", "12uj1ph", "1pt7amp", "14catzd"], lat: 56.0386, lng: 12.6219, category: "Historical", sound: "ocean",
        tagline: "Hamlet's Elsinore, on the edge of the sound",
        description: "This Renaissance castle at Helsingør stands on the narrowest point of the Øresund, and it is the Elsinore of Shakespeare's Hamlet. For more than four centuries Denmark charged a toll on every ship passing through the strait here, and Sweden is only about 4 kilometres away across the water. It is a UNESCO World Heritage Site.",
        bestTime: "May–Sep", image: "wiki:Kronborg" },
      { name: "Skagen", add: ["1drob7s", "ptis0c", "1x51s0c", "1w25h71"], skip: ["1gib2o5", "vu4ao9", "1v7m5de", "1wtwuyr"], lat: 57.7209, lng: 10.5839, category: "Beach", sound: "ocean", zoom: 10,
        tagline: "Where two seas meet",
        description: "At Denmark's northern tip, the long sandbar of Grenen points into the sea, and you can stand where the Skagerrak and the Kattegat meet, with waves rolling in from both sides. The town of yellow houses and red roofs drew a colony of painters in the late 1800s, who came for the light. Nearby, the Råbjerg Mile is a sand dune that still migrates across the land.",
        bestTime: "Jun–Aug", image: "wiki:Grenen", wiki: "Skagen", more: ["Råbjerg Mile"] },
      { name: "Møns Klint", add: ["1ttxmqi", "qx2u97", "10eijhi", "gj42za", "e6gruc"], lat: 54.9642, lng: 12.5522, category: "Nature", sound: "ocean", zoom: 11,
        tagline: "White chalk cliffs on the Baltic",
        description: "On the island of Møn, about two hours' drive south of Copenhagen, white chalk cliffs run for 6 kilometres and drop up to 120 metres into the Baltic. Long wooden stairways lead down through beech forest to the shore, where people look for fossils in the chalk. The cliffs became a UNESCO World Heritage Site in 2025.",
        bestTime: "May–Sep", image: "wiki:Møns Klint" }
    ]
  },
  {
    id: "056", name: "Belgium", region: "Europe", soundProfile: "city",
    summary: "Medieval guild towns on canals, a gilded grand square, and a citadel above the Meuse.",
    hero: "wiki:Grand-Place",
    places: [
      { name: "Brussels", pics: ["bxt1y", "fji0g", "184qle", "1jdsvn", "2nw1k", "85559", "114m9i"], add: ["p9d2rt", "1sxpnqy", "t9y5gy"], skip: ["wtqfr7", "17cmbpd", "wmb1zk", "i8pi0j", "1ex8l60", "1adkwvd", "128qtzd", "5gwpfe"], lat: 50.8467, lng: 4.3525, category: "City", sound: "city",
        tagline: "Guildhalls of gold and a giant atom",
        description: "The Grand-Place, ringed by gilded Baroque guildhalls and a Gothic town hall, is one of the most beautiful squares in Europe, and every other August its cobbles disappear under a huge carpet of flowers. In the north of the city, the Atomium, built for the 1958 World's Fair, is a steel model of an iron crystal enlarged 165 billion times.",
        bestTime: "Apr–Sep", image: "wiki:Grand-Place", wiki: "Brussels", more: ["Atomium"] },
      { name: "Bruges", pics: ["kgl6e", "20nxjf", "h8ttp", "ufqpq", "2i0wtb", "9a9my", "9lmfx", "16kwnt", "2jaokk", "2lttf", "352ah2", "206kk7"], add: ["7mmut6", "afq54h", "ycyst1", "1t32nj"], skip: ["rnv8z8", "1vuvqyc", "7fzndi", "hq2x44", "1dktcq9", "5ba2v3", "fbh4d1", "1a1krrs", "krayiy", "pat9rh", "1aq9xgr", "16qoz8v"], lat: 51.2089, lng: 3.2242, category: "Historical", sound: "city",
        tagline: "A medieval city frozen in time",
        description: "Bruges grew rich on the cloth trade in the Middle Ages, then went quiet when its route to the sea silted up, which is a big reason its old centre survived. Canals wind between step-gabled houses, and the 83-metre belfry rises over the market square. The whole historic centre is a UNESCO World Heritage Site.",
        bestTime: "Apr–Sep", image: "wiki:Bruges", more: ["Belfry of Bruges"] },
      { name: "Ghent", pics: ["bgvqr", "1802tk", "18aqxx", "1l5lmi", "1tjke7", "1tjke8", "o4wqm"], add: ["590leb", "1p9kjmn", "icysvm", "r6mi98"], skip: ["14yq7tg", "12pfn7g", "i7arq9", "1e6d0xr", "1bky4tv", "1kbqv4p", "3nlqvk"], lat: 51.0536, lng: 3.7253, category: "City", sound: "city",
        tagline: "Guild houses, towers and a moated castle",
        description: "Ghent's medieval waterfront along the Graslei and Korenlei is lined with guild houses that glow at night. Gravensteen, a 12th-century castle of the Counts of Flanders, still stands with its moat in the middle of the city. Three tall towers, of St Bavo's Cathedral, the belfry and St Nicholas' Church, line up along the skyline.",
        bestTime: "Apr–Sep", image: "wiki:Ghent", more: ["Gravensteen", "Graslei"] },
      { name: "Dinant", pics: ["4tpjf", "4tpld", "4u1eh", "1kdbkc", "13v2ws", "2wgvdb"], add: ["1lvi586", "1mbqn8t", "1t1nirw", "1lnrs5i", "1b1duf5"], skip: ["vwnnbr", "1dtywok"], lat: 50.2564, lng: 4.9136, category: "Historical", sound: "mountains",
        tagline: "A river town under a cliff",
        description: "Dinant is squeezed between the River Meuse and a sheer limestone cliff, with a citadel on top and the bulb-spired Collegiate Church of Notre-Dame at its foot. It is the hometown of Adolphe Sax, who invented the saxophone, and giant painted saxophones line its bridge. Kayaks drift down the nearby Lesse through the wooded Ardennes.",
        bestTime: "May–Sep", image: "wiki:Dinant" }
    ]
  },
  {
    id: "442", name: "Luxembourg", region: "Europe", soundProfile: "city",
    summary: "A fortress capital on cliffs above green gorges, and a storybook castle in the Ardennes.",
    hero: "wiki:Luxembourg City",
    places: [
      { name: "Luxembourg City", pics: ["4cfls", "glju3", "18n366", "18ne4v", "2953sd", "2qw0mr", "2953rx", "2953s8", "5rg3v", "2egw4w"], add: ["1jmrpx", "pwa8ri", "vayjso", "1cgselc"], skip: ["at1i1b"], lat: 49.6114, lng: 6.1300, category: "City", sound: "city",
        tagline: "A capital built on cliffs",
        description: "Luxembourg City sits on cliffs above the deep valleys of the Alzette and Pétrusse rivers. Its old quarters and fortifications are a UNESCO World Heritage Site, and tunnels cut into the rock, the casemates, run beneath the ramparts. From the Chemin de la Corniche, often called the most beautiful balcony in Europe, you look down on the Grund quarter by the river.",
        bestTime: "May–Sep", image: "wiki:Luxembourg City", more: ["Bock (Luxembourg)"] },
      { name: "Vianden", pics: ["rpqso", "23mhzo", "ejcfb", "ns517", "2yzelw", "we1hv"], add: ["aivzby", "1b9upbh", "vgwge", "1ewdyks"], skip: ["1yb40y7", "ttbyv2", "1m5q463"], lat: 49.9350, lng: 6.2028, category: "Historical", sound: "mountains",
        tagline: "A castle above the River Our",
        description: "Vianden Castle is one of the largest fortified castles west of the Rhine, rebuilt from ruins in the late 20th century. It stands on a hill above a small town on the River Our, in the Ardennes near the German border. A chairlift climbs the opposite slope for the classic view across the valley to the castle.",
        bestTime: "May–Sep", image: "wiki:Vianden Castle", wiki: "Vianden" }
    ]
  },
  {
    id: "470", name: "Malta", region: "Europe", soundProfile: "ocean",
    summary: "Honey-coloured fortress cities, temples older than the pyramids, and clear blue Mediterranean water.",
    hero: "wiki:Valletta",
    places: [
      { name: "Valletta", pics: ["6gdlf", "aeizo", "afagh", "afpyl", "afynd", "1vzkpx", "1w2fz3", "2bdstr", "1k82f4", "1kbshy", "1ttugv", "vk2gq"], add: ["1a20ugt", "mxoob", "21lj4r", "1hvy2kk", "f04y2n"], skip: ["1ctqcia"], lat: 35.8978, lng: 14.5125, category: "Historical", sound: "city",
        tagline: "The knights' fortress capital",
        description: "Built by the Knights of St John after the Great Siege of 1565, Valletta is a grid of steep limestone streets with enclosed wooden balconies painted in bright colours. At 0.61 square kilometres it is the smallest capital in the European Union. From the Upper Barrakka Gardens you look across the Grand Harbour to the fortified Three Cities.",
        bestTime: "Apr–Jun", image: "wiki:Valletta", more: ["Upper Barrakka Gardens"] },
      { name: "Mdina", pics: ["adwck", "1ttuh5", "20zn5t", "gfhbl"], add: ["8nkzes", "w7evna", "t2q0px", "1khb643"], skip: ["rod2ev", "zk2bcb", "1utwge5", "b9ayy1"], lat: 35.8858, lng: 14.4031, category: "Historical", sound: "temple",
        tagline: "The Silent City",
        description: "Malta's ancient capital sits on a hilltop inside its walls and has never spread beyond them. Fewer than 300 people live there, and with few cars allowed, its narrow golden streets are famously quiet, which gave it the name the Silent City. From its bastions you can see across most of the island.",
        bestTime: "Apr–Jun", image: "wiki:Mdina" },
      { name: "Gozo", pics: ["a8pkb", "air4o", "390kwh"], add: ["ff1v03", "x2qn3e", "1cfez1e", "efmsy7", "jjq5dm"], skip: ["1buwv2r", "1f1u30d"], lat: 36.0450, lng: 14.2589, category: "Nature", sound: "ocean", zoom: 11,
        tagline: "Malta's greener, slower island",
        description: "A short ferry ride from Malta, Gozo is quieter and greener. The Ġgantija temples here are more than 5,000 years old, older than the pyramids of Giza. Red-sand Ramla Bay, sea cliffs on the west coast and the hilltop Citadel in Victoria make it easy to fill a few days.",
        bestTime: "May–Oct", image: "wiki:Cittadella (Gozo)", wiki: "Gozo", more: ["Ramla Bay", "Ġgantija"] },
      { name: "Comino", add: ["7x0dg0", "1wcbqow", "s685kh", "17xxtl8"], lat: 36.0114, lng: 14.3367, category: "Beach", sound: "ocean", zoom: 13,
        tagline: "The Blue Lagoon",
        description: "A tiny island between Malta and Gozo with only a handful of residents, Comino is known for its Blue Lagoon, a channel of startlingly clear turquoise water over white sand. Day boats crowd it in summer, so come early or stay late. The rest of the island is wild, scrubby coast you can walk around in a couple of hours.",
        bestTime: "Jun–Sep", image: "wiki:Comino" }
    ]
  },
  {
    id: "196", name: "Cyprus", region: "Europe", soundProfile: "ocean",
    summary: "Ancient tombs and Aphrodite's rock, pine-covered mountains, and sea caves on turquoise water.",
    hero: "wiki:Cape Greco",
    places: [
      { name: "Paphos", add: ["ftdp36", "m6b54s", "114ps0m"], skip: ["p73uvg", "15kb62w"], lat: 34.7761, lng: 32.4265, category: "Historical", sound: "ocean",
        tagline: "Aphrodite's coast",
        description: "Paphos is a seaside town built over an ancient capital, and the whole of it is a UNESCO World Heritage Site. By the harbour are the ruins of Nea Paphos, with Roman floor mosaics still in place, and nearby the Tombs of the Kings are carved out of solid rock. Along the coast to the east is Petra tou Romiou, the rock where, in myth, Aphrodite rose from the waves.",
        bestTime: "Apr–Jun", image: "wiki:Paphos", more: ["Tombs of the Kings (Paphos)", "Petra tou Romiou"] },
      { name: "Troodos Mountains", add: ["130br8l", "1ivbwd4", "krvmrg", "lkn2le", "13csx22"], lat: 34.9167, lng: 32.8333, category: "Mountain", sound: "mountains", zoom: 10,
        tagline: "Pine forest, stone villages and painted churches",
        description: "The Troodos range covers about a third of the island and rises to 1,952 metres at Mount Olympus, where there is snow and even skiing in winter. Its valleys hide ten painted Byzantine churches listed by UNESCO, and stone villages such as Kakopetria and Omodos, with vineyards on the slopes around them.",
        bestTime: "Apr–Oct", image: "wiki:Troodos Mountains", more: ["Kakopetria", "Omodos"] },
      { name: "Cape Greco & Ayia Napa", add: ["1ccpneh", "1boepjs", "u8q44i", "1sufy1n", "ive13b"], lat: 34.9630, lng: 34.0780, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "Sea caves and white sand",
        description: "At the southeastern tip of Cyprus, the cliffs of Cape Greco drop into exceptionally clear water, with sea caves and rock arches to swim and snorkel around. The nearby resort of Ayia Napa has some of the island's best white-sand beaches, such as Nissi Beach.",
        bestTime: "May–Oct", image: "wiki:Cape Greco", more: ["Ayia Napa", "Nissi Beach"] }
    ]
  },
  {
    id: "112", name: "Belarus", region: "Europe", soundProfile: "city",
    summary: "Castles reflected in quiet ponds, the last primeval forest of the European plain, and a grand rebuilt capital.",
    hero: "wiki:Mir Castle Complex",
    places: [
      { name: "Minsk", pics: ["1cekny", "1ct201", "2ivmh7", "1cin77", "1g2ikc", "1ct25g", "v4rx9"], add: ["zk98fr", "1gl4vn1"], skip: ["eo8uxi", "ctbh2c", "1f98xvu", "2xwi33", "c9ivs3", "6m5pg1", "l362do", "kwh2tw", "1ru2l0w", "76z1y7", "1kcawjn", "1bq89qe", "1e4p5rp", "f3lyuq"], lat: 53.9022, lng: 27.5618, category: "City", sound: "city",
        tagline: "A capital rebuilt on a grand scale",
        description: "Minsk was almost entirely destroyed in the Second World War and rebuilt as a showcase of Stalinist architecture, with Independence Avenue running for kilometres between monumental facades. By the Svislach River, the rebuilt Trinity Suburb keeps a small cluster of older-style streets. The city is spacious, very clean and full of parks.",
        bestTime: "May–Sep", image: "wiki:Minsk", more: ["Trinity Suburb"] },
      { name: "Mir & Nesvizh Castles", add: ["8vy8u1", "ijp250", "x74nal", "1fz7d7y", "ofso3b"], lat: 53.4513, lng: 26.4729, category: "Historical", sound: "temple",
        tagline: "Two castles of the Radziwiłł princes",
        description: "Mir Castle, a red-brick fortress with five towers reflected in a pond, was begun in the early 16th century and mixes Gothic, Renaissance and Baroque. Twenty-nine kilometres away, Nesvizh Castle was the grand palace of the Radziwiłł family, set among lakes and parkland. Both are UNESCO World Heritage Sites.",
        bestTime: "May–Sep", image: "wiki:Mir Castle Complex", more: ["Nesvizh Castle"] },
      { name: "Belovezhskaya Pushcha", add: ["1mparab", "1rv5pvt", "ie4jhn", "1d1tnjl"], skip: ["nf49s3", "l8flne"], lat: 52.5700, lng: 23.8300, category: "Nature", sound: "jungle", zoom: 9,
        tagline: "Europe's last primeval forest",
        description: "On the border with Poland lies the largest surviving piece of the ancient forest that once covered the European plain, with oaks that are centuries old. It is one of the last homes of the European bison, Europe's heaviest land animal, which was brought back here after dying out in the wild. The whole forest is a UNESCO World Heritage Site.",
        bestTime: "May–Sep", image: "wiki:Belovezhskaya Pushcha National Park", more: ["Białowieża Forest"] }
    ]
  },
  {
    id: "498", name: "Moldova", region: "Europe", soundProfile: "temple",
    summary: "A cave monastery above a river bend, green boulevards, and some of the largest wine cellars on Earth.",
    hero: "wiki:Old Orhei",
    places: [
      { name: "Chișinău", pics: ["2ijcv1", "cc8kb", "4igg0", "2ijcuc", "2ki13r", "15e95i"], add: ["1ulp0yh", "1nxwc6l", "1grd5hx"], skip: ["1jay939", "f5t2u7", "1brrbkw", "14k3xxa", "1aghl5", "1ghasnp", "u8lasz", "txx7zv", "dbdmn6", "6wak17", "1ru7u01", "cqo0wg", "1etmz4o", "xela7v", "1chree6"], lat: 47.0228, lng: 28.8353, category: "City", sound: "city",
        tagline: "A green capital in wine country",
        description: "Moldova's capital is a city of wide, tree-lined boulevards and big parks, such as Ștefan cel Mare Park in the centre. Its Central Market spills over several blocks with produce from the countryside. The country is famous for its wine, and the vast cellars of Cricova and Mileștii Mici, with many kilometres of underground streets, are close to the city.",
        bestTime: "May–Oct", image: "wiki:Chișinău" },
      { name: "Old Orhei", add: ["gxjeq", "lh1vq5", "fdby0z", "1a8xtt3"], skip: ["8nej67", "ezrvv0"], lat: 47.3014, lng: 28.9725, category: "Historical", sound: "temple", zoom: 13,
        tagline: "A monastery in a limestone cliff",
        description: "About an hour north of Chișinău, the Răut River loops through a limestone gorge. Orthodox monks carved a cave monastery into the cliff face centuries ago, and a white church with a bell tower stands on the ridge above it. The village of Butuceni below has old village houses and family guesthouses.",
        bestTime: "May–Oct", image: "wiki:Old Orhei" }
    ]
  },
  {
    id: "807", name: "North Macedonia", region: "Europe", soundProfile: "temple",
    summary: "A lakeside town of Byzantine churches, a canyon of monasteries, and an Ottoman bazaar on the Vardar.",
    hero: "wiki:Ohrid",
    places: [
      { name: "Ohrid", add: ["190owsa", "1gfooag", "1wxn4pz", "1ywl6mz"], skip: ["15sfz1t"], lat: 41.1169, lng: 20.8019, category: "Historical", sound: "temple",
        tagline: "The Jerusalem of the Balkans",
        description: "Ohrid climbs a hill above Lake Ohrid, one of the oldest lakes in Europe and famous for its clear water. The town once had so many churches it was called the Jerusalem of the Balkans; the little Church of St John at Kaneo, on a rocky point above the lake, is the classic view. The lake and town are a UNESCO World Heritage Site.",
        bestTime: "May–Sep", image: "wiki:Ohrid", more: ["Lake Ohrid", "Church of St. John at Kaneo"] },
      { name: "Matka Canyon", pics: ["2atabk", "qx9kx", "qwwaq", "qwwbo"], skip: ["zz7dig", "y1hq9l"], lat: 41.9400, lng: 21.3000, category: "Nature", sound: "mountains", zoom: 12,
        tagline: "An emerald gorge near the capital",
        description: "Just west of Skopje, the River Treska runs through a steep, narrow gorge with medieval monasteries clinging to its walls. Boats and kayaks go up the green reservoir to Vrelo Cave, and trails follow the cliffs above. It is the most popular escape from the capital.",
        bestTime: "Apr–Oct", image: "wiki:Matka Canyon" },
      { name: "Skopje", add: ["1bt9f90", "3ps76f", "151vu6m"], skip: ["1pzvtcu", "15ccoq6"], lat: 41.9961, lng: 21.4317, category: "City", sound: "city",
        tagline: "An Ottoman bazaar and a stone bridge",
        description: "Skopje's Old Bazaar is one of the largest surviving Ottoman bazaars in the Balkans, a maze of shops, mosques and old inns. The Stone Bridge crosses the Vardar to the new centre, rebuilt in a grand classical style in the 2010s. The Millennium Cross on Mount Vodno looks down over the city.",
        bestTime: "Apr–Oct", image: "wiki:Skopje", more: ["Old Bazaar, Skopje", "Stone Bridge (Skopje)"] }
    ]
  },
  {
    id: "XK", name: "Kosovo", region: "Europe", soundProfile: "mountains",
    summary: "An Ottoman river town beneath a fortress, and deep gorges in the Albanian Alps.",
    hero: "wiki:Prizren",
    places: [
      { name: "Prizren", add: ["ueoymw", "16gpohx", "nk1a8r", "zq0ptk", "soaa2u"], lat: 42.2128, lng: 20.7392, category: "Historical", sound: "temple",
        tagline: "Minarets, a stone bridge and a hilltop fortress",
        description: "Prizren is Kosovo's most beautiful town, with an old stone bridge over its river, the domed Sinan Pasha Mosque, and minarets and church towers rising over the historic centre. A steep path climbs to the fortress for the view over the red roofs. Every August the town hosts Dokufest, a well-known documentary film festival.",
        bestTime: "May–Sep", image: "wiki:Prizren", more: ["Sinan Pasha Mosque", "Prizren Fortress"] },
      { name: "Rugova Canyon", pics: ["2yzfz0", "12skri", "2yzfye", "2663fp", "12skic", "236wuy"], add: ["jyskm0"], skip: ["jlljrq", "3gl7eg"], lat: 42.6922, lng: 20.1686, category: "Nature", sound: "mountains", zoom: 11,
        tagline: "A gorge into the Albanian Alps",
        description: "West of the city of Peja, the road into the mountains follows the Rugova Gorge between towering limestone walls. There is a via ferrata, caves to explore, and trails up to high pastures near the border with Montenegro. At the mouth of the gorge stands the Patriarchate of Peć, a medieval Serbian Orthodox monastery listed by UNESCO.",
        bestTime: "Jun–Sep", image: "wiki:Rugova Canyon", more: ["Patriarchate of Peć"] }
    ]
  },
  {
    id: "492", name: "Monaco", region: "Europe", soundProfile: "ocean",
    summary: "A glittering Riviera city-state of yachts, cliffs and a famous casino.",
    hero: "wiki:Monte Carlo",
    places: [
      { name: "Monaco", pics: ["5lcps", "9cbub", "iv4k2", "29v6zg", "29v6zj", "tyh5v", "tyh69"], add: ["1v7gb0d", "1n8zg5i", "142z0cy", "1u72j2s"], skip: ["1li5ait", "1stqjbc", "gh8mv3"], lat: 43.7384, lng: 7.4246, category: "City", sound: "ocean", zoom: 14,
        tagline: "Two square kilometres of Riviera glamour",
        description: "The second-smallest country in the world fits about 38,000 people into two square kilometres between the mountains and the sea. Superyachts fill Port Hercules below the Monte Carlo Casino, and the old town of Monaco-Ville sits on a rock with the Prince's Palace. Each spring the streets become the track of the Monaco Grand Prix.",
        bestTime: "Apr–Oct", image: "wiki:Monte Carlo", wiki: "Monaco", more: ["Monaco-Ville", "Port Hercules"] }
    ]
  },
  {
    id: "674", name: "San Marino", region: "Europe", soundProfile: "mountains",
    summary: "One of the world's oldest republics, on a mountaintop crowned with medieval towers.",
    hero: "wiki:Guaita",
    places: [
      { name: "San Marino", pics: ["1y5v1g", "22eneb", "1veq1n", "22qizf", "22qj0n", "39alrt"], add: ["1xb09x5", "1or655j", "1c86clr", "174myaq"], lat: 43.9346, lng: 12.4473, category: "Historical", sound: "mountains", zoom: 13,
        tagline: "Three towers on Monte Titano",
        description: "San Marino claims to be the oldest surviving republic in the world, founded by tradition in 301 AD. Its capital sits on the cliffs of Monte Titano, crowned by three medieval towers, and on clear days the view reaches the Adriatic. The whole country covers about 61 square kilometres.",
        bestTime: "Apr–Oct", image: "wiki:Guaita", wiki: "City of San Marino", more: ["Monte Titano"] }
    ]
  },
  {
    id: "438", name: "Liechtenstein", region: "Europe", soundProfile: "mountains",
    summary: "An Alpine principality of vineyards, a prince's castle and mountain trails.",
    hero: "wiki:Vaduz Castle",
    places: [
      { name: "Vaduz", pics: ["252x3r", "3670a4", "23nw1t", "366ybd", "17qi9b", "2v5hk7", "1xcyb0", "252wt3", "2zfrdt"], add: ["4k1arr"], skip: ["4q6mfn", "17zs3j4", "808wj0", "1qy0902", "6hnpb", "fepny9", "1egnuyd"], lat: 47.1406, lng: 9.5222, category: "City", sound: "mountains", zoom: 12,
        tagline: "A tiny capital under the Alps",
        description: "The capital of this small principality, home to about 5,700 people, lies on the Rhine beneath steep mountains. Vaduz Castle, still the home of the prince, watches from a ledge above town, with vineyards on the slope below. Trails climb into the Alps, and the whole country can be crossed by car in about half an hour.",
        bestTime: "Jun–Sep", image: "wiki:Vaduz Castle", wiki: "Vaduz" }
    ]
  },
  {
    id: "020", name: "Andorra", region: "Europe", soundProfile: "mountains",
    summary: "A mountain country in the Pyrenees of stone villages, wild valleys and ski slopes.",
    hero: "wiki:Madriu-Perafita-Claror Valley",
    places: [
      { name: "Madriu-Perafita-Claror Valley", pics: ["o2hau", "23c7jy", "o2han", "236h00", "o2he2", "23584j", "1gjzty", "jj7qs"], lat: 42.4921, lng: 1.5944, category: "Nature", sound: "mountains", zoom: 12,
        tagline: "A wild valley with no roads",
        description: "This glacial valley covers almost a tenth of Andorra, with stone shepherds' huts, high lakes and no roads into it. It is a UNESCO World Heritage Site, reached on foot from just outside the capital. In winter, the ski areas of Grandvalira nearby make Andorra one of the busiest ski destinations in the Pyrenees.",
        bestTime: "Jun–Sep", image: "wiki:Madriu-Perafita-Claror Valley" },
      { name: "Andorra la Vella", pics: ["gxv7b", "8rt3h", "2358gn", "i4mup", "i9x02", "236azc"], add: ["139du6g", "18p37v4", "15ik5bt", "1asj03j"], skip: ["k7hw33"], lat: 42.5072, lng: 1.5222, category: "City", sound: "mountains", zoom: 13,
        tagline: "Europe's highest capital",
        description: "At about 1,023 metres, Andorra la Vella is the highest capital in Europe, filling a narrow valley between Pyrenean peaks. Its old quarter keeps the stone Casa de la Vall, seat of the parliament since 1702, while the rest of town is lined with duty-free shops. The glass spire of Caldea, a large thermal spa, rises at the edge of town.",
        bestTime: "Jun–Sep", image: "wiki:Andorra la Vella", more: ["Casa de la Vall", "Caldea"] }
    ]
  },
  {
    id: "336", name: "Vatican City", region: "Europe", soundProfile: "temple", aka: ["Vatican", "Holy See"],
    summary: "The smallest country on Earth: St Peter's dome and its colonnaded square.",
    hero: "wiki:St. Peter's Square",
    places: [
      { name: "St Peter's Square & Basilica", pics: ["18a4l", "hlmy9", "hxf6n", "1jcldi", "1m4cmj", "2e1wah", "329ljw"], add: ["1gl5fyd", "t60dgx", "b1h144", "17xxb6y"], skip: ["saw0jq", "159aj1l", "n4ug4m", "q49xnb", "n84nxj"], lat: 41.9022, lng: 12.4572, category: "Historical", sound: "temple", zoom: 15,
        tagline: "Bernini's square, Michelangelo's dome",
        description: "The world's smallest country covers less than half a square kilometre inside Rome. Bernini's colonnades curve around St Peter's Square like two open arms, and Michelangelo's dome rises above the basilica; you can climb to the top for a view over the whole city. Behind the walls, the Vatican Gardens cover about half the territory.",
        bestTime: "Apr–Jun", image: "wiki:St. Peter's Square", more: ["St. Peter's Basilica", "Gardens of Vatican City"] }
    ]
  },
  {
    id: "234", name: "Faroe Islands", region: "Europe", soundProfile: "ocean", aka: ["Faroes", "Faeroe Islands"],
    summary: "Green cliffs, grass-roofed villages and waterfalls dropping into the North Atlantic.",
    hero: "wiki:Gásadalur",
    places: [
      { name: "Gásadalur", pics: ["11wiu8", "1e4b3r", "2zge7i", "10uohc"], add: ["s3p0lu", "uldjbg"], skip: ["1l6f9e9"], lat: 62.1122, lng: -7.4347, category: "Nature", sound: "ocean", zoom: 12,
        tagline: "A waterfall into the ocean",
        description: "On the island of Vágar, a waterfall drops off the cliff straight into the sea below the tiny village of Gásadalur, with the island of Mykines across the water. Until a tunnel opened in 2004, the village could only be reached by a path over the mountain.",
        bestTime: "Jun–Aug", image: "wiki:Gásadalur" },
      { name: "Sørvágsvatn", pics: ["10rp61", "1d50qo"], skip: ["jn0ky4"], lat: 62.0500, lng: -7.2333, category: "Nature", sound: "ocean", zoom: 12,
        tagline: "The lake above the ocean",
        description: "The largest lake in the Faroes ends at a cliff edge, and from the right angle it seems to hang high above the Atlantic. A walk of about an hour from Miðvágur leads to the cliffs for the famous view, and to the waterfall where the lake spills straight into the sea.",
        bestTime: "Jun–Aug", image: "wiki:Sørvágsvatn" },
      { name: "Tórshavn", add: ["13tamk8", "15070t5", "1qbmnpg", "1sdxi8x", "4qt71j"], lat: 62.0098, lng: -6.7713, category: "City", sound: "ocean",
        tagline: "A tiny capital of turf roofs",
        description: "One of the world's smallest capitals, Tórshavn has a little old quarter on the Tinganes peninsula, where red-painted wooden buildings with grass roofs house the government, on the site where an assembly met in Viking times. Colourful houses circle the harbour, and the medieval village of Kirkjubøur is a short drive away.",
        bestTime: "Jun–Aug", image: "wiki:Tórshavn", more: ["Tinganes", "Kirkjubøur"] }
    ]
  },
  {
    id: "304", name: "Greenland", region: "North America", soundProfile: "ocean",
    summary: "Icebergs the size of towns, the vast ice sheet, and colourful houses on Arctic rock.",
    hero: "wiki:Ilulissat Icefjord",
    places: [
      { name: "Ilulissat Icefjord", pics: ["2kqhmv", "2kp9b8", "2kp9b0", "2kqhnn", "2kp9gk", "2kp9gq"], add: ["jw8gio", "ldhr25", "1dte0ux", "13mkuqd"], lat: 69.2197, lng: -51.0986, category: "Nature", sound: "ocean", zoom: 9,
        tagline: "A fjord full of icebergs",
        description: "Icebergs calved from Sermeq Kujalleq, one of the fastest-moving glaciers in the world, drift down this 40-kilometre fjord and run aground at its mouth beside the town of Ilulissat, 250 kilometres north of the Arctic Circle. Boardwalks lead to viewpoints over the ice, and in midsummer the sun never sets. It is a UNESCO World Heritage Site.",
        bestTime: "Jun–Aug", image: "wiki:Ilulissat Icefjord", more: ["Ilulissat"] },
      { name: "Nuuk", pics: ["1gfs08", "3ckx0j"], add: ["1xr73z7", "1xlgdgx", "r2s6oz", "1nvf1za"], skip: ["1wa81bb"], lat: 64.1750, lng: -51.7333, category: "City", sound: "ocean",
        tagline: "An Arctic capital on the fjords",
        description: "Greenland's capital, home to about a third of the island's people, mixes colourful wooden houses and modern buildings on a rocky peninsula. Behind it rises the peak of Sermitsiaq, and the fjords around it run far inland, with humpback whales often seen in summer.",
        bestTime: "Jun–Sep", image: "wiki:Nuuk", more: ["Sermitsiaq"] }
    ]
  },
  /* ---------- Caribbean & Central America: the rest ---------- */
  {
    id: "388", name: "Jamaica", region: "Caribbean", soundProfile: "ocean",
    summary: "Miles of beach, waterfalls you can climb, and coffee-growing mountains above the sea.",
    hero: "wiki:Dunn's River Falls",
    places: [
      { name: "Negril", pics: ["1zwwp1", "evn1a", "2gifg5", "yehd7", "59f96", "pyon3"], add: ["1yufh9j"], lat: 18.2731, lng: -78.3458, category: "Beach", sound: "ocean", zoom: 12,
        tagline: "Seven miles of sand and the West End cliffs",
        description: "At Jamaica's western tip, Negril's beach runs for about seven miles of pale sand and calm water. South of town, the West End is a coast of limestone cliffs and sea caves, where people jump into deep, clear water and gather to watch the sunset.",
        bestTime: "Dec–Apr", image: "wiki:Negril" },
      { name: "Dunn's River Falls", pics: ["7ioar", "2njxk", "1gzahp", "evvqz", "evw0j", "2rjh1p", "ets4v", "26km33", "evw0i"], skip: ["72k1am"], lat: 18.4158, lng: -77.1381, category: "Nature", sound: "jungle", zoom: 13,
        tagline: "A waterfall you climb",
        description: "Near Ocho Rios, Dunn's River Falls tumbles down a long staircase of natural limestone terraces straight onto a beach. Visitors climb the falls in a human chain, hand in hand, guided up through the cascades. It is one of the best-known sights in Jamaica.",
        bestTime: "Dec–Apr", image: "wiki:Dunn's River Falls", more: ["Ocho Rios"] },
      { name: "Blue Mountains", pics: ["a6xvn", "2qbc6b", "1vjeon", "3afpc7", "3afpcc"], skip: ["iiv2t6"], lat: 18.1000, lng: -76.6667, category: "Mountain", sound: "mountains", zoom: 10,
        tagline: "Misty peaks and famous coffee",
        description: "The longest range in Jamaica rises to 2,256 metres at Blue Mountain Peak, where hikers set off before dawn to see both the north and south coasts at sunrise. The cool, misty slopes grow Blue Mountain coffee, one of the most prized coffees in the world.",
        bestTime: "Dec–Apr", image: "wiki:Blue Mountains (Jamaica)" },
      { name: "Port Antonio", pics: ["xr9sk", "2ig37e", "8t00o", "2ig49n", "xwzu2"], skip: ["853xhq", "1u2w5xx"], lat: 18.1762, lng: -76.4483, category: "Beach", sound: "ocean", zoom: 12,
        tagline: "Jamaica's lush, quiet corner",
        description: "On the green northeast coast, Port Antonio is the quiet side of Jamaica, with rainforest running down to the sea. Nearby are the Blue Lagoon, a deep pool where cold springs meet the sea, the sheltered beach of Frenchman's Cove, and bamboo rafts drifting down the Rio Grande.",
        bestTime: "Dec–Apr", image: "wiki:Port Antonio", more: ["Frenchman's Cove", "Rio Grande (Jamaica)"] }
    ]
  },
  {
    id: "214", name: "Dominican Republic", region: "Caribbean", soundProfile: "ocean",
    summary: "The oldest colonial city in the Americas, palm-lined beaches, and humpback whales in Samaná Bay.",
    hero: "wiki:Ciudad Colonial (Santo Domingo)",
    places: [
      { name: "Santo Domingo", pics: ["1dnlfr", "1dnlfq", "6vkgp"], add: ["1khlu5d", "15pdrek"], skip: ["1w20xqp"], lat: 18.4730, lng: -69.8830, category: "Historical", sound: "city",
        tagline: "The first city of the Americas",
        description: "Santo Domingo's Ciudad Colonial is the oldest continuously inhabited European-founded settlement in the Americas, and a UNESCO World Heritage Site. Its cobbled streets hold the first cathedral in the Americas, begun in 1512, and the Alcázar de Colón, the palace built for Columbus's son Diego.",
        bestTime: "Dec–Apr", image: "wiki:Ciudad Colonial (Santo Domingo)", more: ["Cathedral of Santo Domingo", "Alcázar de Colón"] },
      { name: "Punta Cana", pics: ["1ptjcw", "ms1ag", "j8o2m", "2y2ech", "2nva1v"], add: ["1b9eqo", "1k1kyox", "11p7nhy"], skip: ["180vzpq"], lat: 18.5586, lng: -68.3694, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "Palms, reefs and white sand",
        description: "The easternmost tip of the island is lined with long, palm-fringed white beaches such as Bávaro, on water kept calm by offshore reefs. It is the country's biggest resort area. Boats run day trips to Saona Island, a protected island of empty beaches and shallow natural pools.",
        bestTime: "Dec–Apr", image: "wiki:Punta Cana", more: ["Bávaro", "Saona Island"] },
      { name: "Samaná", pics: ["1q03h3", "1jc0pt", "yaldy", "1pth0h", "1q03ik", "3anv57", "1pth1d", "2fde6z", "1pth1o"], add: ["14yaqyc", "zr49do", "1go8ng2", "3626h3"], lat: 19.2502, lng: -69.4212, category: "Nature", sound: "ocean", zoom: 10,
        tagline: "Whales, wild beaches and karst islets",
        description: "Every winter, roughly from January to March, thousands of humpback whales gather in Samaná Bay to mate and give birth. The peninsula has wild beaches such as Playa Rincón, and across the bay, Los Haitises National Park is a maze of karst islets, mangroves and caves.",
        bestTime: "Jan–Mar", image: "wiki:Samaná Peninsula", more: ["Los Haitises National Park"] }
    ]
  },
  {
    id: "332", name: "Haiti", region: "Caribbean", soundProfile: "mountains",
    summary: "A mountaintop fortress built by a free nation, and an old coffee port of iron balconies and carnival masks.",
    hero: "wiki:Citadelle Laferrière",
    places: [
      { name: "Citadelle Laferrière", pics: ["xrks", "xrm0", "xrl5", "xrlv", "xrlp", "lnvzm"], add: ["1yzd9zp", "1etku00"], lat: 19.5736, lng: -72.2439, category: "Historical", sound: "mountains", zoom: 12,
        tagline: "The fortress of independence",
        description: "Built in the early 1800s by tens of thousands of formerly enslaved people after Haiti won its independence, the Citadelle is often called the largest fortress in the Americas, set on a mountaintop at about 900 metres. Below it lie the ruins of Sans-Souci Palace, built for King Henri Christophe. Together they are a UNESCO World Heritage Site.",
        bestTime: "Nov–Mar", image: "wiki:Citadelle Laferrière", more: ["Sans-Souci Palace"] },
      { name: "Jacmel", pics: ["19v6j7", "2xq7gl", "j24ox", "19v6j5"], add: ["12np8od"], skip: ["1xs4dj8"], lat: 18.2342, lng: -72.5347, category: "Culture", sound: "ocean", zoom: 12,
        tagline: "Iron balconies and papier-mâché masks",
        description: "Jacmel, on the south coast, grew rich exporting coffee in the 19th century, and its old merchant houses have cast-iron balconies and columns. The town is known for its artists and its carnival, with huge papier-mâché masks. In the hills above, Bassin Bleu is a chain of blue pools linked by waterfalls.",
        bestTime: "Nov–Mar", image: "wiki:Jacmel" }
    ]
  },
  {
    id: "044", name: "Bahamas", region: "Caribbean", soundProfile: "ocean", aka: ["The Bahamas"],
    summary: "Water in every shade of blue, swimming pigs and pink-sand beaches across about 700 islands.",
    hero: "wiki:Pig Beach",
    places: [
      { name: "Exuma Cays", pics: ["1i9fc4", "1g76nx", "1g76ma", "1g76n0", "1g76o3", "1g76mr", "1g76nu", "1g76mx", "1g76mz"], add: ["1sljkpj", "y9vf7c"], skip: ["1g0i22v", "1jqht76"], lat: 24.1836, lng: -76.4564, category: "Beach", sound: "ocean", zoom: 10,
        tagline: "Turquoise shallows and swimming pigs",
        description: "The Exuma chain is a string of hundreds of small cays over startlingly clear turquoise shallows. On Big Major Cay, a colony of feral pigs swims out to meet the boats, and the Exuma Cays Land and Sea Park protects reefs, iguanas and empty white beaches.",
        bestTime: "Dec–May", image: "wiki:Pig Beach", wiki: "Exuma" },
      { name: "Nassau", pics: ["187386", "2jgopz", "5a4eo", "1qehcn", "hoxhr", "37zsfz", "37zsgh"], add: ["wkiob5", "bb84b", "10sx8q"], skip: ["bmjqbx", "yw4y23", "11i48p4", "o2fs0", "z6jaee", "1eb9ma6", "illztx", "p85peh"], lat: 25.0781, lng: -77.3386, category: "City", sound: "ocean",
        tagline: "Pastel colonial capital",
        description: "The capital mixes pastel colonial buildings, old forts and the Queen's Staircase, 66 steps cut into the limestone by enslaved people in the 1790s. Cruise ships dock beside the old town, and Paradise Island across the harbour is lined with beaches.",
        bestTime: "Dec–May", image: "wiki:Nassau, Bahamas", more: ["Paradise Island", "Queen's Staircase"] },
      { name: "Harbour Island", pics: ["1cjo39", "1ci8a5", "18azs1", "18azt4", "16i0nz"], add: ["15sg853", "lx1e5r"], lat: 25.5000, lng: -76.6333, category: "Beach", sound: "ocean", zoom: 13,
        tagline: "Three miles of pink sand",
        description: "Off Eleuthera, Harbour Island has a beach of pale pink sand about three miles long, coloured by the red shells of tiny sea creatures called foraminifera. Its little town, Dunmore Town, is a grid of clapboard cottages with picket fences, and people get around by golf cart.",
        bestTime: "Dec–May", image: "file:Secluded bay Bahamas - panoramio.jpg", wiki: "Harbour Island, Bahamas" }
    ]
  },
  {
    id: "052", name: "Barbados", region: "Caribbean", soundProfile: "ocean",
    summary: "A coral island of calm west-coast beaches, wild Atlantic surf, and a UNESCO-listed capital.",
    hero: "wiki:Bathsheba, Barbados",
    places: [
      { name: "Bridgetown", pics: ["189kg", "1w8sh2", "vjpwy", "1jds6z", "wh76q", "wh5k7", "3suzc"], lat: 13.0975, lng: -59.6167, category: "Historical", sound: "city",
        tagline: "A colonial port and its garrison",
        description: "Historic Bridgetown and its Garrison is a UNESCO World Heritage Site, with a 17th-century street plan, the Parliament buildings and the Garrison Savannah, where horse races have been held since the 1840s. Carlisle Bay, right beside town, has calm water and shipwrecks to snorkel over.",
        bestTime: "Dec–Apr", image: "wiki:Carlisle Bay, Barbados" },
      { name: "Bathsheba", pics: ["3st43", "iaftc", "iafv5", "3st66", "3st2o", "2ec59k", "5o4u9", "5o50d", "3stp9", "3stns"], add: ["1pq2g80", "nsq9s5", "fyktwd"], lat: 13.2142, lng: -59.5236, category: "Beach", sound: "ocean", zoom: 13,
        tagline: "Giant boulders on the Atlantic coast",
        description: "On the wild Atlantic coast, Bathsheba's beach is scattered with huge mushroom-shaped boulders, undercut by the waves. Its surf break, the Soup Bowl, draws surfers from around the world, and rock pools form at low tide.",
        bestTime: "Dec–Apr", image: "wiki:Bathsheba, Barbados" }
    ]
  },
  {
    id: "780", name: "Trinidad and Tobago", region: "Caribbean", soundProfile: "ocean",
    summary: "The home of Carnival and the steelpan, and Tobago's palm-fringed reefs and old rainforest.",
    hero: "wiki:Pigeon Point, Tobago",
    places: [
      { name: "Tobago", pics: ["8x6dj", "4jr2s", "5too2", "2iewe", "viqf2"], add: ["13bdg7m"], skip: ["lwo84k", "tp92ak", "10qy3bv"], lat: 11.1729, lng: -60.8385, category: "Beach", sound: "ocean", zoom: 10,
        tagline: "Reefs, rainforest and a thatched jetty",
        description: "Tobago is the quieter of the two islands, with rainforest hills and small fishing bays. Pigeon Point, with its thatch-roofed jetty, is its best-known beach, and glass-bottomed boats head out to the coral of Buccoo Reef. The Main Ridge Forest Reserve has been protected since 1776.",
        bestTime: "Jan–May", image: "wiki:Pigeon Point, Tobago", wiki: "Tobago", more: ["Buccoo Reef"] },
      { name: "Port of Spain", pics: ["395kez", "rz2b8", "395keo", "twiga", "14l7qe", "rz251", "395kf0", "395kek", "395ket", "395kf1", "2ji4wo"], add: ["1kfz2x1", "1y10m7i"], lat: 10.6667, lng: -61.5167, category: "City", sound: "city",
        tagline: "Carnival city",
        description: "Trinidad's capital erupts each year before Lent with Carnival, one of the biggest in the world, when costumed bands parade through the streets. The steelpan, made from oil drums, was invented in Trinidad in the 20th century. North of the city, a road over the mountains leads to Maracas Bay, the island's favourite beach.",
        bestTime: "Jan–May", image: "wiki:Port of Spain", more: ["Queen's Park Savannah"] }
    ]
  },
  {
    id: "662", name: "Saint Lucia", region: "Caribbean", soundProfile: "ocean", aka: ["St Lucia"],
    summary: "Two volcanic spires rising from the sea, rainforest, and a drive-in volcano.",
    hero: "wiki:Pitons (Saint Lucia)",
    places: [
      { name: "The Pitons", pics: ["1359sr", "1mejj", "2ua4bz", "3ag8zy", "32xgq5", "1lyz9o", "2ua4c3", "2ua4c7", "2ua4c1", "3ag8zp", "3ag8zt", "12xa7c"], add: ["lm37r0", "16j4jpe"], lat: 13.8071, lng: -61.0704, category: "Mountain", sound: "ocean", zoom: 12,
        tagline: "Twin peaks from the sea",
        description: "Gros Piton and Petit Piton, two forested volcanic spires about 750 to 800 metres high, rise straight out of the sea near the town of Soufrière, and Gros Piton can be climbed with a guide. Nearby, the Sulphur Springs bubble with hot mud pools. The area is a UNESCO World Heritage Site.",
        bestTime: "Dec–Apr", image: "wiki:Pitons (Saint Lucia)", more: ["Soufrière, Saint Lucia"] },
      { name: "Marigot Bay", pics: ["28svcv", "28v8m0", "28v8pv", "28suid", "28swpz", "trzfh", "28s0ev", "2bjrv"], lat: 13.9662, lng: -61.0240, category: "Beach", sound: "ocean", zoom: 14,
        tagline: "A hidden green inlet",
        description: "A deep, narrow inlet surrounded on three sides by steep green hills, with a strip of palm-fringed sand at its mouth. Yachts shelter here, and it is often called one of the most beautiful bays in the Caribbean.",
        bestTime: "Dec–Apr", image: "wiki:Marigot Bay" }
    ]
  },
  {
    id: "308", name: "Grenada", region: "Caribbean", soundProfile: "ocean",
    summary: "The Spice Island: nutmeg-scented hills, a horseshoe harbour and a long white beach.",
    hero: "wiki:St. George's, Grenada",
    places: [
      { name: "St. George's", pics: ["1g208o", "i4fsy", "23m2pd", "sauyy", "sauz6", "1k8iz8", "10c2ab", "10c2a3", "10c26t", "10c25r"], add: ["mciurl", "hg80s6", "1jqn813", "14efptc"], lat: 12.0525, lng: -61.7531, category: "City", sound: "ocean",
        tagline: "A harbour town in an old crater",
        description: "Grenada's capital curls around a horseshoe-shaped harbour inside an old volcanic crater, with red-roofed houses climbing the hills to Fort George. A few minutes away, Grand Anse is a two-mile curve of white sand. Grenada is called the Spice Island and is a major producer of nutmeg, which even appears on its flag.",
        bestTime: "Jan–May", image: "wiki:St. George's, Grenada" }
    ]
  },
  {
    id: "028", name: "Antigua and Barbuda", region: "Caribbean", soundProfile: "ocean",
    summary: "Countless beaches, a Georgian naval dockyard, and pink sand on Barbuda.",
    hero: "wiki:Nelson's Dockyard",
    places: [
      { name: "English Harbour", pics: ["2qwghy", "r7cto", "r7ctn", "1yfikq", "3ze6d", "nx8sp", "1yfq3j"], add: ["xcljvm", "1kycgn3", "erhlyd", "damsqc", "1hjg8n8"], skip: ["1sf2lqq", "1yrj970"], lat: 17.0083, lng: -61.7644, category: "Historical", sound: "ocean", zoom: 13,
        tagline: "Nelson's Dockyard",
        description: "In English Harbour, Nelson's Dockyard is the only Georgian-era naval dockyard in the world still working, its stone and timber buildings restored as a marina, inns and shops. It is a UNESCO World Heritage Site. Shirley Heights, above it, has the classic view over the harbour and a Sunday evening party with steel bands.",
        bestTime: "Dec–Apr", image: "wiki:Nelson's Dockyard", more: ["Shirley Heights"] },
      { name: "Barbuda", pics: ["2k5s0p", "3aeozk", "16hw3e", "1vl7a8"], skip: ["ondw35", "3aat48", "1m4vxj0"], lat: 17.6400, lng: -61.8100, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "Pink sand and frigatebirds",
        description: "Antigua's flat, quiet sister island has beaches of pink-tinged sand running for miles, and a lagoon with one of the largest frigatebird colonies in the world. Its only village is Codrington.",
        bestTime: "Dec–Apr", image: "file:Barbudan landscape A 04.jpg", more: ["Codrington Lagoon"], wiki: "Barbuda" }
    ]
  },
  {
    id: "212", name: "Dominica", region: "Caribbean", soundProfile: "rainforest",
    summary: "The Nature Island: volcanic rainforest, waterfalls and a boiling lake.",
    hero: "wiki:Morne Trois Pitons National Park",
    places: [
      { name: "Morne Trois Pitons National Park", pics: ["1zb6j2", "jkw7l", "36leg6", "1qjirv", "12xa7v", "r3ihj", "a1z2z", "12x07i"], add: ["zug51v"], lat: 15.3167, lng: -61.3200, category: "Nature", sound: "rainforest", zoom: 11,
        tagline: "Waterfalls and a boiling lake",
        description: "Dominica's mountainous interior is volcanic rainforest, and this national park, a UNESCO World Heritage Site, holds the twin Trafalgar Falls and the Boiling Lake, a flooded fumarole whose grey water bubbles close to boiling point. The hike there takes most of a day, through the steaming Valley of Desolation.",
        bestTime: "Jan–May", image: "wiki:Morne Trois Pitons National Park", more: ["Boiling Lake", "Trafalgar, Dominica"] }
    ]
  },
  {
    id: "659", name: "Saint Kitts and Nevis", region: "Caribbean", soundProfile: "ocean", aka: ["St Kitts", "Nevis"],
    summary: "A volcanic island pair with a great British fortress and a cloud-capped peak.",
    hero: "wiki:Brimstone Hill Fortress National Park",
    places: [
      { name: "Brimstone Hill Fortress", pics: ["siilq", "slc0b", "wilsb", "396fvt", "3akfiu", "3akfie", "26jupt", "396fw6", "3akfig"], add: ["br3tkn", "15de0y9", "9cugna"], lat: 17.3470, lng: -62.8360, category: "Historical", sound: "ocean", zoom: 13,
        tagline: "A fortress on a volcanic hill",
        description: "Built by the British over about a century from the 1690s, with the labour of enslaved Africans, this fortress sits on a steep volcanic hill above the sea. It is a UNESCO World Heritage Site, and from its walls you can see neighbouring islands such as St Eustatius. Across a narrow channel, Nevis rises to a peak usually wrapped in cloud.",
        bestTime: "Dec–Apr", image: "wiki:Brimstone Hill Fortress National Park", more: ["Nevis Peak"] }
    ]
  },
  {
    id: "670", name: "Saint Vincent and the Grenadines", region: "Caribbean", soundProfile: "ocean", aka: ["St Vincent", "Grenadines"],
    summary: "A chain of small islands with sea turtles, sailing boats and coral reefs.",
    hero: "wiki:Tobago Cays",
    places: [
      { name: "Tobago Cays", pics: ["vel79", "3tx8i", "xs1wo"], add: ["bermnt"], lat: 12.6333, lng: -61.3500, category: "Beach", sound: "ocean", zoom: 13,
        tagline: "Turtles in a reef lagoon",
        description: "Five small uninhabited islands ringed by a horseshoe reef, the Tobago Cays are a marine park where green turtles graze on seagrass in clear shallow water and yachts anchor in the lagoon. Scenes from Pirates of the Caribbean were filmed on Petit Tabac.",
        bestTime: "Dec–May", image: "wiki:Tobago Cays" },
      { name: "Bequia", pics: ["vqs17", "wdq5m"], skip: ["1b462eg"], lat: 13.0150, lng: -61.2300, category: "Beach", sound: "ocean", zoom: 13,
        tagline: "A sailors' island",
        description: "The second-largest of the Grenadines is a short ferry ride from St Vincent, with a sheltered harbour, Admiralty Bay, full of sailing boats. Quiet beaches and a long tradition of boatbuilding make it a favourite stop for sailors.",
        bestTime: "Dec–May", image: "file:Bequia Beach Hotel, Friendship Beach - panoramio.jpg", wiki: "Bequia" }
    ]
  },
  {
    id: "084", name: "Belize", region: "Central America", soundProfile: "jungle",
    summary: "The world's second-largest barrier reef, the Great Blue Hole, and Maya temples in the rainforest.",
    hero: "wiki:Great Blue Hole",
    places: [
      { name: "Great Blue Hole", pics: ["2i7p9f", "186qhp", "tl15h", "1ogl0h", "2af7ks", "1nftmv"], lat: 17.3156, lng: -87.5344, category: "Nature", sound: "ocean", zoom: 11,
        tagline: "A round blue hole in the reef",
        description: "In the middle of Lighthouse Reef, 70 kilometres off the coast, a perfectly round, deep-blue sinkhole about 300 metres across drops 124 metres into the reef. From the air it is one of the most striking sights in the Caribbean, and divers go down to see stalactites formed when it was a dry cave.",
        bestTime: "Dec–May", image: "wiki:Great Blue Hole" },
      { name: "Ambergris Caye", pics: ["10u24j", "4f8x9", "3cwq17", "1wb1tx", "1wb1ty", "ehaat"], add: ["uabbtn", "1297pu6", "116lf2u"], lat: 18.0139, lng: -87.9310, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "Golf carts and nurse sharks",
        description: "Belize's largest island is 40 kilometres of white coral sand and mangroves, with the little town of San Pedro, where most people get around by golf cart. The barrier reef runs just offshore, and at Hol Chan Marine Reserve you can snorkel with nurse sharks and rays.",
        bestTime: "Dec–May", image: "wiki:Ambergris Caye", more: ["Hol Chan Marine Reserve", "Belize Barrier Reef"] },
      { name: "Xunantunich & Caracol", pics: ["1cg86i", "pc4h4", "13vmop", "pc4rf", "pc4o5", "pc4c8", "pc4ed"], add: ["13af7fi", "eepcur", "7qltvu"], skip: ["o45ai9"], lat: 17.0902, lng: -89.1422, category: "Historical", sound: "temple", zoom: 12,
        tagline: "Maya temples above the jungle",
        description: "In western Belize, the Maya city of Xunantunich sits on a ridge above the Mopan River, reached by a hand-cranked ferry, and its main temple, El Castillo, looks out over the forest into Guatemala. Deeper in the jungle, Caracol was one of the largest Maya cities, and its great Caana pyramid is still the tallest building in Belize.",
        bestTime: "Dec–May", image: "wiki:Xunantunich", more: ["Caracol"] }
    ]
  },
  {
    id: "340", name: "Honduras", region: "Central America", soundProfile: "jungle",
    summary: "Maya carvings at Copán, and the Bay Islands on the edge of the great Caribbean reef.",
    hero: "wiki:Copán",
    places: [
      { name: "Roatán", pics: ["ufo0j", "ugi6t", "dudl9", "4a6z9", "24l5g3", "2nwhl0", "1qy4zw", "2nxf5g", "z3x54", "35gntz"], add: ["hdxub8", "2e6sxz"], skip: ["llbxvt", "1uy3qw5"], lat: 16.3834, lng: -86.4178, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "Coral right off the beach",
        description: "The largest of the Bay Islands, about 65 kilometres off the north coast, sits on the Mesoamerican Reef, the largest reef system in the Western Hemisphere. West Bay has a long white beach with coral just off the sand. Nearby Utila is a famous place to learn to dive and to swim with whale sharks.",
        bestTime: "Mar–Aug", image: "wiki:Roatán", more: ["Utila"] },
      { name: "Copán", pics: ["259wr9", "t8c1b", "aifcq", "179jmw", "259wr1"], add: ["et8dj4", "18vu0b4", "2xvd17"], skip: ["o45ai9", "1cz1i8f", "1wzxt2t"], lat: 14.8380, lng: -89.1424, category: "Historical", sound: "temple", zoom: 13,
        tagline: "The finest carving in the Maya world",
        description: "Near the Guatemalan border, Copán was one of the great Maya cities, famous for the finest stone carving in the Maya world. Its Hieroglyphic Stairway holds the longest known Maya inscription, and the plazas are filled with carved stelae of its kings. Scarlet macaws, the national bird, fly over the ruins.",
        bestTime: "Nov–Apr", image: "wiki:Copán" }
    ]
  },
  {
    id: "222", name: "El Salvador", region: "Central America", soundProfile: "mountains",
    summary: "Volcanoes and crater lakes, Pacific surf beaches, and cobbled colonial towns.",
    hero: "wiki:Santa Ana Volcano",
    places: [
      { name: "Santa Ana Volcano", pics: ["1gti0p", "xq0x1", "2ohpyr", "2ohpyo", "37orx3", "whtm1", "whtn3", "wmc9j", "2ohqpe"], add: ["voexha"], lat: 13.8528, lng: -89.6300, category: "Mountain", sound: "mountains", zoom: 11,
        tagline: "A crater lake beside a caldera",
        description: "At 2,381 metres, Santa Ana is El Salvador's highest volcano, and the hike to its rim looks down into a crater holding a steaming green lake. Right beside it, Lake Coatepeque fills a huge caldera formed by eruptions tens of thousands of years ago.",
        bestTime: "Nov–Apr", image: "wiki:Santa Ana Volcano", more: ["Coatepeque Caldera", "Izalco (volcano)"] },
      { name: "La Libertad Coast", pics: ["2nsit8", "xz9jt", "2r0n3u", "xz9j3", "wi70t", "w9hrv", "w9hs5"], add: ["ne4wbp", "4bl9hn", "6n9oz0"], skip: ["1mcurns", "n4ryju"], lat: 13.4888, lng: -89.3191, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "Point breaks and black sand",
        description: "The coast west of the port of La Libertad has some of the best right-hand point breaks in Central America, at beaches such as El Tunco and El Zonte, with dark volcanic sand and rocky points. The fishing pier at La Libertad sells the morning catch.",
        bestTime: "Mar–Oct", image: "wiki:La Libertad, El Salvador" },
      { name: "Suchitoto", pics: ["e2v1b", "2xip10", "hdnug", "172azt"], add: ["4lttqe", "pzt2va"], skip: ["1d3alvw"], lat: 13.9367, lng: -89.0259, category: "Historical", sound: "temple", zoom: 13,
        tagline: "Cobblestones and indigo",
        description: "A colonial town of cobbled streets and whitewashed houses with red-tiled roofs, Suchitoto looks out over a large lake. Its white church of Santa Lucía faces the main square, and the town is known for its art festivals and indigo dyeing.",
        bestTime: "Nov–Apr", image: "wiki:Suchitoto" }
    ]
  },
  {
    id: "558", name: "Nicaragua", region: "Central America", soundProfile: "mountains",
    summary: "Colonial cities in bright colours, an island of twin volcanoes in a great lake, and a cathedral you can walk on.",
    hero: "wiki:Granada, Nicaragua",
    places: [
      { name: "Granada", pics: ["2diuhs", "9609e", "16oyrb", "xqvjn", "eskpc"], add: ["1ceb0u4", "1stci5e", "beurtv"], lat: 11.9304, lng: -85.9536, category: "Historical", sound: "city",
        tagline: "A colonial city on a great lake",
        description: "Founded in 1524 on the shore of Lake Nicaragua, Granada is one of the oldest cities founded by Europeans on the American mainland. Its streets are lined with colonial houses in bright colours around a yellow cathedral. Boats tour the Isletas, hundreds of small islands in the lake formed by an ancient eruption of the Mombacho volcano.",
        bestTime: "Nov–Apr", image: "wiki:Granada, Nicaragua", more: ["Mombacho"] },
      { name: "Ometepe", pics: ["2gn5q4", "hg5tg", "126l5i", "126ler", "1f5g22", "4i3q8", "eskph", "bvpcv"], add: ["icfy86", "5z967y", "1f6n8ms"], skip: ["5ela5d", "12d3mlu", "n717tl"], lat: 11.4984, lng: -85.6255, category: "Nature", sound: "mountains", zoom: 11,
        tagline: "Two volcanoes in a lake",
        description: "Two volcanoes rise out of Lake Nicaragua to form this island, joined by a narrow neck of land: the near-perfect cone of Concepción, still active, and the forested Maderas, with a lake in its crater. Ojo de Agua is a spring-fed swimming hole among the trees.",
        bestTime: "Nov–Apr", image: "wiki:Concepción (volcano)", wiki: "Ometepe" },
      { name: "León", pics: ["9r2ky", "962ts", "962p2", "v6wys", "126kwz", "962je"], add: ["inonct", "19nk2k0", "1xiut7y"], skip: ["qmrb3y"], lat: 12.4348, lng: -86.8788, category: "Historical", sound: "city",
        tagline: "A white cathedral and a volcano to slide down",
        description: "León's huge white cathedral, the largest in Central America, is a UNESCO World Heritage Site, and you can walk on its gleaming roof among the domes. The city is a lively university town, and nearby you can climb the young Cerro Negro volcano and slide down its black gravel slopes on a board.",
        bestTime: "Nov–Apr", image: "wiki:León Cathedral, Nicaragua", wiki: "León, Nicaragua", more: ["Cerro Negro"] }
    ]
  },
  {
    id: "630", name: "Puerto Rico", region: "Caribbean", soundProfile: "ocean",
    summary: "Spanish forts and pastel streets in Old San Juan, a rainforest of singing frogs, and turquoise island beaches.",
    hero: "wiki:Old San Juan",
    places: [
      { name: "Old San Juan", pics: ["1dc0nc", "ut5rk", "2159ga", "2d9wi7"], add: ["1de06or", "myhh4n", "10icdiw", "1cw9pan"], skip: ["l94a6t", "nmetnr"], lat: 18.4661, lng: -66.1191, category: "Historical", sound: "city",
        tagline: "Blue cobblestones and Spanish forts",
        description: "Founded by the Spanish in 1521, Old San Juan is a grid of blue cobblestone streets and pastel colonial houses on a small island. The massive forts of El Morro and San Cristóbal guard its walls, and together they form a UNESCO World Heritage Site.",
        bestTime: "Dec–Apr", image: "wiki:Old San Juan", more: ["Castillo San Felipe del Morro"] },
      { name: "El Yunque", pics: ["1ifhid", "296cql", "296db4", "1bqkon", "h66op"], add: ["xslgzc", "1clb71c"], skip: ["102c0zz", "1evh9v0", "1xos899"], lat: 18.3167, lng: -65.7833, category: "Nature", sound: "rainforest", zoom: 11,
        tagline: "A rainforest of singing frogs",
        description: "The only tropical rainforest in the US National Forest system, El Yunque covers the Luquillo Mountains less than an hour from San Juan. Trails lead to waterfalls, and in the evening the forest fills with the call of the tiny coquí frog, the island's symbol.",
        bestTime: "Dec–Apr", image: "wiki:El Yunque National Forest" },
      { name: "Culebra", pics: ["1hs1j4", "1pscsx", "1pscka", "2wtl5l", "2wtl5m", "srok", "1g79rw", "1wf7ii", "2e33p"], add: ["i2jo8z", "1ltxfek", "n7qjcs", "1ypo6jp"], lat: 18.3280, lng: -65.3163, category: "Beach", sound: "ocean", zoom: 12,
        tagline: "Flamenco Beach",
        description: "On the small island of Culebra, east of the main island, Flamenco Beach curves for about a mile around a calm, reef-sheltered bay of turquoise water and white sand. Old tanks left from when the US Navy used the area for training still rust on the sand.",
        bestTime: "Dec–Apr", image: "wiki:Flamenco Beach", more: ["Culebra, Puerto Rico"] }
    ]
  },
  {
    id: "533", name: "Aruba", region: "Caribbean", soundProfile: "ocean",
    summary: "A dry, sunny island of white beaches, wind-bent trees and desert cactus.",
    hero: "wiki:Eagle Beach",
    places: [
      { name: "Eagle Beach", pics: ["1bw78y", "2bll65", "2bllhp", "55o6r", "2ee880", "ehbeg", "ehbec"], add: ["96x1g1", "tbzn8s", "1dyo4n"], skip: ["srn0q5"], lat: 12.5492, lng: -70.0579, category: "Beach", sound: "ocean", zoom: 13,
        tagline: "Wind-bent trees on white sand",
        description: "Aruba's widest beach is a long stretch of soft white sand with calm water, and its windswept fofoti trees, bent sideways by the trade winds, are among the most photographed trees in the Caribbean. Inland, Arikok National Park covers almost a fifth of the island with cactus, caves and a wild north coast.",
        bestTime: "Year-round", image: "wiki:Eagle Beach", more: ["Arikok National Park"] }
    ]
  },
  {
    id: "531", name: "Curaçao", region: "Caribbean", soundProfile: "ocean",
    summary: "A Dutch-Caribbean capital in bright colours, and small beaches in rocky coves.",
    hero: "wiki:Willemstad",
    places: [
      { name: "Willemstad", pics: ["1g1hs3", "2ad8p7", "353hmc", "2ycvgg", "2tmrsi"], add: ["xrgivl", "sjkg2m", "hd3qnj", "1rjedh7", "10hbtxn"], skip: ["1e0vqnc", "1qh9fdz", "9takfv"], lat: 12.1080, lng: -68.9350, category: "City", sound: "ocean",
        tagline: "A rainbow waterfront",
        description: "Willemstad's waterfront, the Handelskade, is a row of Dutch-style merchant houses painted in bright colours, and the historic centre is a UNESCO World Heritage Site. The Queen Emma Bridge, a floating pontoon bridge, swings open to let ships into the harbour. Along the west coast, small beaches in rocky coves have very clear water.",
        bestTime: "Year-round", image: "wiki:Willemstad", more: ["Queen Emma Bridge"] }
    ]
  },
  {
    id: "060", name: "Bermuda", region: "North America", soundProfile: "ocean",
    summary: "Pink-sand coves, pastel cottages with white roofs, and an old colonial town.",
    hero: "wiki:Horseshoe Bay, Bermuda",
    places: [
      { name: "Horseshoe Bay", pics: ["vvumw", "vvums", "27c2xj", "onsx4", "onsxg", "onsx8", "onswf"], add: ["zq3bcq", "o4yb8v"], lat: 32.2522, lng: -64.8217, category: "Beach", sound: "ocean", zoom: 13,
        tagline: "Pink sand on the south shore",
        description: "On Bermuda's south shore, Horseshoe Bay is a curve of pink-tinted sand between rocky headlands, and trails lead along the coast to smaller coves. Bermuda's houses are painted in pastel colours with stepped white limestone roofs, built to catch rainwater, since the island has no rivers.",
        bestTime: "May–Oct", image: "wiki:Horseshoe Bay, Bermuda" },
      { name: "St. George's", pics: ["eo4ws", "25lseo", "vbc5m", "vbbzr", "23m2pd", "vbc2r", "xfill"], add: ["1wwq6ye", "c9b5ci"], skip: ["m7oid5"], lat: 32.3794, lng: -64.6778, category: "Historical", sound: "ocean", zoom: 14,
        tagline: "The oldest English town in the New World",
        description: "Founded in 1612, St. George's is the oldest continuously inhabited English town in the New World, and with its forts it is a UNESCO World Heritage Site. Its narrow lanes hold St. Peter's Church, the oldest Anglican church in continuous use outside the British Isles.",
        bestTime: "May–Oct", image: "wiki:St. George's, Bermuda" }
    ]
  },
  {
    id: "136", name: "Cayman Islands", region: "Caribbean", soundProfile: "ocean",
    summary: "Calm turquoise water, a long coral-sand beach, and stingrays on a sandbar.",
    hero: "wiki:Seven Mile Beach, Grand Cayman",
    places: [
      { name: "Grand Cayman", pics: ["5wtjy", "36ytdn", "fn53k", "36ytdm", "x0w24", "2r8g08", "24de0l", "2y5ot1", "xvk2y", "4522t"], add: ["1h7lv5i", "ozhthm", "1t965g8", "1yghs2n"], lat: 19.3500, lng: -81.3833, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "Seven Mile Beach and Stingray City",
        description: "Seven Mile Beach is a long crescent of coral sand on the west coast of Grand Cayman, public along its whole length. Out in the North Sound, at Stingray City, southern stingrays gather over shallow sandbars, and you can stand in the water among them. The islands are among the Caribbean's top dive destinations.",
        bestTime: "Dec–Apr", image: "wiki:Seven Mile Beach, Grand Cayman", more: ["Stingray City, Grand Cayman"] }
    ]
  },
  {
    id: "796", name: "Turks and Caicos Islands", region: "Caribbean", soundProfile: "ocean", aka: ["Turks and Caicos"],
    summary: "Glowing turquoise shallows and some of the finest beaches in the Caribbean.",
    hero: "wiki:Providenciales",
    places: [
      { name: "Grace Bay", pics: ["38moj1", "38moj0", "4zp8b", "witsv", "38moj4", "1kmezl", "wh3gn"], add: ["1i8896g", "1b70b23", "bzdtrg"], skip: ["342ad1", "hi9f2l", "18sr02f", "1bpy9el"], lat: 21.8000, lng: -72.1700, category: "Beach", sound: "ocean", zoom: 12,
        tagline: "Powder sand and a barrier reef",
        description: "Grace Bay on Providenciales is a long, powder-white beach on water so clear and shallow it glows turquoise, protected by a barrier reef offshore. Princess Alexandra National Park protects the reef and the small cays nearby.",
        bestTime: "Dec–Apr", image: "wiki:Providenciales" }
    ]
  },
  {
    id: "092", name: "British Virgin Islands", region: "Caribbean", soundProfile: "ocean", aka: ["BVI"],
    summary: "A sailors' archipelago of calm channels, and giant granite boulders on the beach.",
    hero: "wiki:The Baths",
    places: [
      { name: "The Baths", pics: ["244ay0", "244ay2", "r8obg", "16am58", "t7yyg", "t7zfn", "t7y8o"], add: ["1a453ua"], lat: 18.4294, lng: -64.4454, category: "Beach", sound: "ocean", zoom: 14,
        tagline: "Grottoes among giant boulders",
        description: "On Virgin Gorda, enormous granite boulders lie piled along the beach, forming grottoes, tunnels and sheltered pools that you wade and squeeze through on the way to Devil's Bay. The calm channels between the islands make the BVI one of the world's favourite places to sail.",
        bestTime: "Dec–Apr", image: "wiki:The Baths" }
    ]
  },
  {
    id: "850", name: "U.S. Virgin Islands", region: "Caribbean", soundProfile: "ocean", aka: ["US Virgin Islands", "USVI"],
    summary: "Coral reefs and national park beaches on three small islands.",
    hero: "wiki:Trunk Bay",
    places: [
      { name: "Trunk Bay", pics: ["23jyla", "m80gv", "fnrjt", "1351h2", "1339ov", "26knm1", "1351hf", "43ilj", "43il7", "inkx3"], add: ["l3xk7p", "1lert7s", "a3yag8"], lat: 18.3525, lng: -64.7697, category: "Beach", sound: "ocean", zoom: 14,
        tagline: "An underwater trail",
        description: "Trunk Bay on St. John is a curve of white sand inside Virgin Islands National Park, which covers about 60 percent of the island. An underwater snorkel trail, with signs on the seabed, leads around Trunk Cay just offshore.",
        bestTime: "Dec–Apr", image: "wiki:Trunk Bay" }
    ]
  },
  {
    id: "534", name: "Sint Maarten", region: "Caribbean", soundProfile: "ocean", aka: ["Saint Martin", "St Maarten"],
    summary: "Half of a two-nation island, famous for planes landing just over the beach.",
    hero: "wiki:Maho Beach",
    places: [
      { name: "Maho Beach", pics: ["54suo", "18ls8", "1k8w55", "13v9kz", "2xq94o", "13v9f5", "13v9hj", "13im62"], lat: 18.0392, lng: -63.1203, category: "Beach", sound: "ocean", zoom: 14,
        tagline: "Jets just over your head",
        description: "At Maho Beach, planes landing at Princess Juliana International Airport pass only a few dozen metres above the sand, and crowds gather to watch the big jets come in. The island is shared by the Netherlands and France, and the capital, Philipsburg, sits on a wide bay with a busy beachfront boardwalk.",
        bestTime: "Dec–Apr", image: "wiki:Maho Beach", more: ["Philipsburg, Sint Maarten"] }
    ]
  },
  /* ---------- Middle East, Caucasus & Central Asia ---------- */
  {
    id: "275", name: "Palestine", region: "Middle East", soundProfile: "temple", aka: ["West Bank", "Palestinian territories"],
    summary: "The town of the Nativity, and one of the oldest cities on Earth in the Jordan Valley.",
    hero: "wiki:Church of the Nativity",
    places: [
      { name: "Bethlehem", pics: ["1gve1v", "1iz052", "wfa8g", "soqx0", "1cj222"], add: ["1dni9lb", "u6l0j3"], skip: ["1hqkx1f", "1v4e3q4", "1h8ojq1", "3sfoct", "zxpqj8", "1j954jr", "m2pt9a", "q711pb", "18kzum4"], lat: 31.7044, lng: 35.2061, category: "Historical", sound: "temple", zoom: 14,
        tagline: "The Church of the Nativity",
        description: "About ten kilometres south of Jerusalem, Bethlehem is built around the Church of the Nativity, revered as the birthplace of Jesus and one of the oldest major churches in the Holy Land; it is a UNESCO World Heritage Site. Manger Square fills with pilgrims at Christmas, and the old town climbs the hillside above it.",
        bestTime: "Mar–May", image: "wiki:Bethlehem", more: ["Church of the Nativity"] },
      { name: "Jericho", pics: ["dplxe", "26mlt"], add: ["qul3ba", "1ht6rij"], lat: 31.8561, lng: 35.4631, category: "Historical", sound: "desert", zoom: 13,
        tagline: "One of the oldest cities in the world",
        description: "In the Jordan Valley below sea level, Jericho is among the oldest cities in the world, with excavations at Tell es-Sultan reaching back more than 10,000 years. A cable car climbs to the Monastery of the Temptation, clinging to a cliff above the palm-filled oasis.",
        bestTime: "Nov–Apr", image: "wiki:Jericho" }
    ]
  },
  {
    id: "760", name: "Syria", region: "Middle East", soundProfile: "desert",
    summary: "One of the oldest cities on Earth, a Crusader castle, and the ruins of a desert caravan city.",
    hero: "wiki:Krak des Chevaliers",
    places: [
      { name: "Damascus", pics: ["64jhm", "1q33yu", "1nctoa", "1ncswh", "1nctnx", "7cyn6", "1ncsvj", "1ncsvp", "1do21q"], add: ["1m3etwm"], skip: ["45h813", "buosi1"], lat: 33.5131, lng: 36.2919, category: "Historical", sound: "city",
        tagline: "The oldest capital",
        description: "Often called the oldest continuously inhabited capital in the world, Damascus has an old walled city of covered souks, courtyard houses and the Umayyad Mosque, one of the oldest and largest mosques anywhere. The Souq al-Hamidiyah, under a high iron roof, leads straight to its doors.",
        bestTime: "Mar–May", image: "wiki:Damascus", more: ["Umayyad Mosque"] },
      { name: "Palmyra", pics: ["6280a", "6rohf", "77bnc", "78pop", "1tbi2i", "1tbi1s"], add: ["1cnt6bj", "1pigzkc", "lmehye"], skip: ["aihar9", "2aidy4"], lat: 34.5504, lng: 38.2698, category: "Historical", sound: "desert", zoom: 13,
        tagline: "A caravan city in the desert",
        description: "An oasis city that grew rich on caravan trade in Roman times, Palmyra left long colonnaded streets, temples and tower tombs in the desert. Islamic State fighters deliberately destroyed several of its monuments in 2015, including the Temple of Bel and the Arch of Triumph, but much of the site still stands.",
        bestTime: "Mar–May", image: "wiki:Palmyra" },
      { name: "Krak des Chevaliers", pics: ["a3f7s", "6h8ji", "1nd3kw", "6evps", "6evnv", "gvug6"], add: ["1w3s5b8", "1sb4pkb", "1lkoz2j", "4e5u3x"], skip: ["oikovt", "d2hyri", "9ngy7u"], lat: 34.7569, lng: 36.2947, category: "Historical", sound: "mountains", zoom: 14,
        tagline: "The great Crusader castle",
        description: "Held by the Knights Hospitaller in the 12th and 13th centuries, Krak des Chevaliers is one of the best-preserved medieval castles in the world, with two rings of walls on a hilltop above the Homs Gap. It was damaged during the civil war and has been partly restored. It is a UNESCO World Heritage Site.",
        bestTime: "Mar–May", image: "wiki:Krak des Chevaliers" }
    ]
  },
  {
    id: "368", name: "Iraq", region: "Middle East", soundProfile: "desert",
    summary: "The ruins of Babylon, a citadel lived on for thousands of years, and the reed marshes of the south.",
    hero: "wiki:Babylon",
    places: [
      { name: "Babylon", pics: ["1xatxk", "175ygu", "175yh8", "sxlck", "1xatx4", "17blke", "l7oes"], add: ["1egsfn4"], skip: ["1cz8f0h", "t2119w", "1ibzn0f", "1u8qgdi", "sbx9aw"], lat: 32.5425, lng: 44.4211, category: "Historical", sound: "desert", zoom: 13,
        tagline: "The city of Hammurabi and Nebuchadnezzar",
        description: "About 85 kilometres south of Baghdad, on the Euphrates, lie the ruins of Babylon, capital of Hammurabi and of Nebuchadnezzar II. Mud-brick walls, a replica of the blue Ishtar Gate and a palace partly rebuilt in the 1980s stand on the site. It became a UNESCO World Heritage Site in 2019.",
        bestTime: "Nov–Mar", image: "wiki:Babylon" },
      { name: "Erbil Citadel", pics: ["15civt", "203a17", "13ifmm", "21r90p", "1tx4oh", "1t4o8i", "1tx4na"], add: ["3cwkkn", "1rpo5qm", "zs17wf"], lat: 36.1910, lng: 44.0090, category: "Historical", sound: "city", zoom: 15,
        tagline: "A hilltop lived on for millennia",
        description: "In the Kurdistan Region, the Citadel of Erbil sits on a high mound in the middle of the city, and people have lived on it for at least 6,000 years, making it one of the oldest continuously inhabited places in the world. Its ring of houses forms a wall above the bazaar below. It is a UNESCO World Heritage Site.",
        bestTime: "Mar–May", image: "wiki:Citadel of Erbil", more: ["Erbil"] },
      { name: "Mesopotamian Marshes", pics: ["2lx52h", "2lx52a", "1kpsil", "3be1pp", "2lx50o", "1v3uag", "15nm8v"], add: ["ufgk8g"], skip: ["13ym6vx", "yavvyd", "1eyhpma"], lat: 31.0000, lng: 47.0000, category: "Nature", sound: "ocean", zoom: 9,
        tagline: "Reed houses and narrow boats",
        description: "Between the Tigris and Euphrates in the south, these vast wetlands of reeds and channels are home to the Marsh Arabs, who build arched houses entirely of reeds and travel by narrow boats. Drained in the 1990s, they were partly reflooded after 2003 and are now a UNESCO World Heritage Site, though drought threatens them again.",
        bestTime: "Nov–Mar", image: "wiki:Mesopotamian Marshes", more: ["Ahwar of Southern Iraq"] }
    ]
  },
  {
    id: "364", name: "Iran", region: "Middle East", soundProfile: "temple",
    summary: "Blue-tiled mosques, the ruins of Persepolis, and desert cities of wind towers.",
    hero: "wiki:Naqsh-e Jahan Square",
    places: [
      { name: "Isfahan", pics: ["9lcib", "ftbj", "4c05z", "1ketcs"], add: ["12jo3th", "2xp0bi", "1df4004", "7ax6uv"], lat: 32.6525, lng: 51.6747, category: "Historical", sound: "temple",
        tagline: "Half the world",
        description: "Isfahan's Naqsh-e Jahan Square, laid out around 1600 by Shah Abbas I, is one of the largest city squares in the world, framed by the blue-tiled Shah Mosque, the Sheikh Lotfollah Mosque and the Ali Qapu palace. Old arched bridges such as Si-o-se-pol cross the Zayandeh River, where people gather in the evenings.",
        bestTime: "Mar–May", image: "wiki:Naqsh-e Jahan Square", wiki: "Isfahan", more: ["Si-o-se-pol", "Sheikh Lotfollah Mosque"] },
      { name: "Persepolis", pics: ["2mgbdf", "2mgbdp", "v00z4", "uzz80", "v00zk", "1uw4m3", "17qjkm"], add: ["4ps3og", "1x3hkwc", "wnvbkd"], skip: ["bz1cl2"], lat: 29.9350, lng: 52.8900, category: "Historical", sound: "desert", zoom: 14,
        tagline: "The ceremonial capital of Persia",
        description: "Founded by Darius the Great around 518 BC, Persepolis was the ceremonial capital of the Achaemenid Persian Empire. Its terrace still holds great columns, gateways guarded by winged bulls, and staircases carved with processions of delegations bringing gifts from across the empire. Alexander the Great burned it in 330 BC.",
        bestTime: "Mar–May", image: "wiki:Persepolis" },
      { name: "Shiraz", pics: ["1cza5n", "1d4c30", "v06uj", "1i8s9z"], add: ["1deo106", "b4dqbe", "pbl7rn", "1idn374"], lat: 29.6103, lng: 52.5311, category: "City", sound: "city",
        tagline: "City of poets and gardens",
        description: "Shiraz is the city of the poets Hafez and Saadi, whose tombs in garden settings are visited by Iranians who come to read their verses. In the morning, sunlight streams through the stained-glass windows of the Nasir al-Mulk Mosque and scatters colour across its carpets. Persepolis is about an hour's drive away.",
        bestTime: "Mar–May", image: "wiki:Shiraz", more: ["Nasir-ol-Molk Mosque", "Tomb of Hafez"] },
      { name: "Yazd", pics: ["13zrvu", "v09yl", "xfvbw", "v09yd", "ma5ii", "v09eu", "1gsex7"], add: ["ibuab7", "yaymk5", "1tvr382", "1e03vq0"], lat: 31.8972, lng: 54.3675, category: "Historical", sound: "desert",
        tagline: "A desert city of wind towers",
        description: "Yazd is a desert city of mud-brick lanes and badgirs, wind towers that funnel cool air down into houses. Its historic centre is a UNESCO World Heritage Site, and it is a centre of the Zoroastrian faith, with a fire temple in town and the Towers of Silence on hills outside it.",
        bestTime: "Mar–May", image: "wiki:Yazd" }
    ]
  },
  {
    id: "414", name: "Kuwait", region: "Middle East", soundProfile: "city",
    summary: "A Gulf capital of striking water towers, an old souq and a long seafront.",
    hero: "wiki:Kuwait Towers",
    places: [
      { name: "Kuwait City", pics: ["2gd45t", "2ga3ka", "1ehdqk", "2ga3k8"], add: ["ivfv5p", "1vwzq41", "lffpo", "l5m3c6"], skip: ["zv2ux5"], lat: 29.3750, lng: 47.9800, category: "City", sound: "city",
        tagline: "The Kuwait Towers",
        description: "Kuwait City's skyline is marked by the Kuwait Towers, three slender towers on a point in the Gulf, opened in 1979, two of them carrying spheres covered in blue-green discs. The seafront corniche runs for kilometres past beaches, and Souq Al-Mubarakiya is one of the oldest markets in the country.",
        bestTime: "Nov–Mar", image: "wiki:Kuwait Towers", wiki: "Kuwait City" }
    ]
  },
  {
    id: "634", name: "Qatar", region: "Middle East", soundProfile: "desert",
    summary: "A futuristic skyline on a crescent bay, an old market of spices and falcons, and dunes that meet the sea.",
    hero: "wiki:Doha",
    places: [
      { name: "Doha", pics: ["iestu", "hi56k", "2g0405", "hgvvp", "2ro5uu"], add: ["pwajwh", "xl7w2k", "9tpwwn", "1qaz98r"], lat: 25.2861, lng: 51.5294, category: "City", sound: "city",
        tagline: "Glass towers and an old souq",
        description: "Doha's skyline of glass towers rises around a crescent bay, with the seven-kilometre Corniche promenade curving along the water. Souq Waqif, rebuilt in traditional style, sells spices, textiles and falcons, and there is even a hospital just for falcons nearby.",
        bestTime: "Nov–Mar", image: "wiki:Doha", more: ["Souq Waqif"] },
      { name: "Khor Al Adaid", pics: ["1fyu7a", "invih", "1e5kn8", "j5w7v", "1e5kn9", "1e5kna", "1e5kng", "1e5knj"], lat: 24.6300, lng: 51.2960, category: "Nature", sound: "desert", zoom: 11,
        tagline: "Where the desert meets the sea",
        description: "In the far southeast, on the border with Saudi Arabia, tall sand dunes roll down to a tidal inlet of the Gulf known as the Inland Sea, one of the few places in the world where the sea reaches deep into a sand desert. It is reached by 4x4 across the dunes.",
        bestTime: "Nov–Mar", image: "wiki:Khor Al Adaid" }
    ]
  },
  {
    id: "048", name: "Bahrain", region: "Middle East", soundProfile: "ocean",
    summary: "An island kingdom of ancient forts, pearl-diving heritage and a modern skyline.",
    hero: "wiki:Qal'at al-Bahrain",
    places: [
      { name: "Manama", pics: ["n9r8n", "vp1ww", "25vd90", "2id18e", "2o2xip"], add: ["1ab33to", "j79akz", "jjoe81"], lat: 26.2167, lng: 50.5833, category: "City", sound: "city",
        tagline: "Dilmun's fort and a pearling past",
        description: "On the edge of Manama, Qal'at al-Bahrain sits on a mound built up by settlements from about 2300 BC onward; it was once the capital of the ancient Dilmun civilisation and is a UNESCO World Heritage Site. Bahrain's pearl-diving heritage is listed too, and the capital mixes a modern skyline with its old souq around Bab Al Bahrain.",
        bestTime: "Nov–Mar", image: "wiki:Qal'at al-Bahrain", wiki: "Manama" }
    ]
  },
  {
    id: "887", name: "Yemen", region: "Middle East", soundProfile: "desert",
    summary: "An island of strange trees, mud-brick skyscrapers in the desert, and one of the oldest cities in Arabia.",
    hero: "wiki:Socotra",
    places: [
      { name: "Socotra", pics: ["myy4r", "2et4qc", "36f8z2", "3awn1r", "myy5p"], add: ["56qkxl", "10wdkvg", "xbz41z", "8mmuxw"], skip: ["1lgd6xj"], lat: 12.5100, lng: 53.9200, category: "Nature", sound: "ocean", zoom: 9,
        tagline: "The island of dragon's blood trees",
        description: "Isolated in the Arabian Sea, Socotra has so many unique plants, about a third of its species found nowhere else, that it is often called the most alien-looking place on Earth. Umbrella-shaped dragon's blood trees grow on the Diksam Plateau, and white sand dunes meet turquoise lagoons along the coast. It is a UNESCO World Heritage Site.",
        bestTime: "Oct–Apr", image: "wiki:Socotra", more: ["Dracaena cinnabari"] },
      { name: "Old City of Sana'a", pics: ["ymi5i", "ymi58", "ymi5f", "p2s4j", "1ga13x", "1mjcfj", "jqwiz", "3aoixz", "1mjcfi", "1mjcf9"], lat: 15.3539, lng: 44.2144, category: "Historical", sound: "temple", zoom: 14,
        tagline: "Tower houses trimmed in white",
        description: "Inhabited for more than 2,500 years, the Old City of Sana'a is a dense cluster of tower houses of rammed earth and brick, their facades decorated with white gypsum patterns around the windows. It is a UNESCO World Heritage Site, listed as in danger since 2015 because of the war.",
        bestTime: "Oct–Apr", image: "wiki:Old City of Sanaa" },
      { name: "Shibam", pics: ["v2xa", "379jch", "ymi71", "1twn0v", "1gwa5c", "1gwa4e"], add: ["vn181z", "iea4oe"], lat: 15.9269, lng: 48.6267, category: "Historical", sound: "desert", zoom: 14,
        tagline: "The Manhattan of the desert",
        description: "In the Hadramaut valley, Shibam's walled town of mud-brick tower houses, some up to eleven storeys high, rises straight out of the desert floor, earning it the name the Manhattan of the desert. Most of the buildings date from the 16th century. It is a UNESCO World Heritage Site.",
        bestTime: "Oct–Apr", image: "wiki:Shibam" }
    ]
  },
  {
    id: "268", name: "Georgia", region: "Asia", soundProfile: "mountains",
    summary: "A capital of carved balconies and sulphur baths, and churches against Caucasus peaks.",
    hero: "wiki:Gergeti Trinity Church",
    places: [
      { name: "Tbilisi", pics: ["v4d2j", "1m8802", "1uvdy0", "tewuj"], add: ["vkhypc", "1uloz8q", "ggk7v0"], skip: ["1yfbxie"], lat: 41.7225, lng: 44.7925, category: "City", sound: "city",
        tagline: "Balconies, baths and a hilltop fortress",
        description: "Tbilisi climbs the hills on both banks of the Kura River, with old houses wrapped in carved wooden balconies, domed sulphur baths in the Abanotubani quarter, and the Narikala fortress on the ridge above. A cable car swings up to the fortress for the view over the old town.",
        bestTime: "May–Oct", image: "wiki:Tbilisi", more: ["Narikala"] },
      { name: "Kazbegi", pics: ["1xnh65", "2jg17b", "1bktgm", "2jg18m", "uk9yd", "1xnh6d", "1xnh6g", "12ae45", "2f2ofc", "1duzid", "1xnp1c"], add: ["ywr9ql", "10nwir8", "gnawd7"], lat: 42.6624, lng: 44.6205, category: "Mountain", sound: "mountains", zoom: 11,
        tagline: "A church beneath a glacier peak",
        description: "About three hours north of Tbilisi on the Georgian Military Road, the 14th-century Gergeti Trinity Church stands alone on a ridge at 2,170 metres beneath the glaciers of Mount Kazbek, which rises to more than 5,000 metres. The village of Stepantsminda below is the base for hikes into the valleys.",
        bestTime: "Jun–Sep", image: "wiki:Gergeti Trinity Church", wiki: "Stepantsminda", more: ["Mount Kazbek"] },
      { name: "Svaneti", pics: ["11g21b", "e2zld", "18zcma", "11g21c", "bblhs", "1r6015", "1r6075"], add: ["1nqcf4o", "13b2kj9", "6enrg", "4dijh1"], skip: ["1cfyap3"], lat: 42.9178, lng: 43.0157, category: "Mountain", sound: "mountains", zoom: 10,
        tagline: "Medieval towers in the high Caucasus",
        description: "High in the Caucasus, Svaneti's villages are guarded by medieval stone towers built by families for defence. Ushguli, at about 2,100 metres one of the highest permanently inhabited settlements in Europe, sits beneath Shkhara, Georgia's highest peak. Mestia is the main town and the start of multi-day hikes between villages.",
        bestTime: "Jun–Sep", image: "wiki:Ushguli", wiki: "Svaneti", more: ["Mestia"] }
    ]
  },
  {
    id: "051", name: "Armenia", region: "Asia", soundProfile: "temple",
    summary: "Ancient monasteries on cliff edges, a classical temple, and Mount Ararat filling the sky.",
    hero: "wiki:Tatev Monastery",
    places: [
      { name: "Yerevan", pics: ["jclx4", "36p8n3", "2cm399", "v8yy0"], add: ["l105qx", "1fzqxg5"], skip: ["1g5hl66", "1qg4owl", "muxvfb", "1tg7g4h", "17a3wxt", "uabwm1", "qjjzcg", "1fm4u55", "14hrkma", "gv9kxj"], lat: 40.1814, lng: 44.5144, category: "City", sound: "city",
        tagline: "A pink-stone city facing Ararat",
        description: "Yerevan, one of the oldest continuously inhabited cities in the world, is built largely of pink volcanic tuff. From the top of the Cascade, a giant stairway of terraces, Mount Ararat fills the horizon on clear days, across the border in Turkey. Republic Square comes alive in the evenings around its fountains.",
        bestTime: "May–Oct", image: "wiki:Yerevan", more: ["Yerevan Cascade", "Mount Ararat"] },
      { name: "Tatev Monastery", pics: ["1cr2ft", "q9ejl", "186jvh"], add: ["1sb3tlm", "1abf0o7", "4be69w", "8e3pno"], lat: 39.3794, lng: 46.2500, category: "Historical", sound: "temple", zoom: 13,
        tagline: "A monastery on the edge of a gorge",
        description: "This 9th-century monastery stands on the edge of the deep gorge of the Vorotan River in southern Armenia. It is reached by the Wings of Tatev, one of the longest cable cars in the world, which floats across the gorge for about 5.7 kilometres.",
        bestTime: "May–Oct", image: "wiki:Tatev Monastery", more: ["Wings of Tatev"] },
      { name: "Garni & Geghard", pics: ["v8bpz", "2ay1bh", "6zeru"], add: ["1eak48x", "4833gg"], skip: ["1hx4c10"], lat: 40.1405, lng: 44.8186, category: "Historical", sound: "temple", zoom: 12,
        tagline: "A classical temple and a monastery cut into rock",
        description: "Half an hour from Yerevan, the Garni Temple is a Greco-Roman colonnaded temple perched above a gorge whose walls are lined with hexagonal basalt columns. Further up the valley, the monastery of Geghard is partly carved straight into the mountain, with chapels cut from solid rock. Geghard is a UNESCO World Heritage Site.",
        bestTime: "May–Oct", image: "wiki:Garni Temple", more: ["Geghard"] }
    ]
  },
  {
    id: "031", name: "Azerbaijan", region: "Asia", soundProfile: "city",
    summary: "A walled old city beneath glass flame towers, bubbling mud volcanoes, and a silk-road town in the Caucasus foothills.",
    hero: "wiki:Flame Towers",
    places: [
      { name: "Baku", pics: ["16iikc", "loa3p", "2hy871", "3cnnld"], add: ["ls9dhx", "1bzl9n1", "b5evt3", "7015a"], lat: 40.3667, lng: 49.8352, category: "City", sound: "city",
        tagline: "An old city under flame towers",
        description: "Baku is the lowest-lying capital in the world, 28 metres below sea level on the Caspian. Its walled Old City, with the Maiden Tower and the Palace of the Shirvanshahs, is a UNESCO World Heritage Site, and above it rise the three Flame Towers, whose facades light up as moving flames at night. A long seaside boulevard follows the bay.",
        bestTime: "Apr–Jun", image: "wiki:Baku", more: ["Old City (Baku)", "Flame Towers"] },
      { name: "Gobustan", pics: ["2ome0w", "2ome0x", "xeg7d", "szuxv", "vl28g", "vl284", "vl289", "2okg9o"], add: ["ldmkgu", "12r580u", "jrpbhe"], skip: ["6g95c"], lat: 40.1056, lng: 49.3889, category: "Historical", sound: "desert", zoom: 12,
        tagline: "Rock carvings and mud volcanoes",
        description: "About 70 kilometres southwest of Baku, Gobustan has more than 6,000 rock carvings of people, animals and boats, the oldest tens of thousands of years old, and is a UNESCO World Heritage Site. Nearby, small mud volcanoes bubble and spit grey mud; Azerbaijan has one of the highest concentrations of mud volcanoes in the world.",
        bestTime: "Apr–Jun", image: "wiki:Gobustan State Historical and Cultural Reserve" },
      { name: "Sheki", pics: ["283erd", "1b9czv", "owqde", "1i0aaq", "poi6k", "2i1d61"], add: ["1xhalsz", "185il1o", "7mjfvz"], lat: 41.1919, lng: 47.1706, category: "Historical", sound: "mountains", zoom: 13,
        tagline: "A silk-road town in the foothills",
        description: "In the green foothills of the Greater Caucasus, Sheki was a stop on the Silk Road. The 18th-century Palace of the Sheki Khans is covered in painted walls and windows of tiny stained-glass pieces fitted without nails or glue, and an old caravanserai still takes guests. The historic centre is a UNESCO World Heritage Site.",
        bestTime: "May–Oct", image: "wiki:Shaki, Azerbaijan" }
    ]
  },
  {
    id: "398", name: "Kazakhstan", region: "Asia", soundProfile: "mountains",
    summary: "A green city under snowy peaks, a red-rock canyon, and a futuristic capital on the steppe.",
    hero: "wiki:Charyn Canyon",
    places: [
      { name: "Almaty", pics: ["gopxb", "1rfdj", "2iwyf", "1zcm23"], add: ["v12tst", "b8iqpe", "1tttsv3", "gv57q9"], skip: ["11v69b4", "1vejzju", "nu8l43", "uli30y", "p2bhm1", "1k5kt6v", "9f3doh", "lp04gy", "qjzdk4"], lat: 43.2400, lng: 76.9150, category: "City", sound: "mountains",
        tagline: "A city at the foot of the Tian Shan",
        description: "Kazakhstan's largest city lies at the foot of the snow-capped Trans-Ili Alatau, with leafy avenues and mountain views at the end of every street. A cable car rises to Kok-Tobe hill, and within an hour you can be at the Medeu ice rink, the Shymbulak ski area or turquoise Big Almaty Lake at 2,500 metres.",
        bestTime: "May–Sep", image: "wiki:Almaty", more: ["Big Almaty Lake", "Medeu"] },
      { name: "Charyn Canyon", pics: ["280jn7", "1z73x8", "1na85l", "1na84n", "2d5fca", "2d5fc2", "1na879", "1na86c", "1na842", "1na850"], add: ["hyhhvf", "adqmp0", "jj4mrd", "1jf3rcs", "1558mfq"], lat: 43.3619, lng: 79.0906, category: "Nature", sound: "desert", zoom: 11,
        tagline: "The Valley of Castles",
        description: "About 200 kilometres east of Almaty, near the Chinese border, the Charyn River has carved a canyon of red and orange rock towers. Its most famous stretch, the Valley of Castles, is a walkable gorge between sculpted cliffs, often compared to a smaller Grand Canyon.",
        bestTime: "May–Sep", image: "wiki:Charyn Canyon" },
      { name: "Astana", pics: ["37j1o8", "2ifd6h", "2iimrw", "1a33rf", "1zmbrt"], add: ["bgypj8", "18pb1fe", "6w83mo"], skip: ["1fdnokr", "weon2n", "i0t5sm", "13u49vf", "lkgm1r", "c5y4na", "grkoix", "fx8xaf", "vnxqls", "1btqlz2", "1a7zht"], lat: 51.1333, lng: 71.4333, category: "City", sound: "city",
        tagline: "A futuristic capital on the steppe",
        description: "Kazakhstan's capital since 1997, Astana was built up on the northern steppe with bold modern architecture: the Bayterek tower topped by a golden sphere, the giant tent-shaped Khan Shatyr, and a glass pyramid, the Palace of Peace and Reconciliation, designed by Norman Foster.",
        bestTime: "Jun–Sep", image: "wiki:Astana", more: ["Baiterek (monument)", "Khan Shatyr Entertainment Center"] }
    ]
  },
  {
    id: "417", name: "Kyrgyzstan", region: "Asia", soundProfile: "mountains",
    summary: "Mountain lakes, nomad yurts on summer pastures, and the peaks of the Tian Shan.",
    hero: "wiki:Song-Köl",
    places: [
      { name: "Issyk-Kul", pics: ["2d6htl", "2gz2j7", "2gpce3", "187su5", "187suh"], add: ["wgd4j8", "zx61vj", "pgkqcu", "1r4hvfp"], skip: ["1cfyap3"], lat: 42.4167, lng: 77.2500, category: "Nature", sound: "mountains", zoom: 9,
        tagline: "The lake that never freezes",
        description: "Ringed by the snowy Tian Shan, Issyk-Kul is one of the largest mountain lakes in the world, at 1,607 metres, and so deep and slightly salty that it never freezes, which gave it its name, 'warm lake'. Beaches line the north shore, and the town of Karakol in the east is the base for treks into the mountains.",
        bestTime: "Jun–Sep", image: "wiki:Issyk-Kul", more: ["Karakol"] },
      { name: "Song-Köl", pics: ["1a7m8f", "2snlg", "187st3", "2ueqed", "1lz9y2", "wvi8u", "15tqvt", "15tqvq", "15tqvc", "10v401"], skip: ["66juka"], lat: 41.8500, lng: 75.1500, category: "Nature", sound: "mountains", zoom: 10,
        tagline: "Yurts on a high lake",
        description: "At 3,016 metres, Song-Köl is a broad alpine lake surrounded by summer pastures, where herders bring their horses and sheep from June to September and live in yurts. Visitors stay in yurt camps and ride across the grassland.",
        bestTime: "Jun–Sep", image: "wiki:Song-Köl" },
      { name: "Ala Archa", pics: ["2g9ntj", "3gu3v", "1dpebb", "1dya1v", "2qi9t5", "2qgqv5", "2qgqv7", "2n2p63", "2gp6fl"], add: ["sy25m0", "feyf0s", "1ol3lyx"], lat: 42.5475, lng: 74.4846, category: "Mountain", sound: "mountains", zoom: 11,
        tagline: "Glaciers half an hour from the capital",
        description: "Just 35 kilometres south of Bishkek, Ala Archa is an alpine national park of juniper forest, waterfalls and glaciers beneath peaks over 4,000 metres. A day hike climbs the gorge to the Ak-Sai waterfall, and longer routes reach the glacier.",
        bestTime: "Jun–Sep", image: "wiki:Ala-Archa Nature Park" }
    ]
  },
  {
    id: "762", name: "Tajikistan", region: "Asia", soundProfile: "mountains",
    summary: "One of the highest roads on Earth, turquoise mountain lakes and the Fann Mountains.",
    hero: "wiki:Iskanderkul",
    places: [
      { name: "Pamir Highway", pics: ["1h5rca", "2rh9cw", "zwyww", "2jwqe", "1h5mwe", "10rbqu", "1h659k", "10rbqs", "1s5ate", "1h34n7", "zwz6w"], skip: ["5xpzut", "1wv3a1e", "180vk96"], lat: 38.1700, lng: 73.9600, category: "Mountain", sound: "mountains", zoom: 8,
        tagline: "The roof of the world",
        description: "The Pamir Highway is one of the highest roads in the world, crossing the 4,655-metre Ak-Baital Pass over a moonscape plateau of high deserts and lakes. Along the way it follows the Panj River on the Afghan border, where Afghan villages are visible across the water.",
        bestTime: "Jun–Sep", image: "wiki:M41 highway" },
      { name: "Iskanderkul", pics: ["q5plu", "pr7v1", "2rvbzc", "q5plp", "1l8tkn", "2rvcmw", "1dcp62"], add: ["xhal8j", "twgyyn", "881f01", "x6to56", "djh9w1"], skip: ["1cfyap3"], lat: 39.0744, lng: 68.3683, category: "Nature", sound: "mountains", zoom: 11,
        tagline: "Alexander's lake",
        description: "A triangular glacial lake at 2,195 metres in the Fann Mountains, Iskanderkul is named after Alexander the Great, who, legend says, passed this way. Its turquoise water is ringed by bare peaks, and a waterfall plunges into a canyon nearby. The Fann Mountains around it are famous for trekking past chains of lakes.",
        bestTime: "Jun–Sep", image: "wiki:Iskanderkul", more: ["Fann Mountains"] }
    ]
  },
  {
    id: "795", name: "Turkmenistan", region: "Asia", soundProfile: "desert",
    summary: "A crater of fire in the desert, a white-marble capital, and the ruins of an ancient Silk Road oasis.",
    hero: "wiki:Darvaza gas crater",
    places: [
      { name: "Darvaza Gas Crater", pics: ["1pz596", "auahk", "6r8ho", "1az04k", "1az04f", "18h1ih", "18h1hx"], skip: ["1bwy6s"], lat: 40.2526, lng: 58.4394, category: "Nature", sound: "desert", zoom: 12,
        tagline: "The Door to Hell",
        description: "In the middle of the Karakum Desert, a collapsed crater about 70 metres wide has been burning for decades, by most accounts since 1971, fed by natural gas. At night the glowing pit, nicknamed the Door to Hell, can be seen from far across the dunes, and visitors camp beside it. The government has said it wants to put it out, and the fire has weakened in recent years.",
        bestTime: "Mar–May", image: "wiki:Darvaza gas crater" },
      { name: "Ashgabat", pics: ["powqx", "1qk7v4"], add: ["1l9u8pu", "19sy68u"], skip: ["1i56atd"], lat: 37.9500, lng: 58.3833, category: "City", sound: "city",
        tagline: "A city of white marble",
        description: "Turkmenistan's capital was rebuilt as a city of white marble, holding the record for the highest density of white-marble buildings in the world. Wide, quiet avenues lead past gold-domed monuments and fountains, with the Kopet Dag mountains behind.",
        bestTime: "Mar–May", image: "wiki:Ashgabat", more: ["Independence Monument (Turkmenistan)"] },
      { name: "Merv", pics: ["2jqacn", "a1o9d", "1hn5g9", "2e43dw", "44ivn", "1upok9"], add: ["bdtu7t"], skip: ["1cfyap3"], lat: 37.6628, lng: 62.1925, category: "Historical", sound: "desert", zoom: 12,
        tagline: "A great Silk Road city",
        description: "Near the town of Mary, the ruins of Merv span more than 4,000 years, from Bronze Age settlements to the medieval Seljuk capital, once among the largest cities in the world, until the Mongols destroyed it in 1221. The domed mausoleum of Sultan Sanjar still stands among the old walls. It is a UNESCO World Heritage Site.",
        bestTime: "Mar–May", image: "wiki:Merv" }
    ]
  },
  {
    id: "004", name: "Afghanistan", region: "Asia", soundProfile: "mountains",
    summary: "Lakes of deep blue in the Hindu Kush, and the cliffs of Bamiyan.",
    hero: "wiki:Band-e Amir National Park",
    places: [
      { name: "Band-e Amir", pics: ["bih95", "hqci9", "d8iwm", "d8isa", "d8iuq", "d8ixy", "y59mu"], add: ["e36n7", "bmoq79", "ridufr", "k7gekl"], lat: 34.8397, lng: 67.2308, category: "Nature", sound: "mountains", zoom: 11,
        tagline: "Six blue lakes in the Hindu Kush",
        description: "High in the Hindu Kush, Band-e Amir is a chain of six deep-blue lakes held back by natural walls of travertine rock. It became Afghanistan's first national park in 2009.",
        bestTime: "Jun–Sep", image: "wiki:Band-e Amir National Park" },
      { name: "Bamiyan Valley", pics: ["1tzak0", "1uyocb", "mn4sc", "1tzakj", "ymh3l", "ymh3s", "ymh3o", "ymh4b", "c6vf4"], add: ["c4avtb", "icp54l", "zfaq2r"], skip: ["1vem4hl"], lat: 34.8167, lng: 67.8167, category: "Historical", sound: "mountains", zoom: 12,
        tagline: "The empty niches of the Buddhas",
        description: "The Bamiyan Valley is lined with sandstone cliffs that once held two giant Buddha statues carved in the 6th century, which the Taliban destroyed in 2001. The empty niches, the monks' caves around them and the green valley below are a UNESCO World Heritage Site.",
        bestTime: "Jun–Sep", image: "wiki:Buddhas of Bamiyan", wiki: "Bamyan" }
    ]
  },
  {
    id: "586", name: "Pakistan", region: "Asia", soundProfile: "mountains",
    summary: "Some of the highest mountains on Earth, Mughal monuments in Lahore, and a 4,500-year-old city on the Indus.",
    hero: "wiki:Hunza Valley",
    places: [
      { name: "Hunza Valley", pics: ["17c5mr", "nuezk", "11ejjb"], add: ["4z1fqy", "kvvzb5", "1ffbbti", "z1y2as", "1vqofe6", "1ufu35w"], skip: ["rqzy9p"], lat: 36.3167, lng: 74.6500, category: "Mountain", sound: "mountains", zoom: 10,
        tagline: "Apricot blossom under 7,000-metre peaks",
        description: "In Gilgit-Baltistan, the Hunza Valley is ringed by peaks over 7,000 metres, such as Rakaposhi and Ultar Sar. The old Baltit and Altit forts look down on terraced orchards that turn pink with apricot blossom in spring, and the Karakoram Highway continues north past turquoise Attabad Lake, formed by a landslide in 2010.",
        bestTime: "Apr–Oct", image: "wiki:Hunza Valley", more: ["Baltit Fort", "Attabad Lake"] },
      { name: "Lahore", pics: ["30dqlg", "1ilin8", "1fiu0a"], add: ["d89xgk", "1tcrxf1", "1fc5lfb"], skip: ["1omo7n0", "paf6pi", "huxt3u", "1z1ub8", "b5rcpg"], lat: 31.5497, lng: 74.3436, category: "City", sound: "city",
        tagline: "The Mughal capital",
        description: "Lahore was a capital of the Mughal emperors, and its walled city holds the Lahore Fort and the Badshahi Mosque, built by Aurangzeb in the 1670s and one of the largest mosques in the world. The Wazir Khan Mosque is covered in brilliant tile mosaics, and the old bazaars and food streets are packed in the evenings.",
        bestTime: "Oct–Mar", image: "wiki:Badshahi Mosque", wiki: "Lahore", more: ["Lahore Fort", "Wazir Khan Mosque"] },
      { name: "Fairy Meadows", pics: ["t8xz7", "2sdbs", "nv91z", "159o9s", "nv2nz", "150l2i", "103h8b", "t3coj", "t27k5"], add: ["1n44yn2", "19une4h", "1gq2ku4", "rdyc33"], lat: 35.3869, lng: 74.5783, category: "Mountain", sound: "mountains", zoom: 11,
        tagline: "A meadow facing Nanga Parbat",
        description: "Reached by a jeep track and a hike, Fairy Meadows is a high pasture at about 3,300 metres with a full view of Nanga Parbat, at 8,126 metres the ninth-highest mountain in the world. Pine forest and log cabins surround the meadow, and trails lead on to the mountain's base camp.",
        bestTime: "Jun–Sep", image: "wiki:Fairy Meadows", more: ["Nanga Parbat"] },
      { name: "Mohenjo-daro", pics: ["irkrq", "irkrl", "um7p4", "um7oo", "js7v3", "kxou6", "adms3"], add: ["u48bdd", "a1shq1"], skip: ["9w7xez", "35ovxw"], lat: 27.3292, lng: 68.1389, category: "Historical", sound: "desert", zoom: 14,
        tagline: "A city of the Indus Valley",
        description: "Built around 2500 BC, Mohenjo-daro was one of the largest cities of the Indus Valley Civilisation, with a grid of streets, brick houses, covered drains and a great public bath. It was abandoned around 1700 BC and rediscovered in the 1920s. It is a UNESCO World Heritage Site.",
        bestTime: "Nov–Feb", image: "wiki:Mohenjo-daro" }
    ]
  },
  /* ---------- Asia & Pacific: the rest ---------- */
  {
    id: "158", name: "Taiwan", region: "Asia", soundProfile: "city",
    summary: "A capital of night markets and a supertall tower, a marble gorge, and old gold-mining towns in the hills.",
    hero: "wiki:Taroko National Park",
    places: [
      { name: "Taipei", pics: ["rltm5", "bgr6", "2qu6i0", "8w28u", "1bvjxg", "16xsxp", "1bbkd2", "1b0pwr"], add: ["1yvh9u6", "cjv8rl", "vw104i", "uhbvwi", "1p6yo04", "il2bk0", "dxqruk"], skip: ["zj1y3n", "1xitp1e", "1drx1a5", "wiksze", "10nst65"], lat: 25.0375, lng: 121.5625, category: "City", sound: "city",
        tagline: "Night markets under Taipei 101",
        description: "Taipei's skyline is dominated by Taipei 101, at 508 metres the world's tallest building from 2004 to 2010, and hikers climb nearby Elephant Mountain to watch it at sunset. The city is famous for its night markets, such as Shilin and Raohe, packed with food stalls, and for the hot springs of the Beitou district.",
        bestTime: "Oct–Apr", image: "file:Taipei night 2015.jpg", wiki: "Taipei", more: ["Taipei 101", "Shilin Night Market"] },
      { name: "Taroko Gorge", pics: ["5ndmd", "whndi", "yhvib", "1z0e7x", "1z0e73", "1z0e89"], add: ["4lnrea", "1ldu58o", "1fcfuaq", "blwamk", "1nbrcbd", "tp575d"], skip: ["zmqspy", "1i474td"], lat: 24.1720, lng: 121.5640, category: "Nature", sound: "mountains", zoom: 11,
        tagline: "Marble cliffs and a turquoise river",
        description: "On Taiwan's east coast, the Liwu River has carved Taroko Gorge through marble cliffs hundreds of metres high, with trails, tunnels and suspension bridges along its walls. A strong earthquake in 2024 damaged parts of the gorge, so check which trails are open before you go.",
        bestTime: "Oct–Apr", image: "wiki:Taroko National Park" },
      { name: "Jiufen", pics: ["2haiov", "2haiow", "1uspyd", "1e5afd"], add: ["f9z2ry", "1pxo0do", "dx17k8", "1ohlxoa", "125xydj", "1llx8sg", "1diopp2"], skip: ["3h2ytn"], lat: 25.1070, lng: 121.8430, category: "Historical", sound: "city", zoom: 14,
        tagline: "Lanterns on a hillside above the sea",
        description: "A former gold-mining town on a steep hillside above the sea, Jiufen is a maze of narrow stairways and old streets lined with teahouses and red lanterns, which glow at dusk. Nearby, at Shifen, people release sky lanterns along an old railway line.",
        bestTime: "Oct–Apr", image: "wiki:Jiufen" },
      { name: "Sun Moon Lake", pics: ["wz6l9", "90zu3", "1wvu78", "1grfwj", "1ipfxu", "2lh1gt"], add: ["14et2bv", "prqnnf", "1qhqrky", "1fm2m6q", "1rmvk1n", "rvc8ya", "1t4f7z"], skip: ["ngyvto", "1mzj6g5", "1e46x1h", "1swsk29", "1bz7hbf", "bunzpj"], lat: 23.8667, lng: 120.9167, category: "Nature", sound: "mountains", zoom: 12,
        tagline: "Taiwan's mountain lake",
        description: "Taiwan's largest body of water lies among forested mountains in the centre of the island, named for its shape, one part round like the sun and one curved like a crescent moon. A cycling path follows the shore, and a cable car rises to the hills above.",
        bestTime: "Oct–Apr", image: "file:Sonne-Mond-See Blick von der Ci En Pagoda auf den Sonne-Mond-See 02.jpg", wiki: "Sun Moon Lake" }
    ]
  },
  {
    id: "496", name: "Mongolia", region: "Asia", soundProfile: "mountains",
    summary: "Singing dunes in the Gobi, a deep blue lake near Siberia, and nomad camps on endless steppe.",
    hero: "wiki:Khongoryn Els",
    places: [
      { name: "Gobi Desert", pics: ["2f2t4d", "2f2tv8", "2f46cr", "2f46ck", "1kms5z", "1z7wyp"], add: ["d79uox", "i5vqij", "swlx0m", "ucwfzl", "19sjvsr"], skip: ["9u97hn", "5sdjyw"], lat: 43.7700, lng: 102.3000, category: "Nature", sound: "desert", zoom: 8,
        tagline: "Singing dunes and dinosaur cliffs",
        description: "In Gobi Gurvansaikhan National Park, the dunes of Khongoryn Els run for about 100 kilometres and rise up to 300 metres, and the sand hums as it slides, giving them the name Singing Sands. To the northeast, the red Flaming Cliffs are famous for the dinosaur eggs found there in the 1920s.",
        bestTime: "Jun–Sep", image: "wiki:Khongoryn Els", more: ["Flaming Cliffs", "Gobi Desert"] },
      { name: "Lake Khövsgöl", pics: ["3c5vh8", "3c5vh2", "2qrym", "3c5vgo", "3c5vgq", "79bca"], add: ["sb0aq6", "1i2y1nf", "gq2wzs", "3hqh9g", "1wbzu", "dqbdll", "1kbu8ix"], skip: ["547qcm", "jzjkqj", "2y8x5m", "v9ocg0", "fvn6hu", "19kyslg", "1n3mnyl"], lat: 51.1000, lng: 100.5000, category: "Nature", sound: "mountains", zoom: 9,
        tagline: "A clear lake in the taiga",
        description: "Near the Russian border, Khövsgöl is a deep, clear mountain lake ringed by larch forest, holding most of Mongolia's fresh water. Reindeer-herding Tsaatan families live in the taiga nearby, and in winter the ice grows thick enough for an ice festival on the lake.",
        bestTime: "Jun–Sep", image: "file:Khuvsgul Lake.jpg", wiki: "Lake Khövsgöl" },
      { name: "Gorkhi-Terelj", pics: ["1wlxzs", "k1qgu", "2hodpo", "1wlxz4"], add: ["1sy73cr", "opnrue", "1xmzg36", "cs69jm", "ww208v", "oh25te", "txc9dv"], skip: ["16vmjqy"], lat: 47.9500, lng: 107.4500, category: "Nature", sound: "mountains", zoom: 11,
        tagline: "Granite rocks and ger camps",
        description: "Little more than an hour from Ulaanbaatar, Terelj is a valley of granite rock formations, such as Turtle Rock, and grassy meadows with ger camps where you can stay in a felt tent and ride horses along the river.",
        bestTime: "Jun–Sep", image: "wiki:Gorkhi-Terelj National Park" }
    ]
  },
  {
    id: "408", name: "North Korea", region: "Asia", soundProfile: "city",
    summary: "A tightly controlled capital of monumental architecture, rarely visited by outsiders.",
    hero: "wiki:Pyongyang",
    places: [
      { name: "Pyongyang", pics: ["evn28", "2bytf6", "2byuq4", "2bz2mt", "1wnqsh", "cipj6", "noy70", "2bytfn"], add: ["fshe09", "1qd8ioy", "1j8p1ys", "fgctmo", "1vcy9f9", "zuvzfz", "146axa2"], skip: ["1r9944z", "1si99lx", "1sqmp3s", "1qxxcpd", "1lagdi"], lat: 39.0167, lng: 125.7475, category: "City", sound: "city",
        tagline: "Monumental and closed",
        description: "North Korea's capital is a city of wide boulevards, monumental buildings and the 105-storey Ryugyong Hotel, a pyramid-shaped tower that stood unfinished for decades. Foreign visits are only possible on tightly controlled guided tours, and tourism has been largely shut since 2020.",
        bestTime: "Apr–Oct", image: "wiki:Pyongyang", more: ["Ryugyong Hotel"] }
    ]
  },
  {
    id: "418", name: "Laos", region: "Asia", soundProfile: "temple",
    summary: "A temple town on the Mekong, turquoise waterfalls, and karst peaks above a river.",
    hero: "wiki:Luang Prabang",
    places: [
      { name: "Luang Prabang", pics: ["19eb97", "1gzyzk", "2atoer", "12s2ks", "2amx2p", "1njqvf", "1h0je6"], add: ["6iwmg5", "1vmuqzx", "8aggnk", "1ser0l6", "93si42", "1m9fooo", "5h1q7e", "11a2ekw", "q39wbb", "1mh4kx9"], skip: ["1efviob"], lat: 19.8900, lng: 102.1347, category: "Historical", sound: "temple",
        tagline: "Monks at dawn on the Mekong",
        description: "Where the Nam Khan meets the Mekong, Luang Prabang is a UNESCO-listed town of gilded temples and French colonial houses. Every dawn, saffron-robed monks walk the streets to collect alms of sticky rice, and from Mount Phousi the town glows at sunset.",
        bestTime: "Nov–Mar", image: "wiki:Luang Prabang" },
      { name: "Kuang Si Falls", pics: ["18gqx9", "2j8fmk", "2j8fmn"], add: ["mj2twq", "5ea3ig", "1ed7lt9", "1g5ju1o", "16o24it", "1oijpy7", "1qm0e1u"], lat: 19.7492, lng: 101.9917, category: "Nature", sound: "jungle", zoom: 14,
        tagline: "Turquoise pools in the forest",
        description: "About 30 kilometres from Luang Prabang, the Kuang Si Falls tumble over limestone terraces into a chain of milky turquoise pools where you can swim. A rescue centre near the entrance cares for Asiatic black bears saved from poachers.",
        bestTime: "Nov–Mar", image: "wiki:Kuang Si Falls" },
      { name: "Vang Vieng", pics: ["1ivtte", "1jqdi9", "xvz5n", "1h2faw", "26gu4v", "1njqvq", "1jd2gx"], add: ["1id5blr", "nrist7", "ng1gdg", "1f1fz32", "16k77oa", "n43q84", "a8lnbo", "ma6yb2", "hihzkb"], skip: ["1uhsqdu", "1c4aepg"], lat: 18.9267, lng: 102.4494, category: "Nature", sound: "mountains", zoom: 12,
        tagline: "Balloons over karst peaks",
        description: "On the Nam Song river, Vang Vieng is surrounded by jagged limestone peaks with caves, blue lagoons and rice fields. Hot-air balloons drift over the karst at sunrise, and kayaks and tubes float down the river.",
        bestTime: "Nov–Mar", image: "wiki:Vang Vieng" }
    ]
  },
  {
    id: "104", name: "Myanmar", region: "Asia", soundProfile: "temple",
    summary: "Thousands of temples on the plain of Bagan, a golden pagoda, and floating gardens on a highland lake.",
    hero: "wiki:Bagan",
    places: [
      { name: "Bagan", pics: ["1mmqns", "281nh8", "1fmjzt", "1mmqo1", "1c52s4", "17e3do", "16j9b4", "z1k9h", "ibgx3"], add: ["47xpt1", "56m0wi", "1gk6fqx", "2v4xsi", "v55gq6", "jwq7kr", "1pb6w0k", "5xmsn1", "1e6sn7z", "1l2l0bi"], skip: ["1tsimvj", "14715x9", "4wpyep"], lat: 21.1725, lng: 94.8600, category: "Historical", sound: "temple", zoom: 12,
        tagline: "A plain of 2,000 temples",
        description: "Capital of the Pagan Kingdom from the 9th to the 13th centuries, Bagan has more than 2,000 surviving temples and pagodas scattered across a plain beside the Irrawaddy. At dawn, hot-air balloons have traditionally drifted over the spires. It is a UNESCO World Heritage Site.",
        bestTime: "Nov–Feb", image: "wiki:Bagan" },
      { name: "Shwedagon Pagoda", pics: ["2fpc7s", "2fpc80", "2fpc7w", "2tgwv", "28jgwt"], add: ["1ul5db9", "1grs71f", "eqja63", "1qk5u2y", "1rqt5js"], skip: ["11rac9e", "6b0nu3", "1eithgj", "1av0vgn"], lat: 16.7983, lng: 96.1494, category: "Historical", sound: "temple", zoom: 15,
        tagline: "A golden spire over Yangon",
        description: "Rising about 100 metres above Yangon, the gilded Shwedagon Pagoda is the most sacred Buddhist site in Myanmar, covered in gold and crowned with thousands of diamonds. It glows at sunset, when pilgrims walk clockwise around its base.",
        bestTime: "Nov–Feb", image: "wiki:Shwedagon Pagoda" },
      { name: "Inle Lake", pics: ["1d74k2", "1hnsl7", "bspwu", "13jf9k", "22v91m", "1qpwfn"], add: ["efch20", "1tejuky", "1q1nmzw", "14ap9k4", "ir8c13", "1yvvizy", "131fk39", "b8xs3f"], skip: ["6o9eot", "zw2e1m", "in07jt", "1yvvizy", "131fk39", "b8xs3f"], lat: 20.5500, lng: 96.9167, category: "Nature", sound: "temple", zoom: 11,
        tagline: "Leg-rowing fishermen and floating gardens",
        description: "High in the Shan Hills, Inle Lake is known for its Intha fishermen, who row standing on one leg with the other wrapped around the oar, and for its floating gardens and villages on stilts. Myanmar has been in civil conflict since 2021, which has affected travel.",
        bestTime: "Nov–Feb", image: "wiki:Inle Lake" }
    ]
  },
  {
    id: "050", name: "Bangladesh", region: "Asia", soundProfile: "jungle",
    summary: "The world's largest mangrove forest, home of the Bengal tiger, and one of the longest beaches on Earth.",
    hero: "wiki:Sundarbans",
    places: [
      { name: "Sundarbans", pics: ["2yfgpl", "2yfgb9", "2yfgax", "1bkg6e"], add: ["1hv09sr", "1xfx9eb", "fkxxg5", "vvhgbr", "19k70nj", "1ij9j8h", "10dz3qq", "vxkv78", "b19n9s"], skip: ["1mucxn8", "y899p2", "156n6cm", "i7z8yd", "1b51c78", "35ovxw", "16t4p13", "rgwval"], lat: 21.9500, lng: 89.4000, category: "Nature", sound: "jungle", zoom: 9,
        tagline: "Tigers in the mangroves",
        description: "Shared with India, the Sundarbans is the largest mangrove forest in the world, a maze of tidal rivers and islands in the Ganges delta. It is home to the Bengal tiger, which swims between islands, as well as crocodiles and spotted deer, and visits are by boat. The Bangladeshi part is a UNESCO World Heritage Site.",
        bestTime: "Nov–Feb", image: "wiki:Sundarbans" },
      { name: "Cox's Bazar", pics: ["1520l8", "2aeora", "279naj", "jf3ab", "m3c7q", "mz5rt", "26zggq", "1fkz6a"], add: ["1jdxc6a", "1wrnrgw", "1cpt1z8", "1igso91", "177pfrq", "2sl7kl", "llxy17", "m0ux60"], skip: ["pwenpl", "9ktd90", "1f6rs7p", "107m3u7"], lat: 21.5833, lng: 92.0167, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "A beach 120 kilometres long",
        description: "Cox's Bazar has one of the longest natural beaches in the world, a stretch of sand running for about 120 kilometres along the Bay of Bengal. South of town, the Marine Drive follows the coast between the hills and the sea, past fishing villages toward Teknaf.",
        bestTime: "Nov–Feb", image: "wiki:Cox's Bazar" }
    ]
  },
  {
    id: "064", name: "Bhutan", region: "Asia", soundProfile: "temple",
    summary: "A monastery clinging to a cliff, fortress-monasteries in green valleys, and the high Himalaya.",
    hero: "wiki:Paro Taktsang",
    places: [
      { name: "Tiger's Nest", pics: ["13m8xw", "1dv7cd"], add: ["3pv6vt", "133byff", "1cj9eb8", "11e8elh", "dgja2i", "1y9xj7y", "1s509ac", "1gkhs18"], skip: ["19hqeqj"], lat: 27.4917, lng: 89.3633, category: "Historical", sound: "temple", zoom: 14,
        tagline: "A monastery on a cliff face",
        description: "Paro Taktsang, the Tiger's Nest, clings to a cliff about 900 metres above the Paro valley, at a cave where, legend says, Guru Rinpoche arrived on the back of a tigress in the 8th century. The hike up through pine forest takes two to three hours.",
        bestTime: "Mar–May", image: "wiki:Paro Taktsang" },
      { name: "Punakha Dzong", pics: ["e19t1", "16y8kl", "e1z57", "dli3d", "dli3e"], add: ["11ajz85", "1xhmpdm", "10n8bhu", "1q856de", "1u4mheg", "1pjp71p", "z6ub3k"], skip: ["176c8so", "1560f9i"], lat: 27.5819, lng: 89.8631, category: "Historical", sound: "temple", zoom: 14,
        tagline: "A fortress where two rivers meet",
        description: "Built in 1637–38 where two rivers meet, Punakha Dzong is a whitewashed fortress-monastery with carved wooden balconies, the second-oldest and second-largest dzong in Bhutan. In spring the jacaranda trees around it bloom purple.",
        bestTime: "Mar–May", image: "wiki:Punakha Dzong" },
      { name: "Thimphu", pics: ["2w8au", "1bzisy", "1qy7pq", "1bzog7", "1e0a4s"], add: ["plakt8", "mkiodh", "cadcmq", "q9p69j", "1x0py77", "w9o6ai"], skip: ["z8puvb", "oav7tt", "73gsgl", "mkiodh", "q9p69j"], lat: 27.4714, lng: 89.6337, category: "City", sound: "temple",
        tagline: "A capital without traffic lights",
        description: "Bhutan's capital is a small city in a forested valley, famous for having no traffic lights; a police officer directs cars at the main junction. Tashichho Dzong, a great fortress by the river, houses the government and the country's main monastic body.",
        bestTime: "Mar–May", image: "wiki:Thimphu", more: ["Tashichho Dzong"] }
    ]
  },
  {
    id: "462", name: "Maldives", region: "Asia", soundProfile: "ocean",
    summary: "Coral atolls of white sand and turquoise lagoons scattered across the Indian Ocean.",
    hero: "file:Reethi Beach Maldives.jpg",
    places: [
      { name: "Baa Atoll", pics: ["l3kye", "e8mrt", "wi7mf", "3d4rxi", "11dwno", "kmysr", "lwmxd", "ybkp5", "ybkrw"], add: ["1c3ewkh", "10tswwf", "zkzmc2", "1oo0fwv", "9m7cb5", "1tvmzwo"], lat: 5.1333, lng: 72.9500, category: "Beach", sound: "ocean", zoom: 10,
        tagline: "Atolls, lagoons and manta rays",
        description: "The Maldives are about 1,200 coral islands grouped in 26 atolls, most only a metre or two above the sea. Baa Atoll is a UNESCO Biosphere Reserve, and at Hanifaru Bay manta rays gather in large numbers to feed in the wet season. Many resorts take up an island each.",
        bestTime: "Nov–Apr", image: "file:Reethi Beach Maldives.jpg", wiki: "Baa Atoll" },
      { name: "Malé", pics: ["b8acy", "127vzn", "127vzi", "ya8xe", "39c45w", "39c45e", "39c45j"], add: ["1dfjobf"], skip: ["2vxix1"], lat: 4.1750, lng: 73.5083, category: "City", sound: "ocean", zoom: 14,
        tagline: "A capital that fills its island",
        description: "The capital packs more than 200,000 people onto about two square kilometres, one of the most densely populated cities in the world, with colourful buildings right up to the water's edge. The fish market is busy every afternoon as the tuna boats come in, and the Old Friday Mosque is built of carved coral stone.",
        bestTime: "Nov–Apr", image: "wiki:Malé" }
    ]
  },
  {
    id: "096", name: "Brunei", region: "Asia", soundProfile: "city",
    summary: "A golden-domed mosque and a great village built on stilts over the river.",
    hero: "wiki:Omar Ali Saifuddien Mosque",
    places: [
      { name: "Bandar Seri Begawan", pics: ["30ghlh", "33ye15", "2cr0pe", "33ye13", "1fzlg3", "2h7yca", "33ws09"], add: ["1r38nsi", "yipv1", "15mawsy", "13cvv67", "184f1v8", "rpxsel", "15h2yzf"], skip: ["1r87t6c", "uamyzo", "gsenrk", "1oi87e1", "u1w4p", "1iofon4", "rpxsel"], lat: 4.9167, lng: 114.9167, category: "City", sound: "city",
        tagline: "A golden dome and a water village",
        description: "Brunei's capital is dominated by the Omar Ali Saifuddien Mosque, its golden dome rising above a lagoon. Across the river, Kampong Ayer is a village of houses, schools and mosques built on stilts over the water, linked by wooden walkways and water taxis, often called the largest water village in the world.",
        bestTime: "Feb–Apr", image: "wiki:Omar Ali Saifuddien Mosque", wiki: "Bandar Seri Begawan", more: ["Kampong Ayer"] }
    ]
  },
  {
    id: "626", name: "Timor-Leste", region: "Asia", soundProfile: "ocean", aka: ["East Timor"],
    summary: "A young mountainous nation with some of the richest coral reefs on Earth.",
    hero: "wiki:Atauro",
    places: [
      { name: "Atauro Island", pics: ["1ti2rf", "2acswj", "37vr00", "200t2", "i7sjc", "2f1xhc", "37vrc6", "i7s97", "b1i76", "b1ily", "b1ils", "b1ild"], add: ["p63xd5"], skip: ["6j2caa", "6ndu64"], lat: -8.2400, lng: 125.5800, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "Reefs teeming with fish",
        description: "A boat ride north of the capital, Dili, Atauro is a quiet, mountainous island whose reefs were found by scientists to hold some of the highest numbers of reef fish species recorded anywhere. Villages offer simple homestays, and the snorkelling starts right off the beach.",
        bestTime: "May–Nov", image: "wiki:Atauro" }
    ]
  },
  {
    id: "598", name: "Papua New Guinea", region: "Oceania", soundProfile: "rainforest",
    summary: "Rainforest mountains, a wartime jungle trail, and a great river of carved spirit houses.",
    hero: "file:Flight over Owen Stanley Range.jpg",
    places: [
      { name: "Kokoda Track", pics: ["1bknct", "8zzpg", "58a5t"], lat: -9.3800, lng: 148.4000, category: "Nature", sound: "rainforest", zoom: 9,
        tagline: "A week through the Owen Stanley Range",
        description: "The Kokoda Track runs 96 kilometres over the Owen Stanley Range through steep rainforest, following the route of a 1942 battle between Japanese and mainly Australian forces. Trekkers take about a week to ten days, staying in mountain villages along the way.",
        bestTime: "Apr–Oct", image: "file:Flight over Owen Stanley Range.jpg", wiki: "Kokoda Track" },
      { name: "Sepik River", pics: ["2dirld", "2diqjl", "ukmb8", "ukmb9"], add: ["17x6kh4", "jgryyr"], skip: ["d1x66p"], lat: -3.8423, lng: 144.5389, category: "Culture", sound: "rainforest", zoom: 8,
        tagline: "Spirit houses and carvers",
        description: "The Sepik, the longest river on New Guinea, winds through swamp and rainforest past villages known for their towering spirit houses, haus tambaran, and their intricate woodcarving. Travel is by motorised canoe, and the region is known for its crocodile-skin scarification traditions.",
        bestTime: "Apr–Oct", image: "file:Sepik River IMG 2225.jpg", wiki: "Sepik" }
    ]
  },
  {
    id: "242", name: "Fiji", region: "Oceania", soundProfile: "ocean",
    summary: "Coral islands with white beaches, a rainforest Garden Island, and famous soft-coral reefs.",
    hero: "wiki:Mamanuca Islands",
    places: [
      { name: "Mamanuca & Yasawa Islands", pics: ["30jnvk", "yawui", "womxg", "ydnjf", "womxv", "fy4aw", "30jo4d", "afze1"], skip: ["1ywf2q6"], lat: -17.6667, lng: 177.0833, category: "Beach", sound: "ocean", zoom: 9,
        tagline: "Small coral islands west of Nadi",
        description: "West of Nadi, the Mamanuca Islands are a chain of small coral islands with white beaches and clear lagoons, a short boat ride from the main island. Further north, the Yasawa Islands are more remote volcanic islands with village homestays and quiet bays.",
        bestTime: "May–Oct", image: "wiki:Mamanuca Islands", more: ["Yasawa Islands"] },
      { name: "Taveuni", pics: ["2k9llf", "1ci6i6", "2l1wkz"], add: ["1uhfwdv"], skip: ["15akcz2"], lat: -16.8167, lng: 179.9667, category: "Nature", sound: "rainforest", zoom: 10,
        tagline: "The Garden Island",
        description: "Known as the Garden Island, Taveuni is covered in rainforest with waterfalls, such as the Tavoro Falls in Bouma National Heritage Park. The nearby Rainbow Reef in the Somosomo Strait is famous for its soft corals, and the 180th meridian runs across the island.",
        bestTime: "May–Oct", image: "file:Taveuni, Fiji looking toward Matagi.jpg", wiki: "Taveuni" }
    ]
  },
  {
    id: "882", name: "Samoa", region: "Oceania", soundProfile: "ocean",
    summary: "A swimming hole in an ocean trench, white beaches and open-sided beach fales.",
    hero: "file:Lalomanu Beach - Samoa.jpg",
    places: [
      { name: "Upolu", pics: ["xiayj", "1gfpvu", "1sea5m", "2osuwz", "5llw4", "5lm4z", "xhi76", "xhjwb", "569re"], add: ["ez392g", "p55bvv", "1ix6wgn", "3icrm8", "v32wyu", "1864jgg"], skip: ["1vrgt1l", "1gxemqh", "11qajic", "6se6mg", "1xso7c4"], lat: -14.0453, lng: -171.4408, category: "Beach", sound: "ocean", zoom: 10,
        tagline: "To Sua and Lalomanu",
        description: "On Samoa's main island, the To Sua Ocean Trench is a deep, sheer-sided swimming hole connected to the sea, reached by a long wooden ladder. Lalomanu beach on the southeast coast has white sand and simple open-sided fales to sleep in by the water.",
        bestTime: "May–Oct", image: "file:Lalomanu Beach - Samoa.jpg", wiki: "Upolu", more: ["Lalomanu"] }
    ]
  },
  {
    id: "776", name: "Tonga", region: "Oceania", soundProfile: "ocean",
    summary: "Humpback whales in sheltered island channels.",
    hero: "wiki:Vavaʻu",
    places: [
      { name: "Vava'u", pics: ["rvoi4", "jz034", "rvoik", "pcni", "uykus"], add: ["1xy2rrt", "6i6717"], lat: -18.6514, lng: -173.9836, category: "Beach", sound: "ocean", zoom: 10,
        tagline: "Swimming with humpback whales",
        description: "Vava'u is a group of one large island and about 40 smaller ones around a maze of sheltered channels. From July to October, humpback whales arrive from Antarctica to breed, and it is one of the few places in the world where you can swim with them.",
        bestTime: "Jul–Oct", image: "wiki:Vavaʻu" }
    ]
  },
  {
    id: "548", name: "Vanuatu", region: "Oceania", soundProfile: "ocean",
    summary: "An active volcano you can stand on the rim of, and islands of custom villages.",
    hero: "wiki:Mount Yasur",
    places: [
      { name: "Mount Yasur", pics: ["1qpkmp", "vfnlv", "vfnlo", "dpotr", "11e48w", "afzf1", "blvne", "5xvqr"], skip: ["x2j5yo", "174b3od", "1gccs0i"], lat: -19.5333, lng: 169.4417, category: "Mountain", sound: "mountains", zoom: 12,
        tagline: "A volcano at your feet",
        description: "On Tanna Island, Mount Yasur is one of the most accessible active volcanoes in the world: visitors walk up to the crater rim at dusk to watch it throw glowing lava bombs into the air. It has been erupting almost continuously for centuries.",
        bestTime: "May–Oct", image: "wiki:Mount Yasur" }
    ]
  },
  {
    id: "090", name: "Solomon Islands", region: "Oceania", soundProfile: "ocean",
    summary: "The world's largest double-barrier lagoon, carvers' villages and coral reefs.",
    hero: "file:Marovo Lagoon (16 August 2008).jpg",
    places: [
      { name: "Marovo Lagoon", pics: ["1186og", "1186ps", "1186qu"], skip: ["161o5iz"], lat: -8.4800, lng: 158.0700, category: "Beach", sound: "ocean", zoom: 10,
        tagline: "Hundreds of forested islands in a lagoon",
        description: "In the Western Province, Marovo is the largest double-barrier enclosed lagoon in the world, dotted with hundreds of forested islands. Its villages are known for woodcarving, and the reefs are excellent for snorkelling and diving.",
        bestTime: "May–Oct", image: "file:Marovo Lagoon (16 August 2008).jpg", wiki: "Marovo Lagoon" }
    ]
  },
  {
    id: "585", name: "Palau", region: "Oceania", soundProfile: "ocean",
    summary: "Mushroom-shaped limestone islands and a lake of harmless jellyfish.",
    hero: "wiki:Rock Islands",
    places: [
      { name: "Rock Islands", pics: ["ej790", "1ozun4", "1ozune", "1ifxko", "5ngyp", "1ozus1"], add: ["1altsah", "1d29fak", "nz9kcm"], skip: ["9s6uxr"], lat: 7.2500, lng: 134.3500, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "Mushroom islands and golden jellyfish",
        description: "Between 250 and 300 small limestone islands, undercut at the waterline into mushroom shapes and covered in forest, rise from Palau's Southern Lagoon. On one of them, Jellyfish Lake holds millions of golden jellyfish whose sting is too weak to feel, and you can snorkel among them. The Rock Islands are a UNESCO World Heritage Site.",
        bestTime: "Nov–Apr", image: "wiki:Rock Islands", more: ["Jellyfish Lake"] }
    ]
  },
  {
    id: "583", name: "Micronesia", region: "Oceania", soundProfile: "ocean", aka: ["Federated States of Micronesia"],
    summary: "A ruined city of basalt islets built in a lagoon.",
    hero: "wiki:Nan Madol",
    places: [
      { name: "Nan Madol", pics: ["279ify", "279idi", "1hcnji", "1hcnjl"], add: ["4xcos4"], lat: 6.8419, lng: 158.3322, category: "Historical", sound: "ocean", zoom: 14,
        tagline: "A city of stone islets",
        description: "Off the coast of Pohnpei, Nan Madol is a ruined city of nearly 100 artificial islets built of stacked basalt columns and linked by channels. It was the seat of the Saudeleur dynasty until about 1628. It is a UNESCO World Heritage Site.",
        bestTime: "Jan–Apr", image: "wiki:Nan Madol" }
    ]
  },
  {
    id: "584", name: "Marshall Islands", region: "Oceania", soundProfile: "ocean",
    summary: "Low coral atolls ringing vast lagoons in the central Pacific.",
    hero: "wiki:Majuro",
    places: [
      { name: "Majuro", pics: ["1v35al", "j5ec1", "j5ebu"], add: ["bttloe"], skip: ["1ws2363", "18zi0gu", "2wpdcs", "5w1wha", "1hl3dkr", "1c0r462", "lst7ro", "u8f7il", "npbbso", "jtvqg2", "tyhtr", "xjvjsu", "qge3t7", "1c4q8nm"], lat: 7.0918, lng: 171.3802, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "A capital on a ring of coral",
        description: "The capital is itself a coral atoll of 64 islands around a lagoon, most of them only a few metres above the sea. The Marshall Islands are among the countries most threatened by rising seas.",
        bestTime: "Dec–Apr", image: "wiki:Majuro" }
    ]
  },
  {
    id: "296", name: "Kiribati", region: "Oceania", soundProfile: "ocean",
    summary: "Coral atolls spread across the equator, among the first places to greet each new year.",
    hero: "wiki:Kiritimati",
    places: [
      { name: "Kiritimati", pics: ["vfnss", "vfnsp", "vfnt9", "vfntg", "vfntc", "vfnti"], skip: ["1dszla4", "11z7nxp", "1rg83w2", "v2f5f0", "museeo"], lat: 1.8500, lng: -157.4000, category: "Nature", sound: "ocean", zoom: 10,
        tagline: "Christmas Island",
        description: "Kiritimati, or Christmas Island, is one of the largest coral atolls in the world by land area, home to vast seabird colonies and famous for fly-fishing for bonefish on its flats. Kiribati straddles the equator, and its Line Islands are among the first places on Earth to see each new year.",
        bestTime: "Year-round", image: "wiki:Kiritimati" }
    ]
  },
  {
    id: "520", name: "Nauru", region: "Oceania", soundProfile: "ocean",
    summary: "One of the world's smallest countries, a raised coral island ringed by reef.",
    hero: "wiki:Anibare Bay",
    places: [
      { name: "Nauru", pics: ["1zsuim", "xqix0", "ith3a"], add: ["38hskb", "16psiid", "1h62ng8", "14xonci", "1meptej", "1hg3xkx", "11qa6im"], skip: ["18llms", "16gl6g5", "tv6xcb", "1bfvtob", "1yiyi82"], lat: -0.5336, lng: 166.9556, category: "Beach", sound: "ocean", zoom: 13,
        tagline: "A single raised coral island",
        description: "Nauru is the third-smallest country in the world, a single raised coral island of about 21 square kilometres. Its coast is ringed by a reef with coral pinnacles exposed at low tide, such as at Anibare Bay, while much of the interior plateau was stripped by phosphate mining.",
        bestTime: "Year-round", image: "wiki:Anibare Bay", wiki: "Nauru" }
    ]
  },
  {
    id: "344", name: "Hong Kong", region: "Asia", soundProfile: "metropolis",
    summary: "A wall of towers on a harbour, mountain trails, and island fishing villages.",
    hero: "file:Hong Kong Night Skyline non-HDR.jpg",
    places: [
      { name: "Victoria Harbour", pics: ["1czmwk", "2cxyt", "2ah928", "2lpp7x", "f8crx", "23smdt", "1qkn5l"], add: ["1gr4fb4", "rwnqd5", "m6g3ll", "1c9crcm", "ppj37o", "saqmqm", "1w5066v", "i28r45", "23ckqh"], skip: ["40hset", "8dyw9g", "jwmiyz"], lat: 22.2900, lng: 114.1700, category: "City", sound: "metropolis",
        tagline: "Skyscrapers between mountains and sea",
        description: "Victoria Harbour separates Hong Kong Island from Kowloon, and the Star Ferry has crossed it since the 19th century. From Victoria Peak, reached by a historic tram, the view takes in a dense wall of skyscrapers against green mountains, and at night the skyline lights up along both shores.",
        bestTime: "Oct–Dec", image: "file:Hong Kong Night Skyline non-HDR.jpg", wiki: "Victoria Harbour", more: ["Victoria Peak"] },
      { name: "Lantau Island", pics: ["288cfa", "33u23h", "1mo308", "2wth94", "2p13k9", "j73kz", "eztji", "6jpg5"], add: ["sbwm0b", "1yzvydl", "16b31og", "1lwjs6", "5bfl4q", "1cqj693", "6jodhd", "c5cwvd"], skip: ["8dyw9g", "1cb5hmj", "9b0ivw", "15uva35"], lat: 22.2706, lng: 113.9528, category: "Nature", sound: "mountains", zoom: 11,
        tagline: "Mountains, monastery and a stilt village",
        description: "Hong Kong's largest island is mostly country park, with mountain trails and beaches. A cable car crosses the hills to Po Lin Monastery, and the stilt-house fishing village of Tai O sits on the west coast.",
        bestTime: "Oct–Dec", image: "file:Costa de la Isla Lantau, Hong Kong, 2013-08-13, DD 01.jpg", wiki: "Lantau Island", more: ["Tai O"] }
    ]
  },
  {
    id: "446", name: "Macao", region: "Asia", soundProfile: "city", aka: ["Macau"],
    summary: "Portuguese squares and Chinese temples side by side, beside glittering casino towers.",
    hero: "wiki:Ruins of Saint Paul's",
    places: [
      { name: "Historic Macao", pics: ["1dug7t", "1686w", "al7e2", "1b2crs", "18giha"], add: ["1uxu9qx", "1s69bq4", "8ovu4l", "1pxavos", "uhugz3"], lat: 22.1910, lng: 113.5360, category: "Historical", sound: "city", zoom: 14,
        tagline: "Where Portugal met China",
        description: "Macao's historic centre, a UNESCO World Heritage Site, mixes Portuguese and Chinese heritage: the wave-patterned paving of Senado Square, the A-Ma Temple, and the stone facade of St Paul's, all that remains of a 17th-century church. Across the water, Cotai is lined with huge casino resorts.",
        bestTime: "Oct–Dec", image: "wiki:Ruins of Saint Paul's", wiki: "Historic Centre of Macau", more: ["Senado Square"] }
    ]
  },
  {
    id: "258", name: "French Polynesia", region: "Oceania", soundProfile: "ocean", aka: ["Tahiti"],
    summary: "Turquoise lagoons around volcanic peaks, and overwater bungalows.",
    hero: "file:BoraBora SEtienne.jpg",
    places: [
      { name: "Bora Bora", pics: ["46anx", "2vkyc", "45pec", "2pd98", "qzmgp", "25y3h", "4561f"], add: ["3m86nv", "t1b0b5", "1gu2ok4", "1cjvapa", "14ot5jx", "1omhs0z", "1qzsx6e"], skip: ["1w9h027", "1f1qj2", "kgrjdp"], lat: -16.4980, lng: -151.7360, category: "Beach", sound: "ocean", zoom: 12,
        tagline: "A lagoon around a volcanic peak",
        description: "Bora Bora's lagoon, in every shade of turquoise, surrounds the jagged peak of Mount Otemanu, the remains of an extinct volcano. Overwater bungalows line the small islands of the reef, and in the lagoon you can snorkel with rays and blacktip reef sharks.",
        bestTime: "May–Oct", image: "file:BoraBora SEtienne.jpg", wiki: "Bora Bora", more: ["Mount Otemanu"] },
      { name: "Moorea", pics: ["27cf3d", "2it37l", "13ya20", "v1c8t", "2krrgq", "16f2z4", "16tpc7", "byt5d", "16xrnj"], add: ["w2jtvl", "w9g8xi", "83hmup", "1uuohks"], lat: -17.5350, lng: -149.8350, category: "Nature", sound: "ocean", zoom: 11,
        tagline: "Green peaks above two bays",
        description: "Just 17 kilometres from Tahiti, Moorea has dramatic green peaks above two deep bays, Cook's Bay and Opunohu Bay, and the Belvedere lookout looks down on both. Humpback whales pass offshore from July to November.",
        bestTime: "May–Oct", image: "wiki:Moʼorea" }
    ]
  },
  {
    id: "540", name: "New Caledonia", region: "Oceania", soundProfile: "ocean",
    summary: "One of the largest lagoons on Earth and an island of tall pines.",
    hero: "wiki:Isle of Pines (island)",
    places: [
      { name: "Isle of Pines", pics: ["2wavz7", "fst9q", "39diio", "fst9s", "fsu3h"], add: ["107ahow", "lm1v77", "10kh4x0"], skip: ["5jmdsk", "h8kd2k"], lat: -22.6167, lng: 167.4833, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "Columnar pines and a natural pool",
        description: "South of the main island, the Isle of Pines is ringed by white beaches and tall columnar pines. At Oro Bay, a natural pool sheltered from the sea by rocks fills with clear water and tropical fish. New Caledonia's lagoons, enclosed by one of the longest barrier reefs in the world, are a UNESCO World Heritage Site.",
        bestTime: "Sep–Dec", image: "wiki:Isle of Pines (island)", more: ["New Caledonian barrier reef"] }
    ]
  },
  {
    id: "184", name: "Cook Islands", region: "Oceania", soundProfile: "ocean",
    summary: "A turquoise lagoon of tiny islets and a mountainous island ringed by reef.",
    hero: "wiki:Aitutaki",
    places: [
      { name: "Aitutaki", pics: ["1hcndq", "1fv9qp", "p1hf7", "v5epm", "wexbk"], add: ["17x81de", "1e7lwg2", "v99dg0", "1t36vpx", "tv20ly"], skip: ["1p82wgg", "1pdeex6", "jdo44e"], lat: -18.8500, lng: -159.7900, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "A lagoon of fifteen islets",
        description: "Aitutaki's lagoon, scattered with fifteen small islets, is often called one of the most beautiful in the world. Boat trips cruise the shallow turquoise water to One Foot Island, where a sandbar appears at low tide.",
        bestTime: "May–Oct", image: "wiki:Aitutaki", more: ["Tapuaetai"] },
      { name: "Rarotonga", pics: ["5xw09", "1hnfnl", "1vi0h0", "2k4cld", "p1h9n"], add: ["1sarjiq"], skip: ["1hpuwb6", "1hm23cj", "jjhp3u", "nt40w9", "1hi4c9f", "cqo4wb", "qdyl06"], lat: -21.2333, lng: -159.7833, category: "Nature", sound: "ocean", zoom: 11,
        tagline: "Jungle peaks inside a reef",
        description: "The main island is a ring of reef and lagoon around steep, jungle-covered volcanic peaks, with a coast road that goes all the way round in about 32 kilometres. The Cross-Island Track climbs through the interior past the Needle, a spire of rock.",
        bestTime: "May–Oct", image: "wiki:Rarotonga" }
    ]
  },
  {
    id: "316", name: "Guam", region: "Oceania", soundProfile: "ocean",
    summary: "A US island territory of warm reefs, Chamorro heritage and a resort bay.",
    hero: "file:Two Lovers Point from Tumon Bay.JPG",
    places: [
      { name: "Tumon Bay", pics: ["6kw0s", "1ot5qq", "1ofue2", "1p7kzd", "1pbcdi", "1ofue4", "k32su", "2z6tu0"], add: ["inv3s7"], skip: ["xyjqqp", "1bvq0vw"], lat: 13.5139, lng: 144.7964, category: "Beach", sound: "ocean", zoom: 12,
        tagline: "A reef-sheltered bay",
        description: "On Guam's northwest coast, Tumon Bay is a white beach on a shallow reef flat, protected as a marine preserve. At its north end, Two Lovers Point is a high cliff with sweeping views of the coast. Chamorro culture, with its stone latte pillars, can be seen across the island.",
        bestTime: "Dec–Jun", image: "file:Two Lovers Point from Tumon Bay.JPG", wiki: "Tumon Bay", more: ["Two Lovers Point"] }
    ]
  },
  /* ---------- Africa: the rest, plus Antarctica ---------- */
  {
    id: "012", name: "Algeria", region: "Africa", soundProfile: "desert",
    summary: "A white hillside medina above the Mediterranean, Roman cities in the hills, and Saharan rock art among stone forests.",
    hero: "file:DJANET 8.jpg",
    places: [
      { name: "Casbah of Algiers", pics: ["1ky5kp", "2qzok2"], add: ["59a9ho", "1xbf52h", "1t36zvy", "1p8lqdu", "1ai9gwh", "p3tqse"], skip: ["1t99h3n", "1y8nz46", "10sh1r8", "rpcrni", "mcjpqy", "1wc69yw", "hp5xim", "1ai9gwh", "l9x1y8", "p3tqse"], lat: 36.7850, lng: 3.0600, category: "Historical", sound: "city", zoom: 15,
        tagline: "A white medina tumbling to the sea",
        description: "The Casbah is the old walled city of Algiers, a steep maze of whitewashed houses, stairways and Ottoman-era palaces and mosques rising from the harbour. It is a UNESCO World Heritage Site and was a stronghold of the independence war.",
        bestTime: "Apr–Jun, Sep–Nov", image: "wiki:Casbah of Algiers" },
      { name: "Tassili n'Ajjer", pics: ["1ekmd", "2jkmum", "17tvuc", "2jmwif", "2jmwjj", "2jmwje", "aadzf"], add: ["1ug2e5e", "1s8f465", "177rbb", "55wlev", "44atyy", "o6q1j3", "13a3iwh", "geamba"], skip: ["1s8f465"], lat: 25.5000, lng: 9.0000, category: "Nature", sound: "desert", zoom: 8,
        tagline: "Stone forests and rock art in the Sahara",
        description: "A vast sandstone plateau in the Algerian Sahara, eroded into arches, pillars and canyons that look like a forest of stone. Its rock shelters hold more than 15,000 paintings and engravings, some thousands of years old, showing cattle, hunters and wildlife from when the Sahara was green.",
        bestTime: "Oct–Mar", image: "file:DJANET 8.jpg", wiki: "Tassili n'Ajjer" },
      { name: "Djémila", pics: ["wi8x8", "t45vq", "1d60xl", "1w5aek", "1w5aem", "1w5aed", "1b2axs"], add: ["e3sd7s", "dwa0o4", "16jfw18", "6x3gkt", "o8fsay", "10639at"], skip: ["1yc1v09"], lat: 36.3206, lng: 5.7364, category: "Historical", sound: "desert", zoom: 15,
        tagline: "A Roman town in the mountains",
        description: "Djémila, the Roman Cuicul, sits on a ridge in the mountains of northeast Algeria, with its forum, temples, basilicas and triumphal arch still standing. It is one of the best preserved Roman ruins in North Africa and a UNESCO World Heritage Site.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Djémila" },
      { name: "Timgad", pics: ["306sym", "13tok5", "uxc7a", "1d9dnv", "q2mpr", "13tokb"], add: ["12timnp", "176f07t", "72s5b0", "1i45ve3", "d501hh", "1veevoi", "1y26f9e", "1n9x7jw"], skip: ["weon2n", "13u49vf", "11kx8k", "150hr1d", "lxc5t7", "kbmq2p", "1peq7hg", "1qowen2", "1wc1vys"], lat: 35.4842, lng: 6.4686, category: "Historical", sound: "desert", zoom: 15,
        tagline: "A Roman grid city on the high plains",
        description: "Founded by the emperor Trajan around 100 AD as a colony for veterans, Timgad was laid out on a perfect grid of streets that can still be walked today, ending at the Arch of Trajan. Sand buried it for centuries, which helped preserve it.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Timgad" }
    ]
  },
  {
    id: "788", name: "Tunisia", region: "Africa", soundProfile: "desert",
    summary: "Blue and white cliff villages, a Roman colosseum in an olive town, and salt flats at the edge of the Sahara.",
    hero: "wiki:Sidi Bou Said",
    places: [
      { name: "Sidi Bou Said", pics: ["2dp1a5", "t3m4g", "2gmbul", "2dlwil", "2dlwim", "2dlwjk", "nb1ax"], add: ["my0zcl", "1bud4ef", "akznmz", "9bm6yc", "rfyief", "1oeqwk1", "ow133g", "awxcdq", "e098m3", "1wd77qu", "sbk94f", "2b69ko", "g1hjtg", "136778"], skip: ["1psjez2", "5ennds", "k7pnv5", "7bnugg"], lat: 36.8708, lng: 10.3417, category: "Culture", sound: "ocean", zoom: 15,
        tagline: "Blue doors above the Gulf of Tunis",
        description: "A clifftop village above the Gulf of Tunis where nearly every house is painted white with bright blue doors and shutters, a rule kept since the 1910s. Its cafés look out over the sea toward Carthage.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Sidi Bou Said" },
      { name: "El Jem", pics: ["lbrka"], add: ["3ipfnb", "1qudgsd", "jda76z", "jlpycu", "3wh0s3", "juuhnj", "8lr968", "1xsigjv", "1bru87k"], skip: ["1najz8b"], lat: 35.2964, lng: 10.7069, category: "Historical", sound: "desert", zoom: 16,
        tagline: "Africa's colosseum",
        description: "The amphitheatre of El Jem, built around 238 AD, could seat about 35,000 spectators and is one of the largest Roman amphitheatres ever built. It rises over a small market town in the olive country of eastern Tunisia.",
        bestTime: "Mar–May, Oct–Nov", image: "wiki:Amphitheatre of El Jem", wiki: "Amphitheatre of El Jem" },
      { name: "Chott el Djerid", pics: ["2g9g7g", "2tlojo", "2ggywi", "2tloji", "2tlojl", "13vxdi", "z3l14", "z3l12", "6bqgi"], add: ["t015x1", "m38n8b"], skip: ["1376vav", "1hlfw4s"], lat: 33.7000, lng: 8.4000, category: "Nature", sound: "desert", zoom: 9,
        tagline: "A salt lake at the Sahara's edge",
        description: "The largest salt pan in the Sahara, a flat white crust stretching to the horizon, crossed by a straight causeway where mirages are common. It lies between the oasis towns of Tozeur and Kebili.",
        bestTime: "Nov–Mar", image: "wiki:Chott el Djerid" },
      { name: "Carthage", pics: ["2e7gj3", "2e6x4l", "t3m4l", "8027f", "9931i"], add: ["nsa09x", "g9celm", "iudtpk", "neqho3", "1edgqre", "12kvnap", "1yqfbm5", "qt1wpo", "ryun1g", "1fjaw5", "13xyhps"], skip: ["129181t", "b3hm0n", "b5umvt", "1d12e4p", "i079e5", "1tx4hqo", "1tvuc9e"], lat: 36.8528, lng: 10.3233, category: "Historical", sound: "ocean", zoom: 14,
        tagline: "Rome's great rival, by the sea",
        description: "The ruins of the Phoenician city that fought Rome in the Punic Wars, rebuilt by the Romans after they destroyed it in 146 BC. The Antonine Baths stand by the sea in what is now a leafy suburb of Tunis.",
        bestTime: "Apr–Jun, Sep–Oct", image: "file:Tunisie Carthage Ruines 08.JPG", wiki: "Carthage" }
    ]
  },
  {
    id: "434", name: "Libya", region: "Africa", soundProfile: "desert",
    summary: "One of the finest Roman cities anywhere, and a desert oasis town built as one shaded labyrinth.",
    hero: "wiki:Leptis Magna",
    places: [
      { name: "Leptis Magna", pics: ["1bj80", "8pqop", "1tvnb4", "1aqn14"], add: ["kq6e7g", "a2ox65", "1bzzv3t", "f3j5mi", "15jhb5p", "1xs3j88", "ywprg6"], lat: 32.6383, lng: 14.2906, category: "Historical", sound: "ocean", zoom: 15,
        tagline: "A Roman city by the sea",
        description: "Leptis Magna was enlarged into one of the grandest cities of the Roman Empire by the emperor Septimius Severus, who was born there. Its arch, basilica, market and theatre overlooking the Mediterranean are among the best preserved Roman ruins in the world.",
        bestTime: "Mar–May, Oct–Nov", image: "wiki:Leptis Magna" },
      { name: "Ghadames", pics: ["1a0lf", "ft8l", "1tzqas", "78n5v", "78n7d", "gfp6", "78n7n"], add: ["1j7ie2h", "b72gwv", "e7b59", "g7nii5"], skip: ["tfysia"], lat: 30.1333, lng: 9.5000, category: "Historical", sound: "desert", zoom: 15,
        tagline: "The pearl of the desert",
        description: "An oasis town near the borders of Algeria and Tunisia whose old city is built as one connected structure, with covered alleys below and rooftop walkways once used by women. Its whitewashed mud-brick houses are a UNESCO World Heritage Site.",
        bestTime: "Oct–Mar", image: "wiki:Ghadames" }
    ]
  },
  {
    id: "478", name: "Mauritania", region: "Africa", soundProfile: "desert",
    summary: "An old caravan town of desert libraries, and a giant stone eye in the Sahara.",
    hero: "file:مسجد شنقيط التاريخي.jpg",
    places: [
      { name: "Chinguetti", pics: ["1vou5w", "73u6l", "2jsry", "1uy0su", "1uy0sz", "1vou60", "232ev8", "232ev6"], skip: ["b54fvo"], lat: 20.4633, lng: -12.3628, category: "Historical", sound: "desert", zoom: 15,
        tagline: "Libraries in the dunes",
        description: "Founded as a stop on the trans-Saharan caravan routes, Chinguetti's stone houses and square minaret are slowly being swallowed by dunes. Family libraries in the old town still keep manuscripts that are centuries old.",
        bestTime: "Nov–Feb", image: "wiki:Chinguetti" },
      { name: "Richat Structure", pics: ["2yo3s8"], add: ["1aa3h88", "e5hewk"], lat: 21.1240, lng: -11.4020, category: "Nature", sound: "desert", zoom: 10,
        tagline: "The Eye of the Sahara",
        description: "A set of concentric rings about 40 kilometres across in the Sahara, clearly visible from space. Geologists think it is an eroded dome of uplifted rock rather than an impact crater.",
        bestTime: "Nov–Feb", image: "wiki:Richat Structure" }
    ]
  },
  {
    id: "466", name: "Mali", region: "Africa", soundProfile: "desert",
    summary: "The largest mud-brick building on Earth, and cliff villages of the Dogon.",
    hero: "wiki:Great Mosque of Djenné",
    places: [
      { name: "Djenné", pics: ["21hqso", "1vm0b3", "147jkr"], add: ["jyjhj4", "1fdpqg4", "684ejm"], skip: ["1oco7ch"], lat: 13.9061, lng: -4.5533, category: "Historical", sound: "temple", zoom: 15,
        tagline: "The great mosque of mud",
        description: "Djenné's Great Mosque, rebuilt in 1907, is the largest mud-brick building in the world, and every year the town gathers to replaster it in a festival called the Crépissage. The old town around it is a UNESCO World Heritage Site.",
        bestTime: "Nov–Feb", image: "wiki:Great Mosque of Djenné", wiki: "Djenné" },
      { name: "Bandiagara Escarpment", pics: ["25j8km", "2u1e6", "heprq", "eskl1", "1m79x", "eskmb", "hepru"], add: ["1nhs50a", "kvm7z0", "1u08nu1", "q54h1d", "c9rbl8"], skip: ["u0fmin", "1xwxirl"], lat: 14.3500, lng: -3.6000, category: "Culture", sound: "desert", zoom: 10,
        tagline: "Dogon villages on a cliff",
        description: "A sandstone cliff about 150 kilometres long where the Dogon people built villages of granaries and houses at the foot and on the ledges of the rock. Older dwellings left by the Tellem people are tucked into the cliff face above.",
        bestTime: "Nov–Feb", image: "wiki:Bandiagara Escarpment" }
    ]
  },
  {
    id: "562", name: "Niger", region: "Africa", soundProfile: "desert",
    summary: "A Saharan caravan city with a mud-brick minaret, gateway to the Aïr Mountains.",
    hero: "wiki:Agadez",
    places: [
      { name: "Agadez", pics: ["1v7ovc", "1xl44v"], add: ["dgnt34", "e842yb", "14yyhb2", "8tsm96", "zt85rr", "1caec0z"], skip: ["t9qkhl", "62bd1d", "jhlrxn"], lat: 16.9733, lng: 7.9911, category: "Historical", sound: "desert", zoom: 14,
        tagline: "The Tuareg city of the Sahara",
        description: "A historic crossroads of Saharan trade, Agadez is known for the 27-metre mud-brick minaret of its Grand Mosque, bristling with wooden beams, and the earthen houses of its old centre, a UNESCO World Heritage Site.",
        bestTime: "Nov–Feb", image: "wiki:Agadez" }
    ]
  },
  {
    id: "148", name: "Chad", region: "Africa", soundProfile: "desert",
    summary: "Sandstone arches and a crocodile pool in the Sahara, and an elephant park in the south.",
    hero: "wiki:Ennedi Plateau",
    places: [
      { name: "Ennedi Plateau", pics: ["2ihbrh", "2ihbrg", "1qqasb", "1nie65", "28rj77", "2zvrr7"], skip: ["wvf5o0", "z8takz", "mhrf0", "1nw95iv"], lat: 17.0000, lng: 22.0000, category: "Nature", sound: "desert", zoom: 8,
        tagline: "Arches and canyons in the Sahara",
        description: "A sandstone massif in the Sahara carved by wind and water into natural arches, pillars and canyons, with rock art in its shelters. In the Guelta d'Archei, a pool in a deep canyon, a few desert crocodiles still survive and camels come to drink.",
        bestTime: "Nov–Feb", image: "wiki:Ennedi Plateau" },
      { name: "Zakouma National Park", pics: ["1fh4n1", "1fh3vx"], skip: ["1km3qkk", "108gh91", "pxtl0i", "1nwdkvw", "1r4nfuu", "1dnd7gd", "o39i02", "vszefa", "1ndjcqx"], lat: 10.8500, lng: 19.6500, category: "Nature", sound: "jungle", zoom: 9,
        tagline: "Elephants coming back",
        description: "Once ravaged by poaching, Zakouma in southern Chad has become one of Central Africa's conservation successes, with its elephant herd growing again and large numbers of buffalo, giraffe and birds gathering at its waterholes in the dry season.",
        bestTime: "Dec–May", image: "wiki:Zakouma National Park" }
    ]
  },
  {
    id: "729", name: "Sudan", region: "Africa", soundProfile: "desert",
    summary: "Fields of steep Nubian pyramids in the desert, more than in all of Egypt.",
    hero: "wiki:Meroë",
    places: [
      { name: "Meroë", pics: ["3tmzq", "1jt1hg", "1jt1hc", "zx03m", "5p9et", "17pjxx"], add: ["58ngu2", "18lmtwb", "qbxhm4"], skip: ["6gwoat", "12sv2af"], lat: 16.9383, lng: 33.7489, category: "Historical", sound: "desert", zoom: 14,
        tagline: "The pyramids of the Kushite kings",
        description: "Meroë was the capital of the Kingdom of Kush, and its royal cemeteries hold around 200 small, steep-sided pyramids rising from the dunes. Sudan has been at war since 2023, which has made travel unsafe.",
        bestTime: "Nov–Feb", image: "wiki:Meroë" }
    ]
  },
  {
    id: "728", name: "South Sudan", region: "Africa", soundProfile: "jungle",
    summary: "One of the largest wetlands in the world, along the White Nile.",
    hero: "wiki:Sudd",
    places: [
      { name: "Sudd", pics: ["4gloz", "2ewi2k", "1mk2x5", "129yw8", "129yt3"], lat: 7.5000, lng: 30.5000, category: "Nature", sound: "jungle", zoom: 7,
        tagline: "A sea of papyrus on the Nile",
        description: "Where the White Nile spreads out across the plains of South Sudan, it forms the Sudd, a maze of papyrus swamps and floodplains that can grow larger than many countries in the rainy season. It is home to huge flocks of birds, including the shoebill.",
        bestTime: "Dec–Mar", image: "wiki:Sudd" }
    ]
  },
  {
    id: "232", name: "Eritrea", region: "Africa", soundProfile: "city",
    summary: "An Italian modernist capital frozen in time in the highlands.",
    hero: "file:Fiat Tagliero petrol station in Asmara.jpg",
    places: [
      { name: "Asmara", pics: ["1gvai1", "36i5mv", "151mgv", "rq7sg", "2q7tjx", "rqlnv"], add: ["19xdkmu", "yye2u7", "1nybmou", "7qezs3", "1cjagwt", "1oix9hp", "1lziu2v", "hxkgx0", "196bpqk", "1r11evm"], skip: ["1e4yhik", "1acoymo", "1cif6au", "1l9lhsk"], lat: 15.3333, lng: 38.9333, category: "City", sound: "city", zoom: 14,
        tagline: "Africa's modernist city",
        description: "Built up by Italy in the 1930s, Asmara is filled with Art Deco and futurist buildings, such as the Fiat Tagliero service station shaped like an aeroplane. The city, at about 2,300 metres in the highlands, became a UNESCO World Heritage Site in 2017.",
        bestTime: "Oct–Apr", image: "file:Fiat Tagliero petrol station in Asmara.jpg", wiki: "Asmara" }
    ]
  },
  {
    id: "262", name: "Djibouti", region: "Africa", soundProfile: "desert",
    summary: "A salt lake below sea level, and a field of smoking limestone chimneys.",
    hero: "file:Lake Assal 2-Djibouti.jpg",
    places: [
      { name: "Lake Assal", pics: ["1eka8", "1s7579", "qx9kb", "11m4s", "u10c1"], skip: ["18q8hg3", "14qanc7", "kdrsdy", "9shf8f", "1aaneor"], lat: 11.6500, lng: 42.4167, category: "Nature", sound: "desert", zoom: 11,
        tagline: "Africa's lowest point",
        description: "At about 155 metres below sea level, Lake Assal is the lowest point in Africa, a turquoise crater lake ringed by a shore of white salt. Its water is roughly ten times saltier than the sea.",
        bestTime: "Nov–Feb", image: "file:Lake Assal 2-Djibouti.jpg", wiki: "Lake Assal (Djibouti)" },
      { name: "Lake Abbe", pics: ["2b71n"], skip: ["1xmqu7o", "1hwd0yq", "a67les", "1npqf6y"], lat: 11.1500, lng: 41.7800, category: "Nature", sound: "desert", zoom: 11,
        tagline: "Chimneys of steam",
        description: "On the border with Ethiopia, the shores of Lake Abbe are covered in limestone chimneys up to 50 metres tall, some still venting steam, with flamingos feeding in the shallows. It feels like another planet at sunrise.",
        bestTime: "Nov–Feb", image: "file:Lac Abbe-02.JPG", wiki: "Lake Abbe" }
    ]
  },
  {
    id: "231", name: "Ethiopia", region: "Africa", soundProfile: "mountains",
    summary: "Churches carved from solid rock, a dramatic mountain range, and the hottest, most colourful place on Earth.",
    hero: "wiki:Simien Mountains",
    places: [
      { name: "Lalibela", pics: ["25vwko", "gshp0", "gshqd", "gshnz", "gshlk"], add: ["xzkfrw", "uzqb6i", "tm974d", "eyhk9d", "1w2peti", "1l6jaty", "9ero0a", "1ugbo1k"], lat: 12.0317, lng: 39.0411, category: "Historical", sound: "temple", zoom: 15,
        tagline: "Churches carved into the earth",
        description: "In the 12th and 13th centuries, eleven churches were carved down into the volcanic rock of Lalibela, the most famous being the cross-shaped Church of Saint George. They are still in use, and pilgrims dressed in white fill them at Ethiopian Christmas.",
        bestTime: "Oct–Mar", image: "wiki:Church of Saint George, Lalibela", wiki: "Lalibela" },
      { name: "Simien Mountains", pics: ["3xdps", "auml", "ymimj", "d1tka", "ymima", "ymimf", "ymin8", "ymiml"], add: ["1fm3bd8", "1k32ell", "laq83u", "9mi5u5", "23cf75", "1afhilm", "k6cvho", "1ns0ir3", "1r7kzwr", "1m9ncrp"], lat: 13.2667, lng: 38.0833, category: "Mountain", sound: "mountains", zoom: 10,
        tagline: "Cliffs, gelada monkeys and the roof of Ethiopia",
        description: "Sheer escarpments drop more than a kilometre in the Simien Mountains National Park, where troops of gelada monkeys graze on the grassy edges and Walia ibex cling to the cliffs. Ras Dashen, at 4,550 metres, is Ethiopia's highest peak.",
        bestTime: "Oct–Mar", image: "wiki:Simien Mountains" },
      { name: "Danakil Depression", pics: ["il6ji", "xi4h5", "yrhw", "ijcs9", "14ijny", "il6jc"], add: ["ya7rag", "u214gs", "1ufrab3", "zhcrb5", "1ub976g", "166418g", "p2j0p3", "tybc4c", "1vft5q1", "ta7pgs"], lat: 14.2417, lng: 40.3000, category: "Nature", sound: "desert", zoom: 9,
        tagline: "Acid pools and a lava lake",
        description: "One of the hottest and lowest places on Earth, the Danakil holds the yellow and green acid springs of Dallol, salt flats where caravans still cut salt by hand, and the Erta Ale volcano, often topped by a lava lake.",
        bestTime: "Nov–Feb", image: "file:Dallol-Ethiopie (15).jpg", wiki: "Danakil Depression" },
      { name: "Gondar", pics: ["hcxpu", "1hi1kj", "d1tfr", "r9pjt", "r9pkc"], add: ["8hn956", "r98fiv", "iargv9", "dvtie0", "lbjdb0", "14cl7zs"], skip: ["du1psw"], lat: 12.6075, lng: 37.4700, category: "Historical", sound: "city", zoom: 15,
        tagline: "Ethiopia's Camelot",
        description: "Gondar was the royal capital in the 17th and 18th centuries, and its Fasil Ghebbi compound holds castles built by the emperors, with towers and battlements. Nearby, the ceiling of Debre Berhan Selassie church is painted with rows of winged angels.",
        bestTime: "Oct–Mar", image: "wiki:Fasil Ghebbi", wiki: "Gondar" }
    ]
  },
  {
    id: "706", name: "Somalia", region: "Africa", soundProfile: "ocean",
    summary: "A white-sand Indian Ocean capital with a long history as a trading port.",
    hero: "wiki:Mogadishu",
    places: [
      { name: "Mogadishu", pics: ["m40tj", "xwtuv", "392p30", "392op6", "392pbo"], add: ["11jxwyg", "19954rc"], skip: ["1y5fdkv", "128godo", "1tlvc7q", "zbufqp"], lat: 2.0469, lng: 45.3182, category: "City", sound: "ocean", zoom: 13,
        tagline: "The white pearl of the Indian Ocean",
        description: "A trading port for more than a thousand years, Mogadishu is rebuilding after decades of war, and Lido Beach fills with families on Fridays. Security remains a serious problem, and most governments advise against travel.",
        bestTime: "Dec–Mar", image: "wiki:Mogadishu" }
    ]
  },
  {
    id: "800", name: "Uganda", region: "Africa", soundProfile: "rainforest",
    summary: "Mountain gorillas in an ancient forest, the Nile forced through a gorge, and snow on the Mountains of the Moon.",
    hero: "wiki:Bwindi Impenetrable National Park",
    places: [
      { name: "Bwindi Impenetrable Forest", pics: ["1gbn7e"], add: ["1i8xag0", "zfoaf3", "3w3nfg", "1vh329i", "159e191", "85h8q8", "yelvu6", "iptcf3", "n5rvkm"], skip: ["egf6o", "1ixkg44", "lao4zh"], lat: -1.0500, lng: 29.7000, category: "Nature", sound: "rainforest", zoom: 10,
        tagline: "Home of half the world's mountain gorillas",
        description: "A steep, misty rainforest on the edge of the Albertine Rift, Bwindi is home to roughly half of the world's mountain gorillas. Trekkers hike for hours through dense forest for one hour with a habituated gorilla family.",
        bestTime: "Jun–Aug, Dec–Feb", image: "wiki:Bwindi Impenetrable National Park", wiki: "Bwindi Impenetrable National Park" },
      { name: "Murchison Falls", pics: ["1hoibk", "1hpe46", "2soge2", "2sogeb", "2t70dr", "1e6art", "2soge7"], add: ["1bvkrpf", "1c0gcg1", "b4izsq", "h0uadj", "1a7941g", "1kr22g1", "1r64sjo", "bfzzvg", "1rb8oay"], skip: ["hor8qu"], lat: 2.2783, lng: 31.6856, category: "Nature", sound: "jungle", zoom: 12,
        tagline: "The Nile through a seven-metre gap",
        description: "Here the Victoria Nile squeezes through a gorge only about seven metres wide and plunges 43 metres in a thundering burst of spray. Boat trips from below pass hippos, crocodiles and elephants on the way to the base of the falls.",
        bestTime: "Dec–Feb, Jun–Sep", image: "wiki:Murchison Falls" },
      { name: "Rwenzori Mountains", pics: ["266s93", "lm29x", "2h3w42", "266smb", "lm2a2", "sucz", "lm2a1", "1wnv20"], add: ["199kv2b", "1tswqoi", "cvfc3y", "suy284", "tmdodr", "es644i", "18colur"], skip: ["1hivthm", "1y68upd", "18putgn", "1a8gzca", "19i0max", "1m1ej3g", "1src71a", "d64f1x", "199kv2b"], lat: 0.3864, lng: 29.8722, category: "Mountain", sound: "mountains", zoom: 10,
        tagline: "The Mountains of the Moon",
        description: "On the border with the DR Congo, the Rwenzori rise to 5,109 metres at Margherita Peak, with glaciers on the equator. On the way up, trails pass through bogs and forests of giant lobelias and groundsels that look prehistoric.",
        bestTime: "Jun–Aug, Dec–Feb", image: "wiki:Rwenzori Mountains" }
    ]
  },
  {
    id: "646", name: "Rwanda", region: "Africa", soundProfile: "rainforest",
    summary: "Gorillas on the slopes of the Virunga volcanoes, a long blue lake, and a clean, green capital of hills.",
    hero: "wiki:Volcanoes National Park",
    places: [
      { name: "Volcanoes National Park", pics: ["rk8nk", "1ak9rz", "2a3q1y", "2a3pxe", "2he87x", "2a3pxh", "xmtfl", "2a3q22"], add: ["dym48z", "7detqo", "u0i2ml", "cx7zt6"], skip: ["1pb8e73", "rt5g4z", "4uuu0o"], lat: -1.4833, lng: 29.5333, category: "Nature", sound: "rainforest", zoom: 11,
        tagline: "Gorillas in the mist",
        description: "On the bamboo-covered slopes of the Virunga volcanoes, this is where Dian Fossey studied mountain gorillas. Visitors trek to spend an hour with a gorilla family, and can also see rare golden monkeys.",
        bestTime: "Jun–Sep, Dec–Feb", image: "wiki:Volcanoes National Park" },
      { name: "Lake Kivu", pics: ["19ha4q", "64kik", "rk8i4", "2r18ec", "1gn57e", "2h8cev", "2h6tyc", "1fwzo2"], add: ["1hrfie4", "dio285", "193ucjm", "vdatja"], skip: ["byj48r"], lat: -2.0000, lng: 29.2000, category: "Nature", sound: "ocean", zoom: 9,
        tagline: "A deep lake between the mountains",
        description: "One of Africa's Great Lakes, Lake Kivu fills a deep rift on the border with the DR Congo, its shores lined with green hills, islands and quiet towns like Gisenyi and Kibuye. Fishermen go out at night singing in long wooden boats.",
        bestTime: "Jun–Sep, Dec–Feb", image: "file:Lake Kivu 2021.jpg", wiki: "Lake Kivu" },
      { name: "Kigali", pics: ["1npfvm", "1366xd", "2xj6kq", "2xj6kl", "r1083", "2xj6kh", "19jxwh"], add: ["92fl93", "77p74e", "83pz2g", "rusxka", "uipwwg", "jyqbya"], skip: ["mx8ckj", "155b7ug", "lyqmkp", "9djynt", "1kf361o"], lat: -1.9500, lng: 30.0600, category: "City", sound: "city", zoom: 13,
        tagline: "A city of a thousand hills",
        description: "Rwanda's capital spreads across green hills and valleys and is known as one of the cleanest cities in Africa. The Kigali Genocide Memorial tells the story of the 1994 genocide against the Tutsi.",
        bestTime: "Jun–Sep, Dec–Feb", image: "wiki:Kigali" }
    ]
  },
  {
    id: "108", name: "Burundi", region: "Africa", soundProfile: "ocean",
    summary: "Beaches on Lake Tanganyika, one of the longest and deepest lakes in the world.",
    hero: "wiki:Lake Tanganyika",
    places: [
      { name: "Lake Tanganyika", pics: ["19fsne", "z0vk", "i10rb", "2pblir", "2pbli9", "z1rn", "2pblis"], add: ["3tqllb", "1m51gi0", "6pca3z", "msv6vj", "sfmdgj", "7owj67", "1l6u4on", "1i7l4ov"], skip: ["15mfpax", "ot5os0", "1yhrd1o", "1ygjvg1", "8iizv6", "1c9717m", "1vihqv"], lat: -3.6000, lng: 29.3000, category: "Beach", sound: "ocean", zoom: 10, wiki: "Lake Tanganyika",
        tagline: "Beaches on an inland sea",
        description: "Burundi's capital Bujumbura sits on the northern tip of Lake Tanganyika, the second deepest lake in the world, with sandy beaches and mountains rising behind. The lake is home to hundreds of species of colourful cichlid fish found nowhere else.",
        bestTime: "Jun–Aug", image: "wiki:Lake Tanganyika" }
    ]
  },
  {
    id: "180", name: "DR Congo", region: "Africa", soundProfile: "rainforest",
    summary: "Africa's oldest national park, with a volcano holding the world's largest lava lake.",
    hero: "wiki:Mount Nyiragongo",
    places: [
      { name: "Virunga National Park", pics: ["17xemc", "45411", "1qplgq", "1qplj8", "1qplh7", "25j16i", "1qpli2", "1qpncc"], add: ["1x2fjni", "spdr8n", "nrqs1c", "1l92xb7", "1vq45f4"], skip: ["1hivthm", "1fr4phw"], lat: -1.0000, lng: 29.4000, category: "Nature", sound: "rainforest", zoom: 9,
        tagline: "Gorillas and a lava lake",
        description: "Founded in 1925, Virunga is Africa's oldest national park, with mountain gorillas, savanna and glaciers in the Rwenzori. Its Mount Nyiragongo volcano has held one of the largest lava lakes in the world. Armed conflict in the region has repeatedly closed the park.",
        bestTime: "Jun–Sep, Dec–Feb", image: "wiki:Mount Nyiragongo", wiki: "Virunga National Park" }
    ]
  },
  {
    id: "178", name: "Congo", region: "Africa", soundProfile: "rainforest",
    summary: "Rainforest clearings where gorillas and forest elephants come to feed.",
    hero: "file:Loxodonta cyclotis 3970045.jpg",
    places: [
      { name: "Odzala-Kokoua", pics: ["2ab3tt", "2ab423", "2ab1l0", "2ab415", "2aazd0", "2ab3zo"], skip: ["1e1uy38"], lat: 0.7500, lng: 14.9000, category: "Nature", sound: "rainforest", zoom: 9,
        tagline: "Gorillas in the Congo Basin",
        description: "One of the oldest national parks in Africa, Odzala-Kokoua protects rainforest and savanna in the Congo Basin, with western lowland gorillas, forest elephants and forest buffalo gathering in open clearings called bais.",
        bestTime: "Jun–Sep, Dec–Feb", image: "file:Loxodonta cyclotis 3970045.jpg", wiki: "Odzala-Kokoua National Park" }
    ]
  },
  {
    id: "266", name: "Gabon", region: "Africa", soundProfile: "rainforest",
    summary: "Where rainforest meets the Atlantic, and elephants and hippos walk the beaches.",
    hero: "file:Gabon Loango National Park Elephant with GPS tracker fitted.jpeg",
    places: [
      { name: "Loango National Park", pics: ["mheeu", "2qzcfp", "2ny6e8", "2ny6dw"], add: ["stfrhr"], lat: -2.2500, lng: 9.6000, category: "Nature", sound: "ocean", zoom: 9,
        tagline: "Surfing hippos",
        description: "On Gabon's coast, Loango is a mix of beaches, lagoons, savanna and forest where forest elephants, buffalo and hippos come out onto the sand. Humpback whales pass offshore in the dry season.",
        bestTime: "Jun–Sep", image: "file:Gabon Loango National Park Elephant with GPS tracker fitted.jpeg", wiki: "Loango National Park" },
      { name: "Lopé National Park", pics: ["683iq", "683jw", "m2bq2", "20e0xy"], skip: ["1qvb2d", "usy8jc", "slun5r"], lat: -0.5000, lng: 11.5000, category: "Nature", sound: "rainforest", zoom: 9,
        tagline: "Savanna inside the rainforest",
        description: "Lopé's patchwork of rainforest and grassy savanna is famous for mandrills, which gather in troops of hundreds, among the largest groups of primates on Earth. It also holds ancient rock engravings and is a UNESCO World Heritage Site.",
        bestTime: "Jun–Sep", image: "wiki:Lopé National Park" }
    ]
  },
  {
    id: "226", name: "Equatorial Guinea", region: "Africa", soundProfile: "rainforest",
    summary: "A volcanic island capital on the Gulf of Guinea.",
    hero: "file:Kind Of Divine - panoramio.jpg",
    places: [
      { name: "Bioko", pics: ["1gxflv"], add: ["1n0v3vv"], skip: ["1emr8f0", "1n6i9c8", "kixasl", "fgjirz", "1mv75bh", "gm7x50", "q2nbnv"], lat: 3.5000, lng: 8.7000, category: "Nature", sound: "rainforest", zoom: 10,
        tagline: "A volcanic island of rainforest",
        description: "Bioko, home to the capital Malabo, is a volcanic island rising to over 3,000 metres at Pico Basilé, covered in rainforest with several species of rare monkeys. On its southern beaches, sea turtles nest between November and February.",
        bestTime: "Dec–Feb", image: "file:Kind Of Divine - panoramio.jpg", wiki: "Bioko" }
    ]
  },
  {
    id: "120", name: "Cameroon", region: "Africa", soundProfile: "rainforest",
    summary: "An active volcano above the sea, beaches with a waterfall into the ocean, and forests and savanna.",
    hero: "wiki:Mount Cameroon",
    places: [
      { name: "Mount Cameroon", pics: ["35ovg0", "1ryzjh"], add: ["fqbtiq", "12shol5", "ttfr1t", "coud4i", "135cwf9", "1gzry"], skip: ["1l85d5c", "jaysyt", "9wolhw", "1w712w0"], lat: 4.2167, lng: 9.1700, category: "Mountain", sound: "mountains", zoom: 10,
        tagline: "A volcano by the sea",
        description: "At 4,040 metres, Mount Cameroon is one of Africa's most active volcanoes and rises almost straight from the Atlantic, with rainforest on its lower slopes. Its foot is one of the wettest places on Earth.",
        bestTime: "Nov–Apr", image: "wiki:Mount Cameroon" },
      { name: "Kribi", pics: ["1ryzj4", "59pad", "kwjts", "2z7nhy", "1s1kjb", "37ip55", "18ghm7"], add: ["1bydya", "1a95y4h", "7gp0yl", "zaez2u", "2ku1h4", "xutgx1", "1qu457v", "1cho8sj", "1acii6g"], lat: 2.9500, lng: 9.9100, category: "Beach", sound: "ocean", zoom: 12,
        tagline: "A waterfall that falls into the sea",
        description: "A beach town on Cameroon's coast with long sandy shores backed by palms. Just south of town, the Lobé Falls are one of the few waterfalls in the world that drop straight into the ocean.",
        bestTime: "Nov–Apr", image: "wiki:Kribi" }
    ]
  },
  {
    id: "140", name: "Central African Republic", region: "Africa", soundProfile: "rainforest",
    summary: "A rainforest clearing where hundreds of forest elephants gather.",
    hero: "wiki:Dzanga-Sangha Special Reserve",
    places: [
      { name: "Dzanga-Sangha", pics: ["38133o", "382jst", "38278k", "382js2", "382js3", "38atww", "382js8", "382jsn", "382jrw", "38atwp"], add: ["w7f113", "33kb7u", "1q87gex"], skip: ["14pgn3r"], lat: 2.9000, lng: 16.2500, category: "Nature", sound: "rainforest", zoom: 9,
        tagline: "Elephants in the Dzanga Bai",
        description: "In the far southwest, the Dzanga-Sangha reserve protects rainforest where often more than a hundred forest elephants gather in the Dzanga Bai clearing to dig for minerals, along with habituated western lowland gorillas.",
        bestTime: "Dec–Mar", image: "wiki:Dzanga-Sangha Special Reserve", wiki: "Dzanga-Sangha Special Reserve" }
    ]
  },
  {
    id: "678", name: "São Tomé and Príncipe", region: "Africa", soundProfile: "rainforest",
    summary: "Two volcanic islands of rainforest, cocoa plantations and empty beaches, with a needle of rock in the jungle.",
    hero: "wiki:Pico Cão Grande",
    places: [
      { name: "Pico Cão Grande", pics: ["9ywps", "viei3", "viehr", "vienf"], lat: 0.1167, lng: 6.5667, category: "Nature", sound: "rainforest", zoom: 13,
        tagline: "A needle of rock in the rainforest",
        description: "A volcanic plug that rises about 300 metres above the surrounding rainforest of southern São Tomé, its sheer grey walls standing out like a needle. Old cocoa plantations and black and gold sand beaches lie along the coast nearby.",
        bestTime: "Jun–Sep", image: "wiki:Pico Cão Grande" }
    ]
  },
  {
    id: "566", name: "Nigeria", region: "Africa", soundProfile: "metropolis",
    summary: "Africa's biggest city, a sacred forest of shrines, and a giant dome of rock.",
    hero: "wiki:Lagos",
    places: [
      { name: "Lagos", pics: ["of1gn", "19lqv2", "2hb33s"], add: ["1ggtvi6", "q96cf2", "1591mwz", "bvaf16", "1segux4", "1v7hkn7", "1j3fiqc", "a13w96", "1ij2cqe"], skip: ["oagq89", "vibb9x", "efchlh", "e3c8fg", "fwsbzq", "q96cf2", "1591mwz"], lat: 6.4550, lng: 3.3941, category: "City", sound: "metropolis", zoom: 12,
        tagline: "Africa's megacity",
        description: "One of the largest cities in Africa, Lagos spreads across lagoons and islands, from the towers of Victoria Island to markets, beaches and a nightlife that runs on Afrobeats. The Lekki Conservation Centre has one of the longest canopy walkways in Africa.",
        bestTime: "Nov–Feb", image: "wiki:Lagos" },
      { name: "Osun-Osogbo Sacred Grove", pics: ["29s1j8", "39d7ph", "101a71", "2jakiw", "2jakix", "2jakiv"], add: ["gi9icg", "6owyos", "1v7ru0e", "8c6hy9", "14v6a4y", "1x6guck", "1axx3t2", "c531fh"], skip: ["qz72i5", "1x6guck", "c531fh"], lat: 7.7553, lng: 4.5522, category: "Culture", sound: "jungle", zoom: 15,
        tagline: "A forest of the river goddess",
        description: "One of the last stretches of primary forest in southern Nigeria, this grove along the Osun River is dedicated to the Yoruba goddess Osun, with shrines and sculptures throughout. Each August it hosts a festival attended by thousands.",
        bestTime: "Aug (festival), Nov–Feb", image: "wiki:Osun-Osogbo" },
      { name: "Zuma Rock", pics: ["1dy4ck"], lat: 9.1250, lng: 7.2333, category: "Nature", sound: "desert", zoom: 13,
        tagline: "The gateway to Abuja",
        description: "A huge monolith of granite rising about 300 metres above the plains near Abuja, with markings on one side that look like a face. It appears on Nigeria's 100 naira note.",
        bestTime: "Nov–Feb", image: "wiki:Zuma Rock" }
    ]
  },
  {
    id: "204", name: "Benin", region: "Africa", soundProfile: "ocean",
    summary: "A village on stilts in a lagoon, and the coast where the history of Vodun and the slave trade meet.",
    hero: "wiki:Ganvie",
    places: [
      { name: "Ganvié", pics: ["21hquy", "21hr09", "37aw2", "2qquln", "2lmve3", "2qquli", "1fufl3"], add: ["1w88sv9", "1x18so0", "1ubhu0b", "1yxpmve", "rt77qe"], skip: ["1032ybp"], lat: 6.4667, lng: 2.4167, category: "Culture", sound: "ocean", zoom: 14,
        tagline: "A town on stilts",
        description: "Built on stilts in Lake Nokoué, Ganvié is home to about 20,000 people who travel everywhere by pirogue, even to the floating market. It was founded centuries ago by people escaping slave raiders.",
        bestTime: "Nov–Mar", image: "wiki:Ganvie", wiki: "Ganvie" },
      { name: "Ouidah", pics: ["1g1r16", "1xryj4", "2njwzk", "2elgps", "y5dp5"], add: ["10xmt8u", "1rp4xt4", "hq30us", "tdt8gb", "t3rpvi"], skip: ["j9hr3d", "ffeqg3", "1wb60pn", "1y9xkd5", "8943zr", "tdt8gb"], lat: 6.3667, lng: 2.0833, category: "Historical", sound: "ocean", zoom: 13,
        tagline: "The Door of No Return",
        description: "A former slave port and the spiritual home of Vodun, Ouidah has a temple of sacred pythons, and a road that leads to the beach and the Door of No Return memorial. Every January 10 it hosts the national Vodun festival.",
        bestTime: "Nov–Mar, Jan 10 (festival)", image: "wiki:Ouidah" }
    ]
  },
  {
    id: "768", name: "Togo", region: "Africa", soundProfile: "jungle",
    summary: "Fortress-like mud tower houses of the Batammariba people.",
    hero: "wiki:Koutammakou",
    places: [
      { name: "Koutammakou", pics: ["1x4fhe", "2dyby2"], add: ["1ugrjhg", "1yw288g", "1kl9cmd", "fyrf0m", "1koqkjh", "yxbowz", "ofvijy", "f0m6eg", "9cug4u", "u3n8tk"], skip: ["10ga1a9"], lat: 10.1500, lng: 1.1500, category: "Culture", sound: "jungle", zoom: 11,
        tagline: "Castles of mud",
        description: "In the north of Togo, the Batammariba people build two-storey tower houses of mud called takienta, with granaries and turrets, which inspired the name 'land of the castles'. The landscape is a UNESCO World Heritage Site.",
        bestTime: "Nov–Feb", image: "wiki:Koutammakou" }
    ]
  },
  {
    id: "288", name: "Ghana", region: "Africa", soundProfile: "ocean",
    summary: "Whitewashed slave castles on palm-lined beaches, a walkway above the rainforest, and a lively capital.",
    hero: "wiki:Cape Coast Castle",
    places: [
      { name: "Cape Coast Castle", pics: ["bkvp7", "29r8sk", "29r9sl", "2whsj5"], add: ["1r15d95", "1c2zmv7", "upuww9", "1nc88y1", "1gsegt5", "1crge4w", "1q8tv9r", "kbhqi8", "10ponku"], skip: ["1x09k6f", "almagk"], lat: 5.1036, lng: -1.2414, category: "Historical", sound: "ocean", zoom: 16,
        tagline: "A fortress of the slave trade",
        description: "A white fortress on the shore, Cape Coast Castle was one of the main centres of the Atlantic slave trade, holding captives in dungeons before shipping them across the ocean. Nearby Elmina Castle, built by the Portuguese in 1482, is the oldest European building south of the Sahara.",
        bestTime: "Nov–Mar", image: "wiki:Cape Coast Castle" },
      { name: "Kakum National Park", pics: ["26ux4i", "237ze7", "23lc1w", "23lc25", "237ze9", "23lc20"], add: ["1bm2rx8", "5lgmxq", "1owzrgu", "cwgyny", "bmz50u", "7cq65z", "gelwa"], skip: ["y2c4p4", "v6ob4a", "wmx76w", "18e4bp7", "1fbf1mb", "mthox1"], lat: 5.3500, lng: -1.3833, category: "Nature", sound: "rainforest", zoom: 11,
        tagline: "A walk above the rainforest",
        description: "A rainforest reserve inland from Cape Coast, famous for a canopy walkway of rope bridges hung about 40 metres above the forest floor between giant trees.",
        bestTime: "Nov–Mar", image: "wiki:Kakum National Park" },
      { name: "Accra", pics: ["1a7f85", "24ytiq", "1a7fct", "24ytj8", "j5sue", "2ftf45", "36mtqk"], add: ["181h4p2", "1yqyubt", "1fow2g4", "17oljn5", "1g286wh", "1xq8w5u", "1do2mjr", "16248gl", "19caq66"], skip: ["qgu64v", "1ys3dob", "do59hw"], lat: 5.5600, lng: -0.2050, category: "City", sound: "city", zoom: 13,
        tagline: "Ghana's buzzing capital",
        description: "Ghana's capital mixes busy markets like Makola, the fishing harbour of Jamestown with its lighthouse, and beaches like Labadi. Independence Square and its Black Star Gate mark Ghana's independence in 1957, one of the first in sub-Saharan Africa.",
        bestTime: "Nov–Mar", image: "wiki:Accra" }
    ]
  },
  {
    id: "384", name: "Côte d'Ivoire", region: "Africa", soundProfile: "city",
    summary: "One of the largest churches in the world, and a lagoon city of skyscrapers.",
    hero: "wiki:Basilica of Our Lady of Peace",
    places: [
      { name: "Basilica of Our Lady of Peace", pics: ["2glw7z", "1wayur", "2glw8o", "2glw7f", "2glw7u"], lat: 6.8122, lng: -5.2969, category: "Culture", sound: "temple", zoom: 16,
        tagline: "A St Peter's in the savanna",
        description: "Completed in 1989 in Yamoussoukro, the basilica was modelled on St Peter's in Rome and is one of the largest churches in the world, its dome rising about 158 metres over a quiet town.",
        bestTime: "Nov–Feb", image: "wiki:Basilica of Our Lady of Peace" },
      { name: "Abidjan", pics: ["1ncd2z", "j5kdm", "j5kes", "sqd40", "33zadd", "11r5d1", "2adnmq", "t1j7w"], add: ["itq1dx", "cyvlhf", "u386lr", "18o97jq", "108rltr", "1wp92sp", "1v1bnsd", "a7jjay", "15247d1", "1xfmnlu"], skip: ["ts6m31"], lat: 5.3200, lng: -4.0300, category: "City", sound: "metropolis", zoom: 12,
        tagline: "The Manhattan of West Africa",
        description: "Built around the Ébrié Lagoon, Abidjan's Plateau business district is a cluster of towers, including the striking St. Paul's Cathedral. Down the coast, the old colonial capital of Grand-Bassam has faded French buildings and beaches.",
        bestTime: "Nov–Feb", image: "wiki:Abidjan" }
    ]
  },
  {
    id: "854", name: "Burkina Faso", region: "Africa", soundProfile: "desert",
    summary: "Painted houses of the Kassena people.",
    hero: "wiki:Royal Court of Tiébélé",
    places: [
      { name: "Tiébélé", pics: ["axm46", "sm6wa", "sm69m", "sm6w4", "1xkllf", "2iyc0h"], skip: ["svnwhr"], lat: 11.0953, lng: -0.9636, category: "Culture", sound: "desert", zoom: 14,
        tagline: "Houses painted by hand",
        description: "In the royal court of Tiébélé, near the border with Ghana, the Kassena people paint the walls of their round and square mud houses with geometric patterns in red, black and white, applied by the women of the village.",
        bestTime: "Nov–Feb", image: "wiki:Royal Court of Tiébélé" }
    ]
  },
  {
    id: "430", name: "Liberia", region: "Africa", soundProfile: "ocean",
    summary: "Surf breaks on an empty coast backed by rainforest.",
    hero: "wiki:Robertsport",
    places: [
      { name: "Robertsport", pics: ["4x9p5"], add: ["7j6gz8"], skip: ["12mua89", "1xe8ca", "10ku086"], lat: 6.7533, lng: -11.3686, category: "Beach", sound: "ocean", zoom: 13,
        tagline: "West Africa's surf town",
        description: "A small town on a peninsula near the border with Sierra Leone, Robertsport has long left-hand point breaks that have made it a destination for surfers, and quiet beaches backed by forest and a lake.",
        bestTime: "Nov–Apr", image: "wiki:Robertsport" }
    ]
  },
  {
    id: "694", name: "Sierra Leone", region: "Africa", soundProfile: "ocean",
    summary: "A capital between green hills and the sea, and quiet islands off the Freetown Peninsula.",
    hero: "wiki:Banana Islands",
    places: [
      { name: "Banana Islands", pics: ["iau76", "1qedb0"], lat: 8.1167, lng: -13.2167, category: "Beach", sound: "ocean", zoom: 13,
        tagline: "Islands off the Freetown Peninsula",
        description: "A small group of islands off the tip of the Freetown Peninsula, with palm-shaded coves, coral reefs and fishing villages. On the mainland nearby are long white beaches such as River Number Two.",
        bestTime: "Nov–Apr", image: "wiki:Banana Islands" },
      { name: "Freetown", pics: ["v5s5a", "ne6yb", "lum98", "v5sef"], add: ["sd0ulh", "jcdyen", "33a8zm"], skip: ["14wgd7y", "w87k1t", "1gekdk9", "a9b8gd"], lat: 8.4844, lng: -13.2344, category: "City", sound: "city", zoom: 12,
        tagline: "A capital between hills and beaches",
        description: "Sierra Leone's capital spreads between forested hills and the Atlantic on the Freetown Peninsula. It was founded in 1792 as a settlement for freed slaves, and long sandy beaches such as Lumley Beach line its western edge.",
        bestTime: "Nov–Apr", image: "wiki:Freetown" }
    ]
  },
  {
    id: "324", name: "Guinea", region: "Africa", soundProfile: "mountains",
    summary: "A green highland of waterfalls where West Africa's great rivers begin.",
    hero: "file:Paysage du foutah.jpg",
    places: [
      { name: "Fouta Djallon", pics: ["zwm7q", "zwm7v", "zwm7m", "zwm72", "3acqna", "3acqno", "3acqo5", "1zbb6q", "1zbb75"], add: ["2lwt9b", "8kmuxm"], skip: ["9vigko", "1fjmupp", "11kpgg5"], lat: 11.3167, lng: -12.3000, category: "Nature", sound: "mountains", zoom: 9,
        tagline: "The water tower of West Africa",
        description: "A highland of grassy plateaus, cliffs and waterfalls in central Guinea, where the Gambia and Senegal rivers rise. Hikes lead between villages to waterfalls like the Voile de la Mariée and natural rock bridges.",
        bestTime: "Nov–Apr", image: "file:Paysage du foutah.jpg", wiki: "Fouta Djallon" }
    ]
  },
  {
    id: "624", name: "Guinea-Bissau", region: "Africa", soundProfile: "ocean",
    summary: "An archipelago of mangroves, empty beaches and saltwater hippos.",
    hero: "file:Bubaque Bruce Beach.jpg",
    places: [
      { name: "Bijagós Islands", pics: ["6ufy1", "2uvt9m", "2uv5o2", "2uv2jt", "qake1", "2v1p7p"], skip: ["1h8eewn", "b57t3e", "wllakv", "1yf4wdb", "18n3dg7", "aeclzj", "1evgmxz", "1a1y40x", "ld0qdg"], lat: 11.2500, lng: -16.0000, category: "Beach", sound: "ocean", zoom: 9,
        tagline: "An archipelago of mangroves and hippos",
        description: "A group of about 88 islands off the coast, many uninhabited, with mangroves, white beaches and palm forests. It is a UNESCO biosphere reserve where sea turtles nest and hippos swim in salt water.",
        bestTime: "Nov–May", image: "file:Bubaque Bruce Beach.jpg", wiki: "Bijagós Islands" }
    ]
  },
  {
    id: "686", name: "Senegal", region: "Africa", soundProfile: "ocean",
    summary: "A pastel island with a dark history, a pink lake, a colonial river town, and a capital of music.",
    hero: "wiki:Gorée",
    places: [
      { name: "Gorée", pics: ["25l1h2", "25l1h4"], add: ["1hj9e7j", "1yf2i8b", "18m42m5", "1juq6o6", "1sul7ol", "1of8gza", "u04zj5", "rs2dvb", "mb89nt"], skip: ["1rw0yg1", "188be4k", "oziaoj", "rx2upw", "uo7xyn", "6w741e"], lat: 14.6672, lng: -17.3983, category: "Historical", sound: "ocean", zoom: 16,
        tagline: "An island of memory",
        description: "A small car-free island off Dakar with pastel colonial houses and bougainvillea, Gorée was a centre of the Atlantic slave trade, and its House of Slaves is a memorial to the people taken from Africa.",
        bestTime: "Nov–May", image: "wiki:Gorée" },
      { name: "Lake Retba", pics: ["18ij42", "26vqd1", "35zaid", "35zahp"], add: ["5pobwt"], lat: 14.8383, lng: -17.2448, category: "Nature", sound: "ocean", zoom: 13,
        tagline: "The pink lake",
        description: "Separated from the Atlantic by narrow dunes, Lake Retba turns pink thanks to algae that thrive in its salty water, most strongly in the dry season. Salt collectors wade in up to their shoulders to harvest salt from its bed.",
        bestTime: "Nov–Jun", image: "wiki:Lake Retba" },
      { name: "Saint-Louis", pics: ["vmv7p", "3avsvh", "3avsvg", "2rkdlp", "379y5e", "1dturp"], add: ["py9jhb", "abnhbp", "1apguua", "1jlazic", "1qmxe4t"], skip: ["1r6o2y8", "2rkcv6", "kg9t3v"], lat: 16.0300, lng: -16.5000, category: "Historical", sound: "city", zoom: 14,
        tagline: "A colonial island town",
        description: "The former capital of French West Africa, Saint-Louis is built on an island in the Senegal River, reached by the iron Faidherbe Bridge. Its colonial houses with balconies are a UNESCO World Heritage Site, and colourful fishing pirogues line the shore.",
        bestTime: "Nov–May", image: "wiki:Saint-Louis, Senegal", wiki: "Saint-Louis, Senegal" },
      { name: "Dakar", pics: ["bkvoo", "1qq8zq", "b4aed", "1grmro", "6qj4g", "b4088", "ymgc9", "1xh3h4"], add: ["gxfazl", "6auh5f", "4ug9qh", "jo7zl6", "12qyq9", "1x0rm4f", "v1tc4g", "uthwmb", "1jych8q", "1jba0vi"], skip: ["3oq406", "y7o1y3", "e741oe"], lat: 14.6928, lng: -17.4467, category: "City", sound: "city", zoom: 12,
        tagline: "At the westernmost tip of Africa",
        description: "Senegal's capital sits on the Cap-Vert peninsula, the westernmost point of mainland Africa, with ocean views, surf spots and a famous music scene. On a hill above the city, the African Renaissance Monument is a 49-metre bronze statue, one of the tallest in Africa.",
        bestTime: "Nov–May", image: "wiki:Dakar" }
    ]
  },
  {
    id: "270", name: "Gambia", region: "Africa", soundProfile: "jungle",
    summary: "A narrow country along a great river, with an island that holds a story of the slave trade.",
    hero: "wiki:Kunta Kinteh Island",
    places: [
      { name: "Kunta Kinteh Island", pics: ["6906m", "y6zcl", "6904v", "ydmd0", "y6p1l"], lat: 13.3167, lng: -16.3667, category: "Historical", sound: "jungle", zoom: 15,
        tagline: "Ruins in the Gambia River",
        description: "A small island in the Gambia River with the ruins of a fort used in the slave trade, renamed after Kunta Kinte, the ancestor described in Alex Haley's book Roots. The river around it is lined with mangroves and birdlife.",
        bestTime: "Nov–May", image: "wiki:Kunta Kinteh Island" }
    ]
  },
  {
    id: "132", name: "Cabo Verde", region: "Africa", soundProfile: "ocean",
    summary: "Volcanic Atlantic islands, from a cone with a village in its crater to green ridges and white beaches.",
    hero: "wiki:Fogo, Cape Verde",
    places: [
      { name: "Fogo", pics: ["b5rx4", "b5z6b", "b5z5z"], add: ["1cily7w", "qmz0vi", "8jo4bj", "bcqwtz", "mcq20n", "12jpgi1", "zdu8ou", "18j6lrz", "15daf34", "p2qe80"], skip: ["iiln28", "jl97q8"], lat: 14.9500, lng: -24.3500, category: "Mountain", sound: "mountains", zoom: 11,
        tagline: "A village inside a volcano",
        description: "The island of Fogo is one huge volcano rising to 2,829 metres at Pico do Fogo, with a village and vineyards inside its giant crater. Its last eruption, in 2014 and 2015, buried part of the village under lava.",
        bestTime: "Nov–Jun", image: "wiki:Fogo, Cape Verde", wiki: "Fogo, Cape Verde" },
      { name: "Santo Antão", pics: ["1xnuth", "ynq94", "1jfx0g", "20giac", "ynqq4", "ynqq5", "22grpp", "ynqk6", "22grpo", "1zuq2s", "ynqk8"], add: ["1q67f7o", "hdgff7", "5oh42x"], skip: ["b64x68"], lat: 17.0667, lng: -25.1667, category: "Nature", sound: "mountains", zoom: 10,
        tagline: "Green ridges above the Atlantic",
        description: "The most mountainous of the islands, Santo Antão has deep green valleys, terraced farms and cobbled paths that drop down knife-edge ridges to the ocean, making it the best hiking in the archipelago.",
        bestTime: "Nov–Jun", image: "file:Coastline Santo Antao.JPG", wiki: "Santo Antão, Cape Verde" },
      { name: "Sal", pics: ["1tjw2", "l098z", "1jler", "1r90t", "5mlta"], add: ["170s3q", "eoqbhf", "1mlg62o", "ie31h4", "20jcbq", "4yotr4", "1e9ojsv", "qhymiv", "1hxzuqa", "qx8zn2"], skip: ["a4t1lk", "1g0qyn1", "1p439rk", "3burew", "1co2ac4"], lat: 16.7500, lng: -22.9333, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "Sun, salt and kitesurfing",
        description: "A flat, dry island with long white beaches at Santa Maria, constant trade winds that make it a kitesurfing spot, and an old volcanic crater filled with salt pans where you can float in the brine.",
        bestTime: "Nov–Jun", image: "file:Pedra Lume CV.jpg", wiki: "Sal, Cape Verde" }
    ]
  },
  {
    id: "024", name: "Angola", region: "Africa", soundProfile: "jungle",
    summary: "One of Africa's largest waterfalls, and a capital on a long bay.",
    hero: "wiki:Kalandula Falls",
    places: [
      { name: "Kalandula Falls", pics: ["25f9s5", "c0fsz", "c0g5e"], add: ["1ex8xu4"], skip: ["1pamgx1"], lat: -9.0744, lng: 16.0000, category: "Nature", sound: "jungle", zoom: 13,
        tagline: "A horseshoe of water",
        description: "On the Lucala River, the Kalandula Falls drop about 105 metres over a wide horseshoe of rock, one of the largest waterfalls in Africa by volume, especially at the end of the rainy season.",
        bestTime: "Apr–May", image: "wiki:Kalandula Falls" },
      { name: "Luanda", pics: ["1guehs", "8uc6l", "f6bz0", "f6bz6", "ztc8v", "ztc7y", "ztc78", "ztc7o", "ztc8e"], add: ["1tu89hf", "4i51n", "1y1tz5k", "y1s3jj", "3b8kjq", "1flw6av", "10lnl1v", "onbnkv"], skip: ["1gjcp59", "l63g5n", "1tu89hf"], lat: -8.8383, lng: 13.2344, category: "City", sound: "city", zoom: 12,
        tagline: "A capital on a long bay",
        description: "Angola's capital curves around a bay lined by a palm-shaded seafront promenade, with the old Portuguese Fortress of São Miguel on the hill. The Ilha, a long sandbar, is lined with beach bars and restaurants.",
        bestTime: "Jun–Sep", image: "wiki:Luanda" }
    ]
  },
  {
    id: "894", name: "Zambia", region: "Africa", soundProfile: "jungle",
    summary: "The smoke that thunders, and the walking safari's birthplace.",
    hero: "wiki:Victoria Falls",
    places: [
      { name: "Victoria Falls", pics: ["36u6a5", "36qnb2", "1fwke1", "9ck49"], add: ["c9dpkh", "avpl3y", "dy9ck1", "frbluh", "z6ug0o", "pqu9b7", "n5whxc", "co33l8"], skip: ["1poyp5h", "13lru3q", "wrr2sv", "4ytxtn"], lat: -17.9243, lng: 25.8572, category: "Nature", sound: "jungle", zoom: 13,
        tagline: "The smoke that thunders",
        description: "On the border with Zimbabwe, the Zambezi River drops 108 metres over a basalt cliff about 1.7 kilometres wide, the largest curtain of falling water in the world. In the dry season, people swim in the Devil's Pool right at the edge.",
        bestTime: "Feb–May (peak flow), Aug–Dec (Devil's Pool)", image: "wiki:Victoria Falls" },
      { name: "South Luangwa", pics: ["as2jg"], add: ["1xlvfjn", "evgojk", "1eciwto", "a4hmls", "1ja9i", "1uruz15", "cgk46q", "1a3mwq2"], skip: ["6adqf4"], lat: -13.0833, lng: 31.5500, category: "Nature", sound: "jungle", zoom: 9,
        tagline: "Leopards and walking safaris",
        description: "Along the Luangwa River, South Luangwa National Park is known for leopards, big herds of elephant and buffalo, and hippos crowded in the river. It is where walking safaris began.",
        bestTime: "Jun–Oct", image: "wiki:South Luangwa National Park", wiki: "South Luangwa National Park" }
    ]
  },
  {
    id: "716", name: "Zimbabwe", region: "Africa", soundProfile: "jungle",
    summary: "The Zimbabwe side of Victoria Falls, the stone ruins that gave the country its name, and wild Zambezi floodplains.",
    hero: "wiki:Great Zimbabwe",
    places: [
      { name: "Victoria Falls", pics: ["spsxr", "ahqwl", "nwxl", "1ydgv0", "kgooj", "spsjl", "181ubq", "181udj", "1xooj8"], add: ["691zo5", "186994g", "1483pj", "vlev0a", "1tmxawi", "1pbr1fn", "3ndwdc", "4ytxtn", "1h3y16q", "kk1abf"], skip: ["v0nfxh"], lat: -17.9300, lng: 25.8400, category: "Nature", sound: "jungle", zoom: 13, wiki: "Victoria Falls",
        tagline: "The falls from the rainforest side",
        description: "Most of the width of Victoria Falls faces the Zimbabwe side, where a path through the spray-fed rainforest opposite the falls leads to viewpoints like Danger Point. The Victoria Falls Bridge, opened in 1905, spans the gorge to Zambia.",
        bestTime: "Feb–Jul", image: "wiki:Victoria Falls Bridge" },
      { name: "Great Zimbabwe", pics: ["1d9krr", "1d9ks0", "239fgp", "1d9ks2"], add: ["zyt5eg", "y18epd", "v9xnn7", "d1xhin", "1tzi507", "14mg9ru", "1q6paut", "1skr3q1"], lat: -20.2675, lng: 30.9339, category: "Historical", sound: "temple", zoom: 15,
        tagline: "A city of stone",
        description: "The capital of a trading kingdom between the 11th and 15th centuries, Great Zimbabwe's Great Enclosure has curved granite walls up to 11 metres high, built without mortar. It is the largest ancient structure south of the Sahara.",
        bestTime: "Apr–Oct", image: "wiki:Great Zimbabwe" },
      { name: "Mana Pools", add: ["mbhjr4", "j2tqdn"], lat: -15.7500, lng: 29.3333, category: "Nature", sound: "jungle", zoom: 10,
        tagline: "Elephants on the Zambezi",
        description: "On the floodplain of the Zambezi, Mana Pools is famous for elephants reaching up on their hind legs to feed in the trees, and for allowing visitors to walk among wildlife without a vehicle.",
        bestTime: "Jun–Oct", image: "wiki:Mana Pools National Park" },
      { name: "Hwange National Park", pics: ["1dmi1l", "1dmi15", "1dmi0q", "1dmi0e", "2yllv2", "1dmi10", "1dmi0c", "19hjyc"], skip: ["1cbqma8", "oob83u", "1e1fjra", "kk69s7"], lat: -18.7350, lng: 26.9550, category: "Nature", sound: "jungle", zoom: 9,
        tagline: "Elephant country",
        description: "Zimbabwe's largest park has one of the biggest elephant populations in Africa, with tens of thousands gathering at its waterholes in the dry season, along with lions, wild dogs and huge herds of buffalo.",
        bestTime: "Jul–Oct", image: "wiki:Hwange National Park" }
    ]
  },
  {
    id: "454", name: "Malawi", region: "Africa", soundProfile: "ocean",
    summary: "A clear freshwater lake with beaches and colourful fish, and a granite massif above tea estates.",
    hero: "wiki:Lake Malawi",
    places: [
      { name: "Lake Malawi", pics: ["de07q", "de07n", "de08u", "de08j", "de07u", "1tsry", "ymhuy", "ymhuz", "de08f"], add: ["139a7cy", "hrzy3z"], skip: ["1a28l75", "19r8nu8", "1sns1i2", "1l8z99b", "m7jg17"], lat: -14.0333, lng: 34.8833, category: "Beach", sound: "ocean", zoom: 10,
        tagline: "The lake of stars",
        description: "Lake Malawi stretches over 500 kilometres along the Rift Valley, its clear water home to hundreds of species of brightly coloured cichlid fish. At Cape Maclear, part of the Lake Malawi National Park, you can snorkel among them from the beach.",
        bestTime: "May–Oct", image: "wiki:Lake Malawi" },
      { name: "Mount Mulanje", pics: ["dcizl", "yinkp", "yinkt", "yink2", "yinkg", "yinkr", "yinji", "yinjt", "xd60f"], skip: ["5o2an1", "mxt7dg", "nkmlgx", "18shfxy", "1hh1yb3"], lat: -15.9500, lng: 35.6000, category: "Mountain", sound: "mountains", zoom: 11,
        tagline: "An island in the sky",
        description: "A granite massif rising abruptly from tea plantations to 3,002 metres at Sapitwa Peak, Malawi's highest peak. Trails lead to mountain huts, waterfalls and forests of Mulanje cedar.",
        bestTime: "May–Oct", image: "wiki:Mulanje Massif" }
    ]
  },
  {
    id: "508", name: "Mozambique", region: "Africa", soundProfile: "ocean",
    summary: "Turquoise islands and sandbanks in the Indian Ocean, and a historic island town.",
    hero: "file:Bazaruto Island Mozambique from air.jpg",
    places: [
      { name: "Bazaruto Archipelago", pics: ["2ibn55", "299eia", "2wm1z1", "1qz0my", "1qz0ng"], add: ["1slo5i8", "11ndrn", "g1ae42"], skip: ["1rmv2bs"], lat: -21.6667, lng: 35.4500, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "Dunes in a turquoise sea",
        description: "Off Mozambique's coast, Bazaruto's islands have giant sand dunes rolling into clear turquoise water, coral reefs and sandbanks. It is one of the last places in the western Indian Ocean where dugongs still live.",
        bestTime: "May–Nov", image: "file:Bazaruto Island Mozambique from air.jpg", wiki: "Bazaruto Archipelago" },
      { name: "Island of Mozambique", pics: ["1qz0gw", "kz42u", "4zgra", "11p1n2"], add: ["vgxemd", "1w4gb42"], skip: ["1cn06no", "153z376"], lat: -15.0367, lng: 40.7328, category: "Historical", sound: "ocean", zoom: 15,
        tagline: "The old capital on a coral island",
        description: "A small coral island that was the capital of Portuguese East Africa for nearly four centuries, with a stone town of churches, palaces and the 16th-century Fort of São Sebastião, and a reed town where most people live. It gave the country its name.",
        bestTime: "May–Nov", image: "wiki:Island of Mozambique" }
    ]
  },
  {
    id: "072", name: "Botswana", region: "Africa", soundProfile: "jungle",
    summary: "A delta in the desert, elephant herds on the Chobe River, and salt pans that stretch to the horizon.",
    hero: "wiki:Okavango Delta",
    places: [
      { name: "Okavango Delta", pics: ["19403r", "194047", "2tceb", "g2t3", "2tcdf", "194063", "2tcee", "194060"], add: ["1ae742t", "1n96gt7", "1yrw9iv", "1hrniy2", "z6lx3s", "1w8kdlc", "1j30gvt", "12vewkw", "go1zgf", "5dhqm7", "1cq2khw"], skip: ["1qrz3dm"], lat: -19.3000, lng: 22.9000, category: "Nature", sound: "jungle", zoom: 9,
        tagline: "A river that never reaches the sea",
        description: "The Okavango River spreads out into the Kalahari and disappears, creating a huge maze of channels, lagoons and islands that floods each winter. Guides pole visitors through the reeds in dugout canoes called mokoros past elephants, hippos and lions.",
        bestTime: "Jun–Oct", image: "wiki:Okavango Delta" },
      { name: "Chobe National Park", pics: ["epd5g", "1x4p9h", "198f6v", "198f6w", "198f6y"], add: ["nfg7d3", "ivenr4", "a44k1z", "4tdeyz", "18dfemn", "14vri9n", "x64r80", "1r86jhr", "1lhjd5b", "10yzz59"], skip: ["hft9e0", "mqo1bs", "11looe0"], lat: -18.6667, lng: 24.5000, category: "Nature", sound: "jungle", zoom: 9,
        tagline: "The elephant river",
        description: "Chobe has one of the largest concentrations of elephants in Africa, and in the dry season herds come down to the Chobe River to drink and swim, best seen from a boat at sunset.",
        bestTime: "May–Oct", image: "wiki:Chobe National Park" },
      { name: "Makgadikgadi Pans", pics: ["2w9qed", "299sdf", "1th9n9", "1th9ny", "1th9no", "1th9ns"], add: ["1nagg7f", "1nfqdn1"], skip: ["1aerlth", "r9jy76"], lat: -20.7500, lng: 25.5000, category: "Nature", sound: "desert", zoom: 9,
        tagline: "A sea of salt",
        description: "The remains of an ancient lake, the Makgadikgadi are among the largest salt flats in the world, white and empty in the dry season. After the rains they fill with water, drawing flamingos and zebra migrations.",
        bestTime: "May–Oct (dry), Dec–Mar (flamingos)", image: "wiki:Makgadikgadi Pan", wiki: "Makgadikgadi Pan" }
    ]
  },
  {
    id: "426", name: "Lesotho", region: "Africa", soundProfile: "mountains",
    summary: "A kingdom in the sky, with one of the highest waterfalls in southern Africa.",
    hero: "wiki:Maletsunyane Falls",
    places: [
      { name: "Maletsunyane Falls", pics: ["3bz8tt", "3by2z6", "3byr97", "3byr2y", "3bz7k6", "3bzbd8", "3bzgqd", "ayk8q", "3c0x6l", "3c0x6k"], lat: -29.8667, lng: 28.0500, category: "Nature", sound: "mountains", zoom: 13,
        tagline: "A waterfall in the highlands",
        description: "Near the town of Semonkong, the Maletsunyane River drops about 192 metres into a deep gorge in a single fall. All of Lesotho lies above 1,400 metres, the highest low point of any country in the world.",
        bestTime: "Dec–Apr (flow), Jun–Aug (frozen)", image: "wiki:Maletsunyane Falls" },
      { name: "Sani Pass", pics: ["24ak0p", "10u302", "1wdnu", "398y9h"], add: ["zdj5cq", "133mh9u", "iuzyjc"], skip: ["1iz8lxs", "hx7eaj", "1wzyb8o", "6werb1", "1fpj6z6", "19fx81e", "1m13gnz", "1dh2vfn", "o1udab", "zogixx"], lat: -29.5867, lng: 29.2900, category: "Mountain", sound: "mountains", zoom: 12,
        tagline: "The road to the roof of Africa",
        description: "A steep, winding road that climbs from South Africa up the Drakensberg escarpment into Lesotho, reaching 2,876 metres. A four-wheel drive is required to cross it.",
        bestTime: "Mar–May, Sep–Nov", image: "wiki:Sani Pass" }
    ]
  },
  {
    id: "748", name: "Eswatini", region: "Africa", soundProfile: "jungle",
    summary: "A small mountain kingdom with wildlife sanctuaries and royal festivals.",
    hero: "wiki:Mlilwane Wildlife Sanctuary",
    places: [
      { name: "Mlilwane Wildlife Sanctuary", pics: ["lr6v9", "13crtx"], add: ["15m646x", "1eovoz1", "1el5ie4", "fqwhkh", "ubvblo", "frkfhs"], skip: ["w24xrf"], lat: -26.4833, lng: 31.2000, category: "Nature", sound: "jungle", zoom: 12,
        tagline: "Walking among zebra",
        description: "In the Ezulwini Valley, Mlilwane was Eswatini's first protected area, where you can walk, cycle or ride horses among zebra, antelope and warthogs, below the granite cliffs of Execution Rock.",
        bestTime: "May–Sep", image: "wiki:Mlilwane Wildlife Sanctuary" }
    ]
  },
  {
    id: "450", name: "Madagascar", region: "Africa", soundProfile: "rainforest",
    summary: "An island of baobabs, lemurs and limestone needles, found nowhere else on Earth.",
    hero: "wiki:Avenue of the Baobabs",
    places: [
      { name: "Avenue of the Baobabs", pics: ["26bo3k", "yb84v", "q1byc", "180j91", "8lz62", "o8wyu"], add: ["fssm8t", "fk0zaq", "1avw012", "145wbow", "vlmrsx", "1ckbnpw"], lat: -20.2508, lng: 44.4183, category: "Nature", sound: "desert", zoom: 15,
        tagline: "Giants at sunset",
        description: "A dirt road near Morondava lined with Grandidier's baobabs up to 30 metres tall and hundreds of years old, the last of a forest that once covered the area. At sunrise and sunset their silhouettes glow red.",
        bestTime: "Apr–Nov", image: "wiki:Avenue of the Baobabs" },
      { name: "Tsingy de Bemaraha", pics: ["27qqf", "26bq5k", "26bqej", "2mkt3", "26bqb7", "26bqhj", "2mish", "qj2oq"], add: ["1jy0vmc"], lat: -18.6667, lng: 44.7500, category: "Nature", sound: "rainforest", zoom: 10,
        tagline: "A forest of limestone needles",
        description: "A UNESCO World Heritage Site where rainwater has carved limestone into razor-sharp pinnacles, crossed by rope bridges and ladders. Lemurs live in the forest in the gorges below.",
        bestTime: "May–Nov", image: "wiki:Tsingy de Bemaraha National Park", wiki: "Tsingy de Bemaraha National Park" },
      { name: "Nosy Be", pics: ["18v2u7", "374vwp", "374j5x", "374vx4", "374j60"], add: ["ly1jmc", "4qqp74", "6umngo", "o6p8w8", "3khobh", "1hsnn3x"], skip: ["92gts1", "16i1q4", "93j6fg", "100bmow", "1330eh"], lat: -13.3333, lng: 48.2667, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "The perfume island",
        description: "A volcanic island off the northwest coast, scented by ylang-ylang plantations, with beaches, coral reefs and nearby islets. Whale sharks and humpback whales pass through its waters.",
        bestTime: "Apr–Dec", image: "file:Couché de soleil sur la plage de Nosy Be Hell ville.jpg", wiki: "Nosy Be" },
      { name: "Andasibe-Mantadia", pics: ["1ag1mn", "qvcuo", "15rlmh", "2n07nr", "1961bs", "1kdp7o", "2ho49e", "2hnl6x"], add: ["125etlt", "19nlvyd"], skip: ["134zoqk"], lat: -18.9333, lng: 48.4167, category: "Nature", sound: "rainforest", zoom: 11,
        tagline: "The call of the indri",
        description: "A misty rainforest east of the capital, home to the indri, the largest living lemur, whose eerie song carries through the forest every morning, along with chameleons and many other lemurs.",
        bestTime: "Sep–Dec", image: "wiki:Andasibe-Mantadia National Park", wiki: "Andasibe-Mantadia National Park" }
    ]
  },
  {
    id: "480", name: "Mauritius", region: "Africa", soundProfile: "ocean",
    summary: "Turquoise lagoons around a volcanic island, a mountain with a dark history, and sands of seven colours.",
    hero: "wiki:Le Morne Brabant",
    places: [
      { name: "Le Morne Brabant", pics: ["2g52vf", "2g52vm", "zh9at", "1g6hfh", "xx8y6", "2ksgl5", "2g52vp"], add: ["8ns8vb", "xnhhol", "z109rr", "1dv5d8c", "a61zur", "1i9iu2r", "125n174", "j2k7p0"], skip: ["1wbijjq", "17mfcq7"], lat: -20.4500, lng: 57.3167, category: "Nature", sound: "ocean", zoom: 13,
        tagline: "A mountain above the lagoon",
        description: "A basalt mountain on the southwest tip of Mauritius, surrounded by a turquoise lagoon and some of the island's best beaches. Runaway slaves once hid on its summit, and it is now a UNESCO World Heritage Site.",
        bestTime: "May–Dec", image: "wiki:Le Morne Brabant" },
      { name: "Chamarel", pics: ["2g52wt"], add: ["34rt0s", "yzuntq", "1tqg2gn", "1nmhr8c", "k4qi1j"], lat: -20.4300, lng: 57.3800, category: "Nature", sound: "jungle", zoom: 14,
        tagline: "Seven-coloured earth",
        description: "In the hills of the southwest, the Seven Coloured Earths are rolling dunes of volcanic soil in shades of red, brown, violet and blue. Nearby, the Chamarel Waterfall drops about 100 metres into the forest.",
        bestTime: "May–Dec", image: "wiki:Seven Coloured Earths", wiki: "Chamarel" }
    ]
  },
  {
    id: "690", name: "Seychelles", region: "Africa", soundProfile: "ocean",
    summary: "Granite boulders on white beaches, and a valley of giant palms.",
    hero: "wiki:Anse Source d'Argent",
    places: [
      { name: "La Digue", pics: ["2a1bj", "2a0yt", "2afca", "2a19o", "303u7x", "303u7d", "30lvse"], add: ["bxwuti", "19swzao", "1o3kxje", "8ossb7", "o7lbl3", "1pfvaq6", "h6ifwz", "f6j4is", "1v2zc7v"], skip: ["lliw45"], lat: -4.3500, lng: 55.8333, category: "Beach", sound: "ocean", zoom: 13,
        tagline: "Pink granite and white sand",
        description: "A small island where bicycles and ox carts outnumber cars, La Digue is home to Anse Source d'Argent, a beach of giant pink granite boulders and shallow turquoise water that is one of the most photographed in the world.",
        bestTime: "Apr–May, Oct–Nov", image: "wiki:Anse Source d'Argent", wiki: "La Digue" },
      { name: "Vallée de Mai", pics: ["2ztw9o", "2ztw9p", "2ztw9n", "2l69a1", "2zgtbz", "2zgtbx", "2zgtby", "2m112c"], add: ["3qvpru", "4an3br", "1fqj18l", "1yei815"], lat: -4.3333, lng: 55.7333, category: "Nature", sound: "rainforest", zoom: 14,
        tagline: "The garden of Eden",
        description: "A palm forest on Praslin, the Vallée de Mai is the only place where the coco de mer grows wild in large numbers, a palm with the heaviest seed in the plant kingdom. Rare black parrots live in the canopy.",
        bestTime: "Apr–May, Oct–Nov", image: "wiki:Vallée de Mai" }
    ]
  },
  {
    id: "174", name: "Comoros", region: "Africa", soundProfile: "ocean",
    summary: "Volcanic islands of vanilla and ylang-ylang, under one of the world's largest active craters.",
    hero: "wiki:Mount Karthala",
    places: [
      { name: "Mount Karthala", pics: ["1dx53q", "1p456f", "1e9qef", "q3s8", "1p456n"], skip: ["1bj43s0"], lat: -11.7500, lng: 43.3500, category: "Mountain", sound: "mountains", zoom: 11,
        tagline: "A giant crater above the sea",
        description: "An active volcano rising 2,361 metres over Grande Comore, Karthala has one of the largest craters of any active volcano. Below it, the capital Moroni has an old Arab town and a white mosque on the harbour.",
        bestTime: "May–Oct", image: "wiki:Mount Karthala" }
    ]
  },
  {
    id: "010", name: "Antarctica", region: "Antarctica", soundProfile: "ocean",
    summary: "The white continent: icebergs, glaciers and penguins at the bottom of the world.",
    hero: "file:Cruise ship Le Lyrial off Anvers Island, Antarctica V-P.jpg",
    places: [
      { name: "Antarctic Peninsula", pics: ["18smcp", "ejwqf", "18sl7h", "y77fy", "ejwrj", "1y7jvy", "1laegc", "9n59u", "1gzx27", "18sjgv", "y6sjx", "ejws9", "ejwqk", "ejxhw"], add: ["1k9dif2", "1v211qi", "jmc2v6", "1n5e06r", "12438zm", "zfys5p", "1leagh2", "1rpi5k4", "16lxd8h"], skip: ["cem1pc", "15ba4zh", "3rsm8e", "36i8dm", "1eq8vsp"], lat: -64.8000, lng: -62.9000, category: "Nature", sound: "ocean", zoom: 6,
        tagline: "Icebergs and penguins",
        description: "The most visited part of Antarctica reaches north toward South America, a land of glaciers, icebergs and mountains rising from the sea. Expedition ships sail narrow passages like the Lemaire Channel and land among colonies of gentoo and Adélie penguins.",
        bestTime: "Nov–Mar", image: "file:Cruise ship Le Lyrial off Anvers Island, Antarctica V-P.jpg", more: ["Lemaire Channel"], wiki: "Antarctic Peninsula" }
    ]
  }
] };
