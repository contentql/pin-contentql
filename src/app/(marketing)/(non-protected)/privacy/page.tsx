import { Metadata } from "next";

import PrivacyView from "@/views/PrivacyView";

export const metadata: Metadata = {
  title: "privacy",
  description: "Privacy Policy",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "privacy",
    description: "Privacy Policy",
    url: "https://contentql.com/privacy",
    images: "/images/favicon.png",
  },
};

const Home = () => {
  return <PrivacyView />;
};

export default Home;
