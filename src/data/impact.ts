export interface ImpactItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export const impactItems: ImpactItem[] = [
  {
    id: 'environmental',
    title: 'Environmental Focus',
    description: 'Our team combines expertise in environmental science, technology, and user experience to create tools that make a real difference in the fight against climate change.'
  },
  {
    id: 'community',
    title: 'Community Driven',
    description: 'We\'re building more than just an app – we\'re fostering a global community of environmentally conscious individuals working together toward sustainability.'
  },
  {
    id: 'scientific',
    title: 'Scientific Accuracy',
    description: 'All our carbon calculations are based on the latest climate science research and internationally recognized methodologies for carbon accounting.'
  }
] as const;
