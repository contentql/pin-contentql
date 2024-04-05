import { Metadata } from "next";

import PricingView from "@/views/PricingView";

export const metadata: Metadata = {
  title: "pricing",
  description: "Simple, Flexible Pricing",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "pricing",
    description: "Simple, Flexible Pricing",
    url: "https://contentql.com/pricing",
    images: "/images/favicon.png",
  },
};

const Home = () => {
  return <PricingView />;
};

export default Home;
