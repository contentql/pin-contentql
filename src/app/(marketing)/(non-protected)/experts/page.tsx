import { Metadata } from "next";

import ExpertsView from "@/views/ExpertsView";

export const metadata: Metadata = {
  title: "experts",
  description: "All we do is dream and craft amazing products",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "experts",
    description: "All we do is dream and craft amazing products",
    url: "https://contentql.com/experts",
    images: "/images/hero-11-img.png",
  },
};

const Home = () => {
  return <ExpertsView />;
};

export default Home;
