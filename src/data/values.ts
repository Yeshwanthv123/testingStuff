export interface Value {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export const valuesData: Value[] = [
  {
    id: 'transparency',
    title: 'Transparency',
    description: 'We believe in open, honest communication about environmental impact. Our calculations are based on peer-reviewed scientific data and methodologies.',
    icon: "https://c.animaapp.com/mdrc3hviqqeaod/assets/icon-10.svg"
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    description: 'Environmental action should be available to everyone. We design our platform to be intuitive, inclusive, and accessible across all devices and communities.',
    icon: "https://c.animaapp.com/mdrc3hviqqeaod/assets/icon-11.svg"
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'We continuously improve our platform with cutting-edge technology, user feedback, and the latest environmental science research.',
    icon: "https://c.animaapp.com/mdrc3hviqqeaod/assets/icon-3.svg"
  }
] as const;
