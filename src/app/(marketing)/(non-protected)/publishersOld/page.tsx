import { Metadata } from "next";

import PublishersView from "@/views/PublishersView";

export const metadata: Metadata = {
  title: "publishers",
  description: "The perfect analytics tool for your online business",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "publishers",
    description: "The perfect analytics tool for your online business",
    url: "https://contentql.com/publishers",
    images: "/images/img-08.png",
  },
};

const Home = () => {
  return <PublishersView />;
};

export default Home;
