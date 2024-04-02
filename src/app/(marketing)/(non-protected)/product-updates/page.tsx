import { Metadata } from "next";

import ProductUpdatesView from "@/views/ProductUpdatesView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a product-updates page",
};

const Home = () => {
  return <ProductUpdatesView />;
};

export default Home;
