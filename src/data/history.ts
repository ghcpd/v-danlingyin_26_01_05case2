import type { TimelineEntry } from '@/types/models';

export const timelineEntries: TimelineEntry[] = [
  {
    id: 'ancient-babylon',
    era: 'Ancient Civilizations',
    title: 'Babylonian Akitu Festival',
    yearRange: 'c. 2000 BCE',
    description: 'Marked the spring equinox with processions, recitations of the Enuma Elish, and renewal rituals for the king.',
    details: [
      'Celebrated over twelve days with community participation.',
      'Symbolized the victory of order over chaos through ritual drama.',
      'Set precedent for communal gatherings to welcome a new year.',
    ],
  },
  {
    id: 'rome-janus',
    era: 'Classical Era',
    title: 'Roman January Dedication to Janus',
    yearRange: '45 BCE',
    description: 'Julius Caesar aligned the calendar to solar cycles, dedicating the first month to Janus, the god of beginnings.',
    details: [
      'Offerings at temples and exchange of laurel branches for good fortune.',
      'Adoption of public vows and civic oaths for the coming year.',
      'Foundation for the modern Gregorian calendar structure.',
    ],
  },
  {
    id: 'lunar-new-year',
    era: 'East Asia',
    title: 'Lunar New Year Traditions',
    yearRange: 'Han Dynasty onward',
    description: 'Family reunions, ancestral rites, and lantern lighting to invite prosperity across China, Korea, and Vietnam.',
    details: [
      'Red couplets and lanterns to ward off misfortune.',
      'Reunion dinners highlighting symbolic foods like fish and dumplings.',
      'Lion and dragon dances that animate community streets.',
    ],
  },
  {
    id: 'global-new-year',
    era: 'Global Modern Era',
    title: 'Gregorian Calendar New Year',
    yearRange: '1582 CE and adoption through 20th century',
    description: 'Worldwide observances on January 1 with fireworks, countdowns, and reflective resolutions.',
    details: [
      'Time-zone synchronized broadcasts such as the Times Square Ball Drop.',
      'Concerts, city festivals, and televised global greetings.',
      'Blending of local customs with international spectacles.',
    ],
  },
];
