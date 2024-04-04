import { Metadata } from "next";

import AboutUsView from "@/views/AboutUsView";

export const metadata: Metadata = {
  title: "about us",
  description: "We provide solutions for your creative ideas",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "about us",
    description: "We provide solutions for your creative ideas",
    url: "https://contentql.com/about",
    images: "/images/a2-3.jpg",
  },
};

const Home = () => {
  return <AboutUsView />;
};

export default Home;
