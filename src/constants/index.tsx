import {
  AssuranceIcon,
  BlogIcon,
  CertificateIcon,
  DiamondIcon,
  DigitalGoldIcon,
  FinanceOptionIcon,
  GemStoneIcon,
  GiftIcon,
  GoldIcon,
  InquiryIcon,
  JewelleryIcon,
  LifeTimeReplaceIcon,
  PaymentOptionsIcon,
  ProcessIcon,
  RateIcon,
  ReturnIcon,
  ReturnPolicyIcon,
  ReviewIcon,
  ShippingIcon,
  StoryIcon,
  TeamIcon,
  TermsIcon,
  VisionIcon,
  WhyIcon,
} from "@/components/icons";

export const carouselData = [
  { title: "Ring", imageSrc: "/images/carousel/ring.png" },
  { title: "Earrings", imageSrc: "/images/carousel/earings.png" },
  { title: "Tanmaniya", imageSrc: "/images/carousel/tanmaniya.png" },
  { title: "Bangles", imageSrc: "/images/carousel/bangles.png" },
  { title: "Bracelets", imageSrc: "/images/carousel/bracelets.png" },
  { title: "Pendants", imageSrc: "/images/carousel/pendants.png" },
  { title: "Ring", imageSrc: "/images/carousel/ring.png" },
];

export const featureData = [
  {
    title: "Express Delivery",
    imageSrc: "/images/feature/feature1.png",
    direction: "right",
  },
  {
    title: "Special Discount",
    imageSrc: "/images/feature/feature2.png",
    direction: "left",
  },
];

export const collectionData = [
  {
    imageSrc: "/images/collection/collection1.png",
  },
  {
    imageSrc: "/images/collection/collection2.png",
  },
  {
    imageSrc: "/images/collection/collection3.png",
  },
  {
    imageSrc: "/images/collection/collection4.png",
  },
  {
    imageSrc: "/images/collection/collection5.png",
  },
  {
    imageSrc: "/images/collection/collection6.png",
  },
];

export const categoryData = [
  {
    imageSrc: "/images/category/category1.png",
    className: "col-span-2",
  },
  {
    className: "col-span-2 order-last lg:order-2",
    imageSrc: "/images/category/category2.png",
  },
  {
    imageSrc: "/images/category/category3.png",
  },
  {
    imageSrc: "/images/category/category4.png",
  },
  {
    imageSrc: "/images/category/category5.png",
    className: "hidden md:block",
  },
  {
    imageSrc: "/images/category/category6.png",
    className: "hidden md:block",
  },
];

export const genderCategoryData = [
  {
    imageSrc: "/images/gender/women.png",
  },
  {
    imageSrc: "/images/gender/men.png",
  },
  {
    imageSrc: "/images/gender/kids.png",
  },
  {
    imageSrc: "/images/gender/unisex.png",
  },
];

export const updatesCardData = [
  {
    title: "Ratan Tata-backed BlueStone valuation tops $410Min latest round.",
    imageSrc: "/images/company/company1.png",
  },
  {
    title: "Ratan Tata-backed BlueStone valuation tops $410Min latest round.",
    imageSrc: "/images/company/company2.png",
  },
  {
    title: "Ratan Tata-backed BlueStone valuation tops $410Min latest round.",
    imageSrc: "/images/company/company3.png",
  },
  {
    title: "Ratan Tata-backed BlueStone valuation tops $410Min latest round.",
    imageSrc: "/images/company/company1.png",
  },
];

export const FAQsData = [
  { title: "Buy Gold Jewellery Online in India" },
  {
    title: "Variety of options",
  },
  { title: "Pay as per your convenience" },
  { title: "Customize as you like" },
  { title: "Crowd-free Buying Diamond Jewellery Online in India" },
];

export const FooterLinksData = [
  {
    title: "Our Services",
    links: [
      { name: "Gold Rates", icon: <RateIcon />, link: "/" },
      { name: "DIGITAL GOLD", icon: <DigitalGoldIcon />, link: "/" },
      {
        name: "VARIOUS PAYMENT METHOD",
        icon: <PaymentOptionsIcon />,
        link: "/",
      },
      { name: "FINANCING OPTIONS", icon: <FinanceOptionIcon />, link: "/" },
      { name: "GARNET LANEE ASSURANCE", icon: <AssuranceIcon />, link: "/" },
      { name: "FRANCHISE ENQUIRY", icon: <InquiryIcon />, link: "/" },
    ],
  },
  {
    title: "OUR POLICIES",
    links: [
      { name: "15-DAY RETURNS", icon: <ReturnIcon />, link: "/" },
      { name: "FREE SHIPPING", icon: <ShippingIcon />, link: "/" },
      {
        name: "LIFETIME EXCHANGE POLICY",
        icon: <LifeTimeReplaceIcon />,
        link: "/",
      },
      {
        name: "RETURN AND REFUND POLICY",
        icon: <ReturnPolicyIcon />,
        link: "/",
      },
      {
        name: "TERMS & CONDITIONS ON OFFERS",
        icon: <TermsIcon />,
        link: "/",
      },
    ],
  },
  {
    title: "JEWELLERY KNOWLEDGE",
    links: [
      { name: "GOLD GUIDE ", icon: <GoldIcon />, link: "/" },
      { name: "DIAMOND GUIDE ", icon: <DiamondIcon />, link: "/" },
      {
        name: "JEWELLERY GUIDE",
        icon: <JewelleryIcon />,
        link: "/",
      },
      {
        name: "SOLITIARE DIAMOND GUIDE",
        icon: <DiamondIcon />,
        link: "/",
      },
      {
        name: "GEMSTONE GUIDE ",
        icon: <GemStoneIcon />,
        link: "/",
      },
      {
        name: "CERTIFICATION GUIDE ",
        icon: <CertificateIcon />,
        link: "/",
      },
      {
        name: "JEWELLERY GIFTING",
        icon: <GiftIcon />,
        link: "/",
      },
    ],
  },
  {
    title: "ABOUT US",
    links: [
      { name: "OUR VISION ", icon: <VisionIcon />, link: "/" },
      { name: "WHY GARNET ", icon: <WhyIcon />, link: "/" },
      {
        name: "BLOG",
        icon: <BlogIcon />,
        link: "/",
      },
      {
        name: "OUR STORY",
        icon: <StoryIcon />,
        link: "/",
      },
      {
        name: "OUR PROCESS ",
        icon: <ProcessIcon />,
        link: "/",
      },
      {
        name: "OUR TEAM ",
        icon: <TeamIcon />,
        link: "/",
      },
      {
        name: "REVIEWS AND RATINGS",
        icon: <ReviewIcon />,
        link: "/",
      },
      {
        name: "PRESS RELEASE",
        icon: <TeamIcon />,
        link: "/",
      },
    ],
  },
];
