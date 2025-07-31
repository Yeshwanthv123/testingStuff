export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly className: string;
}

export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    className: "text-white text-[12.25px] font-medium bg-transparent block leading-[17.5px] outline-[oklab(0.708_0_0_/_0.5)] text-center mr-[21px] pt-0 pb-[3.5px] px-0 border-t-0 border-x-0 border-solid md:text-[15.75px] md:leading-[24.5px] md:mr-[42px]"
  },
  {
    id: 'about',
    label: 'About',
    className: "text-[oklch(0.446_0.03_256.802)] text-[12.25px] bg-transparent block leading-[17.5px] outline-[oklab(0.708_0_0_/_0.5)] text-center mr-[21px] p-0 md:text-[15.75px] md:leading-[24.5px] md:mr-[42px]"
  },
  {
    id: 'signin',
    label: 'Sign In',
    className: "text-[oklch(0.446_0.03_256.802)] text-[12.25px] bg-transparent block leading-[17.5px] outline-[oklab(0.708_0_0_/_0.5)] text-center p-0 md:text-[15.75px] md:leading-[24.5px]"
  }
] as const;
