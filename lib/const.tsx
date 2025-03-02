import { SquareMousePointer } from "lucide-react";
import { ChartNetwork } from "lucide-react";
import { MailCheck } from "lucide-react";
import { LayoutPanelTop } from "lucide-react";
import { Group } from "lucide-react";
import { BadgeCheck } from "lucide-react";
import type {
  DropdownMenuItemType,
  FeatureCardData,
  NavItem,
  PolicyNavItem,
  SubscriptionCardData,
} from "./types";

export const NAV_ITEMS: NavItem[] = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Why Tiger Stocks",
    path: "/why-tiger-stocks",
  },
  {
    text: "Personal Finance",
    path: "/personal-finance",
  },
  {
    text: "Contact Us",
    path: "/contact-us",
  },
];

export const FOOTER_NAV_ITEMS: NavItem[] = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Tiger Stocks",
    path: "/why-tiger-stocks",
  },
  {
    text: "Newsletterss",
    path: "/newsletters",
  },
  {
    text: "Personal Finance",
    path: "/personal-finance",
  },
  {
    text: "Contact Us",
    path: "/contact-us",
  },
];

export const USER_STATUS = {
  NO_AUTH: "Not authorized",
  AUTH: "Authorized",
  SUBSCRIBED: "Subscribed",
  UNKNOWN: "Unknown",
};

export const DROPDOWN_MENU_ITEMS: DropdownMenuItemType[] = [
  {
    iconPath: "/icons/user.svg",
    alt: "Profile icon",
    text: "My Profile",
  },
  {
    iconPath: "/icons/membership.svg",
    alt: "Membership icon",
    text: "Manage Membership",
  },
  {
    iconPath: "/icons/settings.svg",
    alt: "Account settings icon",
    text: "Account Settings",
  },
  {
    iconPath: "/icons/phone.svg",
    alt: "Call icon",
    text: "Contact Us",
  },
  {
    iconPath: "/icons/logout.svg",
    alt: "Logout icon",
    text: "Log Out",
  },
];

export const MEDIA_ICONS_LIST = [
  {
    href: "https://www.facebook.com/people/",
    src: "/icons/facebook.svg",
    alt: "Facebook",
  },
  {
    href: "https://x.com/tigerwealthcap",
    src: "/icons/x-media.svg",
    alt: "X-social network",
  },
  {
    href: "https://www.tiktok.com/@tigerwealthcapital",
    src: "/icons/tiktok.svg",
    alt: "Tiktok",
  },
  {
    href: "https://www.youtube.com/@tigerwealthcapital",
    src: "/icons/youtube.svg",
    alt: "Youtube",
  },
  {
    href: "https://www.instagram.com/TigerWealthCapital",
    src: "/icons/instagram.svg",
    alt: "Instagram",
  },
];

export const POLICY_NAV_LIST: PolicyNavItem[] = [
  {
    text: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    text: "Terms of Service",
    href: "/terms-of-service",
  },
  {
    text: "Disclosure Policy",
    href: "/disclosure-policy",
  },
  {
    text: "Accessibility Information",
    href: "/accessibility-information",
  },
  {
    text: "Copyright and Trademark",
    href: "/copyright-and-trademark",
  },
  {
    text: "Terms and Conditions",
    href: "/terms-and-conditions",
  },
  {
    text: "Do Not Sell My Personal Information",
    href: "/do-not-sell-my-personal-information",
  },
];

export const FEATURE_CARDS_DATA: FeatureCardData[] = [
  {
    icon: <SquareMousePointer size="100%" />,
    alt: "Abstract graphic icon",
    title: "Top Stock Picks",
    text: "Stay ahead with expert-selected stocks that deliver high returns.Carefully curated picks to maximize your investment opportunities.Regularly updated to ensure you never miss a top performer.",
  },
  {
    icon: <ChartNetwork size="100%" />,
    alt: "Abstract graphic icon",
    title: "Detailed Analysis",
    text: "Comprehensive insights into market trends and stock performance.In-depth reports with metrics and future predictions.Simplified explanations for both beginners and seasoned investors.",
  },
  {
    icon: <MailCheck size="100%" />,
    alt: "Abstract graphic icon",
    title: "Email Updates on Stocks",
    text: "Timely alerts on stock movements and market updates.Personalized recommendations delivered right to your inbox.Stay informed and make decisions faster with expert insights.",
  },
  {
    icon: <LayoutPanelTop size="100%" />,
    alt: "Abstract graphic icon",
    title: "Simple Formats",
    text: "Easy-to-digest content with a focus on clarity and precision.Clean layouts that highlight only the most important details.Streamlined presentations designed for quick understanding.",
  },
  {
    icon: <Group size="100%" />,
    alt: "Abstract graphic icon",
    title: "Biotech and Technology Focus",
    text: "Explore growth opportunities in cutting-edge industries.Prioritize investments primarily in biotech and tech leaders shaping the future.Gain insights into high-potential markets with consistent innovation.",
  },
  {
    icon: <BadgeCheck size="100%" />,
    alt: "Abstract graphic icon",
    title: "Quality over Quantity",
    text: "Focused recommendations to avoid overwhelming choices.Every pick meets rigorous research standards for reliability and growth.Maximize value with curated, high-quality investment options.",
  },
];

export const subscriptionCard1Benefits: SubscriptionCardBenefit[] = [
  {
    benefitTitle:
      "Exclusive Access to 1-2 High-Growth Stock Picks Each Quarter",
    benefitDescription:
      "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
  },
  {
    benefitTitle: "Expert Analysis That Simplifies Investing",
    benefitDescription:
      "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
  },
  {
    benefitTitle: "Real-Time Email Alerts",
    benefitDescription:
      "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
  },
  {
    benefitTitle: "Invest Like a Pro Without the Stress",
    benefitDescription:
      "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
  },
  {
    benefitTitle: "Access to the Tiger Stock Leaderboard",
    benefitDescription:
      "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
  },
  {
    benefitTitle: "We Invest Alongside You",
    benefitDescription:
      "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
  },
  {
    benefitTitle: "Be Part of an Exclusive Community",
    benefitDescription:
      "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
  },
  {
    benefitTitle: "100% Aligned Interests",
    benefitDescription:
      "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
  },
];

export const SUBSCRIPTIONS_CARDS_DATA_1: SubscriptionCardData = {
  title: "One Quarter (3 Months)",
  price: {
    newPrice: "$59.99",
    oldPrice: "($119.99)",
    discount: "50% OFF",
  },
  benefits: [
    {
      benefitTitle:
        "Exclusive Access to 1-2 High-Growth Stock Picks Each Quarter",
      benefitDescription:
        "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
    },
    {
      benefitTitle: "Expert Analysis That Simplifies Investing",
      benefitDescription:
        "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
    },
    {
      benefitTitle: "Real-Time Email Alerts",
      benefitDescription:
        "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
    },
    {
      benefitTitle: "Invest Like a Pro Without the Stress",
      benefitDescription:
        "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
    },
    {
      benefitTitle: "Access to the Tiger Stock Leaderboard",
      benefitDescription:
        "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
    },
    {
      benefitTitle: "We Invest Alongside You",
      benefitDescription:
        "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
    },
    {
      benefitTitle: "Be Part of an Exclusive Community",
      benefitDescription:
        "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
    },
    {
      benefitTitle: "100% Aligned Interests",
      benefitDescription:
        "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
    },
  ],
  isAccent: false,
};

export const SUBSCRIPTIONS_CARDS_DATA_2: SubscriptionCardData = {
  title: "Yearly (1 Year)",
  price: {
    newPrice: "$199.99",
    oldPrice: "($399.99)",
    discount: "50% OFF",
  },
  benefits: [
    {
      benefitTitle:
        "Exclusive Access to 1-2 High-Growth Stock Picks Each Quarter",
      benefitDescription:
        "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
    },
    {
      benefitTitle: "Expert Analysis That Simplifies Investing",
      benefitDescription:
        "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
    },
    {
      benefitTitle: "Real-Time Email Alerts",
      benefitDescription:
        "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
    },
    {
      benefitTitle: "Invest Like a Pro Without the Stress",
      benefitDescription:
        "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
    },
    {
      benefitTitle: "Access to the Tiger Stock Leaderboard",
      benefitDescription:
        "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
    },
    {
      benefitTitle: "We Invest Alongside You",
      benefitDescription:
        "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
    },
    {
      benefitTitle: "Be Part of an Exclusive Community",
      benefitDescription:
        "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
    },
    {
      benefitTitle: "100% Aligned Interests",
      benefitDescription:
        "Say goodbye to overwhelming lists—we bring you only the best opportunities, handpicked for maximum profit potential.",
    },
  ],
  isAccent: true,
};

// export const BANNER_VALUES_LIST_DATA: BannerListData[] = [
//   {
//     discUrl: "/icons/step-letters/step-t.svg",
//     liHeading: "Timeless Wealth Strategies",
//     liText:
//       "Just as the enduring cedar tree stands the test of time, Tiger Wealth Capital provides timeless financial strategies to ensure sustainable growth and long-term wealth.",
//   },
//   {
//     discUrl: "/icons/step-letters/step-i.svg",
//     liHeading: "Integrity in Every Decision ",
//     liText:
//       "Like the cedar’s symbol of purity, we uphold the highest ethical standards, ensuring transparency and trust in every step of your wealth-building journey.",
//   },
//   {
//     discUrl: "/icons/step-letters/step-g.svg",
//     liHeading: "Goal-Oriented Precision",
//     liText:
//       "With the precision of a tiger on the hunt, our investment strategies are laser-focused on helping clients achieve their specific financial goals efficiently and effectively.",
//   },
//   {
//     discUrl: "/icons/step-letters/step-e.svg",
//     liHeading: "Empowered Financial Independence",
//     liText:
//       "The tiger represents strength and autonomy. We empower our clients with the knowledge and tools to take control of their financial future and achieve true independence.",
//   },
//   {
//     discUrl: "/icons/step-letters/step-r.svg",
//     liHeading: "Resilient Wealth Building",
//     liText:
//       "Drawing on the resilience of the cedar, we help clients navigate market fluctuations, building wealth that withstands challenges and creates a lasting legacy of financial freedom for future generations.",
//   },
// ];

// export const BANNER_PHILOSOPHY_LIST_DATA: BannerListData[] = [
//   {
//     discUrl: "/icons/step-letters/step-w.svg",
//     liHeading: "Widen Your Perspective",
//     liText:
//       "Think long-term. The best returns come from holding great companies for years, not chasing short-term gains.",
//   },
//   {
//     discUrl: "/icons/step-letters/step-e.svg",
//     liHeading: "Embrace Volatility ",
//     liText:
//       "Market ups and downs are natural. Instead of fearing volatility, use it as an opportunity to buy quality stocks at a discount.",
//   },
//   {
//     discUrl: "/icons/step-letters/step-a.svg",
//     liHeading: "Allocate for Growth",
//     liText:
//       "Invest in innovative, high-potential companies with the power to outperform the market over time, even if they seem risky at first.",
//   },
//   {
//     discUrl: "/icons/step-letters/step-l.svg",
//     liHeading: "Let Winners Run",
//     liText:
//       "Hold on to your best-performing stocks. Over time, these “winners” can significantly boost your portfolio's overall performance.",
//   },
//   {
//     discUrl: "/icons/step-letters/step-t.svg",
//     liHeading: "Trust in Compounding",
//     liText:
//       "Time in the market beats timing the market. The longer you stay invested, the more your returns compound, accelerating your wealth-building journey.",
//   },
//   {
//     discUrl: "/icons/step-letters/step-h.svg",
//     liHeading: "High-Conviction Decisions",
//     liText:
//       "Focus on a few great companies rather than over-diversifying. Backing your highest-conviction ideas can lead to substantial long-term rewards.",
//   },
// ];
