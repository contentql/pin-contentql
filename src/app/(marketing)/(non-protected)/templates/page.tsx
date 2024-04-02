import { Metadata } from "next";

import TemplatesView from "@/views/TemplatesView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a templates page",
};

const Home = () => {
  return <TemplatesView />;
};

export default Home;
