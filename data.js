/* Atlas dataset
   countries -> places. Edit freely: the app reads everything from here.

   Country: { id, name, region, summary, soundProfile, hero, places }
     id            ISO 3166-1 numeric code as a string (matches the map boundaries)
     soundProfile  space | jungle | ocean | rainforest | city | metropolis | desert | mountains | temple
     hero          image for the country header (same format as place.image)

   Place: { name, lat, lng, category, tagline, description, bestTime, image, sound?, zoom? }
     category      City | Nature | Historical | Beach | Mountain | Culture
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
      { name: "Cancún", lat: 21.1619, lng: -86.8515, category: "Beach", sound: "ocean",
        tagline: "Caribbean turquoise on the Yucatán coast",
        description: "A long ribbon of white sand separates the Caribbean from Nichupté Lagoon, and the water on the sea side is a blue so bright it looks retouched. Days are for snorkelling the Mesoamerican Reef, the second-largest barrier reef on Earth, or taking the 20-minute ferry to slow, sandy Isla Mujeres. After dark the Hotel Zone turns loud, warm and unapologetically festive.",
        bestTime: "Dec–Apr (dry season)", image: "wiki:Cancún", more: ["Isla Mujeres"] },
      { name: "Mexico City", lat: 19.4326, lng: -99.1332, category: "City", sound: "city",
        tagline: "A high-altitude capital built on an Aztec lake",
        description: "At 2,240 metres the air is thin and the light is sharp, and the ruins of the Aztec Templo Mayor sit a few steps from the cathedral on the vast Zócalo. Spend a morning in the National Museum of Anthropology, an afternoon drifting through the canals of Xochimilco on a painted trajinera, and every evening eating tacos al pastor shaved straight from the spit.",
        bestTime: "Mar–May (warm, before the rains)", image: "wiki:Palacio de Bellas Artes", wiki: "Mexico City", more: ["Historic center of Mexico City", "Xochimilco"] },
      { name: "Chichén Itzá", lat: 20.6843, lng: -88.5678, category: "Historical", sound: "temple",
        tagline: "The great Maya city of the Yucatán",
        description: "The stepped pyramid of El Castillo rises 30 metres above a clearing of pale stone and heat. On the spring and autumn equinoxes the afternoon sun throws a rippling serpent of shadow down its northern staircase, and a single handclap at its base comes back as a chirp like a quetzal's call. Nearby lie the largest ball court in Mesoamerica and the still, green Sacred Cenote.",
        bestTime: "Nov–Mar (cooler, drier)", image: "wiki:Chichen Itza" },
      { name: "Tulum", lat: 20.2148, lng: -87.4290, category: "Historical", sound: "ocean",
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
      { name: "New York City", lat: 40.7128, lng: -74.0060, category: "City", sound: "metropolis",
        tagline: "The city that walks fast and never switches off",
        description: "Steam rises from the street grates, taxis lean on their horns, and eight million people move at a pace that pulls you along with it. Walk the Brooklyn Bridge at sunset for the skyline, lose an afternoon in the Metropolitan Museum, then find the quiet in the 341 hectares of Central Park. The subway runs all night, and so does the city.",
        bestTime: "Apr–Jun, Sep–Nov", image: "wiki:Brooklyn Bridge", wiki: "New York City" },
      { name: "Grand Canyon", lat: 36.0544, lng: -112.1401, category: "Nature", sound: "desert", zoom: 10,
        tagline: "A mile-deep cut through two billion years of rock",
        description: "The Colorado River has carved a gorge 446 kilometres long and more than 1.6 kilometres deep, and from the South Rim the silence is as big as the view. Be at Mather Point for sunrise, when the layered walls go from violet to burning orange, then drop below the rim on the Bright Angel Trail to feel the scale in your legs.",
        bestTime: "Mar–May, Sep–Nov", image: "wiki:Grand Canyon" },
      { name: "Hawaii", aka: ["Honolulu", "Oahu", "Maui", "Kauai"], lat: 21.2793, lng: -157.8292, category: "Beach", sound: "ocean", zoom: 7,
        tagline: "Volcanic islands in the middle of the Pacific",
        description: "Warm trade winds, the smell of plumeria, and surf rolling onto Waikīkī, where modern surfing was popularised. Each island has its own mood: Oʻahu for the crater of Diamond Head and the North Shore waves, the Big Island for the glowing lava fields of Kīlauea, and Kauaʻi for the fluted green cliffs of the Nā Pali Coast.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Diamond Head, Hawaii", wiki: "Hawaiian Islands" },
      { name: "Yellowstone", lat: 44.4605, lng: -110.8281, category: "Nature", sound: "mountains", zoom: 8,
        tagline: "The world's first national park, still steaming",
        description: "Established in 1872, Yellowstone sits on top of a supervolcano, and the ground lets you know: Old Faithful erupts roughly every 90 minutes and Grand Prismatic Spring glows in rings of blue, green and rust. Drive the Lamar Valley at dawn to watch bison herds cross the road and, with luck, a wolf pack on the far ridge.",
        bestTime: "May–Sep", image: "wiki:Yellowstone National Park" },
      { name: "San Francisco", lat: 37.7749, lng: -122.4194, category: "City", sound: "city",
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
      { name: "Banff", lat: 51.1784, lng: -115.5708, category: "Mountain", sound: "mountains",
        tagline: "Turquoise lakes in the Canadian Rockies",
        description: "Canada's first national park, created in 1885, is all sharp limestone peaks, cold pine air and lakes coloured an unreal turquoise by glacial rock flour. Paddle a canoe across Lake Louise, reach Moraine Lake for sunrise, then drive the Icefields Parkway north past hanging glaciers toward Jasper.",
        bestTime: "Jun–Sep (hiking), Dec–Mar (skiing)", image: "wiki:Banff National Park" },
      { name: "Vancouver", lat: 49.2827, lng: -123.1207, category: "City", sound: "city",
        tagline: "A glass city between the ocean and the mountains",
        description: "Snow-capped peaks sit right behind the downtown towers, and the Pacific wraps around three sides. Cycle the seawall around the cedars of Stanley Park, eat your way through the Granville Island market, and be on a ski slope within half an hour of leaving the beach.",
        bestTime: "Jun–Sep", image: "wiki:Vancouver" },
      { name: "Montreal", lat: 45.5017, lng: -73.5673, category: "City", sound: "city",
        tagline: "The largest French-speaking city in the Americas",
        description: "Cobblestones and grey stone in Old Montreal, the deep blue and gold interior of Notre-Dame Basilica, and the smell of wood-fired bagels drifting out of St-Viateur at any hour. Climb Mount Royal for the view over downtown to the St. Lawrence, then stay out late: in summer the city turns into one long festival, led by the Jazz Fest.",
        bestTime: "Jun–Sep (festival season)", image: "wiki:Notre-Dame Basilica (Montreal)", wiki: "Montreal" },
      { name: "Niagara Falls", lat: 43.0799, lng: -79.0747, category: "Nature", sound: "ocean",
        tagline: "A wall of water you feel in your chest",
        description: "The Horseshoe Falls drop about 57 metres in a curved curtain, and the roar and mist reach you long before the view does. Take the boat into the basin and you will come back soaked and grinning. After dark the falls are lit in colour, and in winter the spray freezes onto every railing and tree.",
        bestTime: "Jun–Aug", image: "wiki:Niagara Falls" },
      { name: "Quebec City", lat: 46.8139, lng: -71.2080, category: "Historical", sound: "city",
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
      { name: "Monteverde Cloud Forest", lat: 10.3010, lng: -84.7950, category: "Nature", sound: "rainforest",
        tagline: "A forest that lives inside the clouds",
        description: "Mist drifts through the canopy on the continental divide and everything drips: moss, orchids, tree ferns, the hanging bridges themselves. Walk slowly and listen. The metallic call of the three-wattled bellbird carries for hundreds of metres, and with a good guide you may see the emerald tail of a resplendent quetzal.",
        bestTime: "Dec–Apr (drier months)", image: "wiki:Monteverde Cloud Forest Reserve" },
      { name: "La Fortuna & Arenal Volcano", aka: ["Arenal"], lat: 10.4626, lng: -84.7032, category: "Mountain", sound: "jungle",
        tagline: "A perfect volcanic cone above hot springs",
        description: "Arenal's near-symmetrical cone erupted almost daily from 1968 until 2010 and now rests above the town, often wearing a cap of cloud. Hike the old lava fields, swim under the 70-metre La Fortuna waterfall, then end the day in a river of naturally heated water with the jungle humming around you.",
        bestTime: "Dec–Apr (dry season)", image: "wiki:Arenal Volcano", more: ["Arenal Volcano National Park"] },
      { name: "Manuel Antonio", lat: 9.3920, lng: -84.1370, category: "Beach", sound: "ocean",
        tagline: "Where the rainforest runs onto the beach",
        description: "Costa Rica's smallest national park packs white-sand coves, warm Pacific water and thick jungle into a few square kilometres. Sloths hang above the trails, scarlet macaws cross overhead, and white-faced capuchin monkeys will open your bag if you leave it on the sand.",
        bestTime: "Dec–Apr (dry season)", image: "wiki:Manuel Antonio National Park" },
      { name: "Tortuguero", lat: 10.5425, lng: -83.5024, category: "Nature", sound: "rainforest",
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
      { name: "Tikal", lat: 17.2220, lng: -89.6237, category: "Historical", sound: "rainforest",
        tagline: "Maya temples rising out of the rainforest",
        description: "One of the great cities of the Classic Maya, Tikal lies deep in the Petén jungle, its limestone temples breaking through the canopy. Climb Temple IV before dawn and wait in the dark: the forest wakes with the roar of howler monkeys, and then the tops of the other pyramids appear through the mist.",
        bestTime: "Nov–Apr (dry season)", image: "wiki:Tikal" },
      { name: "Antigua Guatemala", lat: 14.5586, lng: -90.7295, category: "Historical", sound: "city",
        tagline: "A colonial capital watched by three volcanoes",
        description: "Cobbled streets, ochre walls and ruined baroque churches left as they fell in the earthquakes of 1773. The yellow Santa Catalina Arch frames Volcán de Agua, and on clear nights you can watch Fuego cough red sparks on the horizon. During Holy Week the streets are carpeted with intricate designs of dyed sawdust and flowers.",
        bestTime: "Nov–Apr (dry season)", image: "wiki:Antigua Guatemala" },
      { name: "Lake Atitlán", lat: 14.6907, lng: -91.2025, category: "Nature", sound: "mountains",
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
      { name: "Havana", lat: 23.1136, lng: -82.3666, category: "City", sound: "city",
        tagline: "A city of crumbling palaces and 1950s chrome",
        description: "Old Havana is a UNESCO-listed maze of arcades, peeling pastel facades and plazas where a son band is always playing somewhere. Ride in a 1950s American convertible, walk the eight-kilometre Malecón seawall at sunset when waves break over the road, and follow the sound of a trumpet into the nearest bar.",
        bestTime: "Nov–Apr (dry season)", image: "wiki:Plaza Vieja, Havana", wiki: "Havana" },
      { name: "Viñales", lat: 22.6167, lng: -83.7167, category: "Nature", sound: "jungle",
        tagline: "Red earth, tobacco fields and limestone giants",
        description: "Rounded limestone hills called mogotes rise straight out of a flat valley of rust-red soil. Farmers still plough with oxen and dry tobacco leaves in thatched barns, and they will roll you a cigar on the spot. Explore on horseback in the cool of early morning, when mist sits between the hills.",
        bestTime: "Nov–Apr (dry season)", image: "wiki:Viñales Valley" },
      { name: "Trinidad", lat: 21.8024, lng: -79.9843, category: "Historical", sound: "city",
        tagline: "A sugar town frozen in the 1800s",
        description: "Founded in 1514 and made rich by sugar, Trinidad has barely changed since the trade collapsed: cobblestones, tiled roofs, and houses painted mint, yellow and pink. Climb the bell tower for the view to the Caribbean, then spend the evening on the stone steps of the Casa de la Música, where the whole town comes to dance salsa.",
        bestTime: "Nov–Apr (dry season)", image: "wiki:Trinidad, Cuba" },
      { name: "Varadero", lat: 23.1394, lng: -81.2861, category: "Beach", sound: "ocean",
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
      { name: "Medellín", lat: 6.2442, lng: -75.5812, category: "City", sound: "city",
        tagline: "The City of Eternal Spring",
        description: "Medellín fills a green Andean valley at about 1,500 metres, which keeps the air spring-warm all year. Ride the Metrocable gondolas up over the hillside barrios, walk the street-art-covered outdoor escalators of Comuna 13, and stand among the 23 rounded bronze sculptures that Fernando Botero gave to his home city in Plaza Botero. In August the Feria de las Flores covers the streets in flowers.",
        bestTime: "Dec–Mar (driest months)", image: "wiki:Medellín" },
      { name: "Bogotá", lat: 4.7110, lng: -74.0721, category: "City", sound: "city",
        tagline: "A high Andean capital under Monserrate",
        description: "Bogotá sprawls across a plateau 2,640 metres up, with the green wall of the eastern hills behind it and cool, thin air all year. Wander the steep colonial streets of La Candelaria, where almost every wall is a mural, and see tens of thousands of pre-Columbian gold pieces glowing in the dark rooms of the Gold Museum. Ride the cable car up Monserrate at dusk and watch the city lights switch on to the horizon.",
        bestTime: "Dec–Mar (driest months)", image: "wiki:Bogotá" },
      { name: "Cartagena", lat: 10.3910, lng: -75.4794, category: "Historical", sound: "ocean",
        tagline: "A walled colonial port on the Caribbean",
        description: "Thick stone ramparts built to keep out pirates still wrap the old city, and inside them bougainvillea spills from wooden balconies over streets painted yellow, coral and blue. Explore the tunnels of the Castillo San Felipe fortress in the morning, hide from the midday heat, then join everyone on top of the walls for sunset and a sea breeze.",
        bestTime: "Dec–Apr (dry, breezy)", image: "wiki:Castillo San Felipe de Barajas", wiki: "Cartagena, Colombia" },
      { name: "Tayrona National Park", lat: 11.3247, lng: -73.9644, category: "Nature", sound: "jungle",
        tagline: "Where the Sierra Nevada meets the Caribbean",
        description: "Jungle trails wind for a couple of hours past giant boulders and palms to wild golden beaches like Cabo San Juan, with howler monkeys overhead and the world's highest coastal mountain range behind you. There are no roads to the best coves, only footpaths. The park closes for a few weeks each year at the request of the Indigenous peoples of the Sierra, so the land can rest.",
        bestTime: "Dec–Mar (dry; check annual closures)", image: "wiki:Tayrona National Natural Park" },
      { name: "Cocora Valley", lat: 4.6386, lng: -75.4870, category: "Nature", sound: "rainforest",
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
      { name: "Machu Picchu", lat: -13.1631, lng: -72.5450, category: "Historical", sound: "mountains",
        tagline: "The lost city of the Incas",
        description: "Built around 1450 for the emperor Pachacuti and abandoned about a century later, Machu Picchu sits on a ridge at 2,430 metres with cloud forest falling away on every side. Arrive early, when mist is still lifting off the terraces and the granite walls are cold to the touch. The stones are cut so precisely that they have stood through five centuries of earthquakes without mortar.",
        bestTime: "May–Sep (dry season)", image: "wiki:Machu Picchu" },
      { name: "Cusco", lat: -13.5320, lng: -71.9675, category: "City", sound: "mountains",
        tagline: "The Inca capital, 3,400 metres up",
        description: "Spanish churches and arcades stand directly on top of Inca walls of fitted stone, including the famous twelve-angled block on Hatun Rumiyoc street. The altitude makes the first day slow, so sip coca tea, wander the Plaza de Armas, and browse the fruit and bread stalls of San Pedro market before heading to the Qorikancha, once the empire's Temple of the Sun.",
        bestTime: "May–Sep (dry season)", image: "wiki:Cusco" },
      { name: "Lima", lat: -12.0464, lng: -77.0428, category: "City", sound: "city",
        tagline: "A food capital on the Pacific cliffs",
        description: "Lima sits on tall cliffs above grey-green Pacific surf, with paragliders drifting past the parks of Miraflores. It is one of the world's great eating cities: order ceviche at lunch, when the fish is freshest. In the middle of the modern city, the adobe pyramid of Huaca Pucllana is about 1,500 years old.",
        bestTime: "Dec–Apr (sunny summer)", image: "wiki:Miraflores District, Lima", wiki: "Lima", more: ["Historic Centre of Lima", "Barranco District"] },
      { name: "Sacred Valley", lat: -13.3050, lng: -72.1160, category: "Culture", sound: "mountains", zoom: 10,
        tagline: "Terraces, markets and fortresses along the Urubamba",
        description: "Between Cusco and Machu Picchu the Urubamba River runs through a valley of Inca terraces and Quechua villages. Bargain for weavings at Pisac market, climb the massive stone steps of the fortress at Ollantaytambo, and see the thousands of salt pools at Maras, harvested by hand since before the Incas.",
        bestTime: "May–Sep (dry season)", image: "wiki:Sacred Valley", more: ["Ollantaytambo", "Pisac", "Maras, Peru"] },
      { name: "Rainbow Mountain", lat: -13.8700, lng: -71.3030, category: "Mountain", sound: "mountains",
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
      { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729, category: "City", sound: "ocean",
        tagline: "Granite peaks, samba and the Atlantic",
        description: "Rio is squeezed between jungle-covered granite mountains and the sea, and life happens on the sand of Copacabana and Ipanema. Ride the cable car up Sugarloaf at sunset, stand under the 30-metre Christ the Redeemer on top of Corcovado, and in the evening follow the drums to a samba bar in Lapa.",
        bestTime: "Dec–Mar (summer and Carnival)", image: "wiki:Sugarloaf Mountain", wiki: "Rio de Janeiro", more: ["Christ the Redeemer (statue)", "Copacabana, Rio de Janeiro"] },
      { name: "São Paulo", lat: -23.5505, lng: -46.6333, category: "City", sound: "metropolis",
        tagline: "The biggest city in the Americas",
        description: "São Paulo is a horizon of towers in every direction, loud, fast and endlessly hungry. On Sundays Avenida Paulista closes to cars and fills with musicians, skaters and food stalls beneath MASP, the art museum that hangs from two red concrete beams. Eat a mortadella sandwich in the stained-glass Municipal Market, walk the graffiti alley of Beco do Batman, and end the night with ramen in Liberdade, home to the largest Japanese community outside Japan.",
        bestTime: "Apr–Sep (drier, milder)", image: "wiki:São Paulo" },
      { name: "Amazon Rainforest", aka: ["Manaus", "Amazonas"], lat: -3.1190, lng: -60.0217, category: "Nature", sound: "rainforest", zoom: 8,
        tagline: "The largest rainforest on Earth",
        description: "From the river port of Manaus, boats head into a world of flooded forest, pink river dolphins and a wall of sound: parrots, frogs, cicadas and howler monkeys, all at once. Just downstream, the black water of the Rio Negro and the sandy water of the Solimões run side by side for kilometres without mixing. Nights on the river are completely dark and full of stars.",
        bestTime: "Jun–Nov (lower water, more trails)", image: "wiki:Amazon rainforest", more: ["Amazon River", "Manaus"] },
      { name: "Iguaçu Falls", aka: ["Iguazu Falls", "Foz do Iguaçu"], lat: -25.6953, lng: -54.4367, category: "Nature", sound: "rainforest",
        tagline: "275 waterfalls in the subtropical jungle",
        description: "The Iguaçu River spreads out and drops over a cliff nearly three kilometres wide, in hundreds of separate falls. The Brazilian side gives the wide panorama, ending on a walkway that takes you into the spray of the Devil's Throat, where the noise drowns out speech. Toucans, butterflies and coatis are everywhere along the trail.",
        bestTime: "Mar–May, Aug–Oct", image: "wiki:Iguazu Falls", more: ["Iguaçu National Park", "Iguazú National Park"] },
      { name: "Salvador", lat: -12.9777, lng: -38.5016, category: "Culture", sound: "ocean",
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
      { name: "Buenos Aires", lat: -34.6037, lng: -58.3816, category: "City", sound: "city",
        tagline: "Tango, late dinners and faded grandeur",
        description: "Wide avenues, Parisian facades and cafés where nobody hurries. Watch tango danced in the square in San Telmo, see the painted tin houses of Caminito in La Boca, and walk the marble alleys of Recoleta Cemetery to the tomb of Eva Perón. Dinner starts at ten and is usually a steak from a wood-fired parrilla.",
        bestTime: "Mar–May, Sep–Nov", image: "wiki:Caminito", wiki: "Buenos Aires" },
      { name: "Perito Moreno Glacier", lat: -50.4967, lng: -73.1377, category: "Nature", sound: "mountains",
        tagline: "A five-kilometre wall of blue ice",
        description: "The front of the glacier stands about 70 metres above the milky water of Lago Argentino, and it is constantly moving. Stand on the walkways and wait: the ice groans and cracks like gunfire, and every so often a tower the size of a building peels away and crashes into the lake.",
        bestTime: "Nov–Mar (southern summer)", image: "wiki:Perito Moreno Glacier" },
      { name: "Bariloche", lat: -41.1335, lng: -71.3103, category: "Mountain", sound: "mountains",
        tagline: "Alpine lakes at the gate of Patagonia",
        description: "Bariloche sits on the shore of the deep blue Nahuel Huapi lake, surrounded by forested peaks. Drive or cycle the Circuito Chico for one lake view after another, ski Cerro Catedral in winter, and work through the chocolate shops on the main street, a tradition brought by Central European settlers.",
        bestTime: "Dec–Mar (summer), Jul–Sep (skiing)", image: "wiki:Nahuel Huapi Lake", wiki: "Bariloche" },
      { name: "Mendoza", lat: -32.8895, lng: -68.8458, category: "Culture", sound: "mountains",
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
      { name: "Torres del Paine", lat: -50.9423, lng: -73.4068, category: "Mountain", sound: "mountains", zoom: 9,
        tagline: "Granite towers at the end of the world",
        description: "Three sheer granite spires stand above a turquoise glacial lake, and the Patagonian wind is strong enough to lean on. Trek the multi-day W route past glaciers and hanging valleys, or hike up to the base of the towers for dawn, when the rock turns red. Guanacos graze the steppe and condors ride the gusts overhead.",
        bestTime: "Nov–Mar (southern summer)", image: "wiki:Cordillera Paine", wiki: "Torres del Paine National Park" },
      { name: "Atacama Desert", lat: -22.9087, lng: -68.1997, category: "Nature", sound: "desert", zoom: 9,
        tagline: "The driest non-polar desert on Earth",
        description: "Around the adobe village of San Pedro lie salt flats, rust-red canyons and the wind-carved Valle de la Luna, which glows at sunset. Wake before dawn for the El Tatio geysers, steaming at 4,300 metres in the freezing air. The night sky here is among the clearest anywhere, which is why the world's largest telescopes are built nearby.",
        bestTime: "Mar–May, Sep–Nov", image: "wiki:Valle de la Luna (Chile)", wiki: "Atacama Desert" },
      { name: "Easter Island", aka: ["Rapa Nui", "Moai"], lat: -27.1127, lng: -109.3497, category: "Historical", sound: "ocean", zoom: 11,
        tagline: "The moai of Rapa Nui",
        description: "One of the most remote inhabited islands on the planet, more than 3,500 kilometres from the mainland. The Rapa Nui people carved nearly a thousand giant stone figures here; at the Rano Raraku quarry hundreds still lie half finished in the grass. Watch the sun rise behind the fifteen moai of Ahu Tongariki, with Pacific surf breaking behind them.",
        bestTime: "Dec–Mar (warmest)", image: "wiki:Moai", wiki: "Easter Island" },
      { name: "Valparaíso", lat: -33.0472, lng: -71.6127, category: "Culture", sound: "ocean",
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
      { name: "Galápagos Islands", lat: -0.7402, lng: -90.3134, category: "Nature", sound: "ocean", zoom: 8,
        tagline: "Wildlife that never learned to fear people",
        description: "On these volcanic islands 1,000 kilometres offshore, sea lions sleep on the benches, marine iguanas pile up on black lava, and blue-footed boobies dance a few steps from your feet. Giant tortoises roam the highlands of Santa Cruz. Charles Darwin visited in 1835, and what he saw here shaped the theory of evolution.",
        bestTime: "Dec–May (warm, calm seas)", image: "wiki:Galápagos Islands" },
      { name: "Quito", lat: -0.2202, lng: -78.5123, category: "Historical", sound: "city",
        tagline: "A colonial capital at 2,850 metres",
        description: "Quito's old town was one of the first places ever added to the UNESCO World Heritage list, in 1978. Whitewashed streets lead to the church of La Compañía, whose interior is covered almost entirely in gold leaf. Ride the cable car up the side of Pichincha volcano for the view, then stand with a foot in each hemisphere at the equator line just north of the city.",
        bestTime: "Jun–Sep (dry season)", image: "wiki:El Panecillo", wiki: "Quito" },
      { name: "Cotopaxi", lat: -0.6838, lng: -78.4372, category: "Mountain", sound: "mountains",
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
      { name: "Salar de Uyuni", lat: -20.1338, lng: -67.4891, category: "Nature", sound: "desert", zoom: 8,
        tagline: "The largest salt flat on Earth",
        description: "More than 10,000 square kilometres of blinding white salt at 3,650 metres, cracked into hexagons and perfectly flat. After summer rain a thin layer of water turns it into the world's biggest mirror, and the sky and ground become one. In the middle stands Incahuasi, a rocky island covered in giant cacti.",
        bestTime: "Jan–Mar (mirror effect), May–Oct (dry)", image: "wiki:Salar de Uyuni" },
      { name: "La Paz", lat: -16.4897, lng: -68.1193, category: "City", sound: "city",
        tagline: "A city poured into a canyon at 3,600 metres",
        description: "Brick houses climb every wall of a steep canyon, with the triple peak of Illimani white above them. The best way to see it is from the air: the city's public transport is a network of cable cars gliding over the rooftops. Down below, the Witches' Market sells herbs, charms and dried llama fetuses for offerings to Pachamama.",
        bestTime: "May–Oct (dry season)", image: "wiki:La Paz" },
      { name: "Lake Titicaca", lat: -16.0170, lng: -69.1780, category: "Nature", sound: "mountains", zoom: 10,
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
      { name: "Paris", lat: 48.8566, lng: 2.3522, category: "City", sound: "city",
        tagline: "The City of Light",
        description: "Zinc rooftops, the smell of warm bread from a corner boulangerie, and the Seine sliding under stone bridges. The Eiffel Tower, built for the 1889 World's Fair, sparkles for five minutes at the top of every hour after dark. Give the Louvre a morning, climb the steps of Montmartre, then do as Parisians do and sit on a café terrace watching the street.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Eiffel Tower", wiki: "Paris" },
      { name: "French Riviera", aka: ["Nice", "Côte d'Azur", "Monaco", "Cannes"], lat: 43.6950, lng: 7.2650, category: "Beach", sound: "ocean", zoom: 10,
        tagline: "The Côte d'Azur, from Nice to Monaco",
        description: "A coastline of deep blue water, palm trees and ochre old towns, lit by the clear light that drew Matisse and Chagall here. Walk the Promenade des Anglais along the pebble beach in Nice, climb to the medieval village of Èze high above the sea, and take the coastal train past Cap Ferrat to Monaco.",
        bestTime: "May–Jun, Sep", image: "wiki:Promenade des Anglais", wiki: "French Riviera" },
      { name: "Loire Valley", lat: 47.6161, lng: 1.5170, category: "Historical", sound: "rainforest", zoom: 9,
        tagline: "The valley of the kings' châteaux",
        description: "French kings and their courts built hundreds of châteaux along this quiet, wide river. Chambord, begun in 1519 for Francis I, has a famous double-helix staircase where two people can climb without ever meeting. Chenonceau stretches across the River Cher on stone arches, and between them lie vineyards, slow villages and flat cycling paths.",
        bestTime: "May–Jun, Sep–Oct", image: "wiki:Château de Chambord", wiki: "Loire Valley" },
      { name: "Mont-Saint-Michel", lat: 48.6361, lng: -1.5115, category: "Historical", sound: "ocean",
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
      { name: "Rome", lat: 41.9028, lng: 12.4964, category: "Historical", sound: "city",
        tagline: "The Eternal City",
        description: "Ancient, baroque and modern Rome are stacked on top of each other, and you walk through all three in a single street. Stand in the Colosseum, opened in AD 80 for around 50,000 spectators, then under the open oculus of the Pantheon, whose concrete dome has stood for nearly 1,900 years. Finish with a plate of cacio e pepe in Trastevere.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Colosseum", wiki: "Rome" },
      { name: "Venice", lat: 45.4408, lng: 12.3155, category: "City", sound: "ocean",
        tagline: "A city built on water",
        description: "Venice stands on 118 small islands joined by around 400 bridges, and there is not a single car. The sounds are footsteps, church bells and water slapping against stone. Ride a vaporetto down the Grand Canal past the palaces, see the gold mosaics of St Mark's Basilica, then put the map away and get lost in the back alleys.",
        bestTime: "Apr–Jun, Sep–Nov", image: "wiki:Grand Canal (Venice)", wiki: "Venice" },
      { name: "Amalfi Coast", lat: 40.6281, lng: 14.4850, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "Cliffside villages above the Tyrrhenian Sea",
        description: "A narrow road twists for about 50 kilometres along cliffs planted with lemon terraces, with pastel villages stacked vertically above small pebble coves. Positano is the postcard, Ravello has the hilltop gardens, and the Path of the Gods trail gives you the whole coast from above. The lemons here are the size of a fist and end up as limoncello.",
        bestTime: "May–Jun, Sep", image: "wiki:Amalfi Coast" },
      { name: "Tuscany", aka: ["Florence", "Firenze", "Siena"], lat: 43.7696, lng: 11.2558, category: "Culture", sound: "city", zoom: 9,
        tagline: "Renaissance cities and cypress-lined hills",
        description: "Florence is where the Renaissance began: Brunelleschi's huge brick dome, finished in 1436, still dominates the skyline, and the Uffizi holds Botticelli's Birth of Venus. Outside the city the landscape becomes rolling wheat fields, vineyards and lines of cypress trees, with hill towns like Siena and San Gimignano on the ridges.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Florence Cathedral", wiki: "Florence" },
      { name: "Cinque Terre", lat: 44.1270, lng: 9.7090, category: "Nature", sound: "ocean", zoom: 12,
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
      { name: "Barcelona", lat: 41.3851, lng: 2.1734, category: "City", sound: "city",
        tagline: "Gaudí's city by the Mediterranean",
        description: "Antoni Gaudí's Sagrada Família has been under construction since 1882, and its interior feels like a forest of stone trees lit in stained-glass colour. Wander the dark lanes of the Gothic Quarter, snack your way through La Boqueria market, climb to the mosaics of Park Güell, and end the day with your feet in the sand at Barceloneta.",
        bestTime: "May–Jun, Sep–Oct", image: "wiki:Sagrada Família", wiki: "Barcelona" },
      { name: "Madrid", lat: 40.4168, lng: -3.7038, category: "City", sound: "city",
        tagline: "A capital that comes alive at night",
        description: "Madrid is about art and appetite. The Prado holds Velázquez's Las Meninas and Goya's dark late paintings, and Retiro Park is where the city rows boats and naps on Sundays. Evenings start late: move from bar to bar eating tapas in La Latina, and expect the streets to be full well past midnight.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Plaza Mayor, Madrid", wiki: "Madrid" },
      { name: "Seville", lat: 37.3891, lng: -5.9845, category: "Culture", sound: "city",
        tagline: "Orange blossom, flamenco and Moorish palaces",
        description: "In spring the whole city smells of orange blossom. The Real Alcázar is a palace of carved plaster, tiles and still pools, and next door stands the largest Gothic cathedral in the world, with a former minaret, the Giralda, as its bell tower. Cross the river to Triana at night to hear flamenco where it grew up.",
        bestTime: "Mar–May, Oct–Nov", image: "wiki:Plaza de España, Seville", wiki: "Seville" },
      { name: "Granada", aka: ["Alhambra"], lat: 37.1760, lng: -3.5881, category: "Historical", sound: "temple",
        tagline: "The Alhambra, last palace of Moorish Spain",
        description: "The Alhambra sits on a red hill with the snow of the Sierra Nevada behind it. Inside, the Nasrid Palaces are rooms of lace-like stucco, cedar ceilings and courtyards where water runs quietly through marble channels. Watch it turn gold at sunset from the San Nicolás viewpoint in the old Albaicín quarter across the valley.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Alhambra", wiki: "Granada" }
    ]
  },
  {
    id: "620", name: "Portugal", region: "Europe", soundProfile: "ocean",
    summary: "Tiled cities on steep hills, port wine cellars, and golden cliffs facing the Atlantic.",
    hero: "wiki:Douro",
    places: [
      { name: "Lisbon", lat: 38.7223, lng: -9.1393, category: "City", sound: "city",
        tagline: "Seven hills, yellow trams and Atlantic light",
        description: "Lisbon climbs steeply from the wide Tagus, and the rattling yellow Tram 28 will carry you up through the lanes of Alfama, where fado drifts out of small restaurants at night. Out at Belém, see the stone tower that watched the explorers' ships leave, then queue for a warm custard tart from the bakery that has made them since 1837.",
        bestTime: "Mar–Jun, Sep–Oct", image: "wiki:Belém Tower", wiki: "Lisbon" },
      { name: "Porto", lat: 41.1579, lng: -8.6291, category: "City", sound: "city",
        tagline: "Port wine and tiled facades on the Douro",
        description: "Tall, narrow houses in faded colours step down to the Douro, under the double-deck iron arch of the Dom Luís I Bridge. Cross it to the old port wine lodges of Vila Nova de Gaia for a tasting, and do not miss São Bento station, whose hall is lined with about 20,000 blue and white tiles showing scenes from Portuguese history.",
        bestTime: "May–Sep", image: "wiki:Dom Luís I Bridge", wiki: "Porto" },
      { name: "Algarve", lat: 37.0810, lng: -8.6690, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "Golden cliffs and sea caves",
        description: "Portugal's south coast is a run of honey-coloured cliffs, rock arches and sheltered coves with clear, cold Atlantic water. Take a small boat or kayak from Lagos around the stacks of Ponta da Piedade and into the sea caves, then eat grilled sardines with your feet almost in the sand.",
        bestTime: "May–Jun, Sep", image: "wiki:Ponta da Piedade", wiki: "Algarve" },
      { name: "Sintra", lat: 38.7876, lng: -9.3906, category: "Historical", sound: "rainforest",
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
      { name: "London", lat: 51.5074, lng: -0.1278, category: "City", sound: "metropolis",
        tagline: "A world city on the Thames",
        description: "Red buses, black cabs, and a crowd that always knows where it is going. The Tower of London has guarded the river for nearly a thousand years, the big museums are free, and the Underground has been running since 1863. Walk the South Bank from Westminster to Tower Bridge, then eat your way around Borough Market.",
        bestTime: "May–Sep", image: "wiki:Tower Bridge", wiki: "London" },
      { name: "Edinburgh", lat: 55.9533, lng: -3.1883, category: "Historical", sound: "city",
        tagline: "A castle on a volcano above a medieval town",
        description: "Edinburgh Castle sits on the plug of an extinct volcano, and the cobbled Royal Mile runs down from it between tall stone tenements and narrow closes. Climb Arthur's Seat for a view over the whole city to the sea. Every August the Fringe, the largest arts festival in the world, fills every room and street corner with performers.",
        bestTime: "May–Sep (August for the festivals)", image: "wiki:Edinburgh Castle", wiki: "Edinburgh" },
      { name: "Scottish Highlands", lat: 56.6826, lng: -5.1023, category: "Mountain", sound: "mountains", zoom: 8,
        tagline: "Glens, lochs and big empty skies",
        description: "North of the cities, Scotland opens into bare mountains, dark lochs and weather that changes every ten minutes. Drive through the brooding valley of Glen Coe, look for the monster on Loch Ness, and climb Ben Nevis, at 1,345 metres the highest peak in Britain. Evenings mean a peat fire and a whisky.",
        bestTime: "May–Sep", image: "wiki:Eilean Donan", wiki: "Scottish Highlands" },
      { name: "Stonehenge", lat: 51.1789, lng: -1.8262, category: "Historical", sound: "temple",
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
      { name: "Dublin", lat: 53.3498, lng: -6.2603, category: "City", sound: "city",
        tagline: "A literary capital with a pub on every corner",
        description: "Dublin is small, walkable and talkative. See the Book of Kells, an illuminated gospel made around the year 800, in the old library of Trinity College, then tour the Guinness brewery at St James's Gate, which has been brewing since 1759. At night, find a pub with a traditional session and stay for the fiddles.",
        bestTime: "May–Sep", image: "wiki:Ha'penny Bridge", wiki: "Dublin" },
      { name: "Cliffs of Moher", lat: 52.9715, lng: -9.4309, category: "Nature", sound: "ocean",
        tagline: "Sheer Atlantic cliffs on the west coast",
        description: "For 14 kilometres the edge of County Clare drops straight into the Atlantic, reaching 214 metres at its highest point. Wind hammers the clifftop path, waves boom far below, and from April to July puffins nest on the ledges. On a clear day you can see the Aran Islands and the mountains of Connemara.",
        bestTime: "May–Sep", image: "wiki:Cliffs of Moher" },
      { name: "Ring of Kerry", lat: 52.0599, lng: -9.5044, category: "Nature", sound: "ocean", zoom: 9,
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
      { name: "Reykjavik", lat: 64.1466, lng: -21.9426, category: "City", sound: "ocean",
        tagline: "The world's northernmost capital",
        description: "A small, colourful city of tin-clad houses facing a cold bay and a flat-topped mountain. Take the lift up the concrete tower of Hallgrímskirkja, shaped like a column of cooling basalt, for the view over the rooftops. Then do what locals do in any weather: sit in an outdoor geothermal pool and talk.",
        bestTime: "Jun–Aug (midnight sun), Sep–Mar (northern lights)", image: "wiki:Hallgrímskirkja", wiki: "Reykjavík" },
      { name: "Golden Circle", aka: ["Gullfoss", "Geysir", "Thingvellir"], lat: 64.3271, lng: -20.1199, category: "Nature", sound: "mountains", zoom: 9,
        tagline: "A rift valley, a geyser and a thundering waterfall",
        description: "On this one-day loop from the capital you walk at Þingvellir in the crack between the North American and Eurasian plates, where Iceland's parliament first met in 930. At Geysir, Strokkur throws boiling water into the air every few minutes. And at Gullfoss a whole river drops in two steps into a narrow canyon, filling the air with spray.",
        bestTime: "Jun–Aug", image: "wiki:Gullfoss", wiki: "Golden Circle (Iceland)" },
      { name: "Blue Lagoon", lat: 63.8804, lng: -22.4495, category: "Nature", sound: "mountains",
        tagline: "Milky blue water in a black lava field",
        description: "Geothermal seawater, rich in silica and kept at around 38°C, fills a pool surrounded by jagged black lava. Steam drifts across the surface and in winter you can float in the warmth with snow falling on your face. Volcanic activity on the peninsula has closed it at times in recent years, so check before you go.",
        bestTime: "Year-round", image: "wiki:Blue Lagoon (geothermal spa)" },
      { name: "Jökulsárlón", lat: 64.0784, lng: -16.2306, category: "Nature", sound: "ocean",
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
      { name: "Geirangerfjord", lat: 62.1049, lng: 7.0950, category: "Nature", sound: "mountains", zoom: 10,
        tagline: "The classic Norwegian fjord",
        description: "A narrow arm of deep green water runs between rock walls more than a thousand metres high, with waterfalls like the Seven Sisters dropping straight into the fjord. Abandoned farms cling to ledges far above the water. See it from a boat or kayak, then drive the hairpins up to a viewpoint to look down on the ferries.",
        bestTime: "May–Sep", image: "wiki:Geirangerfjord" },
      { name: "Lofoten Islands", lat: 67.9324, lng: 13.0887, category: "Nature", sound: "ocean", zoom: 9,
        tagline: "Jagged peaks rising straight out of the Arctic sea",
        description: "Above the Arctic Circle, granite mountains stand directly out of the ocean, with red fishermen's cabins on stilts along the shore and racks of cod drying in the wind. In midsummer the sun does not set for weeks; from September to March the northern lights move over the peaks. The beaches are white, empty and very cold.",
        bestTime: "Jun–Aug (midnight sun), Sep–Mar (aurora)", image: "wiki:Reine, Norway", wiki: "Lofoten" },
      { name: "Bergen", lat: 60.3913, lng: 5.3221, category: "City", sound: "ocean",
        tagline: "A wooden harbour town between seven mountains",
        description: "The leaning, brightly painted timber warehouses of Bryggen date from the days when Bergen was a Hanseatic trading port, and their narrow wooden alleys still smell of tar. Take the funicular up Mount Fløyen for the view, eat at the fish market, and bring a raincoat: this is one of the wettest cities in Europe.",
        bestTime: "May–Sep", image: "wiki:Bryggen", wiki: "Bergen" },
      { name: "Tromsø", lat: 69.6492, lng: 18.9553, category: "Nature", sound: "mountains",
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
      { name: "Berlin", lat: 52.5200, lng: 13.4050, category: "City", sound: "city",
        tagline: "A capital shaped by its own history",
        description: "Berlin wears the twentieth century openly. Walk through the Brandenburg Gate, along the 1.3-kilometre painted stretch of the Wall at the East Side Gallery, and up the glass dome of the Reichstag. Then spend the rest of the day on Museum Island or in a canal-side bar, because this is also one of Europe's most relaxed and creative cities.",
        bestTime: "May–Sep", image: "wiki:Brandenburg Gate", wiki: "Berlin" },
      { name: "Neuschwanstein Castle", lat: 47.5576, lng: 10.7498, category: "Historical", sound: "mountains",
        tagline: "The castle that inspired the fairy tales",
        description: "King Ludwig II of Bavaria began this white limestone fantasy in 1869 on a crag above an Alpine gorge, and it was still unfinished when he died. Its towers helped inspire Disney's Sleeping Beauty castle. For the famous view, walk to the Marienbrücke, a footbridge strung across the ravine behind it.",
        bestTime: "May–Oct", image: "wiki:Neuschwanstein Castle" },
      { name: "Munich", lat: 48.1351, lng: 11.5820, category: "City", sound: "city",
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
      { name: "Amsterdam", lat: 52.3676, lng: 4.9041, category: "City", sound: "city",
        tagline: "A seventeenth-century city of canals",
        description: "Rings of canals lined with tall, narrow merchant houses, many of them leaning slightly, and more bicycles than people. See Rembrandt's Night Watch in the Rijksmuseum and the sunflowers in the Van Gogh Museum, visit the Anne Frank House, then rent a bike or a small boat and see the city the way it was designed to be seen.",
        bestTime: "Apr–May (tulips), Jun–Sep", image: "wiki:Keizersgracht", wiki: "Amsterdam" },
      { name: "Keukenhof", lat: 52.2697, lng: 4.5469, category: "Nature", sound: "rainforest",
        tagline: "Seven million spring bulbs in bloom",
        description: "For about eight weeks each spring this garden near Lisse opens with roughly seven million tulips, daffodils and hyacinths planted by hand in sweeping bands of colour. The scent of hyacinth hangs in the air. Around the park, the commercial bulb fields stripe the flat landscape in red, yellow and purple.",
        bestTime: "Mid-Apr (peak bloom)", image: "wiki:Keukenhof" },
      { name: "Kinderdijk", lat: 51.8839, lng: 4.6364, category: "Historical", sound: "mountains",
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
      { name: "Zermatt & the Matterhorn", lat: 46.0207, lng: 7.7491, category: "Mountain", sound: "mountains",
        tagline: "The most recognisable mountain in the Alps",
        description: "The Matterhorn's crooked pyramid, 4,478 metres high, stands alone above the car-free village of Zermatt. Take the cog railway up to Gornergrat at 3,089 metres for a panorama of glaciers and four-thousand-metre peaks. At dawn the summit catches the first pink light while the valley is still dark and silent.",
        bestTime: "Jun–Sep (hiking), Dec–Apr (skiing)", image: "wiki:Matterhorn", wiki: "Zermatt" },
      { name: "Jungfrau Region", lat: 46.5936, lng: 7.9091, category: "Mountain", sound: "mountains", zoom: 10,
        tagline: "Waterfalls, cowbells and the wall of the Eiger",
        description: "The Lauterbrunnen valley is a deep, flat-floored trench with 72 waterfalls falling from its cliffs, including the nearly 300-metre Staubbach. Above it, trains and cable cars climb to villages with no road access and on to the Jungfraujoch, the highest railway station in Europe at 3,454 metres. The sound of the place is cowbells and running water.",
        bestTime: "Jun–Sep", image: "wiki:Lauterbrunnen" },
      { name: "Lucerne", lat: 47.0502, lng: 8.3093, category: "City", sound: "city",
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
      { name: "Vienna", lat: 48.2082, lng: 16.3738, category: "City", sound: "city",
        tagline: "The imperial capital of music and coffee",
        description: "For centuries the seat of the Habsburgs, Vienna is a city of palaces, opera and unhurried coffee houses where you can sit for hours over one cup and a slice of Sachertorte. Tour the 1,441-room Schönbrunn Palace and its gardens, stand under the patterned tile roof of St Stephen's Cathedral, and get a standing ticket for the State Opera.",
        bestTime: "Apr–Jun, Sep–Oct, Dec (Christmas markets)", image: "wiki:Schönbrunn Palace", wiki: "Vienna" },
      { name: "Salzburg", lat: 47.8095, lng: 13.0550, category: "Culture", sound: "city",
        tagline: "Mozart's baroque hometown",
        description: "A compact old town of domes and church spires sits between a fast green river and a cliff topped by a white fortress. Mozart was born here in 1756, in a yellow house on the Getreidegasse you can still visit. Fans of The Sound of Music will recognise the Mirabell Gardens, and the Alps begin at the edge of town.",
        bestTime: "May–Sep, Dec", image: "wiki:Salzburg" },
      { name: "Hallstatt", lat: 47.5622, lng: 13.6493, category: "Nature", sound: "mountains",
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
      { name: "Prague", lat: 50.0755, lng: 14.4378, category: "City", sound: "city",
        tagline: "The city of a hundred spires",
        description: "Prague escaped the worst of the wars, so its medieval core is intact. Cross the Charles Bridge, begun in 1357 and lined with thirty statues, early in the morning before the crowds. Watch the Astronomical Clock strike the hour, as it has since 1410, then climb to the castle above the river and reward yourself with a cold pilsner.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Charles Bridge", wiki: "Prague" },
      { name: "Český Krumlov", lat: 48.8127, lng: 14.3175, category: "Historical", sound: "city",
        tagline: "A storybook town in a river bend",
        description: "The Vltava River loops almost completely around this small town of red roofs and crooked lanes, with a huge castle and its painted round tower standing above. Little has changed in the centre since the 1700s. In summer people float lazily past the old walls on rafts and canoes.",
        bestTime: "May–Sep", image: "wiki:Český Krumlov" },
      { name: "Kutná Hora", lat: 49.9619, lng: 15.2883, category: "Historical", sound: "temple",
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
      { name: "Budapest", lat: 47.4979, lng: 19.0402, category: "City", sound: "city",
        tagline: "The Pearl of the Danube",
        description: "Hilly Buda and flat Pest face each other across the river, joined by the Chain Bridge and watched over by the neo-Gothic Parliament. The city sits on thermal springs: soak in the steaming outdoor pools of the Széchenyi Baths, where regulars play chess in the water even in winter. After dark, head to the ruin bars built in abandoned courtyards of the old Jewish Quarter.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Hungarian Parliament Building", wiki: "Budapest" },
      { name: "Lake Balaton", lat: 46.9130, lng: 17.8930, category: "Nature", sound: "ocean", zoom: 9,
        tagline: "Central Europe's inland sea",
        description: "The largest lake in Central Europe is long, shallow and warm, with water the colour of milky jade. Hungarians spend their summers here swimming, sailing and eating fried fish at lakeside stalls. On the north shore, the Tihany peninsula has an abbey above lavender fields, and the volcanic hills of Badacsony are covered in vineyards.",
        bestTime: "Jun–Aug", image: "wiki:Lake Balaton" },
      { name: "Eger", lat: 47.9025, lng: 20.3772, category: "Historical", sound: "city",
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
      { name: "Dubrovnik", lat: 42.6507, lng: 18.0944, category: "Historical", sound: "ocean",
        tagline: "The Pearl of the Adriatic",
        description: "A complete medieval city of pale stone and terracotta roofs, enclosed by walls nearly two kilometres around that you can walk along the top of. The limestone main street has been polished to a shine by centuries of feet. Swim off the rocks below the walls, then take the cable car up Mount Srđ for sunset.",
        bestTime: "May–Jun, Sep–Oct", image: "wiki:Walls of Dubrovnik", wiki: "Dubrovnik" },
      { name: "Plitvice Lakes", lat: 44.8654, lng: 15.5820, category: "Nature", sound: "rainforest",
        tagline: "Sixteen lakes joined by waterfalls",
        description: "In a forested valley, sixteen lakes in shades of turquoise and emerald spill into one another over natural dams of travertine. Wooden boardwalks carry you just above the surface, close enough to see trout hanging in the clear water, with the sound of falling water all around. It has been a UNESCO site since 1979.",
        bestTime: "May–Jun, Sep–Oct", image: "wiki:Plitvice Lakes National Park" },
      { name: "Split", lat: 43.5081, lng: 16.4402, category: "Historical", sound: "ocean",
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
      { name: "Santorini", lat: 36.3932, lng: 25.4615, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "White villages on the rim of a drowned volcano",
        description: "Around 3,600 years ago a massive eruption blew out the centre of this island, leaving a crescent of cliffs around a sea-filled caldera. White cube houses and blue-domed churches now line the rim. Walk the clifftop path from Fira to Oia for sunset, swim off the black and red volcanic beaches, and try the crisp local Assyrtiko wine.",
        bestTime: "May–Jun, Sep–Oct", image: "wiki:Oia, Greece", wiki: "Santorini" },
      { name: "Athens", lat: 37.9838, lng: 23.7275, category: "Historical", sound: "city",
        tagline: "The birthplace of democracy",
        description: "The Parthenon, built between 447 and 432 BC, stands on the rock of the Acropolis above a loud, sun-bleached modern city. Climb up early, before the marble starts to radiate heat, then see the original sculptures in the Acropolis Museum below. Evenings are for the tavernas of Plaka, with the temple lit up overhead.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Acropolis of Athens", wiki: "Athens" },
      { name: "Meteora", lat: 39.7217, lng: 21.6306, category: "Culture", sound: "temple",
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
      { name: "Istanbul", lat: 41.0082, lng: 28.9784, category: "City", sound: "city",
        tagline: "One city on two continents",
        description: "The call to prayer echoes between minarets, ferries criss-cross the Bosphorus, and seagulls follow them from Europe to Asia and back. Stand under the vast dome of Hagia Sophia, completed in 537, lose your bearings among the roughly 4,000 shops of the Grand Bazaar, and drink tea from a tulip-shaped glass on the water at dusk.",
        bestTime: "Apr–May, Sep–Oct", image: "wiki:Hagia Sophia", wiki: "Istanbul" },
      { name: "Cappadocia", lat: 38.6431, lng: 34.8289, category: "Nature", sound: "desert", zoom: 11,
        tagline: "Fairy chimneys and hot-air balloons at dawn",
        description: "Volcanic ash hardened into soft rock, and wind and water carved it into cones, pillars and honeycombed cliffs. People hollowed out homes, churches painted with frescoes, and entire underground cities. At sunrise, dozens of hot-air balloons lift off together and drift silently over the valleys, with only the roar of burners breaking the quiet.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Cappadocia" },
      { name: "Pamukkale", lat: 37.9204, lng: 29.1187, category: "Nature", sound: "desert",
        tagline: "White terraces of mineral water",
        description: "Hot springs rich in calcium have spilled down this hillside for thousands of years, leaving bright white terraces filled with pale blue pools. You walk up barefoot through the warm water. At the top lie the ruins of the Roman spa city of Hierapolis, including a pool where you can swim over fallen marble columns.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Pamukkale" },
      { name: "Ephesus", lat: 37.9411, lng: 27.3417, category: "Historical", sound: "temple",
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
      { name: "Cairo & the Giza Pyramids", aka: ["Pyramids of Giza", "Great Pyramid", "Sphinx"], lat: 29.9792, lng: 31.1342, category: "Historical", sound: "desert",
        tagline: "The last standing wonder of the ancient world",
        description: "The Great Pyramid was built around 2560 BC from some 2.3 million stone blocks, and it remained the tallest structure on Earth for nearly four thousand years. Stand at its base and the scale is hard to take in. The Sphinx keeps watch nearby, and at the edge of the plateau the city of Cairo begins, loud and endless, with the Nile running through it.",
        bestTime: "Oct–Apr (cooler months)", image: "wiki:Giza pyramid complex" },
      { name: "Luxor", lat: 25.6872, lng: 32.6396, category: "Historical", sound: "temple",
        tagline: "Ancient Thebes, city of temples and tombs",
        description: "On the east bank, the temple of Karnak has a hall of 134 giant columns carved from top to bottom. Across the Nile, in the dry cliffs of the Valley of the Kings, pharaohs were buried in painted tombs whose colours are still bright; Tutankhamun's was found here in 1922. Go at sunrise, when the light is soft and the heat has not arrived.",
        bestTime: "Oct–Apr (cooler months)", image: "wiki:Karnak", wiki: "Luxor" },
      { name: "Abu Simbel", lat: 22.3372, lng: 31.6258, category: "Historical", sound: "temple",
        tagline: "Ramesses II carved into a mountain",
        description: "Four seated statues of Ramesses II, each about 20 metres tall, guard a temple cut into the rock near the Sudanese border. In the 1960s the entire monument was sawn into blocks and moved uphill to save it from the rising waters of Lake Nasser. Twice a year, the dawn sun reaches down the corridor to light the statues in the inner sanctuary.",
        bestTime: "Oct–Apr (cooler months)", image: "wiki:Abu Simbel" },
      { name: "Red Sea Reefs", lat: 27.7300, lng: 34.2500, category: "Beach", sound: "ocean", zoom: 9,
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
      { name: "Marrakech", lat: 31.6295, lng: -7.9811, category: "City", sound: "city",
        tagline: "The Red City",
        description: "As the sun goes down, the great square of Jemaa el-Fnaa fills with smoke from food stalls, drummers, storytellers and snake charmers, under the 77-metre minaret of the Koutoubia. Behind it the souks are a maze of spice, leather and brass. When it gets too much, step through a plain door into the calm courtyard of a riad, or the cobalt blue Majorelle Garden.",
        bestTime: "Mar–May, Sep–Nov", image: "wiki:Jemaa el-Fnaa", wiki: "Marrakesh" },
      { name: "Sahara Desert", aka: ["Merzouga", "Erg Chebbi"], lat: 31.0994, lng: -4.0127, category: "Nature", sound: "desert", zoom: 10,
        tagline: "The dunes of Erg Chebbi",
        description: "Near the village of Merzouga, orange dunes rise up to 150 metres out of flat black stone desert. Ride a camel in as the light turns the sand from gold to deep red, then sleep in a camp among the dunes. The silence at night is complete, and the sky has more stars than you knew were there.",
        bestTime: "Oct–Apr", image: "wiki:Erg Chebbi" },
      { name: "Fes", lat: 34.0181, lng: -5.0078, category: "Historical", sound: "city",
        tagline: "A medieval city that still works like one",
        description: "The old medina of Fes is one of the largest car-free urban areas in the world: thousands of alleys where goods still move by donkey and handcart. From a balcony you can look down on the Chouara tannery, where hides are dyed in stone vats of colour as they have been for centuries. The al-Qarawiyyin, founded in 859, is often called the oldest university still operating.",
        bestTime: "Mar–May, Sep–Nov", image: "wiki:Chouara Tannery", wiki: "Fez, Morocco" },
      { name: "Chefchaouen", lat: 35.1688, lng: -5.2636, category: "Culture", sound: "mountains",
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
      { name: "Maasai Mara", lat: -1.4900, lng: 35.1400, category: "Nature", sound: "jungle", zoom: 9,
        tagline: "The stage of the Great Migration",
        description: "Rolling golden grassland dotted with flat-topped acacias, and more lions, cheetahs and leopards than almost anywhere in Africa. From roughly July to October, more than a million wildebeest and zebra arrive from the Serengeti and plunge across the Mara River past waiting crocodiles. Dawn game drives start in the cold and end with coffee in the bush.",
        bestTime: "Jul–Oct (migration)", image: "wiki:Maasai Mara" },
      { name: "Amboseli", lat: -2.6527, lng: 37.2606, category: "Nature", sound: "jungle", zoom: 10,
        tagline: "Elephants in front of Kilimanjaro",
        description: "Amboseli is known for its big elephant herds, which walk across dusty plains and green swamps with the snow-capped dome of Kilimanjaro rising behind them, just over the border in Tanzania. The mountain is clearest at dawn and dusk, before and after the clouds gather.",
        bestTime: "Jun–Oct, Jan–Feb", image: "wiki:Mount Kilimanjaro", wiki: "Amboseli National Park" },
      { name: "Lamu", lat: -2.2717, lng: 40.9020, category: "Culture", sound: "ocean",
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
      { name: "Serengeti", lat: -2.3333, lng: 34.8333, category: "Nature", sound: "jungle", zoom: 8,
        tagline: "The endless plain",
        description: "The name comes from a Maasai word for a land that runs on forever, and that is exactly how it looks: grass to the horizon, broken only by granite outcrops where lions sleep. Over a million wildebeest circle through the park each year following the rains. In January and February thousands of calves are born every day on the southern plains.",
        bestTime: "Jun–Oct (dry), Jan–Feb (calving)", image: "wiki:Serengeti National Park" },
      { name: "Mount Kilimanjaro", lat: -3.0674, lng: 37.3556, category: "Mountain", sound: "mountains", zoom: 9,
        tagline: "The roof of Africa",
        description: "At 5,895 metres Kilimanjaro is the highest mountain in Africa and the tallest free-standing mountain in the world. No ropes are needed to climb it, only time and lungs. The trek passes through rainforest, moorland and alpine desert before the final cold night push to the glaciers at Uhuru Peak for sunrise.",
        bestTime: "Jan–Mar, Jun–Oct", image: "wiki:Mount Kilimanjaro" },
      { name: "Zanzibar", lat: -6.1622, lng: 39.1921, category: "Beach", sound: "ocean", zoom: 10,
        tagline: "Spice island in the Indian Ocean",
        description: "Stone Town is a tangle of alleys, carved doors and balconies that mixes Swahili, Arab, Indian and European history, and it smells of cloves and the sea. At sunset the Forodhani Gardens fill with food stalls grilling seafood. Beyond town, the east and north coasts have white sand and water in three shades of blue.",
        bestTime: "Jun–Oct, Dec–Feb", image: "wiki:Stone Town", wiki: "Zanzibar" },
      { name: "Ngorongoro Crater", lat: -3.1618, lng: 35.5877, category: "Nature", sound: "jungle", zoom: 10,
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
      { name: "Cape Town", lat: -33.9249, lng: 18.4241, category: "City", sound: "ocean",
        tagline: "A city between a mountain and two oceans",
        description: "Table Mountain, more than a kilometre high and often draped in a cloth of cloud, stands directly behind the city. Take the cable car up, walk the bright painted streets of Bo-Kaap, and drive the peninsula to Cape Point, stopping at Boulders Beach to see African penguins waddling between the granite rocks.",
        bestTime: "Nov–Mar (summer)", image: "wiki:Table Mountain", wiki: "Cape Town" },
      { name: "Kruger National Park", lat: -24.9948, lng: 31.5919, category: "Nature", sound: "jungle", zoom: 8,
        tagline: "Big Five country",
        description: "One of Africa's largest reserves, nearly 20,000 square kilometres of bushveld that you can explore in your own car. Lions, leopards, elephants, rhinos and buffalo all live here. The best hours are the first and last of the day, when the light is low, the air is cool and animals come down to the rivers to drink.",
        bestTime: "May–Sep (dry, best game viewing)", image: "wiki:Kruger National Park" },
      { name: "Garden Route", lat: -34.0363, lng: 23.0471, category: "Nature", sound: "ocean", zoom: 9,
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
      { name: "Sossusvlei", lat: -24.7275, lng: 15.3429, category: "Nature", sound: "desert", zoom: 10,
        tagline: "The red dunes of the Namib",
        description: "Some of the tallest sand dunes in the world, over 300 metres high, glow deep orange at sunrise with one side in sharp black shadow. Climb a ridge barefoot while the sand is still cool. Below lies Deadvlei, a white clay pan dotted with the black skeletons of camel thorn trees that died centuries ago and never decayed in the dry air.",
        bestTime: "May–Oct", image: "wiki:Dune 45", wiki: "Sossusvlei" },
      { name: "Etosha National Park", lat: -18.8556, lng: 16.3293, category: "Nature", sound: "desert", zoom: 8,
        tagline: "Wildlife around a vast white salt pan",
        description: "Etosha is built around a shimmering salt pan so large it can be seen from space. In the dry season every animal must come to the waterholes, so you park and wait as elephants, giraffes, zebras and lions arrive in turn. Several camps have floodlit waterholes where rhinos come to drink at night.",
        bestTime: "May–Oct (dry season)", image: "wiki:Etosha National Park" },
      { name: "Fish River Canyon", lat: -27.5890, lng: 17.6140, category: "Nature", sound: "desert", zoom: 9,
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
      { name: "Petra", lat: 30.3285, lng: 35.4444, category: "Historical", sound: "temple",
        tagline: "The rose-red city carved into the rock",
        description: "You enter through the Siq, a narrow gorge more than a kilometre long with walls that almost close overhead. At its end the Treasury appears through the gap, a 40-metre facade cut straight into the pink sandstone by the Nabataeans some 2,000 years ago. Keep going: the climb of around 800 steps to the Monastery is worth every one.",
        bestTime: "Mar–May, Sep–Nov", image: "wiki:Petra" },
      { name: "Wadi Rum", lat: 29.5765, lng: 35.4199, category: "Nature", sound: "desert", zoom: 10,
        tagline: "The Valley of the Moon",
        description: "Sheer sandstone mountains rise from a floor of red sand in a desert so otherworldly that it stands in for Mars in films. Cross it by jeep or camel with Bedouin guides, scramble up a rock bridge, and spend the night in a camp where dinner is cooked underground and the Milky Way is the only light.",
        bestTime: "Mar–May, Sep–Nov", image: "wiki:Wadi Rum" },
      { name: "Dead Sea", lat: 31.5590, lng: 35.4732, category: "Nature", sound: "desert", zoom: 10,
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
      { name: "Dubai", lat: 25.1972, lng: 55.2744, category: "City", sound: "city",
        tagline: "A skyline that rose out of the sand",
        description: "The Burj Khalifa, 828 metres high, is the tallest building in the world, and from its observation deck the desert and the Gulf look like a map. For the older city, cross Dubai Creek on a wooden abra for one dirham and walk the gold and spice souks, where the air smells of saffron and frankincense.",
        bestTime: "Nov–Mar", image: "wiki:Burj Khalifa", wiki: "Dubai" },
      { name: "Abu Dhabi", lat: 24.4128, lng: 54.4750, category: "Culture", sound: "temple",
        tagline: "The white marble Grand Mosque",
        description: "The Sheikh Zayed Grand Mosque has 82 white marble domes, courtyards inlaid with flower patterns, and room for around 40,000 worshippers. Inside lies one of the largest hand-knotted carpets in the world, and near sunset the marble turns from white to gold to blue. Across town, the Louvre Abu Dhabi sits under a huge latticed dome that scatters light like palm shade.",
        bestTime: "Nov–Mar", image: "wiki:Sheikh Zayed Grand Mosque", wiki: "Abu Dhabi" },
      { name: "The Empty Quarter", lat: 23.1300, lng: 53.7700, category: "Nature", sound: "desert", zoom: 9,
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
      { name: "Tokyo", lat: 35.6812, lng: 139.7671, category: "City", sound: "metropolis",
        tagline: "The largest city on Earth",
        description: "At Shibuya Crossing, thousands of people flood the intersection every time the lights change, under walls of video screens. Yet a few minutes away the forest path to Meiji Shrine is hushed. Visit the incense and lanterns of Sensō-ji in Asakusa, eat sushi for breakfast near the old Tsukiji market, and see Shinjuku's neon alleys after dark.",
        bestTime: "Mar–Apr (cherry blossom), Oct–Nov", image: "wiki:Shibuya Crossing", wiki: "Tokyo" },
      { name: "Kyoto", lat: 35.0116, lng: 135.7681, category: "Culture", sound: "temple",
        tagline: "A thousand years as the imperial capital",
        description: "Kyoto was Japan's capital for more than a millennium and still has around 1,600 temples. Walk through the thousands of vermilion torii gates that tunnel up the hillside at Fushimi Inari, see the Golden Pavilion reflected in its pond, and stand in the green light of the Arashiyama bamboo grove. In Gion at dusk you may glimpse a geiko on her way to an appointment.",
        bestTime: "Late Mar–Apr, Nov (autumn leaves)", image: "wiki:Fushimi Inari-taisha", wiki: "Kyoto" },
      { name: "Mount Fuji", lat: 35.3606, lng: 138.7274, category: "Mountain", sound: "mountains", zoom: 9,
        tagline: "Japan's sacred volcano",
        description: "Fuji's symmetrical cone, 3,776 metres high and snow-capped for much of the year, has been painted and worshipped for centuries. The official climbing season runs from early July to early September, and most people climb at night to watch sunrise from the summit. For the classic view, see it reflected in Lake Kawaguchi on a still winter morning.",
        bestTime: "Jul–Sep (climbing), Nov–Feb (clearest views)", image: "wiki:Mount Fuji" },
      { name: "Nara", lat: 34.6851, lng: 135.8048, category: "Historical", sound: "temple",
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
      { name: "Great Wall", aka: ["Great Wall of China", "Mutianyu"], lat: 40.4319, lng: 116.5704, category: "Historical", sound: "mountains",
        tagline: "A stone dragon across the mountains",
        description: "The wall rides the crest of steep green ridges north of Beijing, climbing and dropping with watchtowers at every high point. The restored Ming-era section at Mutianyu is less crowded than Badaling and just as dramatic, and you can ride a toboggan back down. Despite the legend, it cannot be seen with the naked eye from space.",
        bestTime: "Apr–May, Sep–Oct", image: "wiki:Great Wall of China" },
      { name: "Beijing", aka: ["Forbidden City"], lat: 39.9163, lng: 116.3972, category: "Historical", sound: "city",
        tagline: "The Forbidden City and the old hutongs",
        description: "The Forbidden City, completed in 1420, was home to 24 emperors and closed to ordinary people for five centuries. Walk through its sequence of vast courtyards and red halls with golden roofs. Then explore the hutongs, the old grey-brick alley neighbourhoods, and watch locals practise tai chi at the Temple of Heaven in the early morning.",
        bestTime: "Apr–May, Sep–Oct", image: "wiki:Forbidden City", wiki: "Beijing" },
      { name: "Xi'an", aka: ["Terracotta Army", "Xian"], lat: 34.3841, lng: 109.2785, category: "Historical", sound: "temple",
        tagline: "The Terracotta Army",
        description: "In 1974 farmers digging a well struck a clay head, and underneath was an army of around 8,000 life-size soldiers, every face different, buried to guard China's first emperor, who died in 210 BC. They still stand in their trenches in battle formation. Back in the city, you can cycle the top of the complete Ming city wall.",
        bestTime: "Mar–May, Sep–Oct", image: "wiki:Terracotta Army", wiki: "Xi'an" },
      { name: "Zhangjiajie", lat: 29.3249, lng: 110.4343, category: "Nature", sound: "mountains", zoom: 10,
        tagline: "A forest of stone pillars in the mist",
        description: "Thousands of narrow sandstone columns, some more than 200 metres tall and topped with pine trees, rise out of a subtropical forest. When mist fills the valleys they appear to float, which is why they helped inspire the floating mountains in the film Avatar. Glass walkways and a cliffside elevator test your head for heights.",
        bestTime: "Apr–May, Sep–Oct", image: "wiki:Zhangjiajie National Forest Park" },
      { name: "Shanghai", lat: 31.2304, lng: 121.4737, category: "City", sound: "metropolis",
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
      { name: "Seoul", lat: 37.5665, lng: 126.9780, category: "City", sound: "city",
        tagline: "Palaces, neon and all-night markets",
        description: "The 14th-century palace of Gyeongbokgung sits with mountains behind it and office towers in front, and the royal guard still changes at the gate in bright robes. Wander the tiled-roof houses of Bukchon, then head to Gwangjang Market for mung bean pancakes sizzling on huge griddles. The city barely slows down at night.",
        bestTime: "Apr–May, Sep–Nov", image: "wiki:Gyeongbokgung", wiki: "Seoul" },
      { name: "Jeju Island", lat: 33.4580, lng: 126.9425, category: "Nature", sound: "ocean", zoom: 10,
        tagline: "A volcanic island of craters and sea divers",
        description: "Jeju is built from black lava, with Hallasan, South Korea's highest mountain, at its centre. Climb the steps of Seongsan Ilchulbong, a crater rising out of the sea, for sunrise. Along the shore you may see the haenyeo, women who free-dive for shellfish without oxygen tanks, a tradition passed down for generations.",
        bestTime: "Apr–Jun, Sep–Oct", image: "wiki:Seongsan Ilchulbong", wiki: "Jeju Island" },
      { name: "Busan", lat: 35.1796, lng: 129.0756, category: "City", sound: "ocean",
        tagline: "Korea's port city of beaches and seafood",
        description: "South Korea's second city spreads between green mountains and the sea. Pick your dinner live from the tanks at Jagalchi, the country's largest fish market, climb the stairways of the pastel-painted Gamcheon Culture Village, and visit Haedong Yonggungsa, a Buddhist temple built on rocks right above the waves.",
        bestTime: "May–Jun, Sep–Oct", image: "wiki:Gamcheon Culture Village", wiki: "Busan" },
      { name: "Gyeongju", lat: 35.8562, lng: 129.2247, category: "Historical", sound: "temple",
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
      { name: "Bangkok", lat: 13.7563, lng: 100.5018, category: "City", sound: "city",
        tagline: "A city of temples, canals and street food",
        description: "Heat, traffic, incense and the smell of grilling pork: Bangkok is a lot, in the best way. See the glittering Grand Palace and the 46-metre reclining Buddha at Wat Pho, then take a river boat to Wat Arun as its porcelain-covered spire catches the sunset. At night, eat your way down the neon-lit main street of Chinatown.",
        bestTime: "Nov–Feb (cool season)", image: "wiki:Wat Arun", wiki: "Bangkok" },
      { name: "Chiang Mai", lat: 18.7883, lng: 98.9853, category: "Culture", sound: "temple",
        tagline: "The temple city of the north",
        description: "Inside the moat and crumbling brick walls of the old city there are dozens of temples, monks in saffron robes, and a slower rhythm than Bangkok. Climb the 306 steps flanked by serpents to the golden stupa of Wat Phra That Doi Suthep on the mountain above. In November, thousands of paper lanterns are released into the night sky for Yi Peng.",
        bestTime: "Nov–Feb (cool season)", image: "wiki:Wat Phra That Doi Suthep", wiki: "Chiang Mai" },
      { name: "Phuket", lat: 7.8804, lng: 98.3923, category: "Beach", sound: "ocean", zoom: 10,
        tagline: "Thailand's biggest island",
        description: "Phuket has a beach for every mood along its west coast, from busy Patong to quiet coves, all with warm Andaman Sea water. Take a longtail boat into Phang Nga Bay, where sheer limestone towers rise out of the green water. In Phuket Old Town, rows of pastel Sino-Portuguese shophouses hide excellent cafés and noodle shops.",
        bestTime: "Nov–Apr (dry season)", image: "wiki:Phang Nga Bay", wiki: "Phuket province" },
      { name: "Ayutthaya", lat: 14.3532, lng: 100.5685, category: "Historical", sound: "temple",
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
      { name: "Ha Long Bay", lat: 20.9101, lng: 107.1839, category: "Nature", sound: "ocean", zoom: 10,
        tagline: "Thousands of limestone islands in an emerald sea",
        description: "Nearly two thousand limestone islands and pillars, topped with jungle, rise straight out of calm green water. Spend a night on a boat to see the bay at dawn, when mist hangs between the peaks and the only sound is an oar. Kayak through low arches into hidden lagoons, and explore caves hung with stalactites.",
        bestTime: "Oct–Dec, Mar–May", image: "wiki:Hạ Long Bay" },
      { name: "Hoi An", lat: 15.8801, lng: 108.3380, category: "Historical", sound: "city",
        tagline: "A lantern-lit trading port",
        description: "Hoi An's old town of mustard-yellow merchant houses has barely changed since it was a busy port between the 15th and 19th centuries. Cars are kept out, and at night hundreds of silk lanterns light the streets and float on the river. Get a suit made by one of the town's tailors, and try cao lầu, a noodle dish found only here.",
        bestTime: "Feb–Apr", image: "wiki:Japanese Bridge", wiki: "Hội An Old Town" },
      { name: "Hanoi", lat: 21.0278, lng: 105.8342, category: "City", sound: "city",
        tagline: "A thousand-year-old capital on two wheels",
        description: "A river of motorbikes flows through the Old Quarter, where each narrow street was once dedicated to a single trade. Start the day like a local on a tiny plastic stool with a bowl of phở, walk around Hoàn Kiếm Lake as the city does its morning exercises, and stop for an egg coffee, whipped thick and sweet.",
        bestTime: "Oct–Dec, Mar–Apr", image: "wiki:Hoàn Kiếm Lake", wiki: "Hanoi" },
      { name: "Sa Pa", lat: 22.3364, lng: 103.8438, category: "Mountain", sound: "mountains", zoom: 10,
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
      { name: "Angkor Wat", lat: 13.4125, lng: 103.8670, category: "Historical", sound: "temple",
        tagline: "The largest religious monument in the world",
        description: "Built in the early 12th century for King Suryavarman II, Angkor Wat is a stone model of the Hindu universe, surrounded by a moat wide enough to look like a lake. Come before dawn to watch its five towers appear in silhouette and reflect in the lily pond. Inside, hundreds of metres of walls are carved with battles, gods and dancing apsaras.",
        bestTime: "Nov–Feb (cool, dry)", image: "wiki:Angkor Wat" },
      { name: "Angkor Thom & Ta Prohm", lat: 13.4412, lng: 103.8590, category: "Historical", sound: "rainforest",
        tagline: "Stone faces and temples in the grip of the jungle",
        description: "At the Bayon, in the centre of the walled city of Angkor Thom, more than 200 giant stone faces smile calmly down from the towers. Nearby, Ta Prohm has been left much as it was found: huge silk-cotton and fig trees grow out of the roofs, their roots pouring over the walls like wax, with parrots calling above.",
        bestTime: "Nov–Feb (cool, dry)", image: "wiki:Bayon", wiki: "Angkor Thom" },
      { name: "Phnom Penh", lat: 11.5564, lng: 104.9282, category: "City", sound: "city",
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
      { name: "Bali", aka: ["Ubud"], lat: -8.5069, lng: 115.2625, category: "Culture", sound: "temple", zoom: 10,
        tagline: "The Island of the Gods",
        description: "Every morning Balinese families set out small palm-leaf offerings of flowers and incense, and the smoke drifts through the streets. Around Ubud, rice terraces step down the hills, watered by a thousand-year-old cooperative irrigation system. See a temple on its lake or clifftop at sunset, when the gamelan plays and the sky turns orange.",
        bestTime: "Apr–Oct (dry season)", image: "wiki:Pura Ulun Danu Bratan", wiki: "Bali" },
      { name: "Borobudur", lat: -7.6079, lng: 110.2038, category: "Historical", sound: "temple",
        tagline: "The world's largest Buddhist temple",
        description: "Built in the 9th century and later buried for centuries under volcanic ash and jungle, Borobudur is a stone mountain of nine stacked terraces. Pilgrims walk clockwise up past more than 2,600 carved relief panels to the top, where 72 bell-shaped stupas each hold a seated Buddha, looking out at the volcanoes of central Java.",
        bestTime: "May–Oct (dry season)", image: "wiki:Borobudur" },
      { name: "Komodo National Park", lat: -8.5500, lng: 119.4833, category: "Nature", sound: "ocean", zoom: 9,
        tagline: "Home of the dragon",
        description: "The Komodo dragon, the largest lizard on Earth at up to three metres long, lives wild only on a few dry, hilly islands here. Rangers lead walks to see them. The sea is as impressive as the land: climb Padar Island for a view over three curved bays, then snorkel with manta rays and rest on a beach of pink sand.",
        bestTime: "Apr–Nov", image: "wiki:Komodo National Park" },
      { name: "Mount Bromo", lat: -7.9425, lng: 112.9530, category: "Mountain", sound: "mountains",
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
      { name: "Kuala Lumpur", lat: 3.1579, lng: 101.7116, category: "City", sound: "city",
        tagline: "Twin towers above a tropical capital",
        description: "The 452-metre Petronas Towers, linked by a skybridge, shine silver over a city of malls, mosques and food courts. Just outside town, climb 272 rainbow-painted steps past a giant golden statue into the limestone Batu Caves, a Hindu shrine full of monkeys. At night, follow the smoke to the open-air grills of Jalan Alor.",
        bestTime: "May–Jul, Dec–Feb", image: "wiki:KLCC Park", wiki: "Kuala Lumpur" },
      { name: "Penang", lat: 5.4141, lng: 100.3288, category: "Culture", sound: "city",
        tagline: "Street food capital of Malaysia",
        description: "George Town, a UNESCO-listed old port, is a grid of Chinese shophouses, clan temples, mosques and colonial buildings, with playful murals painted on its walls. People come here above all to eat: smoky char kway teow, sour and spicy assam laksa, all cooked at hawker stalls that have been perfecting one dish for decades.",
        bestTime: "Dec–Mar", image: "wiki:George Town, Penang" },
      { name: "Borneo", lat: 6.0750, lng: 116.5586, category: "Nature", sound: "rainforest", zoom: 8,
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
      { name: "Marina Bay", lat: 1.2834, lng: 103.8607, category: "City", sound: "city", zoom: 14,
        tagline: "The skyline of the future",
        description: "Three towers topped by what looks like a ship hold up the rooftop infinity pool of Marina Bay Sands, 57 floors above the water. Walk the loop around the bay after dark, when the financial district lights up and the Merlion, half lion and half fish, spouts water into the harbour.",
        bestTime: "Feb–Apr (driest months)", image: "wiki:Marina Bay Sands", wiki: "Marina Bay, Singapore" },
      { name: "Gardens by the Bay", lat: 1.2816, lng: 103.8636, category: "Nature", sound: "rainforest", zoom: 15,
        tagline: "A grove of giant steel trees",
        description: "The Supertrees are vertical gardens up to 50 metres tall, wrapped in ferns and orchids and joined by an aerial walkway. Every evening they pulse with light and music. Next door, the cooled glass Cloud Forest dome holds a mist-covered mountain of plants and a 35-metre indoor waterfall.",
        bestTime: "Feb–Apr (driest months)", image: "wiki:Gardens by the Bay" },
      { name: "Chinatown & Hawker Centres", lat: 1.2838, lng: 103.8440, category: "Culture", sound: "city", zoom: 15,
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
      { name: "El Nido, Palawan", lat: 11.1800, lng: 119.3900, category: "Beach", sound: "ocean", zoom: 11,
        tagline: "Hidden lagoons among limestone cliffs",
        description: "Around El Nido, black limestone cliffs rise from water that shifts from jade to turquoise, hiding lagoons you enter by kayak through gaps in the rock. Days are spent island hopping by outrigger boat, snorkelling over coral, and eating grilled fish on an empty beach.",
        bestTime: "Dec–May (dry season)", image: "wiki:El Nido, Palawan" },
      { name: "Boracay", lat: 11.9674, lng: 121.9248, category: "Beach", sound: "ocean", zoom: 13,
        tagline: "Four kilometres of powder-white sand",
        description: "White Beach is the reason people come: sand as fine as flour, shallow clear water, and palm trees leaning over it. In 2018 the island was closed to visitors for six months to clean it up, and it reopened with limits on visitor numbers. At sunset, traditional paraw sailboats with blue sails glide along the shore.",
        bestTime: "Nov–May (dry season)", image: "wiki:Boracay" },
      { name: "Chocolate Hills", lat: 9.8297, lng: 124.1397, category: "Nature", sound: "jungle", zoom: 11,
        tagline: "More than a thousand perfect mounds",
        description: "On the island of Bohol, at least 1,260 grass-covered limestone hills of almost identical shape spread to the horizon. They are green in the rainy season and turn chocolate brown in the dry months, which gives them their name. The same island is home to the tarsier, a tiny primate with enormous eyes.",
        bestTime: "Dec–May (dry season)", image: "wiki:Chocolate Hills" },
      { name: "Banaue Rice Terraces", lat: 16.9238, lng: 121.0570, category: "Culture", sound: "mountains",
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
      { name: "Taj Mahal", aka: ["Agra"], lat: 27.1751, lng: 78.0421, category: "Historical", sound: "temple",
        tagline: "A marble monument to love",
        description: "The Mughal emperor Shah Jahan built the Taj Mahal as a tomb for his wife Mumtaz Mahal; work began in 1632 and took around twenty years. The white marble changes colour with the light, from soft pink at dawn to gold at dusk. Up close, the walls are inlaid with flowers made of semi-precious stones.",
        bestTime: "Oct–Mar (closed on Fridays)", image: "wiki:Taj Mahal" },
      { name: "Jaipur", lat: 26.9124, lng: 75.7873, category: "City", sound: "city",
        tagline: "The Pink City of Rajasthan",
        description: "The old city was painted terracotta pink in 1876 to welcome a royal visitor, and it has stayed that way. The Hawa Mahal, or Palace of Winds, has 953 small windows that let royal women watch the street unseen. Above the city, the honey-coloured Amber Fort climbs a ridge, with mirrored halls that glitter by candlelight.",
        bestTime: "Oct–Mar (cool, dry)", image: "wiki:Hawa Mahal", wiki: "Jaipur" },
      { name: "Varanasi", lat: 25.3176, lng: 82.9739, category: "Culture", sound: "temple",
        tagline: "The sacred city on the Ganges",
        description: "One of the oldest continuously inhabited cities in the world, Varanasi is where Hindus come to bathe in the Ganges and to cremate their dead. Take a rowing boat at dawn past the stone steps of the ghats as pilgrims wade into the water. Every evening at Dashashwamedh Ghat, priests perform the aarti with fire, bells and chanting.",
        bestTime: "Oct–Mar (cool, dry)", image: "wiki:Dashashwamedh Ghat", wiki: "Varanasi" },
      { name: "Kerala Backwaters", lat: 9.4981, lng: 76.3388, category: "Nature", sound: "rainforest", zoom: 10,
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
      { name: "Kathmandu", lat: 27.7172, lng: 85.3240, category: "Culture", sound: "temple",
        tagline: "A valley of temples and prayer wheels",
        description: "Incense, bells and motorbike horns fill the lanes of the old city. At Boudhanath, one of the largest stupas in the world, Tibetan pilgrims circle clockwise under the painted eyes of the Buddha, spinning prayer wheels. Climb the long staircase to Swayambhunath at sunset for a view over the whole valley, shared with a troop of monkeys.",
        bestTime: "Oct–Nov, Mar–Apr", image: "wiki:Boudhanath", wiki: "Kathmandu" },
      { name: "Everest Region", aka: ["Mount Everest", "Everest Base Camp"], lat: 27.9881, lng: 86.9250, category: "Mountain", sound: "mountains", zoom: 10,
        tagline: "The trail to the top of the world",
        description: "Mount Everest stands 8,849 metres above sea level. The classic trek to its base camp takes about two weeks from the tiny airstrip at Lukla, climbing through Sherpa villages, across swinging suspension bridges and past the monastery at Tengboche. The air gets thin, the peaks get enormous, and prayer flags snap in the wind at every pass.",
        bestTime: "Mar–May, Oct–Nov", image: "wiki:Mount Everest" },
      { name: "Pokhara", lat: 28.2096, lng: 83.9856, category: "Nature", sound: "mountains",
        tagline: "A lakeside town under the Annapurnas",
        description: "On clear mornings the snow peaks of the Annapurna range and the sharp fishtail summit of Machapuchare are mirrored in the still water of Phewa Lake. Pokhara is where trekkers rest before and after the trails. Row a painted boat out on the lake, or run off a hilltop at Sarangkot strapped to a paraglider.",
        bestTime: "Oct–Nov, Mar–Apr", image: "wiki:Phewa Lake", wiki: "Pokhara" },
      { name: "Chitwan National Park", lat: 27.5291, lng: 84.3542, category: "Nature", sound: "jungle", zoom: 10,
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
      { name: "Sigiriya", lat: 7.9570, lng: 80.7603, category: "Historical", sound: "jungle",
        tagline: "The Lion Rock fortress",
        description: "A column of rock nearly 200 metres high stands alone above the jungle, and in the 5th century King Kashyapa built his palace on its flat top. The climb passes ancient frescoes of women painted on the cliff and then two enormous stone lion paws that once formed the gateway. From the summit the forest stretches flat in every direction.",
        bestTime: "Jan–Apr", image: "wiki:Sigiriya" },
      { name: "Kandy", lat: 7.2906, lng: 80.6337, category: "Culture", sound: "temple",
        tagline: "The hill capital and the Temple of the Tooth",
        description: "Set around a lake in green hills, Kandy is home to the Temple of the Tooth, which holds Sri Lanka's most sacred Buddhist relic. Come for the evening ceremony of drums and offerings of lotus flowers. From here, one of the most scenic train rides in the world winds slowly up through the tea plantations.",
        bestTime: "Jan–Apr; Jul–Aug (Esala Perahera)", image: "wiki:Temple of the Tooth", wiki: "Kandy" },
      { name: "Ella", lat: 6.8667, lng: 81.0466, category: "Nature", sound: "rainforest",
        tagline: "Tea country and the Nine Arch Bridge",
        description: "A small village high in the hills, surrounded by bright green tea bushes and often wrapped in cool mist. Walk along the railway track to the Nine Arch Bridge, a stone viaduct curving through the jungle, and wait for the blue train to cross. Little Adam's Peak is an easy sunrise hike with a huge view.",
        bestTime: "Jan–May", image: "wiki:Nine Arch Bridge", wiki: "Ella, Sri Lanka" },
      { name: "Galle Fort", lat: 6.0260, lng: 80.2170, category: "Historical", sound: "ocean",
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
      { name: "Samarkand", lat: 39.6542, lng: 66.9597, category: "Historical", sound: "temple",
        tagline: "The crossroads of the Silk Road",
        description: "The Registan is one of the great squares of the world: three enormous madrasas facing each other, covered from ground to dome in blue, turquoise and gold tilework. Samarkand was the capital of the conqueror Timur, who lies under a ribbed blue dome nearby. Come back at dusk, when the square is lit and nearly empty.",
        bestTime: "Apr–May, Sep–Oct", image: "wiki:Registan", wiki: "Samarkand" },
      { name: "Bukhara", lat: 39.7747, lng: 64.4286, category: "Historical", sound: "temple",
        tagline: "A holy city of domes and caravanserais",
        description: "Bukhara's old centre is a living medieval town of mud-brick lanes, covered bazaars and more than a hundred protected monuments. The Kalyan Minaret, built in 1127, so impressed Genghis Khan that he is said to have spared it. In the evening everyone gathers around the pool of Lyabi-Hauz, under mulberry trees centuries old.",
        bestTime: "Apr–May, Sep–Oct", image: "wiki:Po-i-Kalyan", wiki: "Bukhara" },
      { name: "Khiva", lat: 41.3783, lng: 60.3639, category: "Historical", sound: "desert",
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
      { name: "Sydney", lat: -33.8568, lng: 151.2153, category: "City", sound: "city",
        tagline: "The harbour city",
        description: "The white sails of the Opera House, opened in 1973, sit on a point in one of the world's great natural harbours, next to the steel arch of the Harbour Bridge. Take a ferry across to Manly for the best view of both, then walk the clifftop path from Bondi to Coogee, stopping to swim at the ocean pools along the way.",
        bestTime: "Sep–Nov, Mar–May", image: "wiki:Sydney Opera House", wiki: "Sydney" },
      { name: "Great Barrier Reef", lat: -16.7594, lng: 145.9731, category: "Nature", sound: "ocean", zoom: 8,
        tagline: "The largest living structure on Earth",
        description: "The reef runs for about 2,300 kilometres along the Queensland coast and is made up of nearly 3,000 individual reefs. Put your face in the water and it is another world: coral gardens, giant clams, green turtles and clouds of fish in impossible colours. Warming seas have caused repeated coral bleaching, so see it with an operator that supports reef conservation.",
        bestTime: "Jun–Oct", image: "wiki:Green Island (Queensland)", wiki: "Great Barrier Reef" },
      { name: "Uluru", lat: -25.3444, lng: 131.0369, category: "Nature", sound: "desert", zoom: 11,
        tagline: "The red heart of Australia",
        description: "A single sandstone rock 348 metres high rises from a flat red desert, and at sunrise and sunset it glows as if lit from inside. Uluru is sacred to the Anangu people, its traditional owners, and climbing it has been prohibited since 2019. Walk the ten-kilometre track around the base instead, past waterholes and ancient rock art.",
        bestTime: "May–Sep (cooler months)", image: "wiki:Uluru" },
      { name: "Great Ocean Road", lat: -38.6621, lng: 143.1051, category: "Nature", sound: "ocean", zoom: 10,
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
      { name: "Queenstown", lat: -45.0312, lng: 168.6626, category: "Mountain", sound: "mountains",
        tagline: "The adventure capital of the world",
        description: "Queenstown sits on the shore of the long, cold Lake Wakatipu, facing the jagged ridge of the Remarkables. Commercial bungy jumping started here in 1988, off the Kawarau Bridge, and you can still jump from the same spot. If that is not your thing, ride the gondola up for the view, or ski the surrounding fields in winter.",
        bestTime: "Dec–Feb (summer), Jun–Aug (skiing)", image: "wiki:Queenstown, New Zealand" },
      { name: "Milford Sound", lat: -44.6414, lng: 167.8974, category: "Nature", sound: "rainforest", zoom: 10,
        tagline: "A fiord of waterfalls and sheer rock walls",
        description: "Mitre Peak rises more than 1,600 metres straight out of dark, still water at the head of this fiord. It is one of the wettest places on Earth, and that is the best time to see it: after rain, hundreds of temporary waterfalls pour down the cliffs. Take a boat out toward the sea, past seals asleep on the rocks.",
        bestTime: "Nov–Apr", image: "wiki:Milford Sound" },
      { name: "Rotorua", lat: -38.1368, lng: 176.2497, category: "Culture", sound: "mountains",
        tagline: "Geysers, mud pools and Māori culture",
        description: "You smell Rotorua before you see it: the sulphur of a town built on a geothermal field. Mud pools bubble by the roadside and the Pōhutu geyser erupts up to 30 metres high several times a day. This is also a heartland of Māori culture, where you can share a meal cooked in an earth oven and watch a haka performed at close range.",
        bestTime: "Nov–Apr", image: "wiki:Whakarewarewa", wiki: "Rotorua" },
      { name: "Aoraki / Mount Cook", lat: -43.5950, lng: 170.1418, category: "Mountain", sound: "mountains", zoom: 10,
        tagline: "New Zealand's highest peak",
        description: "At 3,724 metres, Aoraki towers over a valley of glaciers and milky turquoise lakes. The Hooker Valley Track is an easy three-hour return walk across swing bridges to a lake where icebergs float in front of the mountain. The area is an international dark sky reserve, so stay for the stars.",
        bestTime: "Dec–Mar", image: "wiki:Aoraki / Mount Cook" }
    ]
  }
] };
