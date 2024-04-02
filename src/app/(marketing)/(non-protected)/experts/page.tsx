import { Metadata } from "next";

import ExpertsView from "@/views/ExpertsView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a experts page",
};

const Home = () => {
  return <ExpertsView />;
};

export default Home;
