import { Metadata } from "next";

import IntegrationsView from "@/views/IntegrationsView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a integrations page",
};

const Home = () => {
  return <IntegrationsView />;
};

export default Home;
