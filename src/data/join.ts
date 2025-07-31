export interface JoinBenefit {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export interface FooterNavigationItem {
  readonly id: string;
  readonly label: string;
  readonly className: string;
}

export const joinBenefits: JoinBenefit[] = [
  {
    id: 'free',
    title: 'Free to Start',
    description: 'Begin tracking your carbon footprint at no cost with our comprehensive free tier.',
    icon: "https://c.animaapp.com/mdr121f8QFQ9Xs/assets/icon-1.svg"
  },
  {
    id: 'instant',
    title: 'Instant Setup',
    description: 'Get started immediately with our intuitive onboarding and start tracking today.',
    icon: "https://c.animaapp.com/mdr121f8QFQ9Xs/assets/icon-10.svg"
  },
  {
    id: 'community',
    title: 'Join Community',
    description: 'Connect with thousands of users worldwide who are committed to sustainable living.',
    icon: "https://c.animaapp.com/mdr121f8QFQ9Xs/assets/icon-12.svg"
  }
] as const;

export const footerNavigation: FooterNavigationItem[] = [
  {
    id: 'contact',
    label: 'Contact',
    className: "text-[oklch(0.707_0.022_261.325)] font-medium bg-transparent block outline-[oklab(0.708_0_0_/_0.5)] mr-[42px] p-0"
  },
  {
    id: 'about',
    label: 'About',
    className: "text-[oklch(0.707_0.022_261.325)] font-medium bg-transparent block outline-[oklab(0.708_0_0_/_0.5)] mr-[42px] p-0"
  },
  {
    id: 'documentation',
    label: 'Documentation',
    className: "text-[oklch(0.707_0.022_261.325)] font-medium bg-transparent block outline-[oklab(0.708_0_0_/_0.5)] p-0"
  }
] as const;
