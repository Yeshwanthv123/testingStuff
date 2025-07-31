export interface BaseItem {
  readonly id: string;
}

export interface NavigationProps {
  className?: string;
}

export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}
