import { Metadata } from "next";

import ExploreView from "@/views/ExploreView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a explore page",
};

const Home = () => {
  return <ExploreView />;
};

export default Home;
