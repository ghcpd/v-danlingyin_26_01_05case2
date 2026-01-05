import type { Tradition } from '@/types/models';

export const traditions: Tradition[] = [
  {
    id: 'lunar-feast',
    region: 'east-asia',
    title: 'Reunion Feast',
    description: 'Families gather on New Year’s Eve for a banquet featuring fish, dumplings, and longevity noodles.',
    meaning: 'Unity, prosperity, and long life.',
  },
  {
    id: 'red-envelopes',
    region: 'east-asia',
    title: 'Red Envelopes',
    description: 'Elders gift red envelopes with money to younger generations.',
    meaning: 'Blessings, luck, and the passing of good fortune.',
  },
  {
    id: 'first-footing',
    region: 'europe',
    title: 'First-Footing',
    description: 'In Scotland, the first visitor after midnight brings symbolic gifts like coal or shortbread.',
    meaning: 'Sets the tone for warmth and abundance in the new year.',
  },
  {
    id: 'bells',
    region: 'europe',
    title: 'Bell Ringing',
    description: 'Church bells ring at midnight across many European cities.',
    meaning: 'Marking transition and inviting blessings.',
  },
  {
    id: 'midnight-kiss',
    region: 'americas',
    title: 'Midnight Countdown & Kiss',
    description: 'Crowds gather for countdowns; couples share a kiss at midnight.',
    meaning: 'Good fortune and affection carried into the new year.',
  },
  {
    id: 'grapes',
    region: 'americas',
    title: 'Twelve Grapes',
    description: 'In Hispanic communities, twelve grapes are eaten with each stroke before midnight.',
    meaning: 'Luck for each month ahead.',
  },
];
