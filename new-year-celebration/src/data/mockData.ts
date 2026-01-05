import type { TimelineItem, Tradition, CelebrationEvent, HighlightCard } from '@/types'

export const highlightCards: HighlightCard[] = [
  {
    id: 'history',
    title: 'History',
    description: 'Discover the ancient origins and evolution of New Year celebrations across civilizations.',
    icon: '📜',
    route: '/history'
  },
  {
    id: 'traditions',
    title: 'Traditions',
    description: 'Explore diverse customs and rituals that mark the transition to a new year.',
    icon: '🎋',
    route: '/traditions'
  },
  {
    id: 'events',
    title: 'Events',
    description: 'Find celebration events happening around the world to welcome the new year.',
    icon: '🎉',
    route: '/events'
  }
]

export const timelineData: TimelineItem[] = [
  {
    id: 'babylon',
    year: '2000 BCE',
    title: 'Babylonian New Year (Akitu)',
    description: 'The ancient Babylonians celebrated their new year during the spring equinox in late March. The festival, called Akitu, lasted 11 days and involved religious rituals, crowning of kings, and celebrations honoring the god Marduk. This is one of the earliest recorded New Year celebrations in human history.',
    civilization: 'ancient'
  },
  {
    id: 'roman-march',
    year: '753 BCE',
    title: 'Roman Calendar New Year',
    description: 'The early Roman calendar designated March 1 as the new year. The calendar consisted of 10 months and 304 days, with the winter period being an unorganized time. This explains why September through December derive their names from Latin numbers (seven through ten).',
    civilization: 'ancient'
  },
  {
    id: 'roman-january',
    year: '153 BCE',
    title: 'January 1st as New Year',
    description: 'The Roman Senate moved the beginning of the year to January 1, primarily for civil purposes related to the term of newly elected consuls. January was named after Janus, the two-faced god who looked backward into the old year and forward into the new.',
    civilization: 'ancient'
  },
  {
    id: 'julian',
    year: '45 BCE',
    title: 'Julian Calendar Reform',
    description: 'Julius Caesar introduced a reformed calendar based on the Egyptian solar calendar. The Julian calendar established January 1 as the official start of the new year and introduced the concept of leap years to keep the calendar aligned with the solar year.',
    civilization: 'ancient'
  },
  {
    id: 'chinese',
    year: '104 BCE',
    title: 'Chinese Lunar New Year Standardized',
    description: 'Emperor Wu of Han standardized the Chinese calendar, establishing the lunar New Year celebration. The festival marks the beginning of spring and is associated with family reunions, feasts, and traditions meant to bring good fortune for the coming year.',
    civilization: 'ancient'
  },
  {
    id: 'gregorian',
    year: '1582 CE',
    title: 'Gregorian Calendar Introduction',
    description: 'Pope Gregory XIII introduced the Gregorian calendar to correct the drift in the Julian calendar. This reform reaffirmed January 1 as New Year\'s Day for Catholic countries, though Protestant and Orthodox nations adopted it later.',
    civilization: 'modern'
  },
  {
    id: 'scotland',
    year: '1600 CE',
    title: 'Scotland Adopts January 1',
    description: 'Scotland became one of the first Protestant countries to officially recognize January 1 as the start of the new year, moving away from March 25 which had been the traditional date.',
    civilization: 'modern'
  },
  {
    id: 'britain',
    year: '1752 CE',
    title: 'British Empire Adoption',
    description: 'Britain and its colonies, including America, adopted the Gregorian calendar and January 1 as New Year\'s Day. This required skipping 11 days to realign with the solar year.',
    civilization: 'modern'
  },
  {
    id: 'times-square',
    year: '1907 CE',
    title: 'Times Square Ball Drop',
    description: 'The first New Year\'s Eve ball drop took place in Times Square, New York City. This iconic tradition has continued annually (except for 1942-1943 due to wartime dimout) and has become a symbol of global New Year celebrations.',
    civilization: 'modern'
  },
  {
    id: 'global',
    year: '2000 CE',
    title: 'Global Millennium Celebration',
    description: 'The transition to the year 2000 marked an unprecedented global celebration, with coordinated events across time zones broadcast worldwide. This highlighted how New Year has become a truly international celebration transcending cultural boundaries.',
    civilization: 'modern'
  }
]

export const traditionsData: Tradition[] = [
  // East Asia
  {
    id: 'red-envelopes',
    title: 'Red Envelopes (Hongbao)',
    description: 'During Chinese New Year, elders give red envelopes filled with money to children and unmarried adults. The envelopes are typically red with gold decorations featuring auspicious symbols.',
    symbolicMeaning: 'Red symbolizes good luck and prosperity. The money inside represents wishes for wealth and fortune in the coming year.',
    region: 'east-asia'
  },
  {
    id: 'reunion-dinner',
    title: 'Reunion Dinner',
    description: 'Families gather on New Year\'s Eve for an elaborate dinner. Dishes often include fish, dumplings, spring rolls, and rice cakes, each carefully chosen for their symbolic meanings.',
    symbolicMeaning: 'The gathering symbolizes family unity and harmony. Fish represents surplus (余, yú), dumplings symbolize wealth, and rice cakes mean rising prosperity.',
    region: 'east-asia'
  },
  {
    id: 'temple-visit',
    title: 'Hatsumode (First Shrine Visit)',
    description: 'In Japan, people visit Shinto shrines or Buddhist temples during the first three days of the new year. They pray for health, happiness, and success in the coming year.',
    symbolicMeaning: 'This tradition represents spiritual cleansing and seeking divine blessings for a fresh start.',
    region: 'east-asia'
  },
  {
    id: 'sebae',
    title: 'Sebae (New Year\'s Bow)',
    description: 'In Korea, younger family members perform a deep traditional bow (sebae) to their elders on New Year\'s morning, offering wishes for longevity and health.',
    symbolicMeaning: 'This ritual expresses respect for ancestors and elders while reinforcing family bonds and Confucian values.',
    region: 'east-asia'
  },
  // Europe
  {
    id: 'first-footing',
    title: 'First Footing',
    description: 'In Scotland and Northern England, the first person to cross the threshold after midnight (the "first footer") brings symbolic gifts like coal, bread, salt, and whiskey.',
    symbolicMeaning: 'These gifts represent warmth, food, flavor, and good cheer for the coming year. A dark-haired man is considered the luckiest first footer.',
    region: 'europe'
  },
  {
    id: 'twelve-grapes',
    title: 'Twelve Grapes at Midnight',
    description: 'In Spain, people eat twelve grapes at midnight, one with each clock strike. This tradition, called "las doce uvas de la suerte," originated in the early 1900s.',
    symbolicMeaning: 'Each grape represents good luck for one month of the coming year. Successfully eating all twelve brings a year of prosperity.',
    region: 'europe'
  },
  {
    id: 'broken-dishes',
    title: 'Smashing Dishes',
    description: 'In Denmark, people throw unused plates and glasses against the doors of friends and family throughout the year, saved specifically for New Year\'s Eve.',
    symbolicMeaning: 'A pile of broken dishes at your door signifies you have many loyal friends and is considered extremely lucky.',
    region: 'europe'
  },
  {
    id: 'lead-pouring',
    title: 'Molybdomancy (Lead Pouring)',
    description: 'In Finland and other Nordic countries, people melt small amounts of tin or lead and pour it into cold water. The resulting shape is used to predict the coming year.',
    symbolicMeaning: 'The shapes formed are interpreted as omens: a ship means travel, a heart means romance, a pig means plenty of food.',
    region: 'europe'
  },
  // Americas
  {
    id: 'times-square-ball',
    title: 'Times Square Ball Drop',
    description: 'Over a million people gather in New York\'s Times Square to watch the famous crystal ball descend during the final minute of the year, with millions more watching on television.',
    symbolicMeaning: 'The ball\'s descent marks the transition between years and symbolizes unity as people count down together.',
    region: 'americas'
  },
  {
    id: 'black-eyed-peas',
    title: 'Black-Eyed Peas and Greens',
    description: 'In the American South, eating black-eyed peas and collard greens on New Year\'s Day is believed to bring luck and prosperity.',
    symbolicMeaning: 'Black-eyed peas symbolize coins while greens represent paper money. Cornbread is often added to represent gold.',
    region: 'americas'
  },
  {
    id: 'ano-viejo',
    title: 'Año Viejo (Burning of the Old Year)',
    description: 'In Ecuador and other Latin American countries, people create effigies representing the old year, often depicting politicians or pop culture figures, and burn them at midnight.',
    symbolicMeaning: 'Burning the effigy symbolizes purging the bad luck and negativity of the past year, making way for a fresh start.',
    region: 'americas'
  },
  {
    id: 'brazilian-white',
    title: 'Wearing White',
    description: 'In Brazil, people traditionally wear white clothing on New Year\'s Eve and often gather on beaches to jump seven waves while making wishes.',
    symbolicMeaning: 'White represents peace and purity. The seven waves honor Yemanjá, goddess of the sea, and each wave carries a wish for the new year.',
    region: 'americas'
  }
]

export const eventsData: CelebrationEvent[] = [
  {
    id: 'times-square-nyc',
    name: 'Times Square New Year\'s Eve',
    date: 'December 31, 2025',
    location: 'New York City, USA',
    shortDescription: 'The world\'s most famous New Year\'s celebration featuring the iconic ball drop.',
    fullDescription: 'Experience the magic of Times Square on New Year\'s Eve, where over a million people gather to watch the world-famous Waterford Crystal ball descend at midnight. The celebration features live musical performances, confetti showers, and the collective countdown that marks the arrival of the new year. This iconic event has been a tradition since 1907 and is broadcast to billions of viewers worldwide.',
    culturalBackground: 'The Times Square ball drop began in 1907 when the owner of One Times Square organized the first New Year\'s Eve celebration to draw attention to his new building. The original ball was made of iron and wood with 100 light bulbs. Today\'s ball is a geodesic sphere covered with 2,688 Waterford Crystal triangles and 32,256 LEDs capable of creating billions of color patterns.',
    schedule: [
      { time: '6:00 PM', activity: 'Gates Open', description: 'Public viewing areas open to attendees' },
      { time: '8:00 PM', activity: 'Musical Performances Begin', description: 'Live performances from top artists' },
      { time: '11:59 PM', activity: '60-Second Countdown', description: 'The famous ball begins its descent' },
      { time: '12:00 AM', activity: 'Ball Drop & Confetti', description: 'Tons of confetti shower the crowd as the new year begins' }
    ],
    region: 'americas'
  },
  {
    id: 'chinese-new-year-beijing',
    name: 'Spring Festival in Beijing',
    date: 'January 29, 2025',
    location: 'Beijing, China',
    shortDescription: 'China\'s most important traditional festival celebrating the lunar new year.',
    fullDescription: 'The Spring Festival, or Chinese New Year, is the grandest traditional festival in China. In Beijing, celebrations include visiting temple fairs, watching traditional performances, setting off fireworks, and enjoying family reunions. The city comes alive with red lanterns, dragon and lion dances, and the aroma of traditional foods.',
    culturalBackground: 'Chinese New Year has over 4,000 years of history and is rooted in legend. The festival originally began as a way to scare away a mythical beast called Nian with loud noises and the color red. Today, it represents a time for family reunion, honoring ancestors, and welcoming new beginnings with hope for prosperity.',
    schedule: [
      { time: '8:00 AM', activity: 'Temple Fair Opens', description: 'Traditional crafts, foods, and performances' },
      { time: '12:00 PM', activity: 'Dragon Dance Performance', description: 'Spectacular dragon dance through main streets' },
      { time: '5:00 PM', activity: 'Reunion Dinner', description: 'Families gather for the most important meal of the year' },
      { time: '12:00 AM', activity: 'Fireworks Display', description: 'Citywide fireworks welcome the new year' }
    ],
    region: 'east-asia'
  },
  {
    id: 'hogmanay-edinburgh',
    name: 'Edinburgh\'s Hogmanay',
    date: 'December 31, 2025',
    location: 'Edinburgh, Scotland',
    shortDescription: 'Scotland\'s legendary three-day New Year celebration.',
    fullDescription: 'Hogmanay is Scotland\'s traditional celebration of the new year, and Edinburgh hosts one of the world\'s largest street parties. The festivities include a torchlight procession, concerts, ceilidh dancing, and the spectacular midnight fireworks over Edinburgh Castle. The celebration embodies the Scottish spirit of warmth, hospitality, and community.',
    culturalBackground: 'Hogmanay traditions date back to the celebration of the winter solstice by the Vikings. The word "Hogmanay" may derive from the Old Norse word "hoggunott" meaning great slaughter for a midwinter feast. Scottish traditions include first-footing, singing "Auld Lang Syne," and the sharing of shortbread and whisky.',
    schedule: [
      { time: '7:00 PM', activity: 'Torchlight Procession', description: 'Thousands carry torches through the Old Town' },
      { time: '9:00 PM', activity: 'Street Party Begins', description: 'Live music and entertainment across multiple stages' },
      { time: '11:45 PM', activity: 'Auld Lang Syne', description: 'Mass singing of the traditional Scottish song' },
      { time: '12:00 AM', activity: 'Fireworks over Edinburgh Castle', description: 'Spectacular pyrotechnic display' }
    ],
    region: 'europe'
  },
  {
    id: 'new-year-tokyo',
    name: 'Shogatsu in Tokyo',
    date: 'January 1, 2025',
    location: 'Tokyo, Japan',
    shortDescription: 'Japan\'s most important holiday marking the start of the new year.',
    fullDescription: 'Shogatsu (New Year) is the most important holiday in Japan. Tokyo offers a unique blend of traditional and modern celebrations. Temples ring their bells 108 times at midnight (joya no kane), families prepare special foods called osechi-ryori, and millions make their first shrine visit (hatsumode) to pray for good fortune.',
    culturalBackground: 'Japanese New Year traditions blend ancient Shinto practices with Buddhist influences. The 108 bell rings represent the 108 earthly temptations in Buddhist belief. Cleaning the house before New Year (osoji) symbolizes purifying the home for the incoming year. Kadomatsu decorations welcome ancestral spirits and gods.',
    schedule: [
      { time: '11:00 PM', activity: 'Temple Bell Ringing', description: '108 bells ring to dispel earthly desires' },
      { time: '12:00 AM', activity: 'New Year Arrives', description: 'Quiet celebrations with family' },
      { time: '6:00 AM', activity: 'First Sunrise (Hatsuhinode)', description: 'Watching the first sunrise of the year' },
      { time: '9:00 AM', activity: 'Hatsumode', description: 'First shrine or temple visit of the year' }
    ],
    region: 'east-asia'
  },
  {
    id: 'reveillon-rio',
    name: 'Réveillon in Rio de Janeiro',
    date: 'December 31, 2025',
    location: 'Rio de Janeiro, Brazil',
    shortDescription: 'Brazil\'s spectacular beach celebration with fireworks and traditions.',
    fullDescription: 'Rio de Janeiro hosts one of the world\'s largest New Year celebrations on Copacabana Beach. Millions gather dressed in white to watch spectacular fireworks, jump seven waves for luck, and offer flowers to Yemanjá, the goddess of the sea. The celebration combines Indigenous, African, and European traditions unique to Brazil.',
    culturalBackground: 'The Réveillon celebration reflects Brazil\'s syncretic religious traditions. The custom of wearing white comes from Candomblé and Umbanda religions, honoring Yemanjá. Jumping seven waves while making wishes combines Indigenous and African spiritual practices. This multicultural celebration embodies Brazil\'s diverse heritage.',
    schedule: [
      { time: '8:00 PM', activity: 'Beach Gathering', description: 'Millions arrive at Copacabana dressed in white' },
      { time: '10:00 PM', activity: 'Live Concerts', description: 'Major musical acts perform on multiple stages' },
      { time: '12:00 AM', activity: 'Fireworks Display', description: '16 minutes of fireworks along the beach' },
      { time: '12:01 AM', activity: 'Seven Waves Ritual', description: 'Jump seven waves while making wishes' }
    ],
    region: 'americas'
  },
  {
    id: 'puerta-sol-madrid',
    name: 'Nochevieja at Puerta del Sol',
    date: 'December 31, 2025',
    location: 'Madrid, Spain',
    shortDescription: 'Spain\'s traditional celebration with the famous twelve grapes ritual.',
    fullDescription: 'Puerta del Sol in Madrid is the heart of Spain\'s New Year celebration. Thousands gather beneath the historic clock tower to eat twelve grapes in sync with the midnight bells—one grape for each chime. This beloved tradition is broadcast nationally and followed by millions of Spaniards wherever they celebrate.',
    culturalBackground: 'The tradition of eating twelve grapes at midnight began in 1895 when grape growers from Alicante promoted the practice to sell a grape surplus. It was popularized in Puerta del Sol around 1909. The clock on the Real Casa de Correos building has marked the transition to the new year for all of Spain since then.',
    schedule: [
      { time: '10:00 PM', activity: 'Square Opens', description: 'Public access to Puerta del Sol' },
      { time: '11:00 PM', activity: 'Pre-Celebration Gathering', description: 'Crowds prepare grapes and champagne' },
      { time: '11:59 PM', activity: 'Twelve Grapes', description: 'Eat one grape with each bell strike' },
      { time: '12:01 AM', activity: 'Celebration', description: 'Champagne toast and street celebrations' }
    ],
    region: 'europe'
  },
  {
    id: 'korean-new-year-seoul',
    name: 'Seollal in Seoul',
    date: 'January 29, 2025',
    location: 'Seoul, South Korea',
    shortDescription: 'Korea\'s lunar new year celebration honoring family and ancestors.',
    fullDescription: 'Seollal is one of Korea\'s most important traditional holidays. Families gather to perform ancestral rites (charye), share traditional foods like tteokguk (rice cake soup), play folk games, and perform sebae (traditional bowing). Seoul offers special cultural programs at palaces and traditional villages.',
    culturalBackground: 'Seollal traditions emphasize family bonds and respect for ancestors. Wearing hanbok (traditional clothing), children receive advice and blessings from elders along with sebaetdon (New Year\'s money). The eating of tteokguk symbolizes gaining a year of age and represents wishes for a long, prosperous life.',
    schedule: [
      { time: '8:00 AM', activity: 'Charye (Ancestral Rites)', description: 'Families honor their ancestors' },
      { time: '10:00 AM', activity: 'Sebae', description: 'Younger members bow to elders' },
      { time: '12:00 PM', activity: 'Tteokguk', description: 'Traditional rice cake soup meal' },
      { time: '2:00 PM', activity: 'Folk Games', description: 'Traditional games like yutnori' }
    ],
    region: 'east-asia'
  },
  {
    id: 'vienna-ball',
    name: 'New Year\'s Concert & Ball',
    date: 'January 1, 2025',
    location: 'Vienna, Austria',
    shortDescription: 'Vienna\'s elegant celebration featuring the world-famous philharmonic concert.',
    fullDescription: 'Vienna celebrates the new year with unparalleled elegance. The Vienna Philharmonic\'s New Year\'s Concert is broadcast to millions worldwide, featuring waltzes and polkas by the Strauss family. The Imperial Ball at the Hofburg Palace and celebrations along the Ringstrasse offer a magical start to the year.',
    culturalBackground: 'The Vienna New Year\'s Concert tradition began in 1939 and has become one of the most watched musical events globally. Vienna\'s ball culture dates to the 18th century Habsburg Empire. The tradition of dancing the "Blue Danube" waltz at midnight maintains Austria\'s musical heritage as the home of classical music.',
    schedule: [
      { time: '10:00 PM', activity: 'Imperial Ball Opens', description: 'Elegant dancing at the Hofburg Palace' },
      { time: '11:30 AM', activity: 'New Year\'s Concert', description: 'Vienna Philharmonic performance' },
      { time: '12:00 AM', activity: 'Blue Danube Waltz', description: 'Traditional midnight waltz' },
      { time: '12:15 AM', activity: 'Pummerin Bell', description: 'St. Stephen\'s Cathedral bell rings' }
    ],
    region: 'europe'
  }
]
