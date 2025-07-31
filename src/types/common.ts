export interface BaseItem {
  readonly id: string;
}

export interface ItemWithTitle extends BaseItem {
  readonly title: string;
}

export interface ItemWithDescription extends ItemWithTitle {
  readonly description: string;
}

export interface ItemWithIcon extends ItemWithDescription {
  readonly icon: string;
}

export interface NavigationProps {
  className?: string;
}

export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}
