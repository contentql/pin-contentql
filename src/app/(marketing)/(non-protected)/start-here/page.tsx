import { Metadata } from "next";

import StartHereView from "@/views/StartHereView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a start-here page",
};

const Home = () => {
  return <StartHereView />;
};

export default Home;
