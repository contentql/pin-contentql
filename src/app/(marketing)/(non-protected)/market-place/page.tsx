import { Metadata } from "next";

import MarketPlaceView from "@/views/MarketPlaceView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a marketplace page",
};

const Home = () => {
  return <MarketPlaceView />;
};

export default Home;
