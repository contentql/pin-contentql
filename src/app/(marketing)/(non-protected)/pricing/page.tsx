import { Metadata } from "next";

import PricingView from "@/views/PricingView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a pricing page",
};

const Home = () => {
  return <PricingView />;
};

export default Home;
