import { Metadata } from "next";

import ProductUpdatesView from "@/views/ProductUpdatesView";

export const metadata: Metadata = {
  title: "product updates",
  description: "Right strategies & implementations",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "product updates",
    description: "Right strategies & implementations",
    url: "https://contentql.com/product-updates",
    images: "/images/hero-13-img.png",
  },
};

const Home = () => {
  return <ProductUpdatesView />;
};

export default Home;
