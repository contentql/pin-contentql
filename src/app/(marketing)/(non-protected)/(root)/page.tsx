import { Metadata } from "next";

import HomeView from "@/views/HomeView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a home page",
};

const Home = () => {
  return <HomeView />;
};

export default Home;
