import { Metadata } from "next";

import CookiesView from "@/views/CookiesView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a cookies page",
};

const Home = () => {
  return <CookiesView />;
};

export default Home;
