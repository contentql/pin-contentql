import { Metadata } from "next";

import AboutUsView from "@/views/AboutUsView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a about-us page",
};

const Home = () => {
  return <AboutUsView />;
};

export default Home;
