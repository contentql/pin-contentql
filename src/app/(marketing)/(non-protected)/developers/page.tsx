import { Metadata } from "next";

import DevelopersView from "@/views/DevelopersView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a developers page",
};

const Home = () => {
  return <DevelopersView />;
};

export default Home;
