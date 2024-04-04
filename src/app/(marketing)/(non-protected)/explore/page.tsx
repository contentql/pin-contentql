import { Metadata } from "next";

import ExploreView from "@/views/ExploreView";

export const metadata: Metadata = {
  title: "explore",
  description: "Connect your brand with your customers",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "explore",
    description: "Connect your brand with your customers",
    url: "https://contentql.com/explore",
    images: "/images/hero-25-img.png",
  },
};

const Home = () => {
  return <ExploreView />;
};

export default Home;
