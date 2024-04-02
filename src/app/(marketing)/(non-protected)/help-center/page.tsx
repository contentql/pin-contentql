import { Metadata } from "next";

import HelpCenterView from "@/views/HelpCenterView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a experts page",
};

const Home = () => {
  return <HelpCenterView />;
};

export default Home;
