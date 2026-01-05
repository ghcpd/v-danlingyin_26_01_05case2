import type { CelebrationEvent } from '@/types/models';

export const events: CelebrationEvent[] = [
  {
    id: 'lunar-lanterns',
    name: 'Lunar Lantern Festival Night',
    date: 'Feb 8',
    location: 'Taipei, Taiwan',
    region: 'east-asia',
    shortDescription: 'Lantern displays, dragon dances, and calligraphy stations welcoming the lunar new year.',
    background: 'Rooted in Han dynasty customs, the lantern festival culminates the lunar new year period with shared light and community.',
    highlights: ['Lantern release', 'Folk music stage', 'Tea ceremony demo'],
    schedule: [
      { time: '17:00', activity: 'Lantern crafting workshop' },
      { time: '19:00', activity: 'Dragon and lion dance parade' },
      { time: '21:00', activity: 'Sky lantern release and fireworks' },
    ],
  },
  {
    id: 'edinburgh-hogmanay',
    name: 'Edinburgh Hogmanay Street Party',
    date: 'Dec 31',
    location: 'Edinburgh, Scotland',
    region: 'europe',
    shortDescription: 'Torchlight processions, ceilidh dancing, and midnight fireworks above the castle.',
    background: 'Hogmanay blends Norse and Gaelic influences, marking the year’s turning with communal warmth and song.',
    highlights: ['Torchlight procession', 'Live folk bands', 'Midnight fireworks'],
    schedule: [
      { time: '18:00', activity: 'Torch gathering and safety briefing' },
      { time: '20:00', activity: 'Outdoor ceilidh dance' },
      { time: '23:59', activity: 'Fireworks over Edinburgh Castle' },
    ],
  },
  {
    id: 'times-square',
    name: 'Times Square Ball Drop',
    date: 'Dec 31',
    location: 'New York City, USA',
    region: 'americas',
    shortDescription: 'Iconic countdown with global broadcast, confetti, and musical performances.',
    background: 'Since 1907, the ball drop gathers millions to witness the final seconds and welcome the new year together.',
    highlights: ['Main stage performances', 'Confetti release', 'Countdown ball descent'],
    schedule: [
      { time: '18:00', activity: 'Stage performances begin' },
      { time: '23:50', activity: 'Global greetings montage' },
      { time: '23:59', activity: 'Countdown and ball drop' },
    ],
  },
];
