import type { ReactNode } from "react";

export type NavItem = {
  text: string;
  path: string;
};

export type DropdownMenuItemType = {
  iconPath: string;
  alt: string;
  text: string;
};

export type PolicyNavItem = {
  text: string;
  href: string;
};

export type FeatureCardData = {
  icon: ReactNode;
  alt: string;
  title: string;
  text: string;
};

export type Benefit = {
  benefitTitle: string;
  benefitDescription: string;
};

export type SubscriptionCardData = {
  title: string;
  price: {
    newPrice: string;
    oldPrice: string;
    discount: string;
  };
  benefits: Benefit[];
  isAccent: boolean;
};

export type BannerListData = {
  discUrl: string;
  liHeading: string;
  liText: string;
};

export type SubscriptionCardBenefit = {
  benefitTitle: string;
  benefitDescription: string;
};
