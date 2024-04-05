import { Metadata } from "next";

import BusinessView from "@/views/BusinessView";

export const metadata: Metadata = {
  title: "business",
  description: "The complete toolkit to engage your business",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "business",
    description: "The complete toolkit to engage your business",
    url: "https://contentql.com/business",
    images: "/images/img-03.png",
  },
};

const Home = () => {
  return <BusinessView />;
};

export default Home;
