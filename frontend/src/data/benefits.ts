export interface Benefit {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export const joinBenefits: Benefit[] = [
  {
    id: 'free',
    title: 'Free to Start',
    description: 'Begin tracking your carbon footprint at no cost with our comprehensive free tier.',
    icon: "https://c.animaapp.com/mdrc3hviqqeaod/assets/icon-1.svg"
  },
  {
    id: 'instant',
    title: 'Instant Setup',
    description: 'Get started immediately with our intuitive onboarding and start tracking today.',
    icon: "https://c.animaapp.com/mdrc3hviqqeaod/assets/icon-10.svg"
  },
  {
    id: 'community',
    title: 'Join Community',
    description: 'Connect with thousands of users worldwide who are committed to sustainable living.',
    icon: "https://c.animaapp.com/mdrc3hviqqeaod/assets/icon-12.svg"
  }
] as const;
