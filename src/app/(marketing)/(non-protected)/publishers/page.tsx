import { Metadata } from "next";

import PublishersView from "@/views/PublishersView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a publishers page",
};

const Home = () => {
  return <PublishersView />;
};

export default Home;
