export interface FoundationStep {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly specialContent?: string;
}

export const foundationSteps: FoundationStep[] = [
  {
    id: 'track',
    title: 'Track your footprint.',
    description: 'Log daily activities to see real-time estimates of your carbon output and spot improvement areas. Our comprehensive system captures transportation, energy use, food choices, and consumption patterns.',
    icon: "https://c.animaapp.com/mdrc3hviqqeaod/assets/icon-5.svg"
  },
  {
    id: 'reflect',
    title: 'Reflect and learn.',
    description: 'Review your trends, gain actionable insights, and set achievable goals for reducing emissions. Our analytics turn complex data into clear, motivating visualizations.',
    icon: "https://c.animaapp.com/mdrc3hviqqeaod/assets/icon-6.svg"
  },
  {
    id: 'act',
    title: 'Act and inspire change.',
    description: 'Access tools and resources to lower your impact and share your progress with the community. Transform individual action into collective environmental change.',
    icon: "https://c.animaapp.com/mdrc3hviqqeaod/assets/icon-7.svg",
    specialContent: 'Will you contribute towards the wellness of society?'
  }
] as const;

