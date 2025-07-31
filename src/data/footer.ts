export interface FooterButton {
  readonly id: string;
  readonly label: string;
  readonly className: string;
}

export const footerButtons: FooterButton[] = [
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
