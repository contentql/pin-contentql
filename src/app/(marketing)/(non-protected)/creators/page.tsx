import { Metadata } from "next";

import CreatorsView from "@/views/CreatorsView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a creators page",
};

const Home = () => {
  return <CreatorsView />;
};

export default Home;
