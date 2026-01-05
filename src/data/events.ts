import type { CelebrationEvent } from '@/types';

export const eventsData: CelebrationEvent[] = [
  {
    id: 'event-1',
    name: 'Chinese Lunar New Year Parade',
    date: 'February 10, 2024',
    location: 'San Francisco, California',
    description: 'One of the largest celebrations of Asian culture outside of Asia. Features colorful floats, martial arts demonstrations, lion dancers, and the famous Golden Dragon.',
    region: 'americas',
    culturalBackground: 'The Chinese New Year, also known as Spring Festival, marks the beginning of the lunar calendar. This celebration in San Francisco began in the 1860s, making it one of the oldest and largest events of its kind outside Asia. The tradition started with Chinese immigrants who came during the Gold Rush, bringing their rich cultural heritage. The festival celebrates the zodiac animal of the year and emphasizes themes of family reunion, prosperity, and good fortune.',
    schedule: [
      '10:00 AM - Opening ceremony at Chinatown Gate',
      '11:00 AM - Traditional martial arts demonstrations',
      '1:00 PM - Community cultural performances',
      '3:00 PM - Lion and dragon dance parade begins',
      '5:00 PM - Grand parade with 100+ units',
      '7:00 PM - Golden Dragon finale (over 200 feet long)',
      '8:00 PM - Fireworks display'
    ]
  },
  {
    id: 'event-2',
    name: 'Edinburgh Hogmanay',
    date: 'December 31, 2023 - January 1, 2024',
    location: 'Edinburgh, Scotland',
    description: 'Scotland\'s legendary three-day New Year celebration featuring torchlight processions, street parties, concerts, and traditional Scottish festivities.',
    region: 'europe',
    culturalBackground: 'Hogmanay is the Scots word for the last day of the year. The celebration has roots in ancient winter solstice festivals and Viking traditions. After Christmas was banned in Scotland for nearly 400 years, Hogmanay became the major winter celebration. The torchlight procession symbolizes the cleansing of the old year, while first-footing (being the first to cross a threshold after midnight) brings luck for the coming year.',
    schedule: [
      'December 30, 7:00 PM - Torchlight Procession through city streets',
      'December 31, 8:00 PM - Street Party begins on Princes Street',
      'December 31, 10:00 PM - Live concerts at multiple stages',
      'December 31, 11:45 PM - Countdown preparations',
      'January 1, 12:00 AM - Fireworks display over Edinburgh Castle',
      'January 1, 12:30 AM - Auld Lang Syne group singing',
      'January 1, 2:00 PM - Loony Dook (river swim event)'
    ]
  },
  {
    id: 'event-3',
    name: 'Times Square New Year\'s Eve',
    date: 'December 31, 2023',
    location: 'New York City, New York',
    description: 'The world-famous ball drop celebration in the heart of Manhattan, watched by over a billion people worldwide.',
    region: 'americas',
    culturalBackground: 'The Times Square celebration began in 1904 when the New York Times newspaper held a fireworks display to inaugurate their new headquarters. The first ball drop occurred in 1907 and has continued ever since (except during wartime blackouts in 1942-43). The current ball is a 12-foot geodesic sphere covered with 2,688 Waterford crystals and weighs 11,875 pounds. It has become a global symbol of New Year celebration, representing hope, optimism, and new beginnings.',
    schedule: [
      '6:00 PM - Gates open, entertainment begins',
      '6:00 PM - 12:00 AM - Musical performances and celebrity appearances',
      '11:59 PM - Final minute countdown begins',
      '12:00 AM - Ball reaches bottom, confetti drop',
      '12:00 AM - Auld Lang Syne performance',
      '12:15 AM - Continued celebration and performances'
    ]
  },
  {
    id: 'event-4',
    name: 'Tokyo New Year Celebration',
    date: 'December 31, 2023 - January 3, 2024',
    location: 'Tokyo, Japan',
    description: 'Traditional Japanese New Year festivities including temple visits, bell ringing ceremonies, and viewing the first sunrise.',
    region: 'east-asia',
    culturalBackground: 'Japanese New Year (Shōgatsu) is the most important holiday in Japan. Traditionally, it was celebrated according to the lunar calendar, but since 1873, Japan has used the Gregorian calendar. On New Year\'s Eve, Buddhist temples ring their bells 108 times (joya no kane) to symbolize the 108 earthly desires that cause human suffering. The first shrine visit of the year (hatsumode) is a sacred tradition where people pray for good fortune. Families gather to eat traditional foods and play traditional games.',
    schedule: [
      'December 31, 11:00 PM - Temple bell ringing ceremonies begin',
      'January 1, 12:00 AM - Hatsumode (first shrine visit)',
      'January 1, 6:00 AM - Watching first sunrise (hatsuhinode)',
      'January 1-3, All Day - Temple and shrine visits',
      'January 1-3, All Day - Traditional New Year foods (osechi)',
      'January 2, Various times - Imperial Palace greeting',
      'January 2-3, All Day - Kakizome (first calligraphy writing)'
    ]
  },
  {
    id: 'event-5',
    name: 'Sydney Harbour Fireworks',
    date: 'December 31, 2023',
    location: 'Sydney, Australia',
    description: 'Spectacular fireworks display over Sydney Harbour Bridge and Opera House, one of the first major cities to welcome the new year.',
    region: 'americas',
    culturalBackground: 'Sydney\'s New Year\'s Eve celebration has become one of the most iconic in the world, watched by over 1 billion people globally on television. The event celebrates Australia\'s multicultural heritage with displays that incorporate Indigenous Australian themes and modern artistic elements. Being one of the first major cities to enter the new year due to its time zone, Sydney sets the tone for global celebrations. The event showcases Australia\'s natural beauty with its stunning harbor location.',
    schedule: [
      '9:00 PM - Family-friendly fireworks display',
      '10:30 PM - Harbor of Light Parade',
      '11:30 PM - Pre-midnight entertainment',
      '12:00 AM - Midnight fireworks spectacular (12 minutes)',
      '12:15 AM - Continued celebrations at various venues'
    ]
  },
  {
    id: 'event-6',
    name: 'Rio de Janeiro New Year Beach Party',
    date: 'December 31, 2023',
    location: 'Copacabana Beach, Rio de Janeiro, Brazil',
    description: 'Massive beach celebration with millions of attendees dressed in white, live music, and spectacular fireworks over the ocean.',
    region: 'americas',
    culturalBackground: 'Reveillon in Rio is one of the world\'s largest New Year celebrations, with over 2 million people gathering on Copacabana Beach. The tradition of wearing white comes from Afro-Brazilian religions, symbolizing peace and good luck. Offerings are made to Yemanjá, the goddess of the sea, by throwing flowers into the ocean. The celebration blends Catholic, indigenous, and African spiritual traditions, reflecting Brazil\'s diverse cultural heritage. It represents renewal, hope, and connection to nature.',
    schedule: [
      '8:00 PM - Beach parties begin, live music starts',
      '9:00 PM - DJ sets and dance performances',
      '11:00 PM - Traditional offerings to Yemanjá',
      '11:45 PM - Final countdown preparations',
      '12:00 AM - Fireworks display over ocean (20 minutes)',
      '12:30 AM - Continued live music and celebration',
      '2:00 AM - Sunrise beach gatherings'
    ]
  },
  {
    id: 'event-7',
    name: 'Vienna Imperial Ball',
    date: 'December 31, 2023',
    location: 'Vienna, Austria',
    description: 'Elegant New Year\'s Eve ball featuring classical music, waltzes, and traditional Viennese culture in historic palaces.',
    region: 'europe',
    culturalBackground: 'Vienna\'s New Year celebration reflects the city\'s imperial heritage and classical music tradition. The celebration includes numerous formal balls in historic palaces and concert halls, maintaining traditions dating back to the Habsburg Empire. The famous Vienna Philharmonic New Year\'s Concert on January 1st is broadcast worldwide. The Viennese waltz, champagne toasts, and formal dress codes embody European elegance and cultural refinement. These celebrations emphasize cultural heritage, classical arts, and timeless traditions.',
    schedule: [
      '7:00 PM - Champagne reception',
      '8:00 PM - Opening waltz ceremony',
      '9:00 PM - Formal dinner service',
      '10:30 PM - Live orchestra performances',
      '11:30 PM - Traditional midnight preparations',
      '12:00 AM - Blue Danube Waltz',
      '12:15 AM - Champagne toast and fireworks viewing'
    ]
  },
  {
    id: 'event-8',
    name: 'Bangkok New Year Countdown',
    date: 'December 31, 2023',
    location: 'CentralWorld Plaza, Bangkok, Thailand',
    description: 'Southeast Asia\'s largest countdown celebration featuring concerts, cultural performances, and spectacular multimedia displays.',
    region: 'east-asia',
    culturalBackground: 'Bangkok\'s modern New Year celebration blends traditional Thai culture with contemporary urban festivities. While Thailand traditionally celebrates the Thai New Year (Songkran) in April, the Western New Year has become a major celebration in urban areas. The event showcases Thailand\'s unique blend of Buddhism, monarchical traditions, and modern Asian culture. It represents Thailand\'s role as a cultural crossroads between East and West, tradition and modernity.',
    schedule: [
      '6:00 PM - Opening ceremony and cultural performances',
      '7:00 PM - Live concerts begin',
      '9:00 PM - Traditional Thai dance performances',
      '10:30 PM - International DJ sets',
      '11:30 PM - Countdown ceremony preparations',
      '12:00 AM - Multimedia countdown and fireworks',
      '12:30 AM - Continued celebrations and street parties'
    ]
  }
];
