// placeholder for features.ts
export interface Feature {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export const whyCarbonCounterFeatures: Feature[] = [
  {
    id: 'tracking',
    title: 'Accurate Tracking',
    description: 'Real-time carbon footprint calculation based on scientific data and algorithms.',
    icon: "https://c.animaapp.com/mdpq8n7dB9LyKV/assets/icon-1.svg"
  },
  {
    id: 'analytics',
    title: 'Insightful Analytics',
    description: 'Comprehensive reports and visualizations to understand your environmental impact.',
    icon: "https://c.animaapp.com/mdpq8n7dB9LyKV/assets/icon-2.svg"
  },
  {
    id: 'goals',
    title: 'Goal Setting',
    description: 'Set personalized reduction targets and track your progress over time.',
    icon: "https://c.animaapp.com/mdpq8n7dB9LyKV/assets/icon-3.svg"
  },
  {
    id: 'community',
    title: 'Community',
    description: 'Connect with like-minded individuals and share your sustainability journey.',
    icon: "https://c.animaapp.com/mdpq8n7dB9LyKV/assets/icon-4.svg"
  }
] as const;
