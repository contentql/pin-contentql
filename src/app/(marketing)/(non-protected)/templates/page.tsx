import { Metadata } from "next";

import TemplatesView from "@/views/TemplatesView";

export const metadata: Metadata = {
  title: "templates",
  description: "This is a templates page",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "templates",
    description: "This is a templates page",
    url: "https://contentql.com/templates",
    images: "/images/template/template-2.png",
  },
};

const Home = () => {
  return <TemplatesView />;
};

export default Home;
