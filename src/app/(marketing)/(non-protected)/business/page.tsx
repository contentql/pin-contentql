import { Metadata } from "next";

import BusinessView from "@/views/BusinessView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a business page",
};

const Home = () => {
  return <BusinessView />;
};

export default Home;
